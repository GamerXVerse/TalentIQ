import Foundation
import PDFKit

enum ResumeTextExtractionError: LocalizedError {
    case unsupportedFormat
    case unreadableDocument
    case noText

    var errorDescription: String? {
        switch self {
        case .unsupportedFormat: "This resume format is not supported. Try a PDF, text, or RTF file."
        case .unreadableDocument: "We couldn't open that resume. Try choosing the file again."
        case .noText: "No readable text was found in this resume."
        }
    }
}

struct ResumeTextExtractor: Sendable {
    func extractText(from url: URL) throws -> String {
        switch url.pathExtension.lowercased() {
        case "pdf":
            guard let document = PDFDocument(url: url) else { throw ResumeTextExtractionError.unreadableDocument }
            let text = (0..<document.pageCount).compactMap { document.page(at: $0)?.string }.joined(separator: "\n")
            let normalized = Self.normalizedText(text)
            guard !normalized.isEmpty else { throw ResumeTextExtractionError.noText }
            return normalized
        case "txt", "text", "md":
            guard let text = try? String(contentsOf: url, encoding: .utf8) else { throw ResumeTextExtractionError.unreadableDocument }
            let normalized = Self.normalizedText(text)
            guard !normalized.isEmpty else { throw ResumeTextExtractionError.noText }
            return normalized
        case "rtf":
            guard let data = try? Data(contentsOf: url),
                  let attributed = try? NSAttributedString(data: data, options: [.documentType: NSAttributedString.DocumentType.rtf], documentAttributes: nil)
            else { throw ResumeTextExtractionError.unreadableDocument }
            let normalized = Self.normalizedText(attributed.string)
            guard !normalized.isEmpty else { throw ResumeTextExtractionError.noText }
            return normalized
        default:
            throw ResumeTextExtractionError.unsupportedFormat
        }
    }

    static func normalizedText(_ text: String) -> String {
        text
            .replacingOccurrences(of: "\r\n", with: "\n")
            .replacingOccurrences(of: "\r", with: "\n")
            .split(separator: "\n", omittingEmptySubsequences: false)
            .map { $0.replacingOccurrences(of: #"\s+"#, with: " ", options: .regularExpression).trimmingCharacters(in: .whitespaces) }
            .joined(separator: "\n")
            .split(separator: "\n", omittingEmptySubsequences: true)
            .joined(separator: "\n")
            .trimmingCharacters(in: .whitespacesAndNewlines)
    }
}
