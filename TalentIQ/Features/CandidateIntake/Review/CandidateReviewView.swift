import SwiftUI

struct CandidateReviewView: View {
    @Binding var state: CandidateIntakeState
    let repository: any TalentIQRepository
    @State private var isSubmitting = false
    @State private var submissionError: String?

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 22) {
                CandidateProgressHeader(step: state.step)
                PageHeading(
                    eyebrow: "FINAL REVIEW",
                    title: "Ready to check in?",
                    detail: "Take one last look. Your information will go to the recruiting team for this event."
                )

                ReviewCard(title: "CANDIDATE") {
                    LabeledContent("Name", value: state.fullName)
                    LabeledContent("Email", value: state.email)
                    if !state.phone.isEmpty { LabeledContent("Phone", value: state.phone) }
                }
                ReviewCard(title: "EVENT") {
                    LabeledContent("Event code", value: state.eventCode)
                }
                ReviewCard(title: "RESUME") {
                    LabeledContent("Status", value: resumeStatus)
                    if let fileName = state.resumeArtifact.fileName, state.resumeSource != .skipped {
                        LabeledContent("File", value: fileName)
                    }
                }
                ReviewCard(title: "SKILLS") {
                    if state.selectedSkills.isEmpty {
                        Text("No skills selected").foregroundStyle(JBHuntColors.muted)
                    } else {
                        Text(state.selectedSkills.joined(separator: ", "))
                    }
                }

                if let submissionError {
                    InlineMessage(text: submissionError, systemImage: "exclamationmark.triangle", isError: true)
                }

                Button {
                    submit()
                } label: {
                    HStack {
                        if isSubmitting { ProgressView().tint(JBHuntColors.black) }
                        Text(isSubmitting ? "SUBMITTING…" : "SUBMIT CHECK-IN")
                    }
                }
                .buttonStyle(BrandButtonStyle())
                .disabled(isSubmitting || !state.canSubmit)
            }
            .padding(24)
            .frame(maxWidth: 680)
            .frame(maxWidth: .infinity)
        }
    }

    private var resumeStatus: String {
        switch state.resumeSource {
        case .digitalFile: "Digital Resume Added"
        case .paperScan: "Paper Resume Scanned"
        case .skipped: "No Resume Added"
        }
    }

    private func submit() {
        submissionError = nil
        isSubmitting = true
        do {
            _ = try repository.submit(state.makeSubmission())
            state.step = .success
        } catch {
            submissionError = "We couldn't complete your check-in. Please try again or ask a recruiter for help."
        }
        isSubmitting = false
    }
}

struct ReviewCard<Content: View>: View {
    let title: String
    @ViewBuilder let content: () -> Content

    var body: some View {
        VStack(alignment: .leading, spacing: 13) {
            Text(title)
                .font(.caption.weight(.bold))
                .tracking(1)
                .foregroundStyle(JBHuntColors.muted)
            content()
        }
        .padding(17)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(JBHuntColors.white, in: RoundedRectangle(cornerRadius: JBHuntTheme.cornerRadius))
    }
}

struct CandidateSuccessView: View {
    let onFinish: () -> Void

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            BrandMark()
            Spacer()
            VStack(alignment: .leading, spacing: 18) {
                Image(systemName: "checkmark.circle.fill")
                    .font(.system(size: 66))
                    .foregroundStyle(JBHuntColors.black)
                    .accessibilityHidden(true)
                Text("You're checked in.")
                    .font(.system(size: 40, weight: .bold, design: .rounded))
                Text("Your information has been sent to the recruiting team.")
                    .font(.title3)
                    .foregroundStyle(JBHuntColors.muted)
                Rectangle().fill(JBHuntColors.yellow).frame(width: 56, height: 6)
                Text("Driven for You™")
                    .font(.subheadline.weight(.semibold))
            }
            Spacer()
            Button("START NEXT CHECK-IN", action: onFinish)
                .buttonStyle(BrandButtonStyle())
                .accessibilityHint("Clears this candidate's information and returns to the welcome screen")
        }
        .padding(28)
        .frame(maxWidth: 680)
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
}
