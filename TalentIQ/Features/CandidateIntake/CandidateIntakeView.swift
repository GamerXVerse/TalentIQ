import SwiftUI

struct CandidateIntakeView: View {
    let repository: any TalentIQRepository
    @State private var state = CandidateIntakeState()

    var body: some View {
        Group {
            switch state.step {
            case .welcome:
                CandidateWelcomeView { state.step = .event }
            case .event:
                EventCheckInView(state: $state)
            case .profile:
                CandidateInfoView(state: $state)
            case .resume:
                ResumeOptionsView(state: $state)
            case .information:
                ResumeReviewView(state: $state)
            case .skills:
                SkillsSelectionView(state: $state)
            case .review:
                CandidateReviewView(state: $state, repository: repository)
            case .success:
                CandidateSuccessView { state.reset() }
            }
        }
        .toolbar(.hidden, for: .navigationBar)
        .background(JBHuntColors.surface.ignoresSafeArea())
    }
}

struct CandidateWelcomeView: View {
    let onCheckIn: () -> Void

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            HStack {
                BrandMark()
                Spacer()
                Text("CANDIDATE CHECK-IN")
                    .font(.caption.weight(.bold))
                    .tracking(1.1)
                    .foregroundStyle(JBHuntColors.muted)
            }

            Spacer()

            VStack(alignment: .leading, spacing: 20) {
                Rectangle()
                    .fill(JBHuntColors.yellow)
                    .frame(width: 56, height: 6)
                Text("TalentIQ")
                    .font(.system(size: 48, weight: .bold, design: .rounded))
                    .foregroundStyle(JBHuntColors.black)
                Text("Career conversations, simplified.")
                    .font(.title2.weight(.medium))
                    .foregroundStyle(JBHuntColors.black)
                Text("A few quick steps and the recruiting team will have what they need to meet you.")
                    .font(.body)
                    .foregroundStyle(JBHuntColors.muted)
                    .fixedSize(horizontal: false, vertical: true)
            }

            Spacer()

            VStack(alignment: .leading, spacing: 14) {
                Button("CHECK IN", action: onCheckIn)
                    .buttonStyle(BrandButtonStyle())
                    .accessibilityHint("Starts event check-in")
                Text("People. Technology. Capacity.\nDriven for You™")
                    .font(.caption)
                    .foregroundStyle(JBHuntColors.muted)
                    .lineSpacing(3)
            }
        }
        .padding(.horizontal, 28)
        .padding(.vertical, 24)
        .frame(maxWidth: 680)
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
}

struct BrandMark: View {
    var body: some View {
        HStack(spacing: 8) {
            Image(systemName: "arrow.triangle.2.circlepath")
                .font(.title3.weight(.bold))
                .foregroundStyle(JBHuntColors.black)
                .accessibilityHidden(true)
            Text("J.B. HUNT")
                .font(.caption.weight(.black))
                .tracking(1.2)
                .foregroundStyle(JBHuntColors.black)
        }
        .padding(.horizontal, 12)
        .padding(.vertical, 9)
        .background(JBHuntColors.yellow, in: RoundedRectangle(cornerRadius: 8))
        .accessibilityElement(children: .combine)
        .accessibilityLabel("J.B. Hunt")
    }
}

struct CandidateProgressHeader: View {
    let step: CandidateIntakeStep

    private var progress: Double {
        switch step {
        case .welcome, .event: 0.15
        case .profile: 0.3
        case .resume, .information: 0.5
        case .skills: 0.7
        case .review: 0.88
        case .success: 1
        }
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack {
                BrandMark()
                Spacer()
                Text("\(Int(progress * 100))% COMPLETE")
                    .font(.caption.weight(.bold))
                    .tracking(0.8)
                    .foregroundStyle(JBHuntColors.muted)
            }
            ProgressView(value: progress)
                .tint(JBHuntColors.yellow)
                .accessibilityLabel("Check-in progress")
                .accessibilityValue("\(Int(progress * 100)) percent")
        }
    }
}
