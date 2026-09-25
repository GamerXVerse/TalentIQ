import Foundation

@MainActor
protocol TalentIQRepository: AnyObject {
    var revision: Int { get }
    func submit(_ submission: CandidateSubmission) throws -> Candidate
    func update(_ candidate: Candidate) throws
    func candidates() throws -> [Candidate]
    func candidate(id: UUID) throws -> Candidate?
    func saveInterview(_ interview: Interview, for candidateID: UUID) throws
    func saveTranscript(_ transcript: InterviewTranscript, for candidateID: UUID) throws
    func saveNotes(_ notes: InterviewNotes, for candidateID: UUID) throws
}
