@preconcurrency import AVFoundation
import SwiftUI

struct EventCheckInView: View {
    @Binding var state: CandidateIntakeState
    @State private var showingScanner = false
    @State private var showingManualEntry = false
    @State private var scannerMessage: String?

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 24) {
                CandidateProgressHeader(step: state.step)
                PageHeading(
                    eyebrow: "STEP 1 OF 5",
                    title: "Check in to your event",
                    detail: "Scan the event QR code provided by the recruiting team."
                )

                Button {
                    showingScanner = true
                } label: {
                    VStack(spacing: 18) {
                        Image(systemName: "qrcode.viewfinder")
                            .font(.system(size: 54, weight: .medium))
                            .foregroundStyle(JBHuntColors.black)
                        Text("SCAN EVENT QR CODE")
                            .font(.headline.weight(.bold))
                        Text("Camera access is used only to read the event code.")
                            .font(.subheadline)
                            .foregroundStyle(JBHuntColors.muted)
                            .multilineTextAlignment(.center)
                    }
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 34)
                    .background(JBHuntColors.yellow, in: RoundedRectangle(cornerRadius: JBHuntTheme.cornerRadius))
                }
                .buttonStyle(.plain)
                .accessibilityHint("Opens the camera to scan an event QR code")

                if let scannerMessage {
                    InlineMessage(text: scannerMessage, systemImage: "camera.slash", isError: true)
                }

                HStack(spacing: 12) {
                    Rectangle().fill(Color.secondary.opacity(0.2)).frame(height: 1)
                    Text("OR")
                        .font(.caption.weight(.bold))
                        .foregroundStyle(JBHuntColors.muted)
                    Rectangle().fill(Color.secondary.opacity(0.2)).frame(height: 1)
                }

                Button("ENTER EVENT CODE MANUALLY") {
                    showingManualEntry = true
                }
                .buttonStyle(.bordered)
                .tint(JBHuntColors.black)
                .frame(maxWidth: .infinity)

                Text("Your event code connects this check-in to the right recruiting team.")
                    .font(.footnote)
                    .foregroundStyle(JBHuntColors.muted)
            }
            .padding(24)
            .frame(maxWidth: 680)
            .frame(maxWidth: .infinity)
        }
        .sheet(isPresented: $showingScanner) {
            NavigationStack {
                QRScannerView(
                    onCode: handleCode,
                    onFailure: { scannerMessage = $0; showingScanner = false }
                )
                .ignoresSafeArea()
                .navigationTitle("Scan event code")
                .navigationBarTitleDisplayMode(.inline)
                .toolbar {
                    ToolbarItem(placement: .cancellationAction) {
                        Button("Cancel") { showingScanner = false }
                    }
                }
            }
        }
        .sheet(isPresented: $showingManualEntry) {
            NavigationStack {
                ManualEventCodeView { code in
                    state.eventCode = code
                    state.step = .profile
                    showingManualEntry = false
                }
                .toolbar {
                    ToolbarItem(placement: .cancellationAction) {
                        Button("Cancel") { showingManualEntry = false }
                    }
                }
            }
            .presentationDetents([.medium])
        }
    }

    private func handleCode(_ payload: String) {
        guard let code = EventCodeParser.eventCode(from: payload) else {
            scannerMessage = "That QR code does not contain a valid TalentIQ event."
            return
        }
        state.eventCode = code
        showingScanner = false
        state.step = .profile
    }
}

struct ManualEventCodeView: View {
    let onContinue: (String) -> Void
    @Environment(\.dismiss) private var dismiss
    @State private var code = ""
    @FocusState private var focused: Bool

