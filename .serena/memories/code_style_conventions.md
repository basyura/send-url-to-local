# Code Style and Conventions

## JavaScript Style
- **Variable naming**: camelCase (e.g., `portInput`, `saveButton`, `statusDiv`)
- **Functions**: Use anonymous functions for event handlers and callbacks
- **Async/await**: Modern promise handling with async/await syntax
- **Comments**: Japanese comments explaining functionality
- **Console logging**: Extensive use of `console.log()` and `console.error()` for debugging
- **Error handling**: Try-catch blocks for network requests

## HTML/CSS Style
- **Indentation**: 4 spaces for HTML
- **CSS**: Embedded styles in HTML files
- **UI text**: Japanese language for user-facing text
- **Form elements**: Semantic HTML with proper labels and IDs

## Chrome Extension Patterns
- **Manifest V3**: Uses service workers instead of background pages
- **Storage**: Uses `chrome.storage.sync` for cross-device settings sync
- **Messaging**: Chrome runtime messaging between content and background scripts
- **Permissions**: Minimal required permissions (tabs, scripting, storage, host_permissions)

## File Organization
- Flat file structure in root directory
- No build or source directories
- Single responsibility per file (background, content, options)