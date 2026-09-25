import SwiftUI

struct ResumeReviewView: View {
    @Binding var state: CandidateIntakeState
    @FocusState private var focusedField: Field?

    private enum Field: Hashable { case firstName, lastName, email, phone, education, experience }

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 22) {
                CandidateProgressHeader(step: state.step)
                PageHeading(
                    eyebrow: "STEP 4 OF 5",
                    title: "Review your information",
                    detail: state.resumeSource == .skipped
                        ? "You can add a resume later. Check the details below before continuing."
                        : "We found the following information. Please make sure it looks right."
                )

                if state.resumeSource != .skipped {
                    InlineMessage(text: "Extracted from your resume. Every field can be edited.", systemImage: "sparkles", isError: false)
                } else {
                    InlineMessage(text: "No resume added. You can enter any additional details below, or leave them blank.", systemImage: "doc", isError: false)
                }

                VStack(alignment: .leading, spacing: 14) {
                    HStack(spacing: 12) {
                        CandidateTextField(title: "First name", text: $state.firstName, contentType: .givenName)
                            .focused($focusedField, equals: .firstName)
                        CandidateTextField(title: "Last name", text: $state.lastName, contentType: .familyName)
                            .focused($focusedField, equals: .lastName)
                    }
                    CandidateTextField(title: "Email address", text: $state.email, contentType: .emailAddress, keyboard: .emailAddress)
                        .focused($focusedField, equals: .email)
                    CandidateTextField(title: "Phone (optional)", text: $state.phone, contentType: .telephoneNumber, keyboard: .phonePad)
                        .focused($focusedField, equals: .phone)
                    ResumeEditor(title: "Education", text: $state.education)
                        .focused($focusedField, equals: .education)
                    ResumeEditor(title: "Experience", text: $state.experience)
                        .focused($focusedField, equals: .experience)
                }

                Button("CONTINUE TO SKILLS") { state.step = .skills }
                    .buttonStyle(BrandButtonStyle())
            }
            .padding(24)
            .frame(maxWidth: 680)
            .frame(maxWidth: .infinity)
        }
    }
}

struct ReviewValue: View {
    let title: String
    let value: String

    var body: some View {
        VStack(alignment: .leading, spacing: 5) {
            Text(title.uppercased()).font(.caption.weight(.bold)).tracking(0.8).foregroundStyle(JBHuntColors.muted)
            Text(value.isEmpty ? "Not provided" : value)
                .font(.body.weight(.medium))
                .foregroundStyle(value.isEmpty ? JBHuntColors.muted : JBHuntColors.black)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(.bottom, 4)
    }
}

struct ResumeEditor: View {
    let title: String
    @Binding var text: String

    var body: some View {
        VStack(alignment: .leading, spacing: 7) {
            Text(title).font(.caption.weight(.semibold)).foregroundStyle(JBHuntColors.muted)
            TextEditor(text: $text)
                .frame(minHeight: 92)
                .padding(7)
                .background(JBHuntColors.white, in: RoundedRectangle(cornerRadius: 10))
                .overlay(RoundedRectangle(cornerRadius: 10).stroke(Color.secondary.opacity(0.2)))
                .accessibilityLabel(title)
        }
    }
}
