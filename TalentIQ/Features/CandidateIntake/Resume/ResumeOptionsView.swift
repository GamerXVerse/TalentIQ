@preconcurrency import AVFoundation
import SwiftUI
import UniformTypeIdentifiers
@preconcurrency import VisionKit

struct ResumeOptionsView: View {
    @Binding var state: CandidateIntakeState
    @State private var showingFileImporter = false
    @State private var showingPaperScanner = false
    @State private var showingUnavailableAlert = false
    @State private var processingMessage: String?

    private let processor = ResumeDocumentProcessor()

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 22) {
                CandidateProgressHeader(step: state.step)
                PageHeading(
                    eyebrow: "STEP 3 OF 5",
                    title: "Add your resume",
                    detail: "Optional, but helpful. Choose the fastest option for you."
                )

                if let processingMessage {
                    InlineMessage(text: processingMessage, systemImage: "arrow.triangle.2.circlepath", isError: false)
                }
                if let errorMessage = state.errorMessage {
                    VStack(alignment: .leading, spacing: 12) {
                        InlineMessage(text: errorMessage, systemImage: "exclamationmark.triangle", isError: true)
                        Button("CONTINUE MANUALLY") {
                            state.errorMessage = nil
                            state.resumeSource = .skipped
                            state.resumeArtifact = ResumeArtifact(source: .skipped)
                            state.step = .information
                        }
                        .buttonStyle(.bordered)
                        .tint(JBHuntColors.black)
                    }
                }

                ResumeOptionCard(
                    title: "UPLOAD RESUME",
                    detail: "Choose a PDF, text, or RTF file from this device.",
                    systemImage: "arrow.up.doc",
                    accent: JBHuntColors.yellow
                ) {
                    showingFileImporter = true
                }
                ResumeOptionCard(
                    title: "SCAN PAPER RESUME",
                    detail: "Photograph one or more pages and we will read them for you.",
                    systemImage: "doc.viewfinder",
                    accent: JBHuntColors.black
                ) {
                    guard VNDocumentCameraViewController.isSupported else {
                        showingUnavailableAlert = true
                        return
                    }
                    showingPaperScanner = true
                }
                ResumeOptionCard(
                    title: "SKIP FOR NOW",
                    detail: "You can continue with your contact information and skills.",
                    systemImage: "arrow.right",
                    accent: JBHuntColors.surface
                ) {
                    state.errorMessage = nil
                    state.resumeSource = .skipped
                    state.resumeArtifact = ResumeArtifact(source: .skipped)
                    state.step = .information
                }
                .accessibilityHint("Continues without adding a resume")
            }
            .padding(24)
            .frame(maxWidth: 680)
            .frame(maxWidth: .infinity)
        }
        .fileImporter(
            isPresented: $showingFileImporter,
            allowedContentTypes: [.pdf, .plainText, .rtf],
            allowsMultipleSelection: false,
            onCompletion: handleFileImport
        )
        .sheet(isPresented: $showingPaperScanner) {
            PaperResumeScannerView(
                onScan: handlePaperScan,
                onFailure: { state.errorMessage = $0; showingPaperScanner = false }
            )
            .ignoresSafeArea()
        }
        .alert("Paper scanning unavailable", isPresented: $showingUnavailableAlert) {
            Button("OK", role: .cancel) {}
        } message: {
            Text("This device cannot use the document camera. You can upload a digital resume or skip for now.")
        }
    }

    private func handleFileImport(_ result: Result<[URL], Error>) {
        guard case .success(let urls) = result, let url = urls.first else { return }
        state.errorMessage = nil
        state.isProcessing = true
        processingMessage = "Reading your resume…"
        Task { @MainActor in
            defer {
                state.isProcessing = false
                processingMessage = nil
            }
            do {
                let artifact = try await processor.processDigitalResume(from: url)
                state.resumeSource = .digitalFile
                state.resumeArtifact = artifact
                if let text = artifact.extractedText {
                    state.apply(ResumeProfileParser().parse(text))
                }
                state.step = .information
            } catch {
                state.errorMessage = error.localizedDescription
            }
        }
    }

    private func handlePaperScan(_ result: PaperResumeScan) {
        showingPaperScanner = false
        state.errorMessage = nil
        state.isProcessing = true
        processingMessage = "Reading your scanned pages…"
        Task { @MainActor in
            defer {
                state.isProcessing = false
                processingMessage = nil
            }
            do {
                let artifact = try await processor.processPaperResume(images: result.images, pdfData: result.pdfData)
                state.resumeSource = .paperScan
                state.resumeArtifact = artifact
                if let text = artifact.extractedText {
                    state.apply(ResumeProfileParser().parse(text))
                }
                state.step = .information
            } catch {
                state.errorMessage = error.localizedDescription
            }
        }
    }
}

