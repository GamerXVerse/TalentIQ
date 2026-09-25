import Foundation

struct ResumeProfile: Equatable, Sendable {
    var name: String?
    var email: String?
    var phone: String?
    var education: String?
    var experience: String?
    var skills: [String]
}

struct ResumeProfileParser: Sendable {
    static let supportedSkills = [
        "Software Development", "Java", "Python", "Swift", "JavaScript / TypeScript",
        "React", "SQL", "Cloud Computing", "Data Analytics", "Machine Learning",
        "Cybersecurity", "Networking", "Supply Chain", "Logistics", "Operations",
        "Project Management", "Communication", "Leadership", "Customer Service"
    ]

    func parse(_ text: String) -> ResumeProfile {
        let normalized = ResumeTextExtractor.normalizedText(text)
        let lines = normalized.split(separator: "\n", omittingEmptySubsequences: true).map(String.init)
        let sections = sectionContents(lines)
        let lowered = normalized.lowercased()

        return ResumeProfile(
            name: findName(in: lines),
            email: firstMatch(pattern: #"[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}"#, in: normalized, options: [.caseInsensitive]),
            phone: firstMatch(pattern: #"(?<!\d)(?:\+?1[\s.-]?)?(?:\(?\d{3}\)?[\s.-])\d{3}[\s.-]\d{4}(?!\d)"#, in: normalized),
            education: sections[.education]?.nilIfBlank,
            experience: sections[.experience]?.nilIfBlank,
            skills: Self.supportedSkills.filter { skill in
                let terms = skill.lowercased().split(separator: " ").map(String.init)
                return terms.allSatisfy { lowered.contains($0) } ||
                    (skill == "JavaScript / TypeScript" && (lowered.contains("javascript") || lowered.contains("typescript")))
            }
        )
    }

    private enum Section { case education, experience }

    private func sectionContents(_ lines: [String]) -> [Section: String] {
        var result: [Section: String] = [:]
        var active: Section?
        var buffer: [String] = []

        func flush() {
            guard let active, !buffer.isEmpty else { return }
            result[active] = buffer.joined(separator: "\n")
            buffer.removeAll()
        }

        for line in lines {
            if let section = section(for: line) {
                flush()
                active = section
            } else if isSectionBoundary(line) {
                flush()
                active = nil
            } else if active != nil {
                buffer.append(line)
            }
        }
        flush()
        return result
    }

    private func section(for line: String) -> Section? {
        let value = line.lowercased()
            .trimmingCharacters(in: .whitespacesAndNewlines)
            .trimmingCharacters(in: .punctuationCharacters)
        if ["education", "academic background"].contains(value) { return .education }
        if ["experience", "work experience", "professional experience", "employment", "employment history", "work history"].contains(value) {
            return .experience
        }
        return nil
    }

    private func isSectionBoundary(_ line: String) -> Bool {
        let value = line.lowercased().trimmingCharacters(in: .whitespacesAndNewlines)
        return ["skills", "technical skills", "certifications", "projects", "summary", "profile", "contact", "references"]
            .contains(value)
    }

    private func findName(in lines: [String]) -> String? {
        for line in lines.prefix(8) {
            let candidate = line.trimmingCharacters(in: .whitespacesAndNewlines)
            let lower = candidate.lowercased()
            guard !candidate.contains("@"),
                  firstMatch(pattern: #"\d{3}.*\d{4}"#, in: candidate) == nil,
                  !lower.contains("resume"), !lower.contains("curriculum vitae"),
                  !candidate.contains(":"),
                  (2...5).contains(candidate.split(separator: " ").count),
                  candidate.rangeOfCharacter(from: .letters) != nil
            else { continue }
            return candidate
        }
        return nil
    }

    private func firstMatch(pattern: String, in value: String, options: NSRegularExpression.Options = []) -> String? {
        guard let expression = try? NSRegularExpression(pattern: pattern, options: options) else { return nil }
        let range = NSRange(value.startIndex..<value.endIndex, in: value)
        guard let match = expression.firstMatch(in: value, range: range),
              let resultRange = Range(match.range, in: value) else { return nil }
        return String(value[resultRange]).trimmingCharacters(in: .whitespacesAndNewlines)
    }
}

private extension String {
    var nilIfBlank: String? {
        let value = trimmingCharacters(in: .whitespacesAndNewlines)
        return value.isEmpty ? nil : value
    }
}
