# Contributing to @flywen/prettier-config

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Process](#development-process)
- [Coding Standards](#coding-standards)
- [Commit Messages](#commit-messages)
- [Release Process](#release-process)

## 📜 Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please read it to understand what behavior is expected.

## 🤝 How Can I Contribute?

### Reporting Bugs

- Check [existing issues](https://github.com/goatail/prettier-config/issues) to avoid duplicates
- Use the bug report template
- Include detailed steps to reproduce
- Provide sample code that demonstrates the issue

### Suggesting Enhancements

- Check [existing issues](https://github.com/goatail/prettier-config/issues) for similar suggestions
- Use the feature request template
- Explain why this enhancement would be useful

### Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting (`npm run format`)
5. Commit your changes
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 🛠️ Development Process

### Prerequisites

- Node.js >= 18.0.0
- npm, yarn, or pnpm

### Setup

```bash
# Clone your fork
git clone https://github.com/goatail/prettier-config.git
cd prettier-config

# Install dependencies
npm install

# Build the project
npm run build
```

### Making Changes

1. **Understand the codebase**
   - `src/index.ts` - Main Prettier configuration
   - `tsconfig.json` - TypeScript configuration
   - `package.json` - Package metadata and scripts

2. **Make your changes**
   - Follow the coding standards
   - Keep changes focused and atomic
   - Add/update tests if applicable

3. **Test your changes**

```bash
# Format code
npm run format

# Build the project
npm run build

# Test in a local project
npm link
# In your test project: npm link @flywen/prettier-config
```

### Testing

Since this is a configuration package, testing involves:

1. **Manual testing**
   - Create a test project
   - Install the config locally
   - Verify formatting behavior

2. **Integration testing**
   - Test with different file types (.ts, .tsx, .js, .jsx, .vue)
   - Verify all configuration options work as expected

## 📏 Coding Standards

### TypeScript

- Use TypeScript for all source files
- Follow the project's `tsconfig.json` settings
- Use strict type checking
- Avoid `any` type when possible

### Code Style

This project uses itself for formatting. Run:

```bash
npm run format
```

Before committing to ensure consistent style.

### Documentation

- Update `README.md` if adding new features
- Add JSDoc comments for exported functions/types
- Update `CHANGELOG.md` for notable changes

## 📝 Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools

### Examples

```bash
feat: add support for Vue 3 script setup

fix(config): correct trailing comma behavior in JSX

docs: update README with new configuration options

chore: update dependencies to latest versions
```

### Breaking Changes

If your PR contains breaking changes, add `BREAKING CHANGE:` in the commit body:

```bash
feat: change default print width

BREAKING CHANGE: printWidth is now 100 instead of 80
```

## 🚀 Release Process

### For Maintainers

1. **Update version**

   ```bash
   npm version [patch|minor|major]
   ```

2. **Update CHANGELOG.md**
   - Add entry for new version
   - List all notable changes

3. **Build and publish**

   ```bash
   npm run build
   npm publish
   ```

4. **Create GitHub Release**
   - Tag the release
   - Copy CHANGELOG entry to release notes

## ❓ Questions?

Feel free to open an issue with the `question` label or reach out to maintainers.

## 🙏 Recognition

Contributors will be recognized in release notes and the project README.

Thank you for contributing to @flywen/prettier-config! 🎉
