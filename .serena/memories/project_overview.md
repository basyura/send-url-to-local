# Project Overview

## Purpose
This is a Chrome extension called "Send URL to Local" that sends the currently active tab's URL to a configurable local port via HTTP POST request.

## Tech Stack
- Pure vanilla JavaScript (no frameworks)
- Chrome Extension API (Manifest V3)
- HTML/CSS for options page
- No build system, package manager, or external dependencies

## Architecture
- **background.js**: Service worker handling extension button clicks and URL sending
- **content.js**: Content script for displaying error messages to users
- **options.js**: Options page logic for port configuration
- **options.html**: Settings UI for configuring the target port
- **manifest.json**: Chrome extension configuration (Manifest V3)

## Key Features
- Configurable port number (stored in Chrome sync storage)
- Error handling with user notification
- Japanese UI text and comments
- Console logging for debugging