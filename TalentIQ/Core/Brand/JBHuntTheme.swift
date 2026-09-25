import SwiftUI

enum JBHuntColors {
    static let yellow = Color(red: 254/255, green: 219/255, blue: 0)
    static let black = Color.black
    static let white = Color.white
    static let surface = Color(uiColor: .secondarySystemBackground)
    static let muted = Color(uiColor: .secondaryLabel)
}
enum JBHuntTheme {
    static let logoAssetName = "JBHuntLogo"
    static let cornerRadius: CGFloat = 14
}
struct BrandButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label.font(.headline).foregroundStyle(JBHuntColors.black)
            .frame(maxWidth: .infinity, minHeight: 54)
            .background(JBHuntColors.yellow, in: RoundedRectangle(cornerRadius: JBHuntTheme.cornerRadius))
            .opacity(configuration.isPressed ? 0.7 : 1)
    }
}
