# Guide to Push This Project to GitHub

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `university-website` (or your preferred name)
   - **Description**: "A full-stack university website with intentional bugs for open source contributions"
   - **Public**: Select this to allow others to contribute
   - **Initialize repository**: Leave unchecked (we already have commits)
5. Click **"Create repository"**

## Step 2: Add Remote and Push

After creating the repository on GitHub, you'll see instructions. Use these commands:

```bash
cd /home/kazuha/repowithwrrors

# Add the remote repository (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/university-website.git

# Rename branch to 'main' if desired
git branch -M main

# Push to GitHub
git push -u origin main

# Note: You may need to authenticate with a Personal Access Token
# See: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
```

## Step 3: Verify on GitHub

Visit your repository URL: `https://github.com/YOUR_USERNAME/university-website`

You should see:
- ✅ All project files
- ✅ Proper folder structure
- ✅ README.md displaying correctly
- ✅ Commit history

## Step 4: Allow Contributions

1. Go to **Settings** tab on your GitHub repository
2. Under **Manage access**, ensure the repository is public
3. Create GitHub Issues for the bugs in `docs/ISSUES.md`:
   - Click **Issues** tab
   - Click **New Issue** for each major bug category
   - Use the labels/tags provided by GitHub

## Step 5: Invite Contributors

To make this truly open source:
- Share the repository link
- Post in developer communities (Reddit, DEV.to, HackerNews)
- Add to platforms like:
  - [First Timers Only](https://www.firsttimersonly.com/)
  - [Good First Issue](https://goodfirstissue.dev/)
  - [Code Triage](https://www.codetriage.com/)

## Command Line Summary

```bash
# Quick reference for all commands
cd /home/kazuha/repowithwrrors
git remote add origin https://github.com/YOUR_USERNAME/university-website.git
git branch -M main
git push -u origin main
```

## Issues Already Documented

The project includes a comprehensive issues list in **docs/ISSUES.md** that covers:
- Backend API fixes
- Frontend component fixes
- CSS/styling improvements
- Missing features
- Testing needs
- Documentation tasks

Contributors can start working on these immediately!

## After Initial Push

To pull the latest changes locally:
```bash
git pull origin main
```

To merge contributor PRs:
1. Use GitHub's UI to review and merge PRs
2. Delete merged branches to keep repository clean

## Additional Resources

- [GitHub Help - Creating a Repository](https://docs.github.com/en/get-started/quickstart/create-a-repo)
- [GitHub Help - Pushing Code](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository)
- [Open Source Contributing Guide](https://opensource.guide/how-to-contribute/)
