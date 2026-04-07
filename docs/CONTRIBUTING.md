# Contributing to University Website

We welcome contributions from developers of all skill levels! This document provides guidelines for contributing to the project.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** to your local machine
   ```bash
   git clone https://github.com/YOUR_USERNAME/university-website.git
   cd university-website
   ```
3. **Create a new branch** for your feature or bugfix
   ```bash
   git checkout -b fix/issue-description
   ```
4. **Install dependencies**
   ```bash
   npm install
   cd backend && npm install
   cd ../frontend && npm install
   ```

## Development Workflow

### Backend
- Navigate to the `backend/` directory
- Copy `.env.example` to `.env` and fill in required values
- Run `npm run dev` to start the development server
- Make your changes and test them

### Frontend
- Navigate to the `frontend/` directory
- Run `npm start` to start the development server
- Make your changes and check them in the browser

## Types of Contributions

### Bug Fixes
- Look for issues labeled `bug` or `help-wanted`
- Fix the issue and add a test if possible
- Reference the issue number in your commit message

### Feature Development
- Check the issue tracker for feature requests
- Comment on the issue to let others know you're working on it
- Follow the existing code style

### Documentation
- Improve README files
- Add inline code comments
- Create tutorials or guides

## Code Style

- Use consistent indentation (2 spaces)
- Use meaningful variable and function names
- Add comments for complex logic
- Follow the existing code patterns

## Submitting Changes

1. **Commit your changes**
   ```bash
   git commit -m "Fix: Describe what you fixed"
   ```
2. **Push to your fork**
   ```bash
   git push origin fix/issue-description
   ```
3. **Create a Pull Request** on GitHub
   - Provide a clear description of your changes
   - Reference any related issues
   - Include screenshots if UI changes

## Testing

- Test your changes thoroughly before submitting a PR
- Ensure the application runs without errors
- Check for console errors and warnings

## Questions?

- Open an issue to ask questions
- Comment on existing issues for clarification
- Check the documentation

Happy coding! 🚀
