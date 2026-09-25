import SwiftUI

struct SkillsSelectionView: View {
    @Binding var state: CandidateIntakeState
    @State private var searchText = ""
    @State private var customSkill = ""

    private var filteredSkills: [String] {
        let skills = ResumeProfileParser.supportedSkills
        guard !searchText.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty else { return skills }
        return skills.filter { $0.localizedCaseInsensitiveContains(searchText) }
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            ScrollView {
                VStack(alignment: .leading, spacing: 20) {
                    CandidateProgressHeader(step: state.step)
                    PageHeading(
                        eyebrow: "STEP 5 OF 5",
                        title: "What are you good at?",
                        detail: "Choose the skills you would like to discuss. There are no wrong answers."
                    )

                    HStack {
                        Image(systemName: "magnifyingglass").foregroundStyle(JBHuntColors.muted)
                        TextField("Search skills", text: $searchText)
                            .textInputAutocapitalization(.never)
                            .autocorrectionDisabled()
                            .accessibilityLabel("Search skills")
                    }
                    .padding(12)
                    .background(JBHuntColors.white, in: RoundedRectangle(cornerRadius: 10))

                    LazyVGrid(columns: [GridItem(.adaptive(minimum: 145), spacing: 10)], spacing: 10) {
                        ForEach(filteredSkills, id: \.self) { skill in
                            SkillChoiceButton(skill: skill, isSelected: state.selectedSkills.contains(skill)) {
                                toggle(skill)
                            }
                        }
                    }

                    VStack(alignment: .leading, spacing: 9) {
                        Text("SELECTED (\(state.selectedSkills.count))").font(.caption.weight(.bold)).tracking(1).foregroundStyle(JBHuntColors.muted)
                        if state.selectedSkills.isEmpty {
                            Text("No skills selected yet.").font(.subheadline).foregroundStyle(JBHuntColors.muted)
                        } else {
                            FlowLayout(spacing: 8) {
                                ForEach(state.selectedSkills, id: \.self) { skill in
                                    SkillChip(title: skill, selected: true) { remove(skill) }
                                }
                            }
                        }
                    }
                    .frame(minHeight: 52, alignment: .topLeading)

                    HStack(spacing: 10) {
                        TextField("Add another skill", text: $customSkill)
                            .textFieldStyle(.roundedBorder)
                            .accessibilityLabel("Custom skill")
                        Button("ADD") { addCustomSkill() }
                            .buttonStyle(.bordered)
                            .tint(JBHuntColors.black)
                            .disabled(customSkill.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty)
                    }
                }
                .padding(24)
                .frame(maxWidth: 680)
                .frame(maxWidth: .infinity)
            }

            VStack(spacing: 8) {
                Button("REVIEW SUBMISSION") { state.step = .review }
                    .buttonStyle(BrandButtonStyle())
                Text("Skills are shared with the recruiting team and do not determine a ranking.")
                    .font(.caption)
                    .foregroundStyle(JBHuntColors.muted)
                    .multilineTextAlignment(.center)
            }
            .padding(.horizontal, 24)
            .padding(.top, 10)
            .padding(.bottom, 12)
        }
    }

    private func toggle(_ skill: String) {
        if let index = state.selectedSkills.firstIndex(of: skill) {
            state.selectedSkills.remove(at: index)
        } else {
            state.selectedSkills.append(skill)
            state.selectedSkills.sort()
        }
    }

    private func remove(_ skill: String) { state.selectedSkills.removeAll { $0 == skill } }

    private func addCustomSkill() {
        let skill = customSkill.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !skill.isEmpty else { return }
        if !state.selectedSkills.contains(where: { $0.caseInsensitiveCompare(skill) == .orderedSame }) {
            state.selectedSkills.append(skill)
            state.selectedSkills.sort()
        }
        customSkill = ""
    }
}

struct SkillChoiceButton: View {
    let skill: String
    let isSelected: Bool
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            HStack(spacing: 8) {
                Image(systemName: isSelected ? "checkmark.circle.fill" : "circle")
                    .foregroundStyle(isSelected ? JBHuntColors.black : JBHuntColors.muted)
                Text(skill)
                    .font(.subheadline.weight(.medium))
                    .foregroundStyle(JBHuntColors.black)
                    .multilineTextAlignment(.leading)
                Spacer(minLength: 0)
            }
            .padding(12)
            .frame(maxWidth: .infinity, minHeight: 52, alignment: .leading)
            .background(isSelected ? JBHuntColors.yellow : JBHuntColors.white, in: RoundedRectangle(cornerRadius: 10))
            .overlay(RoundedRectangle(cornerRadius: 10).stroke(isSelected ? JBHuntColors.black.opacity(0.12) : Color.secondary.opacity(0.18)))
        }
        .buttonStyle(.plain)
        .accessibilityValue(isSelected ? "Selected" : "Not selected")
    }
}

struct SkillChip: View {
    let title: String
    let selected: Bool
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            HStack(spacing: 6) {
                Text(title).font(.subheadline.weight(.semibold))
                Image(systemName: "xmark").font(.caption2.weight(.bold))
            }
            .foregroundStyle(JBHuntColors.black)
            .padding(.horizontal, 11)
            .padding(.vertical, 8)
            .background(JBHuntColors.yellow, in: Capsule())
        }
        .buttonStyle(.plain)
        .accessibilityLabel("Remove \(title)")
    }
}

struct FlowLayout: Layout {
    var spacing: CGFloat = 8

    func sizeThatFits(proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) -> CGSize {
        let width = proposal.width ?? .infinity
        var x: CGFloat = 0
        var y: CGFloat = 0
        var rowHeight: CGFloat = 0
        for subview in subviews {
            let size = subview.sizeThatFits(.unspecified)
            if x > 0, x + size.width > width {
                x = 0
                y += rowHeight + spacing
                rowHeight = 0
            }
            x += size.width + spacing
            rowHeight = max(rowHeight, size.height)
        }
        return CGSize(width: width, height: y + rowHeight)
    }

    func placeSubviews(in bounds: CGRect, proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) {
        var x = bounds.minX
        var y = bounds.minY
        var rowHeight: CGFloat = 0
        for subview in subviews {
            let size = subview.sizeThatFits(.unspecified)
            if x > bounds.minX, x + size.width > bounds.maxX {
                x = bounds.minX
                y += rowHeight + spacing
                rowHeight = 0
            }
            subview.place(at: CGPoint(x: x, y: y), proposal: ProposedViewSize(size))
            x += size.width + spacing
            rowHeight = max(rowHeight, size.height)
        }
    }
}
