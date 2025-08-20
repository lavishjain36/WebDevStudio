# GitHub Setup Guide for Code Execution Platform

This guide will help you set up your Code Execution Platform project on GitHub with all the necessary configurations.

## 🚀 Quick Start

### 1. Initialize Git Repository
```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "feat: initial commit - Code Execution Platform"
```

### 2. Create GitHub Repository
1. Go to [GitHub](https://github.com)
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it: `code-execution-platform`
5. Make it **Public** (recommended for open source)
6. **Don't** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### 3. Connect and Push to GitHub
```bash
# Add remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/code-execution-platform.git

# Set main as default branch
git branch -M main

# Push to GitHub
git push -u origin main
```

## 🔧 GitHub Features Setup

### 1. GitHub Actions (CI/CD)
The project includes automated workflows that will run automatically:

- **CI Pipeline**: Runs on every push and pull request
- **Deploy Pipeline**: Deploys to Netlify on main branch pushes

**To enable:**
- Go to your repository → Settings → Actions → General
- Ensure "Allow all actions and reusable workflows" is selected
- Save changes

### 2. Dependabot
Automatically creates pull requests for dependency updates:

- **Location**: `.github/dependabot.yml`
- **Schedule**: Weekly on Mondays
- **Scope**: npm dependencies

**To enable:**
- Go to your repository → Settings → Code security and analysis
- Enable "Dependency graph" and "Dependabot alerts"

### 3. Issue Templates
Pre-configured templates for bug reports and feature requests:

- **Location**: `.github/ISSUE_TEMPLATE/`
- **Templates**: Bug report, Feature request
- **Usage**: Automatically available when creating new issues

### 4. Pull Request Template
Standardized format for pull requests:

- **Location**: `.github/pull_request_template.md`
- **Usage**: Automatically populated when creating PRs

## 🌐 Deployment Setup

### Netlify Deployment
1. **Connect to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub and select your repository

2. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18` (or your preferred version)

3. **Environment Variables** (if needed):
   - Go to Site settings → Environment variables
   - Add any required environment variables

4. **Custom Domain** (optional):
   - Go to Site settings → Domain management
   - Add your custom domain

### Vercel Deployment (Alternative)
1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts** to connect your GitHub repository

## 🔒 Security Setup

### 1. Repository Secrets
For GitHub Actions deployment, you'll need to add secrets:

1. Go to your repository → Settings → Secrets and variables → Actions
2. Add the following secrets:
   - `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token
   - `NETLIFY_SITE_ID`: Your Netlify site ID

### 2. Branch Protection
Protect your main branch:

1. Go to Settings → Branches
2. Add rule for `main` branch
3. Enable:
   - Require pull request reviews
   - Require status checks to pass
   - Require branches to be up to date

### 3. Security Policy
The project includes a security policy template:

- **Location**: `.github/SECURITY.md` (create if needed)
- **Purpose**: Guidelines for reporting security vulnerabilities

## 📊 Repository Insights

### 1. Enable Insights
- Go to your repository → Insights
- Available features:
  - **Traffic**: Page views and clones
  - **Contributors**: Code contribution statistics
  - **Commits**: Commit activity over time
  - **Code frequency**: Lines added/removed
  - **Dependency graph**: Package dependencies

### 2. Community Health
Monitor your repository's health:

- **Code of Conduct**: Already included
- **Contributing Guidelines**: Already included
- **Issue Templates**: Already included
- **Pull Request Template**: Already included
- **README**: Already included
- **License**: MIT License included

## 🎯 Best Practices

### 1. Commit Messages
Use conventional commit format:
```bash
feat: add new feature
fix: resolve bug
docs: update documentation
style: format code
refactor: restructure code
test: add tests
chore: maintenance tasks
```

### 2. Branch Strategy
- `main`: Production-ready code
- `develop`: Development branch (optional)
- `feature/*`: New features
- `fix/*`: Bug fixes
- `hotfix/*`: Critical fixes

### 3. Pull Request Process
1. Create feature branch
2. Make changes
3. Write tests
4. Update documentation
5. Create pull request
6. Request review
7. Merge after approval

## 🚨 Troubleshooting

### Common Issues

1. **GitHub Actions not running**:
   - Check repository settings → Actions → General
   - Ensure workflows are enabled

2. **Dependabot not working**:
   - Verify dependency graph is enabled
   - Check `.github/dependabot.yml` syntax

3. **Deployment failing**:
   - Check build logs in Netlify/Vercel
   - Verify environment variables
   - Ensure all dependencies are in `package.json`

4. **Permission issues**:
   - Check repository permissions
   - Verify GitHub token permissions

## 📞 Support

If you encounter issues:

1. Check the [GitHub documentation](https://docs.github.com/)
2. Review the [project README](./README.md)
3. Open an issue in the repository
4. Check existing issues for similar problems

## 🎉 Next Steps

After setup:

1. **Customize the project**:
   - Update `package.json` with your information
   - Modify `.github/FUNDING.yml` with your funding links
   - Update contact information in templates

2. **Add collaborators**:
   - Go to Settings → Collaborators and teams
   - Invite team members

3. **Set up monitoring**:
   - Enable GitHub Insights
   - Set up deployment monitoring
   - Configure notifications

4. **Start developing**:
   - Create your first feature branch
   - Make changes and create a pull request
   - Follow the contribution guidelines

---

**Happy coding! 🚀**

Your Code Execution Platform is now ready for collaborative development and deployment!
