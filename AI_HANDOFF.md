# TalentIQ integration handoff

## Architecture
The XcodeGen specification is `project.yml`; `TalentIQ.xcodeproj` is generated and checked in. iOS 17+, Swift 6, SwiftUI, SwiftData, AVFoundation, and Speech are the only dependencies. `TalentIQApp` creates one SwiftData `ModelContainer` and one `LocalTalentIQRepository`; both tabs share that repository. Candidate writes increment `revision`, which refreshes the recruiter queue and detail view immediately on the same device. A remote implementation can conform to `TalentIQRepository`; cross-device synchronization is not implemented.

## Ownership
Luna owns `TalentIQ/Features/CandidateIntake/`, candidate resume import/scanning/OCR services, and candidate tests. Replace the minimal `CandidateIntakeView` in that directory with the full candidate flow. The lead owns `TalentIQ/App/`, `Core/`, `Features/Admin/`, `Features/Interview/`, `Services/Audio/`, `Services/Speech/`, `Services/Notes/`, `project.yml`, and repository tests. Please do not edit those lead-owned files without coordination. The root `AI_HANDOFF.md` is the integration contract.

## Domain and submission contract
`Core/Models/Domain.swift` defines `Candidate`, `CandidateSubmission`, `CandidateContactInfo`, `CandidateSkill`, `ResumeArtifact`, `ResumeSource`, `EventCheckIn`, `Interview`, `InterviewRecording`, `InterviewTranscript`, and `InterviewNotes`. Candidate data allows missing phone, education, experience, and resume. `ResumeSource` is `.digitalFile`, `.paperScan`, or `.skipped`. Store a file URL in `ResumeArtifact.localURL` for an imported resume; copy the file into the app's Documents directory before submission so it persists after document picker access expires. Use `CandidateSubmission` and call `try repository.submit(submission)` on the main actor. This sets `submittedAt` and `.readyForInterview`. `repository.update(candidate)` supports edits. The recruiter queue reads `repository.candidates()` and responds to `revision` changes.

## Repository API
`TalentIQRepository` is `@MainActor` and exposes `revision`, `submit`, `update`, `candidates`, `candidate(id:)`, `saveInterview`, `saveTranscript`, and `saveNotes`. Its local implementation uses SwiftData records with Codable candidate payloads. A remote repository can implement the same protocol and publish its own revision when server data changes. The current revision mechanism is same-process only.

## Theme and navigation
Use `JBHuntColors.yellow`, `.black`, `.white`, `.surface`, `.muted`, `JBHuntTheme.cornerRadius`, and `BrandButtonStyle`. `JBHuntTheme.logoAssetName` is the central future asset name (`JBHuntLogo`); no logo asset was supplied in this workspace. `AppShellView` hosts `CandidateIntakeView(repository:)` in the Candidate tab and `AdminDashboardView(repository:)` in the Recruiter tab. Keep the candidate view initializer `init(repository: any TalentIQRepository)` or ask the lead to coordinate an app-shell change.

## Permissions and environment
`project.yml` includes microphone, speech, camera, and photo-library usage strings. No API key or backend is needed. Speech permission is requested at transcription time. The local notes generator provides an editable template when transcription is unavailable. Simulator recording depends on the selected simulator audio input; manual candidate event code is already available in the interim intake view.

## Build and run
Run `xcodegen generate`, open `TalentIQ.xcodeproj`, select the TalentIQ scheme and an iOS 17+ simulator, then Run. CLI: `xcodebuild -project TalentIQ.xcodeproj -scheme TalentIQ -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build CODE_SIGNING_ALLOWED=NO`. Tests use the TalentIQTests scheme on the same destination.
