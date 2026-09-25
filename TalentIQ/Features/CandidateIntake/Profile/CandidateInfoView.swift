import SwiftUI

struct CandidateInfoView: View {
    @Binding var state: CandidateIntakeState
    @FocusState private var focusedField: Field?

    private enum Field: Hashable { case firstName, lastName, email, phone }

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 22) {
                CandidateProgressHeader(step: state.step)
                PageHeading(
                    eyebrow: "STEP 2 OF 5",
                    title: "Tell us about yourself",
                    detail: "Just the basics to get your conversation started."
                )

                VStack(spacing: 14) {
                    HStack(spacing: 12) {
                        CandidateTextField(title: "First name", text: $state.firstName, contentType: .givenName)
                            .focused($focusedField, equals: .firstName)
                            .submitLabel(.next)
                            .onSubmit { focusedField = .lastName }
                        CandidateTextField(title: "Last name", text: $state.lastName, contentType: .familyName)
                            .focused($focusedField, equals: .lastName)
                            .submitLabel(.next)
                            .onSubmit { focusedField = .email }
                    }
                    CandidateTextField(title: "Email address", text: $state.email, contentType: .emailAddress, keyboard: .emailAddress)
                        .focused($focusedField, equals: .email)
                        .submitLabel(.next)
                        .onSubmit { focusedField = .phone }
                    CandidateTextField(title: "Phone (optional)", text: $state.phone, contentType: .telephoneNumber, keyboard: .phonePad)
                        .focused($focusedField, equals: .phone)
                }

                if !state.firstName.isEmpty && !CandidateDraftValidator.isValidName(state.firstName) {
                    Text("Enter your first name.").font(.caption).foregroundStyle(.red)
                }
                if !state.lastName.isEmpty && !CandidateDraftValidator.isValidName(state.lastName) {
                    Text("Enter your last name.").font(.caption).foregroundStyle(.red)
                }
                if !state.email.isEmpty && !CandidateDraftValidator.isValidEmail(state.email) {
                    Text("Enter a valid email address.").font(.caption).foregroundStyle(.red)
                }

                Button("CONTINUE TO RESUME") { state.step = .resume }
                    .buttonStyle(BrandButtonStyle())
                    .disabled(!state.canContinueFromProfile)
                    .accessibilityHint("Moves to resume options")
            }
            .padding(24)
            .frame(maxWidth: 680)
            .frame(maxWidth: .infinity)
        }
        .onAppear { focusedField = .firstName }
    }
}

struct CandidateTextField: View {
    let title: String
    @Binding var text: String
    let contentType: UITextContentType
    var keyboard: UIKeyboardType = .default

    var body: some View {
        VStack(alignment: .leading, spacing: 7) {
            Text(title)
                .font(.caption.weight(.semibold))
                .foregroundStyle(JBHuntColors.muted)
            TextField(title, text: $text)
                .textContentType(contentType)
                .keyboardType(keyboard)
                .textInputAutocapitalization(contentType == .emailAddress ? .never : .words)
                .autocorrectionDisabled(contentType == .emailAddress)
                .textFieldStyle(.roundedBorder)
                .accessibilityLabel(title)
        }
    }
}

struct PageHeading: View {
    let eyebrow: String
    let title: String
    let detail: String

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text(eyebrow)
                .font(.caption.weight(.bold))
                .tracking(1.2)
                .foregroundStyle(JBHuntColors.muted)
            Text(title)
                .font(.system(.largeTitle, design: .rounded).weight(.bold))
                .foregroundStyle(JBHuntColors.black)
            Text(detail)
                .font(.body)
                .foregroundStyle(JBHuntColors.muted)
                .fixedSize(horizontal: false, vertical: true)
        }
    }
}

struct InlineMessage: View {
    let text: String
    let systemImage: String
    var isError = false

    var body: some View {
        Label(text, systemImage: systemImage)
            .font(.subheadline)
            .foregroundStyle(isError ? .red : JBHuntColors.black)
            .padding(14)
            .frame(maxWidth: .infinity, alignment: .leading)
            .background((isError ? Color.red : JBHuntColors.yellow).opacity(0.12), in: RoundedRectangle(cornerRadius: 10))
            .accessibilityElement(children: .combine)
    }
}
