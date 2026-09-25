@preconcurrency import Vision
import CoreGraphics
import Foundation
import PDFKit

enum ResumeOCRError: LocalizedError {
    case noText
    case recognitionFailed

    var errorDescription: String? {
        switch self {
        case .noText: "We couldn't read this resume automatically. You can enter the information manually or continue without a resume."
        case .recognitionFailed: "Resume scanning was interrupted. You can enter the information manually or continue without a resume."
        }
    }
}

struct ResumeOCRService: Sendable {
    func recognizeText(in images: [CGImage]) throws -> String {
        guard !images.isEmpty else { throw ResumeOCRError.noText }
        var lines: [String] = []

        for image in images {
            let request = VNRecognizeTextRequest()
            request.recognitionLevel = .accurate
            request.usesLanguageCorrection = true
            request.minimumTextHeight = 0.012
            let handler = VNImageRequestHandler(cgImage: image, options: [:])
            do {
                try handler.perform([request])
            } catch {
                throw ResumeOCRError.recognitionFailed
            }
            lines.append(contentsOf: request.results?.compactMap { $0.topCandidates(1).first?.string } ?? [])
        }

        let text = ResumeTextExtractor.normalizedText(lines.joined(separator: "\n"))
        guard !text.isEmpty else { throw ResumeOCRError.noText }
        return text
    }

    func recognizeText(inPDF url: URL) throws -> String {
        guard let document = PDFDocument(url: url), document.pageCount > 0 else { throw ResumeOCRError.noText }
        let images = (0..<document.pageCount).compactMap { index -> CGImage? in
            guard let page = document.page(at: index) else { return nil }
            let size = page.bounds(for: .mediaBox).size
            return page.thumbnail(of: CGSize(width: max(size.width * 2, 1200), height: max(size.height * 2, 1600)), for: .mediaBox).cgImage
        }
        return try recognizeText(in: images)
    }
}
