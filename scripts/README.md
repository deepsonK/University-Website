# Scripts Directory

This directory contains useful scripts for managing the project.

## create-issues.sh

Automatically creates all GitHub Issues from the ISSUES.md file using GitHub CLI.

### Prerequisites

1. **GitHub CLI installed:**
   ```bash
   # macOS
   brew install gh
   
   # Linux (apt)
   sudo apt install gh
   
   # Linux (snap)
   sudo snap install gh
   
   # Windows (choco)
   choco install gh
   ```

2. **Authenticated with GitHub:**
   ```bash
   gh auth login
   ```
   
   Follow the prompts to authenticate

3. **Code pushed to GitHub:**
   - The repository must exist on GitHub
   - You must be in sync with origin (all commits pushed)

### Usage

1. **Make sure you're in the repository root:**
   ```bash
   cd /home/kazuha/repowithwrrors
   ```

2. **Run the script:**
   ```bash
   bash scripts/create-issues.sh
   ```

   Or if you made it executable:
   ```bash
   ./scripts/create-issues.sh
   ```

3. **Watch the magic happen!** 🎉
   - The script will create 30+ Issues automatically
   - Each issue will have:
     - Descriptive title
     - Detailed body with examples and steps to fix
     - Appropriate labels (bug, feature, easy, medium, hard, frontend, backend, etc.)
     - Links to resources when applicable

### What Gets Created

The script creates issues organized into categories:

- **Backend Issues** (Critical bugs, routes, models, auth, config)
- **Frontend Issues** (React bugs, components, API integration, state management)
- **Styling Issues** (CSS improvements, responsive design, accessibility)

Each issue includes:
- ✅ Clear title
- ✅ Detailed description
- ✅ File names and line numbers
- ✅ Current vs. expected code examples
- ✅ Difficulty level (Easy/Medium/Hard)
- ✅ Helpful labels for filtering

### Viewing Created Issues

After running the script:

1. **On GitHub:**
   - Go to your repository
   - Click the Issues tab
   - You should see all newly created issues

2. **From command line:**
   ```bash
   gh issue list --repo YOUR_USERNAME/university-website
   ```

### Troubleshooting

**Error: "GitHub CLI (gh) is not installed"**
- Install gh from https://cli.github.com/

**Error: "Not authenticated with GitHub CLI"**
- Run: `gh auth login`
- Follow the authentication prompts

**Error: "Repository not found"**
- Make sure your code is pushed to GitHub
- Verify you're in the correct directory

**Only some issues created?**
- Check your GitHub API rate limit: `gh api rate_limit`
- You have 5,000 requests per hour

### Manual Issue Creation

If you prefer to create issues manually:

1. Go to https://github.com/YOUR_USERNAME/university-website/issues
2. Click "New issue"
3. Copy issue titles and descriptions from [docs/ISSUES.md](../docs/ISSUES.md)
4. Add appropriate labels

### Script Details

The script:
- ✅ Checks for GitHub CLI installation
- ✅ Verifies GitHub authentication
- ✅ Gets your repository name
- ✅ Creates issues with proper formatting
- ✅ Adds relevant labels automatically
- ✅ Includes code examples and difficulty levels
- ✅ Provides helpful resources and links
- ✅ Shows progress as it creates issues

Run time: ~1-2 minutes for all 30+ issues

### Support

If you have questions or the script fails, check:
- [GitHub CLI Documentation](https://cli.github.com/manual)
- [docs/GITHUB_PUSH_GUIDE.md](../docs/GITHUB_PUSH_GUIDE.md)
- [docs/CONTRIBUTING.md](../docs/CONTRIBUTING.md)
