import Foundation

struct CandidateEvaluationGenerator {
    func generate(for candidate: Candidate, role: TargetRole) -> CandidateEvaluation {
        let resumeText = candidate.resume.extractedText?.trimmingCharacters(in: .whitespacesAndNewlines)
        let transcript = candidate.interview?.transcript?.text.trimmingCharacters(in: .whitespacesAndNewlines)
        let notes = candidate.interview?.notes
        let profileSources: [CandidateEvidenceSource] = [.candidateProfile]
        var snapshot: [GroundedStatement] = [
            .init(text: "Checked in for \(candidate.checkIn.eventCode) and selected \(role.title) for review.", sources: profileSources)
        ]
        if !candidate.skills.isEmpty {
            snapshot.append(.init(text: "Reported skills: \(candidate.skills.map(\.name).joined(separator: ", ")).", sources: profileSources))
        }
        if let education = candidate.education, !education.isEmpty {
            snapshot.append(.init(text: "Education: \(education)", sources: evidenceSources(profile: true, resumeText: resumeText)))
        }
        if let experience = candidate.experience, !experience.isEmpty {
            snapshot.append(.init(text: "Experience: \(experience)", sources: evidenceSources(profile: true, resumeText: resumeText)))
        }
        if let summary = notes?.summary.nilIfBlank {
            snapshot.append(.init(text: "Recruiter interview summary: \(summary)", sources: [.recruiterNotes]))
        } else if let transcript, !transcript.isEmpty {
            snapshot.append(.init(text: "An interview transcript is available for recruiter review.", sources: [.interviewTranscript]))
        }

        let searchable = ([candidate.education, candidate.experience, resumeText, transcript,
                           notes?.summary, notes?.skillsDiscussed, notes?.experienceHighlights]
            .compactMap { $0 } + candidate.skills.map(\.name)).joined(separator: " ").lowercased()
        let criteria = role.criteria
        let matches = criteria.compactMap { criterion -> GroundedStatement? in
            guard criterion.keywords.contains(where: searchable.contains) else { return nil }
            let sources = matchedSources(candidate: candidate, keywords: criterion.keywords)
            return .init(text: criterion.statement, sources: sources.isEmpty ? profileSources : sources)
        }
        let missing = missingInformation(candidate: candidate, role: role, matchedCount: matches.count)
        return CandidateEvaluation(
            role: role,
            snapshot: snapshot,
            roleAlignment: matches,
            missingInformation: missing,
            suggestedQuestions: role.questions.filter { question in
                matches.count < criteria.count || question.lowercased().contains("example")
            },
            generatedAt: .now
        )
    }

    private func evidenceSources(profile: Bool, resumeText: String?) -> [CandidateEvidenceSource] {
        var sources: [CandidateEvidenceSource] = profile ? [.candidateProfile] : []
        if resumeText?.isEmpty == false { sources.append(.resume) }
        return sources
    }

    private func matchedSources(candidate: Candidate, keywords: [String]) -> [CandidateEvidenceSource] {
        func contains(_ value: String?) -> Bool {
            guard let value else { return false }
            return keywords.contains { value.localizedCaseInsensitiveContains($0) }
        }
        var sources: [CandidateEvidenceSource] = []
        let profile = [candidate.education, candidate.experience].compactMap { $0 }.joined(separator: " ") + " " + candidate.skills.map(\.name).joined(separator: " ")
        if contains(profile) { sources.append(.candidateProfile) }
        if contains(candidate.resume.extractedText) { sources.append(.resume) }
        if contains(candidate.interview?.transcript?.text) { sources.append(.interviewTranscript) }
        let notes = candidate.interview?.notes
        if contains([notes?.summary, notes?.skillsDiscussed, notes?.experienceHighlights].compactMap { $0 }.joined(separator: " ")) { sources.append(.recruiterNotes) }
        return sources
    }

    private func missingInformation(candidate: Candidate, role: TargetRole, matchedCount: Int) -> [String] {
        var missing: [String] = []
        if candidate.resume.source == .skipped || candidate.resume.extractedText?.nilIfBlank == nil { missing.append("Resume evidence was not provided.") }
        if candidate.education?.nilIfBlank == nil { missing.append("Education or degree information is missing.") }
        if candidate.experience?.nilIfBlank == nil { missing.append("Project or work experience details are missing.") }
        if candidate.interview?.transcript == nil && candidate.interview?.notes == nil { missing.append("No recruiter interview evidence has been added.") }
        if matchedCount == 0 { missing.append("Available information does not yet show role-specific evidence for \(role.title).") }
        return missing
    }
}

private extension TargetRole {
    struct Criterion { let statement: String; let keywords: [String] }
    var criteria: [Criterion] {
        switch self {
        case .softwareEngineeringIntern:
            return [
                .init(statement: "Shows a student-level technical foundation through programming, coursework, or software projects.", keywords: ["python", "swift", "java", "javascript", "react", "software", "computer science", "programming", "github"]),
                .init(statement: "Provides evidence of problem solving and learning.", keywords: ["problem", "research", "learn", "hackathon", "capstone"]),
                .init(statement: "Provides evidence of communication or collaboration.", keywords: ["team", "collabor", "communication", "leadership", "club"])
            ]
        case .productOwner:
            return [
                .init(statement: "Provides evidence of product thinking, requirements work, or understanding users and outcomes.", keywords: ["product", "requirements", "user research", "customer", "business analysis", "backlog"]),
                .init(statement: "Provides evidence of prioritization or decision-making.", keywords: ["priorit", "decision", "roadmap", "agile", "scrum"]),
                .init(statement: "Provides evidence of cross-functional communication and collaboration.", keywords: ["stakeholder", "cross-functional", "engineer", "designer", "communication", "leadership"])
            ]
        }
    }
    var questions: [String] {
        switch self {
        case .softwareEngineeringIntern:
            ["Tell me about a software project and your specific contribution.", "What is an example of a technical problem you worked through?", "What would you like to learn during this internship?"]
        case .productOwner:
            ["Tell me about a time you translated a user or business need into requirements.", "What is an example of competing priorities you had to resolve?", "How have you worked with technical and business partners?"]
        }
    }
}

private extension String {
    var nilIfBlank: String? {
        let trimmed = trimmingCharacters(in: .whitespacesAndNewlines)
        return trimmed.isEmpty ? nil : trimmed
    }
}
