import Foundation

struct WebCheckInImporter {
    func candidate(from data: Data) throws -> Candidate {
        let record: WebCheckInRecord
        do { record = try JSONDecoder().decode(WebCheckInRecord.self, from: data) }
        catch { throw WebCheckInImportError.invalidJSON }

        let name = record.contact.name.trimmingCharacters(in: .whitespacesAndNewlines)
        let email = record.contact.email.trimmingCharacters(in: .whitespacesAndNewlines)
        let eventCode = record.checkIn.eventCode.trimmingCharacters(in: .whitespacesAndNewlines).uppercased()
        guard name.split(separator: " ").count >= 2 else { throw WebCheckInImportError.invalidName }
        guard CandidateDraftValidator.isValidEmail(email) else { throw WebCheckInImportError.invalidEmail }
        guard !eventCode.isEmpty else { throw WebCheckInImportError.missingEventCode }
        guard let role = TargetRole(rawValue: record.targetRole) else { throw WebCheckInImportError.unsupportedRole }
        guard let checkedInAt = Self.date(from: record.checkIn.checkedInAt) else { throw WebCheckInImportError.invalidTimestamp }

        let normalizedSkills = Array(Set(record.skills.compactMap { skill -> String? in
            let value = skill.trimmingCharacters(in: .whitespacesAndNewlines)
            return value.isEmpty ? nil : value
        })).sorted()

        return Candidate(
            id: record.id,
            contact: CandidateContactInfo(name: name, email: email, phone: record.contact.phone?.nilIfBlank),
            skills: normalizedSkills.map { CandidateSkill(name: $0) },
            resume: ResumeArtifact(source: .skipped),
            checkIn: EventCheckIn(eventCode: eventCode, checkedInAt: checkedInAt),
            experience: record.experience?.nilIfBlank,
            education: record.education?.nilIfBlank,
            status: .readyForInterview,
            interview: nil,
            submittedAt: checkedInAt,
            targetRole: role
        )
    }

    private static func date(from value: String) -> Date? {
        let fractional = ISO8601DateFormatter()
        fractional.formatOptions = [.withInternetDateTime, .withFractionalSeconds]
        return fractional.date(from: value) ?? ISO8601DateFormatter().date(from: value)
    }
}

private struct WebCheckInRecord: Decodable {
    struct Contact: Decodable { let name: String; let email: String; let phone: String? }
    struct CheckIn: Decodable { let eventCode: String; let checkedInAt: String }
    let id: UUID
    let contact: Contact
    let checkIn: CheckIn
    let targetRole: String
    let skills: [String]
    let education: String?
    let experience: String?
}

enum WebCheckInImportError: LocalizedError, Equatable {
    case invalidJSON, invalidName, invalidEmail, missingEventCode, unsupportedRole, invalidTimestamp
    var errorDescription: String? {
        switch self {
        case .invalidJSON: "This is not a valid TalentIQ web check-in JSON file."
        case .invalidName: "The web check-in must include a first and last name."
        case .invalidEmail: "The web check-in contains an invalid email address."
        case .missingEventCode: "The web check-in is missing an event code."
        case .unsupportedRole: "The web check-in contains an unsupported target role."
        case .invalidTimestamp: "The web check-in contains an invalid check-in timestamp."
        }
    }
}

private extension String {
    var nilIfBlank: String? {
        let value = trimmingCharacters(in: .whitespacesAndNewlines)
        return value.isEmpty ? nil : value
    }
}
