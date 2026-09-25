import SwiftUI
import UniformTypeIdentifiers

struct AdminDashboardView: View {
    let repository: any TalentIQRepository
    var body: some View { CandidateQueueView(repository: repository).navigationTitle("Recruiter") }
}

struct CandidateQueueView: View {
    let repository: any TalentIQRepository
    @State private var candidates: [Candidate] = []
    @State private var errorMessage: String?
    @State private var filter: CandidateStatus?
    @State private var searchText = ""
    @State private var comparisonIDs = Set<UUID>()
    @State private var showingComparison = false
    @State private var exportFile: CandidateCSVDocument?

    private var shown: [Candidate] {
        candidates.filter { candidate in
            let query = searchText.trimmingCharacters(in: .whitespacesAndNewlines)
            let searchable = [candidate.contact.name, candidate.contact.email, candidate.checkIn.eventCode,
                              candidate.education, candidate.experience, candidate.targetRole?.title,
                              candidate.evaluation?.snapshot.map(\.text).joined(separator: " ")]
                .compactMap { $0 }.joined(separator: " ") + " " + candidate.skills.map(\.name).joined(separator: " ")
            return (filter == nil || candidate.status == filter) && (query.isEmpty || searchable.localizedCaseInsensitiveContains(query))
        }
    }

    var body: some View {
        List {
            Section {
                Picker("Status", selection: $filter) {
                    Text("All statuses").tag(CandidateStatus?.none)
                    ForEach(CandidateStatus.allCases, id: \.self) { Text($0.title).tag(Optional($0)) }
                }.pickerStyle(.menu)
                HStack {
                    Button("COMPARE (\(comparisonIDs.count))") { showingComparison = true }.disabled(comparisonIDs.count < 2)
                    Spacer()
                    Button("EXPORT CSV") { exportFile = CandidateCSVDocument(candidates: shown) }.disabled(shown.isEmpty)
                }.font(.caption.weight(.bold))
            }
            Section("Candidates \(shown.count)") {
                ForEach(shown) { candidate in
                    HStack(spacing: 12) {
                        Button {
                            if comparisonIDs.contains(candidate.id) { comparisonIDs.remove(candidate.id) }
                            else if comparisonIDs.count < 4 { comparisonIDs.insert(candidate.id) }
                        } label: { Image(systemName: comparisonIDs.contains(candidate.id) ? "checkmark.square.fill" : "square").font(.title3) }
                        .buttonStyle(.plain)
                        .accessibilityLabel(comparisonIDs.contains(candidate.id) ? "Remove from comparison" : "Add to comparison")
                        NavigationLink { CandidateDetailView(repository: repository, candidateID: candidate.id) } label: { CandidateRow(candidate: candidate) }
                    }
                }
            }
            if shown.isEmpty {
                ContentUnavailableView(searchText.isEmpty ? "No candidates yet" : "No matching candidates", systemImage: "person.2", description: Text(searchText.isEmpty ? "Submitted profiles appear here immediately." : "Try a different name, skill, role, or event."))
            }
        }
        .searchable(text: $searchText, prompt: "Name, skill, role, or event")
        .overlay(alignment: .bottom) { if let errorMessage { Text(errorMessage).padding().background(.red.opacity(0.1)) } }
        .onAppear(perform: reload).onChange(of: repository.revision) { _, _ in reload() }.refreshable { reload() }
        .sheet(isPresented: $showingComparison) { NavigationStack { CandidateComparisonView(candidates: candidates.filter { comparisonIDs.contains($0.id) }) } }
        .fileExporter(isPresented: Binding(get: { exportFile != nil }, set: { if !$0 { exportFile = nil } }), document: exportFile, contentType: .commaSeparatedText, defaultFilename: "TalentIQ-Candidates") { result in
            if case .failure(let error) = result { errorMessage = error.localizedDescription }
        }
    }
    private func reload() {
        do { candidates = try repository.candidates(); comparisonIDs = comparisonIDs.intersection(Set(candidates.map(\.id))); errorMessage = nil }
        catch { errorMessage = error.localizedDescription }
    }
}

