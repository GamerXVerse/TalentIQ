import XCTest
import SwiftData
@testable import TalentIQ

@MainActor
final class TalentIQTests: XCTestCase {
    func testSubmissionAppearsInQueueAndPersistsNotes() throws {
        let configuration = ModelConfiguration(isStoredInMemoryOnly: true)
        let container = try ModelContainer(for: CandidateRecord.self, configurations: configuration)
        let repository = LocalTalentIQRepository(context: container.mainContext)
        let submission = CandidateSubmission(contact: .init(name: "Alex Rivera", email: "alex@example.com"), skills: [.init(name: "Logistics")], resume: .init(source: .skipped), checkIn: .init(eventCode: "FAIR-1", checkedInAt: .now))
        let candidate = try repository.submit(submission)
        XCTAssertEqual(try repository.candidates().first?.id, candidate.id)
        XCTAssertEqual(try repository.candidate(id: candidate.id)?.status, .readyForInterview)
        try repository.saveInterview(Interview(startedAt: .now), for: candidate.id)
        try repository.saveNotes(InterviewNotes(summary: "Discussed logistics."), for: candidate.id)
        XCTAssertEqual(try repository.candidate(id: candidate.id)?.interview?.notes?.summary, "Discussed logistics.")
    }
    func testNotesFallbackIsEditableTemplate() async {
        let notes = await LocalInterviewNoteGenerator().generate(from: nil)
        XCTAssertFalse(notes.summary.isEmpty)
        XCTAssertTrue(notes.recruiterFollowUps.contains("follow-ups"))
    }

    func testResumeParserExtractsContactSectionsAndSkills() {
        let text = """
        Alex Rivera
        alex.rivera@example.com | (555) 123-4567

        EDUCATION
        B.S. Supply Chain Management, State University

        EXPERIENCE
        Operations coordinator with project management experience.

        SKILLS
        Python, SQL, Logistics, Communication
        """

        let profile = ResumeProfileParser().parse(text)

        XCTAssertEqual(profile.name, "Alex Rivera")
        XCTAssertEqual(profile.email, "alex.rivera@example.com")
        XCTAssertEqual(profile.phone, "(555) 123-4567")
        XCTAssertEqual(profile.education, "B.S. Supply Chain Management, State University")
        XCTAssertEqual(profile.experience, "Operations coordinator with project management experience.")
        XCTAssertTrue(profile.skills.contains("Python"))
        XCTAssertTrue(profile.skills.contains("SQL"))
        XCTAssertTrue(profile.skills.contains("Logistics"))
        XCTAssertTrue(profile.skills.contains("Communication"))
    }

    func testResumeTextNormalizationRemovesLayoutWhitespace() {
        let input = " Alex  Rivera\r\n\r\n alex@example.com  \n"
        XCTAssertEqual(ResumeTextExtractor.normalizedText(input), "Alex Rivera\nalex@example.com")
    }

    func testEventPayloadParserSupportsQRAndManualCodes() {
        XCTAssertEqual(EventCodeParser.eventCode(from: "talentiq://event/fair-2026"), "FAIR-2026")
        XCTAssertEqual(EventCodeParser.eventCode(from: " fair-2026 "), "FAIR-2026")
        XCTAssertNil(EventCodeParser.eventCode(from: "   "))
    }

    func testCandidateDraftValidationAndSubmissionMapping() {
        var draft = CandidateIntakeState()
        draft.eventCode = "FAIR-1"
        draft.firstName = "Alex"
        draft.lastName = "Rivera"
        draft.email = "alex@example.com"
        draft.phone = "555-123-4567"
        draft.selectedSkills = ["Logistics", "Communication"]
        draft.resumeSource = .skipped
        draft.resumeArtifact = ResumeArtifact(source: .skipped)

        XCTAssertTrue(draft.canSubmit)
        let submission = draft.makeSubmission()
        XCTAssertEqual(submission.contact.name, "Alex Rivera")
        XCTAssertEqual(submission.contact.email, "alex@example.com")
        XCTAssertEqual(submission.contact.phone, "555-123-4567")
        XCTAssertEqual(submission.checkIn.eventCode, "FAIR-1")
        XCTAssertEqual(submission.resume.source, .skipped)
        XCTAssertEqual(submission.skills.map(\.name), ["Logistics", "Communication"])
    }

