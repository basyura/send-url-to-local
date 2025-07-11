chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'send-failed' && message.url) {
        alert(`URL の送信に失敗しました: ${message.url} (ポート: ${message.port})`);
    }
});