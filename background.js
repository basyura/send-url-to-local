chrome.action.onClicked.addListener(async (tab) => {
    console.log("Action clicked, current tab:", tab);
    if (!tab.url) return;

    // 設定からポート番号を取得
    const result = await chrome.storage.sync.get(['port']);
    const port = result.port || -1; // デフォルトは-1

    try {
        console.log("send : ", tab.url, "to port:", port);
        const response = await fetch(`http://localhost:${port}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url: tab.url })
        });

        console.log("Sent URL:", tab.url, "Response status:", response.status);
    } catch (err) {
        console.error("Failed to send URL:", err);
        chrome.tabs.sendMessage(tab.id, { type: "send-failed", url: tab.url });
    }
});