# @flywen/prettier-config

Personal Prettier configuration for TypeScript projects.

## Installation

```bash
npm install -D prettier @flywen/prettier-config
```

or with yarn:

```bash
yarn add -D prettier @flywen/prettier-config
```

or with pnpm:

```bash
pnpm add -D prettier @flywen/prettier-config
```

## Usage

### Option 1: Using `prettier` field in package.json (Recommended)

```json
{
  "name": "your-project",
  "prettier": "@flywen/prettier-config"
}
```

### Option 2: Using `.prettierrc` file

Create a `.prettierrc` file in your project root:

```json
"@flywen/prettier-config"
```

or in JavaScript:

```javascript
export { default } from "@flywen/prettier-config";
```

### Option 3: Extending the configuration

```javascript
// .prettierrc.mjs
export { default } from "@flywen/prettier-config";
```

## Configuration

This configuration includes the following settings:

- **Print Width**: 100 characters
- **Tab Width**: 2 spaces
- **Tabs**: false (spaces)
- **Semicolons**: true
- **Quotes**: double quotes
- **Trailing Commas**: all
- **Bracket Spacing**: true
- **Arrow Parens**: always
- **End of Line**: LF
- **JSX Single Quote**: false
- **Vue Indent Script and Style**: true

## Extending
You can override specific rules by creating a .prettierrc.mjs
```
import config from "@flywen/prettier-config";
export default {
  ...config,
  // Your overrides here
  printWidth: 120,
  singleQuote: true,
};
```

## Editor Integration

### VS code

Install the Prettier extension (https://marketplace.visulastudio.com/items?itemName=esbenp.prettier-vscode) and add to your settings.

```
{
  "prettier.configPath": "@flywen/prettier-config",
  "editor.formatOnSave": true
}
```

## Contributing
Contributions are welcome! Please read the contributing guidelines (CONTRIBUTING.md) first.

## License

MIT (LICENSE) © flywen
