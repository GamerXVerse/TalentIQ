import Foundation

enum ResumeSource: String, Codable, Sendable, CaseIterable { case digitalFile, paperScan, skipped }
enum CandidateStatus: String, Codable, Sendable, CaseIterable { case checkedIn, readyForInterview, interviewInProgress, interviewCompleted }
enum TargetRole: String, Codable, Sendable, CaseIterable, Identifiable {
    case softwareEngineeringIntern
    case productOwner
    var id: String { rawValue }
    var title: String {
        switch self {
        case .softwareEngineeringIntern: "Software Engineering Intern"
        case .productOwner: "Product Owner"
        }
    }
}
enum CandidateEvidenceSource: String, Codable, Sendable, CaseIterable {
    case candidateProfile = "Candidate profile"
    case resume = "Resume"
    case interviewTranscript = "Interview transcript"
    case recruiterNotes = "Recruiter notes"
}
struct GroundedStatement: Codable, Identifiable, Sendable, Equatable {
    var id: UUID = UUID()
    var text: String
    var sources: [CandidateEvidenceSource]
}
struct CandidateEvaluation: Codable, Sendable, Equatable {
    var role: TargetRole
    var snapshot: [GroundedStatement]
    var roleAlignment: [GroundedStatement]
    var missingInformation: [String]
    var suggestedQuestions: [String]
    var approvedBy: String?
    var approvedAt: Date?
    var generatedAt: Date
}

struct CandidateContactInfo: Codable, Sendable, Equatable {
    var name: String
    var email: String
    var phone: String?
}
struct CandidateSkill: Codable, Identifiable, Sendable, Hashable {
    var id: UUID = UUID()
    var name: String
}
struct ResumeArtifact: Codable, Sendable, Equatable {
    var source: ResumeSource
    var fileName: String?
    var localURL: URL?
    var extractedText: String?
}
struct EventCheckIn: Codable, Sendable, Equatable {
    var eventCode: String
    var checkedInAt: Date
}
struct InterviewRecording: Codable, Sendable, Equatable {
    var id: UUID = UUID()
    var localURL: URL
    var duration: TimeInterval
    var recordedAt: Date
}
struct InterviewTranscript: Codable, Sendable, Equatable {
    var text: String
    var createdAt: Date
}
struct InterviewNotes: Codable, Sendable, Equatable {
    var summary: String = ""
    var skillsDiscussed: String = ""
    var experienceHighlights: String = ""
    var candidateQuestions: String = ""
    var recruiterFollowUps: String = ""
    var additionalNotes: String = ""
}
struct Interview: Codable, Identifiable, Sendable, Equatable {
    var id: UUID = UUID()
    var recording: InterviewRecording?
    var transcript: InterviewTranscript?
    var notes: InterviewNotes?
    var startedAt: Date
    var completedAt: Date?
}
struct Candidate: Codable, Identifiable, Sendable, Equatable {
    var id: UUID = UUID()
    var contact: CandidateContactInfo
    var skills: [CandidateSkill]
    var resume: ResumeArtifact
    var checkIn: EventCheckIn
    var experience: String?
    var education: String?
    var status: CandidateStatus
    var interview: Interview?
    var submittedAt: Date?
    var targetRole: TargetRole? = nil
    var evaluation: CandidateEvaluation? = nil
}
struct CandidateSubmission: Sendable {
    var contact: CandidateContactInfo
    var skills: [CandidateSkill]
    var resume: ResumeArtifact
    var checkIn: EventCheckIn
    var experience: String?
    var education: String?
}
