import SwiftUI

struct InterviewView: View {
    let repository: any TalentIQRepository
    let candidateID: UUID
    @State private var candidate: Candidate?
    @State private var recorder = AudioRecordingService()
    @State private var showConsent = false
    @State private var processing = false
    @State private var errorMessage: String?
    private let transcription: any SpeechTranscriptionService = AppleSpeechTranscriptionService()
    private let noteGenerator: any InterviewNoteGenerating = LocalInterviewNoteGenerator()

    var body: some View {
        List {
            if let candidate {
                Section("Interview with \(candidate.contact.name)") {
                    Text("Let the candidate know before you begin recording.")
                    if recorder.state == .recording {
                        Text("RECORDING • \(duration)").font(.title2.bold()).foregroundStyle(.red)
                            .accessibilityLabel("Recording, \(duration) elapsed")
                        Button("STOP RECORDING") { Task { await stop() } }.buttonStyle(BrandButtonStyle())
                    } else {
                        Button("Start Interview Recording") { showConsent = true }.buttonStyle(BrandButtonStyle())
                    }
                    if processing { ProgressView("Preparing transcript and notes") }
                }
                if let recording = candidate.interview?.recording { Section("Recording") { Text("Saved • \(Int(recording.duration)) seconds") } }
                if let transcript = candidate.interview?.transcript { Section("Transcript") { Text(transcript.text) } }
                if candidate.interview != nil {
                    NavigationLink("Edit interview notes") { InterviewNotesView(repository: repository, candidateID: candidateID) }
                }
            }
            if let errorMessage { Section { Text(errorMessage).foregroundStyle(.red) } }
        }
        .navigationTitle("Interview")
        .confirmationDialog("Start audio recording?", isPresented: $showConsent) {
            Button("Start Recording") { Task { await start() } }
        } message: { Text("Inform the candidate that this interview will be recorded before continuing.") }
        .onAppear(perform: reload)
        .onChange(of: repository.revision) { _, _ in reload() }
    }
    private var duration: String {
        let seconds = Int(recorder.elapsed)
        return String(format: "%02d:%02d", seconds / 60, seconds % 60)
    }
    private func reload() { do { candidate = try repository.candidate(id: candidateID) } catch { errorMessage = error.localizedDescription } }
    private func start() async {
        do {
            try await recorder.start()
            try repository.saveInterview(Interview(startedAt: .now), for: candidateID)
            errorMessage = nil
        } catch {
            if recorder.state == .recording { _ = try? recorder.stop() }
            errorMessage = error.localizedDescription
        }
    }
    private func stop() async {
        do {
            let recording = try recorder.stop()
            guard var interview = try repository.candidate(id: candidateID)?.interview else { throw RepositoryError.notFound }
            interview.recording = recording; interview.completedAt = .now
            try repository.saveInterview(interview, for: candidateID)
            processing = true
            var transcript: InterviewTranscript?
            do { transcript = try await transcription.transcribe(url: recording.localURL) }
            catch { errorMessage = error.localizedDescription }
            if let transcript { try repository.saveTranscript(transcript, for: candidateID) }
            let notes = await noteGenerator.generate(from: transcript)
            try repository.saveNotes(notes, for: candidateID)
            processing = false
        } catch { processing = false; errorMessage = error.localizedDescription }
    }
}
