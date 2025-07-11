document.addEventListener('DOMContentLoaded', function() {
    const portInput = document.getElementById('port');
    const saveButton = document.getElementById('save');
    const statusDiv = document.getElementById('status');

    // 保存された設定を読み込む
    chrome.storage.sync.get(['port'], function(result) {
        if (result.port) {
            portInput.value = result.port;
        }
    });

    // 保存ボタンのクリックイベント
    saveButton.addEventListener('click', function() {
        const port = parseInt(portInput.value);
        
        // バリデーション
        if (isNaN(port) || port < 1 || port > 65535) {
            showStatus('ポート番号は1から65535の間で入力してください。', 'error');
            return;
        }

        // 設定を保存
        chrome.storage.sync.set({
            port: port
        }, function() {
            showStatus('設定が保存されました。', 'success');
        });
    });

    // ステータスメッセージを表示
    function showStatus(message, type) {
        statusDiv.textContent = message;
        statusDiv.className = `status ${type}`;
        statusDiv.style.display = 'block';
        
        // 3秒後に非表示
        setTimeout(function() {
            statusDiv.style.display = 'none';
        }, 3000);
    }
});