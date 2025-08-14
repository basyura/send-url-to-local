# Send URL to Local

## Overview

This Chrome extension sends the URL of the currently active tab to any local port. When you click the extension button, the active tab's URL is sent as a POST request to a local server.

## Features

- Send current tab URL to local server with one click
- Configurable destination port number (1-65535)
- Error notification when sending fails
- Automatic settings sync via Chrome sync

## Installation

1. Clone or download this repository
2. Open `chrome://extensions/` in Chrome
3. Enable "Developer mode" in the top right
4. Click "Load unpacked"
5. Select the downloaded folder

## Usage

### Initial Setup

1. Go to Chrome extensions list and click "Details" for "Send URL to Local"
2. Click "Extension options"
3. Set the destination port number (e.g., 8080)
4. Click "Save"

### Sending URLs

1. Open the page you want to send
2. Click the extension icon
3. The URL will be sent if a receiving server is running on the configured port

## Data Format

```json
{
  "url": "https://example.com"
}
```

POST requests are sent to `http://localhost:{configured_port}`.

## Example Receiving Servers

### Node.js (Express)

```javascript
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.post('/', (req, res) => {
  console.log('Received URL:', req.body.url);
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Python (Flask)

```python
from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['POST'])
def receive_url():
    data = request.get_json()
    print(f"Received URL: {data['url']}")
    return 'OK', 200

if __name__ == '__main__':
    app.run(port=8080)
```

## Troubleshooting

### URL not being sent

- Check if local server is running
- Verify port number is correctly configured
- Check browser console (F12) for error messages

### Settings not saving

- Check if Chrome sync is enabled
- Verify extension is properly installed

## Developer Information

### File Structure

- `manifest.json`: Extension configuration
- `background.js`: Main logic for URL sending
- `content.js`: Error message display
- `options.html/js`: Settings page
- `icon.png`: Extension icon

### Debugging

1. Go to `chrome://extensions/` and click "Details"
2. Click "Inspect views: background page" to open developer tools
3. Check Console tab for logs
