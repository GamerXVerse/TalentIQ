import Foundation

protocol InterviewNoteGenerating: Sendable {
    func generate(from transcript: InterviewTranscript?) async -> InterviewNotes
}
struct LocalInterviewNoteGenerator: InterviewNoteGenerating {
    func generate(from transcript: InterviewTranscript?) async -> InterviewNotes {
        guard let text = transcript?.text, !text.isEmpty else {
            return InterviewNotes(summary: "Add a brief interview summary.", skillsDiscussed: "Add skills discussed.", experienceHighlights: "Add experience highlights.", candidateQuestions: "Add candidate questions.", recruiterFollowUps: "Add follow-ups.")
        }
        return InterviewNotes(summary: String(text.prefix(600)), skillsDiscussed: "Review transcript and add skills discussed.", experienceHighlights: "Review transcript and add experience highlights.", candidateQuestions: "Review transcript and add candidate questions.", recruiterFollowUps: "Add recruiter follow-ups.")
    }
}