    func testCandidateSubmissionMappingPreservesDigitalAndPaperResumeArtifacts() {
        let fileURL = URL(fileURLWithPath: "/tmp/resume.pdf")
        var draft = CandidateIntakeState()
        draft.eventCode = "FAIR-2"
        draft.firstName = "Sam"
        draft.lastName = "Lee"
        draft.email = "sam@example.com"
        draft.resumeSource = .digitalFile
        draft.resumeArtifact = ResumeArtifact(source: .digitalFile, fileName: "resume.pdf", localURL: fileURL, extractedText: "Sam Lee")

        let digital = draft.makeSubmission()
        XCTAssertEqual(digital.resume.source, .digitalFile)
        XCTAssertEqual(digital.resume.fileName, "resume.pdf")
        XCTAssertEqual(digital.resume.localURL, fileURL)

        draft.resumeSource = .paperScan
        draft.resumeArtifact = ResumeArtifact(source: .paperScan, fileName: "Paper Resume.pdf", extractedText: "Sam Lee")
        let paper = draft.makeSubmission()
        XCTAssertEqual(paper.resume.source, .paperScan)
        XCTAssertEqual(paper.resume.fileName, "Paper Resume.pdf")
    }

    func testResumeProfileDoesNotExtractProtectedCharacteristics() {
        let profile = ResumeProfileParser().parse("Alex Rivera\nAge 42\nReligion: none\nalex@example.com")
        XCTAssertNil(profile.phone)
        XCTAssertNil(profile.education)
        XCTAssertNil(profile.experience)
        XCTAssertFalse(profile.skills.contains("Age"))
    }

    func testEvaluationIsRoleSpecificGroundedAndUnapprovedByDefault() {
        let candidate = Candidate(
            contact: .init(name: "Taylor Kim", email: "taylor@example.com"),
            skills: [.init(name: "Python"), .init(name: "Collaboration")],
            resume: .init(source: .digitalFile, fileName: "resume.pdf", extractedText: "Computer Science student. Built a Python capstone with a team."),
            checkIn: .init(eventCode: "UARK2026", checkedInAt: .now),
            experience: "Built and tested a software project with classmates.",
            education: "B.S. Computer Science",
            status: .readyForInterview, interview: nil, submittedAt: .now
        )

        let evaluation = CandidateEvaluationGenerator().generate(for: candidate, role: .softwareEngineeringIntern)

        XCTAssertEqual(evaluation.role, .softwareEngineeringIntern)
        XCTAssertFalse(evaluation.snapshot.isEmpty)
        XCTAssertFalse(evaluation.roleAlignment.isEmpty)
        XCTAssertTrue(evaluation.roleAlignment.flatMap(\.sources).contains(.resume))
        XCTAssertNil(evaluation.approvedBy)
        XCTAssertNil(evaluation.approvedAt)
    }

    func testEvaluationFlagsMissingEvidenceWithoutInventingAlignment() {
        let candidate = Candidate(
            contact: .init(name: "Morgan Lee", email: "morgan@example.com"),
            skills: [], resume: .init(source: .skipped),
            checkIn: .init(eventCode: "FAIR-1", checkedInAt: .now), experience: nil,
            education: nil, status: .readyForInterview, interview: nil, submittedAt: .now
        )
        let evaluation = CandidateEvaluationGenerator().generate(for: candidate, role: .productOwner)
        XCTAssertTrue(evaluation.roleAlignment.isEmpty)
        XCTAssertTrue(evaluation.missingInformation.contains { $0.contains("Resume") })
        XCTAssertTrue(evaluation.missingInformation.contains { $0.contains("role-specific") })
    }
}
