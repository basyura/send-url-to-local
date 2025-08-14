# Task Completion Checklist

## After Making Changes
Since this project has no build system, testing framework, or linting tools, the completion process is minimal:

### Manual Testing Steps
1. **Reload Extension**: Go to `chrome://extensions/` and click the reload button for the extension
2. **Test Functionality**: 
   - Click the extension icon on a webpage
   - Check browser console for log messages
   - Verify the local server receives the POST request
   - Test the options page if settings were changed
3. **Error Testing**: Test error scenarios (invalid port, server not running)

### Code Review Checklist
- Ensure Japanese comments are maintained for consistency
- Check that console.log statements are appropriate
- Verify Chrome extension APIs are used correctly
- Confirm error handling is in place
- Validate that the manifest.json is correct if modified

### Git Operations
- Use standard git commands for version control
- Follow existing commit message style (in Japanese)
- Do not include CLAUDE information in commit messages (per user instruction)

## No Additional Commands Required
Unlike typical web projects, there are no:
- Build commands to run
- Test suites to execute  
- Linting tools to check
- Formatting tools to apply