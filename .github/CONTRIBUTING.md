# Contributing to Code Execution Platform

We love your input! We want to make contributing to Code Execution Platform as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## We Develop with Github
We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## We Use [Github Flow](https://guides.github.com/introduction/flow/index.html)
We use GitHub Flow. So all code changes happen through Pull Requests.

## Pull Requests
1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Any contributions you make will be under the MIT Software License
In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using Github's [issue tracker](https://github.com/your-username/code-execution-platform/issues)
We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/your-username/code-execution-platform/issues/new); it's that easy!

## Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## License
By contributing, you agree that your contributions will be licensed under its MIT License.

## References
This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/a9316a723f9e918afde44dea68b5f9f39b7d9b00/CONTRIBUTING.md).

## Development Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Getting Started
1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/code-execution-platform.git
   cd code-execution-platform
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser to `http://localhost:3000`

### Code Style
- Use ESLint for code linting
- Follow the existing code style and formatting
- Use meaningful commit messages
- Write clear, descriptive pull request descriptions

### Testing
- Run tests before submitting a pull request
- Add tests for new features
- Ensure all existing tests pass

### Commit Message Format
We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): description

[optional body]

[optional footer(s)]
```

Types:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

### Branch Naming
- Feature branches: `feature/description`
- Bug fixes: `fix/description`
- Documentation: `docs/description`
- Hotfixes: `hotfix/description`

## Questions?
Feel free to open an issue for any questions you might have about contributing!
