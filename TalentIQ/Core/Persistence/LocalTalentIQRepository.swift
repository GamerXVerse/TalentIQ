import Foundation
import Observation
import SwiftData

@Model
final class CandidateRecord {
    @Attribute(.unique) var id: UUID
    var payload: Data
    init(id: UUID, payload: Data) { self.id = id; self.payload = payload }
}

@MainActor @Observable
final class LocalTalentIQRepository: TalentIQRepository {
    private let context: ModelContext
    private let encoder = JSONEncoder()
    private let decoder = JSONDecoder()
    private(set) var revision = 0

    init(context: ModelContext) { self.context = context }

    func submit(_ submission: CandidateSubmission) throws -> Candidate {
        let candidate = Candidate(contact: submission.contact, skills: submission.skills,
            resume: submission.resume, checkIn: submission.checkIn,
            experience: submission.experience, education: submission.education,
            status: .readyForInterview, submittedAt: .now)
        try update(candidate)
        return candidate
    }
    func update(_ candidate: Candidate) throws {
        let id = candidate.id
        let descriptor = FetchDescriptor<CandidateRecord>(predicate: #Predicate { $0.id == id })
        let data = try encoder.encode(candidate)
        if let record = try context.fetch(descriptor).first { record.payload = data }
        else { context.insert(CandidateRecord(id: id, payload: data)) }
        try context.save()
        revision += 1
    }
    func candidates() throws -> [Candidate] {
        let records = try context.fetch(FetchDescriptor<CandidateRecord>())
        return try records.map { try decoder.decode(Candidate.self, from: $0.payload) }
            .sorted { ($0.submittedAt ?? $0.checkIn.checkedInAt) > ($1.submittedAt ?? $1.checkIn.checkedInAt) }
    }
    func candidate(id: UUID) throws -> Candidate? {
        let descriptor = FetchDescriptor<CandidateRecord>(predicate: #Predicate { $0.id == id })
        guard let record = try context.fetch(descriptor).first else { return nil }
        return try decoder.decode(Candidate.self, from: record.payload)
    }
    func saveInterview(_ interview: Interview, for candidateID: UUID) throws {
        guard var item = try candidate(id: candidateID) else { throw RepositoryError.notFound }
        item.interview = interview
        item.status = interview.completedAt == nil ? .interviewInProgress : .interviewCompleted
        try update(item)
    }
    func saveTranscript(_ transcript: InterviewTranscript, for candidateID: UUID) throws {
        guard var item = try candidate(id: candidateID), var interview = item.interview else { throw RepositoryError.notFound }
        interview.transcript = transcript; item.interview = interview; try update(item)
    }
    func saveNotes(_ notes: InterviewNotes, for candidateID: UUID) throws {
        guard var item = try candidate(id: candidateID), var interview = item.interview else { throw RepositoryError.notFound }
        interview.notes = notes; item.interview = interview; try update(item)
    }
}
enum RepositoryError: LocalizedError { case notFound
    var errorDescription: String? { "Candidate or interview could not be found." }
}
