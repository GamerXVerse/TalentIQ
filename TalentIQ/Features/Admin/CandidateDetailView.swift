import SwiftUI

struct CandidateDetailView: View {
    let repository: any TalentIQRepository
    let candidateID: UUID
    @State private var candidate: Candidate?
    @State private var errorMessage: String?
    @State private var recruiterName = ""
    var body: some View {
        Group {
            if let candidate {
                List {
                    Section("Profile") {
                        LabeledContent("Email", value: candidate.contact.email)
                        if let phone = candidate.contact.phone { LabeledContent("Phone", value: phone) }
                        LabeledContent("Event", value: candidate.checkIn.eventCode)
                        LabeledContent("Checked in", value: candidate.checkIn.checkedInAt.formatted(date: .abbreviated, time: .shortened))
                        Picker("Status", selection: statusBinding(candidate)) { ForEach(CandidateStatus.allCases, id: \.self) { Text($0.title).tag($0) } }
                    }
                    Section("Target role") {
                        Picker("Role", selection: roleBinding(candidate)) {
                            Text("Select a role").tag(TargetRole?.none)
                            ForEach(TargetRole.allCases) { Text($0.title).tag(Optional($0)) }
                        }
                        if let role = candidate.targetRole {
                            Button(candidate.evaluation == nil ? "GENERATE GROUNDED DRAFT" : "REGENERATE GROUNDED DRAFT") { generate(for: candidate, role: role) }.fontWeight(.bold)
                        }
                        Text("TalentIQ organizes supplied evidence. It does not score, rank, advance, or reject candidates.").font(.caption).foregroundStyle(.secondary)
                    }
                    if let evaluation = candidate.evaluation { evaluationSections(evaluation, candidate: candidate) }
                    Section("Resume") {
                        Text(candidate.resume.source == .skipped ? "No resume submitted" : candidate.resume.fileName ?? candidate.resume.source.rawValue)
                        if let url = candidate.resume.localURL { ShareLink("Open attachment", item: url) }
                    }
                    if !candidate.skills.isEmpty { Section("Skills") { Text(candidate.skills.map(\.name).joined(separator: ", ")) } }
                    if let experience = candidate.experience { Section("Experience") { Text(experience) } }
                    if let education = candidate.education { Section("Education") { Text(education) } }
                    Section("Interview") {
                        NavigationLink { InterviewView(repository: repository, candidateID: candidateID) } label: { Text(candidate.interview?.notes == nil ? "START INTERVIEW" : "INTERVIEW NOTES READY").fontWeight(.bold) }
                        if let transcript = candidate.interview?.transcript { Text(transcript.text).font(.subheadline) }
                    }
                }.navigationTitle(candidate.contact.name)
            } else { ContentUnavailableView("Candidate unavailable", systemImage: "person.crop.circle.badge.questionmark", description: Text(errorMessage ?? "Candidate not found")) }
        }.onAppear(perform: reload).onChange(of: repository.revision) { _, _ in reload() }
    }

    @ViewBuilder private func evaluationSections(_ evaluation: CandidateEvaluation, candidate: Candidate) -> some View {
        Section("Candidate snapshot · \(evaluation.role.title)") {
            ForEach(evaluation.snapshot) { GroundedStatementView(statement: $0) }
            if evaluation.snapshot.isEmpty { Text("No supplied information to summarize.").foregroundStyle(.secondary) }
        }
        Section("Role-related evidence") {
            ForEach(evaluation.roleAlignment) { GroundedStatementView(statement: $0) }
            if evaluation.roleAlignment.isEmpty { Text("No role-specific evidence was identified in the supplied information.").foregroundStyle(.secondary) }
        }
        Section("Missing information") {
            ForEach(evaluation.missingInformation, id: \.self) { Text("• \($0)") }
            if evaluation.missingInformation.isEmpty { Text("No standard information gaps identified.") }
        }
        Section("Suggested follow-up questions") { ForEach(evaluation.suggestedQuestions, id: \.self) { Text($0) } }
        Section("Human verification") {
            if let approvedBy = evaluation.approvedBy, let approvedAt = evaluation.approvedAt {
                Label("Approved by \(approvedBy) · \(approvedAt.formatted(date: .abbreviated, time: .shortened))", systemImage: "checkmark.seal.fill")
                Button("REVOKE APPROVAL", role: .destructive) { setApproval(for: candidate, name: nil) }
            } else {
                TextField("Recruiter name", text: $recruiterName).textContentType(.name)
                Button("APPROVE DRAFT") { setApproval(for: candidate, name: recruiterName) }.disabled(recruiterName.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty)
                Text("Approval confirms the recruiter reviewed the draft against its cited sources.").font(.caption).foregroundStyle(.secondary)
            }
        }
    }
    private func roleBinding(_ candidate: Candidate) -> Binding<TargetRole?> { Binding(get: { candidate.targetRole }, set: { role in var updated = candidate; updated.targetRole = role; updated.evaluation = nil; save(updated) }) }
    private func statusBinding(_ candidate: Candidate) -> Binding<CandidateStatus> { Binding(get: { candidate.status }, set: { status in var updated = candidate; updated.status = status; save(updated) }) }
    private func generate(for candidate: Candidate, role: TargetRole) { var updated = candidate; updated.targetRole = role; updated.evaluation = CandidateEvaluationGenerator().generate(for: updated, role: role); save(updated) }
    private func setApproval(for candidate: Candidate, name: String?) { var updated = candidate; updated.evaluation?.approvedBy = name?.trimmingCharacters(in: .whitespacesAndNewlines); updated.evaluation?.approvedAt = name == nil ? nil : .now; save(updated) }
    private func save(_ updated: Candidate) { do { try repository.update(updated); errorMessage = nil } catch { errorMessage = error.localizedDescription } }
    private func reload() { do { candidate = try repository.candidate(id: candidateID) } catch { errorMessage = error.localizedDescription } }
}

private struct GroundedStatementView: View {
    let statement: GroundedStatement
    var body: some View {
        VStack(alignment: .leading, spacing: 5) {
            Text(statement.text)
            Text(statement.sources.map { "[\($0.rawValue)]" }.joined(separator: " ")).font(.caption.bold()).foregroundStyle(.secondary)
                .accessibilityLabel("Sources: \(statement.sources.map(\.rawValue).joined(separator: ", "))")
        }.padding(.vertical, 2)
    }
}
