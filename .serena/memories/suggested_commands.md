# Suggested Commands

## Development Commands
Since this is a simple Chrome extension with no build system, there are no npm/yarn commands.

### Loading Extension in Chrome
1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right
3. Click "Load unpacked" and select the project directory

### Git Commands (Windows)
- `git status` - Check current status
- `git add .` - Stage all changes
- `git commit -m "message"` - Commit changes
- `git log --oneline` - View recent commits

### Windows File System Commands
- `dir` - List directory contents (equivalent to `ls` on Unix)
- `type filename` - Display file contents (equivalent to `cat`)
- `findstr "pattern" *.js` - Search for text in files (equivalent to `grep`)

## Testing
No automated testing framework is set up. Testing is done manually by:
1. Loading the extension in Chrome
2. Clicking the extension icon
3. Checking browser console for logs
4. Verifying POST requests reach the target local server

## No Build/Lint/Format Commands
This project doesn't use any build tools, linting, or formatting tools. Files are edited directly and loaded into Chrome for testing.