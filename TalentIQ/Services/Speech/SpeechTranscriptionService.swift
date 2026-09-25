import Foundation
import Speech

protocol SpeechTranscriptionService: Sendable {
    func transcribe(url: URL) async throws -> InterviewTranscript
}
struct AppleSpeechTranscriptionService: SpeechTranscriptionService {
    func transcribe(url: URL) async throws -> InterviewTranscript {
        let status = await withCheckedContinuation { continuation in
            SFSpeechRecognizer.requestAuthorization { continuation.resume(returning: $0) }
        }
        guard status == .authorized else { throw TranscriptionError.permissionDenied }
        guard let recognizer = SFSpeechRecognizer(), recognizer.isAvailable else { throw TranscriptionError.unavailable }
        let request = SFSpeechURLRecognitionRequest(url: url)
        request.shouldReportPartialResults = false
        let text: String = try await withCheckedThrowingContinuation { continuation in
            var finished = false
            _ = recognizer.recognitionTask(with: request) { result, error in
                guard !finished else { return }
                if let error { finished = true; continuation.resume(throwing: error) }
                else if let result, result.isFinal {
                    finished = true
                    continuation.resume(returning: result.bestTranscription.formattedString)
                }
            }
        }
        return InterviewTranscript(text: text, createdAt: .now)
    }
}
enum TranscriptionError: LocalizedError {
    case permissionDenied, unavailable
    var errorDescription: String? {
        switch self {
        case .permissionDenied: "Speech recognition access is off. The recording was saved; you can write notes manually."
        case .unavailable: "Speech recognition is unavailable. The recording was saved; you can write notes manually."
        }
    }
}
