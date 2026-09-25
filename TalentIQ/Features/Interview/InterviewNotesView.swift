import SwiftUI

struct InterviewNotesView: View {
    let repository: any TalentIQRepository
    let candidateID: UUID
    @State private var notes = InterviewNotes()
    @State private var message: String?
    var body: some View {
        Form {
            noteField("Interview Summary", text: $notes.summary)
            noteField("Skills Discussed", text: $notes.skillsDiscussed)
            noteField("Experience Highlights", text: $notes.experienceHighlights)
            noteField("Candidate Questions", text: $notes.candidateQuestions)
            noteField("Recruiter Follow-ups", text: $notes.recruiterFollowUps)
            noteField("Additional Notes", text: $notes.additionalNotes)
            Section { Button("Save notes") { save() }.buttonStyle(BrandButtonStyle()) }
            if let message { Text(message) }
        }
        .navigationTitle("Interview notes")
        .onAppear { do { notes = try repository.candidate(id: candidateID)?.interview?.notes ?? InterviewNotes() } catch { message = error.localizedDescription } }
    }
    private func noteField(_ title: String, text: Binding<String>) -> some View {
        Section(title) { TextEditor(text: text).frame(minHeight: 80).accessibilityLabel(title) }
    }
    private func save() { do { try repository.saveNotes(notes, for: candidateID); message = "Notes saved" } catch { message = error.localizedDescription } }
}
