### Git Branch and Commit Convention

This document outlines our recommended conventions for both Git branch names and commit messages, which integrate with OpenProject tasks. Following these conventions will contribute to a well-structured and organized development workflow, enhancing collaboration and codebase management.

# Git Branch Naming Format

Our Git branch naming format follows the pattern:

`<type>/<taskID-description>`

## Components

1. `<type>`: Represents the type of branch. Choose from the following options:
   - `feat`: For introducing new features or enhancements.
   - `bug`: For addressing bugs or issues.
   - `hotfix`: For urgent fixes that require immediate deployment.
   - `chore`: For general maintenance or non-code changes.
2. `<task-id>`: The ID of the corresponding OpenProject task or issue to indicate its relation.
3. `<description>`: A concise and descriptive phrase outlining the branch's purpose.

## Examples

- Feature: `feat/12-add-login-page`
- Bug Fix: `bug/456-fix-navigation-issue`
- Hotfix: `hotfix/789-update-configuration`
- Chore: `chore/987-update-readme`

# Commit Message Convention

For commit messages, we adopt the Angular commit message convention. Each commit message consists of a header, an optional body, and an optional footer, structured as follows:

```html
<type
  >(<scope
    >):
    <subject>
      <BLANK-LINE>
        <body>
          <BLANK-LINE>
            <footer></footer
          ></BLANK-LINE></body></BLANK-LINE></subject></scope
></type>
```

## Components

1. `<type>`: Describes the purpose of the commit. Choose from the following:
   - `feat`: New feature.
   - `fix`: Bug fix.
   - `chore`: General maintenance or non-code change.
   - `docs`: Documentation updates.
   - `style`: Code style changes (formatting, etc.).
   - `refactor`: Code refactoring.
   - `test`: Adding or modifying tests.
   - `perf`: Performance improvements.
2. `<scope>`: (Optional) Indicates the scope of the commit (e.g., module, component).
3. `<subject>`: A concise and clear description of the commit's purpose.
4. `<body>`: (Optional) Provides additional context and details about the changes.
5. `<footer>`: (Optional) Includes any relevant issue references or breaking change information.

## Examples

```
feat(2-auth): adding JWT authentication
- Added JWT authentication functionality
- Integrated JWT library for secure authentication
```

### Naming Conventions

- **Variables**: Use `camelCase` for variable names.
  - Example: `let userName = "John";`
- **Functions**: Use `camelCase` for function names.
  - Example: `function calculateTotal() { ... }`
- **Constants**: Use `UPPER_SNAKE_CASE` for constants.
  - Example: `const API_URL = "https://example.com";`
- **File Name**: Use `kebab-case` for files name.
  - Example: `user-profile.js` (sometimes flexible)

# Benefits

- **Clarity**: Clear understanding of branch purposes and commit changes.
- **Organization**: Grouping of related changes in branches and commits.
- **Collaboration**: Seamless communication of tasks and their progress.
- **Version Control**: Enhanced version history and tracking.

By adhering to these conventions, we aim to enhance our development process, facilitate collaboration, and maintain a well-structured codebase.

Ensure all code adheres to these conventions before submitting pull requests.