    var body: some View {
        VStack(alignment: .leading, spacing: 22) {
            PageHeading(
                eyebrow: "EVENT ACCESS",
                title: "Enter your event code",
                detail: "Use the short code shown on the event sign or ask a recruiter."
            )
            TextField("Event code", text: $code)
                .textInputAutocapitalization(.characters)
                .autocorrectionDisabled()
                .textFieldStyle(.roundedBorder)
                .focused($focused)
                .submitLabel(.continue)
                .onSubmit(submit)
                .accessibilityLabel("Event code")
            Button("CONTINUE", action: submit)
                .buttonStyle(BrandButtonStyle())
                .disabled(EventCodeParser.eventCode(from: code) == nil)
            Spacer()
        }
        .padding(24)
        .onAppear { focused = true }
    }

    private func submit() {
        guard let code = EventCodeParser.eventCode(from: code) else { return }
        onContinue(code)
    }
}

struct QRScannerView: UIViewControllerRepresentable {
    let onCode: (String) -> Void
    let onFailure: (String) -> Void

    func makeUIViewController(context: Context) -> QRScannerViewController {
        QRScannerViewController(onCode: onCode, onFailure: onFailure)
    }

    func updateUIViewController(_ uiViewController: QRScannerViewController, context: Context) {}
}

@MainActor
final class QRScannerViewController: UIViewController, @MainActor AVCaptureMetadataOutputObjectsDelegate {
    private let onCode: (String) -> Void
    private let onFailure: (String) -> Void
    private let session = AVCaptureSession()
    private var previewLayer: AVCaptureVideoPreviewLayer?
    private var hasReportedResult = false

    init(onCode: @escaping (String) -> Void, onFailure: @escaping (String) -> Void) {
        self.onCode = onCode
        self.onFailure = onFailure
        super.init(nibName: nil, bundle: nil)
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) { nil }

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .black
        configureCamera()
    }

    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        previewLayer?.frame = view.bounds
    }

    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        if session.isRunning { session.stopRunning() }
    }

    private func configureCamera() {
        guard AVCaptureDevice.default(for: .video) != nil else {
            reportFailure("Camera scanning is unavailable here. Enter the event code manually instead.")
            return
        }

        switch AVCaptureDevice.authorizationStatus(for: .video) {
        case .authorized:
            configureSession()
        case .notDetermined:
            AVCaptureDevice.requestAccess(for: .video) { [weak self] granted in
                DispatchQueue.main.async {
                    guard let self else { return }
                    if granted { self.configureSession() }
                    else { self.reportFailure("Camera access is off. Enter the event code manually instead.") }
                }
            }
        default:
            reportFailure("Camera access is off. Enter the event code manually instead.")
        }
    }

    private func configureSession() {
        guard !session.isRunning else { return }
        session.beginConfiguration()
        defer { session.commitConfiguration() }

        guard let device = AVCaptureDevice.default(for: .video),
              let input = try? AVCaptureDeviceInput(device: device),
              session.canAddInput(input) else {
            reportFailure("The camera could not be prepared. Enter the event code manually instead.")
            return
        }
        session.addInput(input)

        let output = AVCaptureMetadataOutput()
        guard session.canAddOutput(output) else {
            reportFailure("QR scanning is unavailable. Enter the event code manually instead.")
            return
        }
        session.addOutput(output)
        output.setMetadataObjectsDelegate(self, queue: .main)
        output.metadataObjectTypes = [.qr]

        let layer = AVCaptureVideoPreviewLayer(session: session)
        layer.videoGravity = .resizeAspectFill
        previewLayer = layer
        view.layer.insertSublayer(layer, at: 0)

        session.startRunning()
    }

    func metadataOutput(
        _ output: AVCaptureMetadataOutput,
        didOutput metadataObjects: [AVMetadataObject],
        from connection: AVCaptureConnection
    ) {
        guard !hasReportedResult,
              let value = metadataObjects.compactMap({ $0 as? AVMetadataMachineReadableCodeObject }).first?.stringValue
        else { return }
        hasReportedResult = true
        session.stopRunning()
        onCode(value)
    }

    private func reportFailure(_ message: String) {
        guard !hasReportedResult else { return }
        hasReportedResult = true
        onFailure(message)
    }
}
