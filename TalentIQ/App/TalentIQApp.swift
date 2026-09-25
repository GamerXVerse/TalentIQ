import SwiftUI
import SwiftData

@main
struct TalentIQApp: App {
    private let container: ModelContainer
    private let repository: LocalTalentIQRepository
    init() {
        do { container = try ModelContainer(for: CandidateRecord.self) }
        catch { fatalError("Unable to initialize local candidate store: \(error)") }
        repository = LocalTalentIQRepository(context: container.mainContext)
    }
    var body: some Scene {
        WindowGroup { AppShellView(repository: repository) }
            .modelContainer(container)
    }
}

struct AppShellView: View {
    let repository: any TalentIQRepository
    var body: some View {
        TabView {
            NavigationStack { CandidateIntakeView(repository: repository) }
                .tabItem { Label("Candidate", systemImage: "person.crop.circle") }
            NavigationStack { AdminDashboardView(repository: repository) }
                .tabItem { Label("Recruiter", systemImage: "person.2.badge.gearshape") }
        }
        .tint(JBHuntColors.black)
    }
}