struct ResumeOptionCard: View {
    let title: String
    let detail: String
    let systemImage: String
    let accent: Color
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            HStack(spacing: 16) {
                Image(systemName: systemImage)
                    .font(.title2.weight(.semibold))
                    .foregroundStyle(accent == JBHuntColors.surface ? JBHuntColors.black : accent)
                    .frame(width: 30)
                VStack(alignment: .leading, spacing: 5) {
                    Text(title).font(.headline.weight(.bold)).foregroundStyle(JBHuntColors.black)
                    Text(detail).font(.subheadline).foregroundStyle(JBHuntColors.muted).multilineTextAlignment(.leading)
                }
                Spacer()
                Image(systemName: "chevron.right")
                    .font(.caption.weight(.bold))
                    .foregroundStyle(JBHuntColors.muted)
            }
            .padding(18)
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(JBHuntColors.white, in: RoundedRectangle(cornerRadius: JBHuntTheme.cornerRadius))
            .overlay(alignment: .leading) {
                Rectangle().fill(accent).frame(width: 5).clipShape(RoundedRectangle(cornerRadius: 2))
            }
        }
        .buttonStyle(.plain)
        .accessibilityElement(children: .combine)
    }
}

struct PaperResumeScannerView: UIViewControllerRepresentable {
    let onScan: (PaperResumeScan) -> Void
    let onFailure: (String) -> Void

    func makeUIViewController(context: Context) -> PaperResumeScannerController {
        PaperResumeScannerController(onScan: onScan, onFailure: onFailure)
    }

    func updateUIViewController(_ uiViewController: PaperResumeScannerController, context: Context) {}
}

struct PaperResumeScan {
    let images: [CGImage]
    let pdfData: Data
}

final class PaperResumeScannerController: VNDocumentCameraViewController, @MainActor VNDocumentCameraViewControllerDelegate {
    private let onScan: (PaperResumeScan) -> Void
    private let onFailure: (String) -> Void

    init(onScan: @escaping (PaperResumeScan) -> Void, onFailure: @escaping (String) -> Void) {
        self.onScan = onScan
        self.onFailure = onFailure
        super.init()
        delegate = self
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) { nil }

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        guard !isBeingDismissed else { return }
        guard AVCaptureDevice.authorizationStatus(for: .video) != .denied else {
            onFailure("Camera access is off. You can enter your information manually or continue without a resume.")
            return
        }
        if AVCaptureDevice.authorizationStatus(for: .video) == .notDetermined {
            AVCaptureDevice.requestAccess(for: .video) { [weak self] granted in
                DispatchQueue.main.async {
                    if !granted { self?.onFailure("Camera access is off. You can enter your information manually or continue without a resume.") }
                }
            }
        }
    }

    func documentCameraViewController(_ controller: VNDocumentCameraViewController, didFinishWith scan: VNDocumentCameraScan) {
        guard scan.pageCount > 0 else {
            onFailure("No pages were captured. You can try scanning again or continue without a resume.")
            return
        }
        let images = (0..<scan.pageCount).compactMap { scan.imageOfPage(at: $0).cgImage }
        guard !images.isEmpty else {
            onFailure("The scanned pages could not be read. You can enter your information manually.")
            return
        }
        let pdfData = makePDF(from: (0..<scan.pageCount).map { scan.imageOfPage(at: $0) })
        onScan(PaperResumeScan(images: images, pdfData: pdfData))
    }

    func documentCameraViewControllerDidCancel(_ controller: VNDocumentCameraViewController) {
        onFailure("Scanning canceled. You can choose another resume option.")
    }

    func documentCameraViewController(_ controller: VNDocumentCameraViewController, didFailWithError error: Error) {
        onFailure("We couldn't scan that resume. You can enter your information manually or continue without a resume.")
    }

    private func makePDF(from images: [UIImage]) -> Data {
        let format = UIGraphicsPDFRendererFormat()
        let renderer = UIGraphicsPDFRenderer(bounds: CGRect(x: 0, y: 0, width: 612, height: 792), format: format)
        return renderer.pdfData { context in
            for image in images {
                context.beginPage()
                let pageRect = context.pdfContextBounds.insetBy(dx: 20, dy: 20)
                let scale = min(pageRect.width / image.size.width, pageRect.height / image.size.height)
                let size = CGSize(width: image.size.width * scale, height: image.size.height * scale)
                let origin = CGPoint(x: pageRect.midX - size.width / 2, y: pageRect.midY - size.height / 2)
                image.draw(in: CGRect(origin: origin, size: size))
            }
        }
    }
}
