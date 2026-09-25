import CoreGraphics
import Foundation

struct ResumeDocumentProcessor: Sendable {
    private let textExtractor = ResumeTextExtractor()
    private let ocrService = ResumeOCRService()

    func processDigitalResume(from sourceURL: URL) async throws -> ResumeArtifact {
        let destination = try copyToSandbox(sourceURL)
        var text: String?
        do {
            text = try textExtractor.extractText(from: destination)
        } catch ResumeTextExtractionError.noText {
            text = nil
        }

        if text == nil, destination.pathExtension.lowercased() == "pdf" {
            let url = destination
            text = try await Task.detached(priority: .userInitiated) { [ocrService] in
                try ocrService.recognizeText(inPDF: url)
            }.value
        }

        guard let text, !text.isEmpty else { throw ResumeOCRError.noText }
        return ResumeArtifact(source: .digitalFile, fileName: sourceURL.lastPathComponent, localURL: destination, extractedText: text)
    }

    func processPaperResume(images: [CGImage], pdfData: Data) async throws -> ResumeArtifact {
        let destination = try savePaperPDF(pdfData)
        let ocr = self.ocrService
        let text = try await Task.detached(priority: .userInitiated) {
            try ocr.recognizeText(in: images)
        }.value
        return ResumeArtifact(source: .paperScan, fileName: "Paper Resume.pdf", localURL: destination, extractedText: text)
    }

    private func copyToSandbox(_ sourceURL: URL) throws -> URL {
        let hasAccess = sourceURL.startAccessingSecurityScopedResource()
        defer {
            if hasAccess { sourceURL.stopAccessingSecurityScopedResource() }
        }

        let directory = try resumeDirectory()
        let originalName = sourceURL.lastPathComponent.isEmpty ? "Resume" : sourceURL.lastPathComponent
        let destination = directory.appendingPathComponent(UUID().uuidString + "-" + originalName)
        do {
            try FileManager.default.copyItem(at: sourceURL, to: destination)
        } catch {
            throw ResumeTextExtractionError.unreadableDocument
        }
        return destination
    }

    private func savePaperPDF(_ data: Data) throws -> URL {
        let directory = try resumeDirectory()
        let destination = directory.appendingPathComponent(UUID().uuidString + "-Paper-Resume.pdf")
        do {
            try data.write(to: destination, options: .atomic)
            return destination
        } catch {
            throw ResumeTextExtractionError.unreadableDocument
        }
    }

    private func resumeDirectory() throws -> URL {
        guard let documents = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first else {
            throw ResumeTextExtractionError.unreadableDocument
        }
        let directory = documents.appendingPathComponent("TalentIQResumes", isDirectory: true)
        try FileManager.default.createDirectory(at: directory, withIntermediateDirectories: true)
        return directory
    }
}