struct CandidateRow: View {
    let candidate: Candidate
    var body: some View {
        HStack(spacing: 12) {
            RoundedRectangle(cornerRadius: 3).fill(candidate.status == .readyForInterview ? JBHuntColors.yellow : JBHuntColors.surface).frame(width: 5)
            VStack(alignment: .leading, spacing: 4) {
                Text(candidate.contact.name).font(.headline)
                Text([candidate.targetRole?.title, candidate.checkIn.eventCode].compactMap { $0 }.joined(separator: " · ")).font(.subheadline).foregroundStyle(.secondary)
            }
            Spacer(); Text(candidate.status.title).font(.caption.weight(.semibold)).multilineTextAlignment(.trailing)
        }.padding(.vertical, 6)
    }
}

struct CandidateComparisonView: View {
    let candidates: [Candidate]
    @Environment(\.dismiss) private var dismiss
    var body: some View {
        ScrollView(.horizontal) {
            HStack(alignment: .top, spacing: 12) {
                ForEach(candidates) { candidate in
                    VStack(alignment: .leading, spacing: 14) {
                        Text(candidate.contact.name).font(.title2.bold())
                        Text(candidate.targetRole?.title ?? "Role not selected").foregroundStyle(.secondary)
                        field("Status", candidate.status.title)
                        field("Skills", candidate.skills.map(\.name).joined(separator: ", ").nonEmpty ?? "Not provided")
                        field("Education", candidate.education ?? "Not provided")
                        field("Experience", candidate.experience ?? "Not provided")
                        field("Missing information", candidate.evaluation?.missingInformation.joined(separator: "\n") ?? "Generate a draft to identify gaps")
                    }.padding(18).frame(width: 300, alignment: .topLeading).background(JBHuntColors.surface, in: RoundedRectangle(cornerRadius: 14))
                }
            }.padding()
        }.navigationTitle("Candidate comparison").toolbar { Button("Done") { dismiss() } }
    }
    private func field(_ label: String, _ value: String) -> some View {
        VStack(alignment: .leading, spacing: 4) { Text(label.uppercased()).font(.caption.bold()).foregroundStyle(.secondary); Text(value) }
    }
}

struct CandidateCSVDocument: FileDocument {
    static var readableContentTypes: [UTType] { [.commaSeparatedText] }
    let data: Data
    init(candidates: [Candidate]) {
        let header = "Name,Email,Phone,Event,Role,Status,Skills,Education,Experience,Summary Approved\n"
        let rows = candidates.map { candidate in
            [candidate.contact.name, candidate.contact.email, candidate.contact.phone ?? "", candidate.checkIn.eventCode,
             candidate.targetRole?.title ?? "", candidate.status.title, candidate.skills.map(\.name).joined(separator: "; "),
             candidate.education ?? "", candidate.experience ?? "", candidate.evaluation?.approvedAt == nil ? "No" : "Yes"]
                .map(Self.csvEscape).joined(separator: ",")
        }.joined(separator: "\n")
        data = Data((header + rows).utf8)
    }
    init(configuration: ReadConfiguration) throws { data = configuration.file.regularFileContents ?? Data() }
    func fileWrapper(configuration: WriteConfiguration) throws -> FileWrapper { FileWrapper(regularFileWithContents: data) }
    private static func csvEscape(_ value: String) -> String { "\"" + value.replacingOccurrences(of: "\"", with: "\"\"") + "\"" }
}

extension CandidateStatus {
    var title: String {
        switch self {
        case .checkedIn: "Checked In"
        case .readyForInterview: "Ready for Interview"
        case .interviewInProgress: "Interview In Progress"
        case .interviewCompleted: "Interview Completed"
        }
    }
}
private extension String { var nonEmpty: String? { isEmpty ? nil : self } }
