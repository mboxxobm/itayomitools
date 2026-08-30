import Cocoa
import WebKit
import UniformTypeIdentifiers

final class AppDelegate: NSObject, NSApplicationDelegate, WKUIDelegate {
    private var window: NSWindow!
    private var webView: WKWebView!

    func applicationDidFinishLaunching(_ notification: Notification) {
        let configuration = WKWebViewConfiguration()
        webView = WKWebView(frame: .zero, configuration: configuration)
        webView.uiDelegate = self

        window = NSWindow(
            contentRect: NSRect(x: 0, y: 0, width: 1500, height: 980),
            styleMask: [.titled, .closable, .miniaturizable, .resizable],
            backing: .buffered,
            defer: false
        )
        window.title = "板読みTools | GZIPリプレイAPP"
        window.contentView = webView
        window.center()
        window.makeKeyAndOrderFront(nil)
        NSApp.activate(ignoringOtherApps: true)

        guard let pageURL = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "BoardReadTools") else {
            showError("APP内のindex.htmlが見つかりません。ビルドをやり直してください。")
            return
        }
        let resourceRoot = pageURL.deletingLastPathComponent()
        webView.loadFileURL(pageURL, allowingReadAccessTo: resourceRoot)
    }

    func webView(
        _ webView: WKWebView,
        runOpenPanelWith parameters: WKOpenPanelParameters,
        initiatedByFrame frame: WKFrameInfo,
        completionHandler: @escaping ([URL]?) -> Void
    ) {
        let panel = NSOpenPanel()
        panel.canChooseFiles = true
        panel.canChooseDirectories = false
        panel.allowsMultipleSelection = parameters.allowsMultipleSelection
        // macOSの複合拡張子判定に合わせて、GZIP/JSONL/CSVを明示的に許可する。
        // 実際のGZIP/JSONL/CSV判定はWeb UI側で行う。
        panel.allowedFileTypes = ["gz", "jsonl", "txt", "csv"]
        panel.allowsOtherFileTypes = true
        panel.prompt = "読み込む"
        panel.begin { response in
            completionHandler(response == .OK ? panel.urls : nil)
        }
    }

    private func showError(_ message: String) {
        let alert = NSAlert()
        alert.messageText = "板読みToolsを起動できません"
        alert.informativeText = message
        alert.alertStyle = .critical
        alert.runModal()
    }
}

let application = NSApplication.shared
let delegate = AppDelegate()
application.delegate = delegate
application.setActivationPolicy(.regular)
application.run()
