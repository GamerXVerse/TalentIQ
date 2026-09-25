import AVFoundation
import Foundation
import Observation

@MainActor @Observable
final class AudioRecordingService: NSObject, AVAudioRecorderDelegate {
    enum State: Equatable { case idle, recording, failed(String) }
    private(set) var state: State = .idle
    private(set) var elapsed: TimeInterval = 0
    private var recorder: AVAudioRecorder?
    private var ticker: Task<Void, Never>?
    private var startDate: Date?
    @ObservationIgnored nonisolated(unsafe) private var interruptionObserver: NSObjectProtocol?

    override init() {
        super.init()
        interruptionObserver = NotificationCenter.default.addObserver(forName: AVAudioSession.interruptionNotification, object: nil, queue: .main) { [weak self] _ in
            Task { @MainActor in self?.interrupt() }
        }
    }
    deinit { if let interruptionObserver { NotificationCenter.default.removeObserver(interruptionObserver) } }

    func start() async throws {
        let granted = await AVAudioApplication.requestRecordPermission()
        guard granted else { throw AudioError.microphoneDenied }
        let session = AVAudioSession.sharedInstance()
        try session.setCategory(.playAndRecord, mode: .default, options: [.defaultToSpeaker])
        try session.setActive(true)
        let directory = URL.documentsDirectory.appending(path: "Interviews", directoryHint: .isDirectory)
        try FileManager.default.createDirectory(at: directory, withIntermediateDirectories: true)
        let url = directory.appending(path: UUID().uuidString + ".m4a")
        let settings: [String: Any] = [AVFormatIDKey: Int(kAudioFormatMPEG4AAC), AVSampleRateKey: 44_100, AVNumberOfChannelsKey: 1, AVEncoderAudioQualityKey: AVAudioQuality.high.rawValue]
        let recorder = try AVAudioRecorder(url: url, settings: settings)
        recorder.delegate = self
        guard recorder.record() else { throw AudioError.couldNotStart }
        self.recorder = recorder
        startDate = .now; elapsed = 0; state = .recording
        ticker = Task { [weak self] in
            while !Task.isCancelled {
                try? await Task.sleep(for: .seconds(0.25))
                guard let self, let startDate = self.startDate else { return }
                self.elapsed = Date().timeIntervalSince(startDate)
            }
        }
    }
    func stop() throws -> InterviewRecording {
        guard let recorder, let startDate else { throw AudioError.notRecording }
        recorder.stop(); ticker?.cancel(); ticker = nil
        self.recorder = nil; self.startDate = nil; state = .idle
        try? AVAudioSession.sharedInstance().setActive(false)
        return InterviewRecording(localURL: recorder.url, duration: Date().timeIntervalSince(startDate), recordedAt: startDate)
    }
    private func interrupt() {
        if recorder != nil { _ = try? stop(); state = .failed("Recording was interrupted. Please record again.") }
    }
    nonisolated func audioRecorderEncodeErrorDidOccur(_ recorder: AVAudioRecorder, error: Error?) {
        Task { @MainActor in self.interrupt() }
    }
}
enum AudioError: LocalizedError {
    case microphoneDenied, couldNotStart, notRecording
    var errorDescription: String? {
        switch self {
        case .microphoneDenied: "Microphone access is off. Enable it in Settings to record interviews."
        case .couldNotStart: "Could not start recording."
        case .notRecording: "There is no active recording."
        }
    }
}
