# SEND URL TO LOCAL

## 概要

この Chrome 拡張は、現在開いているタブの URL をローカルの任意のポートに送信します。
拡張機能のボタンをクリックすると、アクティブなタブの URL がローカルサーバーに POST リクエストとして送られます。

## 機能

- ワンクリックで現在のタブの URL をローカルサーバーに送信
- 送信先ポート番号の設定（1-65535）
- 送信失敗時のエラー通知
- Chrome の同期機能による設定の自動同期

## インストール方法

1. このリポジトリをクローンまたはダウンロード
2. Chrome で `chrome://extensions/` を開く
3. 右上の「デベロッパーモード」を有効にする
4. 「パッケージ化されていない拡張機能を読み込む」をクリック
5. ダウンロードしたフォルダを選択

## 使用方法

### 初期設定

1. Chrome の拡張機能一覧で「Send URL to Local」の「詳細」をクリック
2. 「拡張機能のオプション」をクリック
3. 送信先のポート番号を設定（例：8080）
4. 「保存」をクリック

### URL送信

1. 送信したいページを開く
2. 拡張機能のアイコンをクリック
3. 設定したポートで受信サーバーが起動していれば、URL が送信される

## 送信データ形式

```json
{
  "url": "https://example.com"
}
```

POST リクエストが `http://localhost:{設定したポート}` に送信されます。

## 受信サーバーの例

### Node.js (Express)

```javascript
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.post('/', (req, res) => {
  console.log('受信したURL:', req.body.url);
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`サーバーがポート ${PORT} で起動しました`);
});
```

### Python (Flask)

```python
from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['POST'])
def receive_url():
    data = request.get_json()
    print(f"受信したURL: {data['url']}")
    return 'OK', 200

if __name__ == '__main__':
    app.run(port=8080)
```

## トラブルシューティング

### URLが送信されない

- ローカルサーバーが起動しているか確認
- ポート番号が正しく設定されているか確認
- ブラウザのコンソール（F12）でエラーメッセージを確認

### 設定が保存されない

- Chrome の同期機能が有効になっているか確認
- 拡張機能が正常にインストールされているか確認

## 開発者向け情報

### ファイル構成

- `manifest.json`: 拡張機能の設定
- `background.js`: URL送信処理のメインロジック
- `content.js`: エラーメッセージ表示用
- `options.html/js`: 設定ページ
- `icon.png`: 拡張機能のアイコン

### デバッグ方法

1. `chrome://extensions/` で「詳細」をクリック
2. 「バックグラウンドページを検査」でデベロッパーツールを開く
3. Console タブでログを確認
