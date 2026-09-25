import Foundation

enum CandidateIntakeStep: Int, CaseIterable {
    case welcome
    case event
    case profile
    case resume
    case information
    case skills
    case review
    case success
}

struct CandidateIntakeState: Equatable {
    var step: CandidateIntakeStep = .welcome
    var eventCode = ""
    var firstName = ""
    var lastName = ""
    var email = ""
    var phone = ""
    var education = ""
    var experience = ""
    var resumeSource: ResumeSource = .skipped
    var resumeArtifact = ResumeArtifact(source: .skipped)
    var selectedSkills: [String] = []
    var errorMessage: String?
    var isProcessing = false

    var fullName: String {
        [firstName, lastName]
            .map { $0.trimmingCharacters(in: .whitespacesAndNewlines) }
            .filter { !$0.isEmpty }
            .joined(separator: " ")
    }

    var canContinueFromProfile: Bool {
        CandidateDraftValidator.isValidName(firstName) &&
            CandidateDraftValidator.isValidName(lastName) &&
            CandidateDraftValidator.isValidEmail(email)
    }

    var canSubmit: Bool {
        !eventCode.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty &&
            canContinueFromProfile
    }

    mutating func reset() {
        self = CandidateIntakeState()
    }

    mutating func apply(_ profile: ResumeProfile) {
        if firstName.isEmpty, let name = profile.name {
            let parts = name.split(separator: " ").map(String.init)
            firstName = parts.first ?? ""
            lastName = parts.dropFirst().joined(separator: " ")
        }
        if email.isEmpty { email = profile.email ?? "" }
        if phone.isEmpty { phone = profile.phone ?? "" }
        if education.isEmpty { education = profile.education ?? "" }
        if experience.isEmpty { experience = profile.experience ?? "" }
        selectedSkills = Array(Set(selectedSkills + profile.skills)).sorted()
    }

    func makeSubmission() -> CandidateSubmission {
        CandidateSubmission(
            contact: CandidateContactInfo(
                name: fullName,
                email: email.trimmingCharacters(in: .whitespacesAndNewlines),
                phone: phone.nilIfBlank
            ),
            skills: selectedSkills.map { CandidateSkill(name: $0) },
            resume: ResumeArtifact(
                source: resumeSource,
                fileName: resumeArtifact.fileName,
                localURL: resumeArtifact.localURL,
                extractedText: resumeArtifact.extractedText
            ),
            checkIn: EventCheckIn(eventCode: eventCode, checkedInAt: .now),
            experience: experience.nilIfBlank,
            education: education.nilIfBlank
        )
    }
}

enum CandidateDraftValidator {
    static func isValidName(_ value: String) -> Bool {
        let trimmed = value.trimmingCharacters(in: .whitespacesAndNewlines)
        return trimmed.count >= 2 && trimmed.rangeOfCharacter(from: .letters) != nil
    }

    static func isValidEmail(_ value: String) -> Bool {
        let pattern = #"^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"#
        return value.range(of: pattern, options: .regularExpression) != nil
    }
}

enum EventCodeParser {
    static func eventCode(from payload: String) -> String? {
        let value = payload.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !value.isEmpty else { return nil }

        if let url = URL(string: value), url.scheme?.lowercased() == "talentiq",
           url.host?.lowercased() == "event" {
            let code = url.path.trimmingCharacters(in: CharacterSet(charactersIn: "/"))
            return code.nilIfBlank?.uppercased()
        }
        return value.uppercased()
    }
}

private extension String {
    var nilIfBlank: String? {
        let value = trimmingCharacters(in: .whitespacesAndNewlines)
        return value.isEmpty ? nil : value
    }
}
