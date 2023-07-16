# SmileIT Code Challenge

This project is a Vue.js web application built with TypeScript and Tailwind CSS. It includes a development server for local development, a build script for production deployments, and a preview command for testing the production build.

## Getting Started

To get started, clone the repository and install the dependencies using [pnpm ↗](https://pnpm.io/):

```bash
git clone https://github.com/mortezasabihi/smile-it-task.git
cd smile-it-task
pnpm install
```

## Development Mode

To run the project in development mode, use the following command:

```bash
pnpm dev
```

This will start a development server at [http://localhost:5173 ↗](http://localhost:5173). The development server includes hot-reload, so any changes you make to the code will be immediately reflected in the browser.

## Building for Production

To build the project for production, use the following command:

```bash
pnpm build
```

This will compile the code and create a production-ready build in the `dist/` directory. You can then deploy the `dist/` directory to your web server.

## Previewing the Production Build

To preview the production build locally, use the following command:

```bash
pnpm preview
```

This will start a local web server to serve the production build at http://localhost:8080. This is useful for testing the production build before deploying it to your web server.

## Dependencies

This project was built using the following dependencies:

- Vue.js 3
- TypeScript
- Tailwind CSS

## Code Formatting

This project uses ESLint for code formatting. To run the code formatter, use the following command:

```bash
pnpm lint
```

## Git Hooks

This project uses Husky and Conventional Commit to enforce a consistent commit message format. This helps to keep the commit history clean and easy to read. 

## Tests

This project includes unit tests using the Vite testing library. To run the tests, use the following command:

```bash
pnpm test
```

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
