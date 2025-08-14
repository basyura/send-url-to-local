# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Chrome extension that sends the currently active tab's URL to a configurable local port via HTTP POST request. The extension is written in pure vanilla JavaScript using Chrome Extension API Manifest V3.

## Architecture

- **background.js**: Service worker that handles extension icon clicks and sends URLs to local server
- **content.js**: Content script that displays error messages to users when URL sending fails
- **options.js**: Handles the settings page logic for configuring the target port
- **options.html**: Settings UI where users configure the local server port
- **manifest.json**: Chrome extension configuration (Manifest V3)

## Development Workflow

### No Build System
This project has no package.json, build tools, or package manager. Files are edited directly and loaded into Chrome for testing.

### Testing
1. Load extension in Chrome via `chrome://extensions/` (Developer mode > Load unpacked)
2. Click extension icon to test URL sending
3. Check browser console for debug logs
4. Verify POST requests reach the configured local server port
5. Test options page for port configuration

### Code Style
- Use Japanese comments and UI text for consistency
- Follow camelCase naming for JavaScript variables
- Use async/await for asynchronous operations
- Include console.log statements for debugging
- Maintain Chrome Extension Manifest V3 patterns

### Commit Messages
- Use English only for commit messages
- Follow existing commit message patterns in the repository

### Windows Commands
- `dir` - List files (no `ls` available)
- `type filename` - View file contents (no `cat` available)
- `findstr "pattern" *.js` - Search in files (no `grep` available)

## Key Implementation Details

- Port configuration stored in `chrome.storage.sync` for cross-device sync
- Error handling with user notifications via content script messaging
- Default port value is -1, user must configure valid port (1-65535)
- Uses fetch API for HTTP POST requests to `http://localhost:{port}`

## Important Notes

- All user-facing text should be in Japanese
- Maintain existing console logging patterns for debugging
- Follow Chrome extension security best practices
- Test both success and error scenarios when making changes