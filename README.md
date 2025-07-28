# -- QUICKSILVER --

## Nest.js api & React + Vite boiler plate app (packaged with turborepo)

## Getting Started

Use NVM or NVM-WINDOWS to manage node version

https://github.com/coreybutler/nvm-windows

https://github.com/nvm-sh/nvm

### Install Node JS v22

```
nvm install 22
nvm use 22
nvm list
```

### Install Dependencies

```
npm i
```

### Database Stuff

Copy the .env samples to get started:

```
cp apps/api/.env.sample apps/api/.env
cp packages/database/.env.sample packages/database/.env
```

Install Postgres (default), MySQL or another database on your local machine & add connection information to your .env to connect to it. Non default databases require an update to packages/database/prisma/schema.prisma

Update the .env files created above with the correct connection string to connect to your database.

Then, run this commands to migrate your postgres instance to match the prisma schema. (packages/database/prisma/schema.prisma)

```
npm run prisma:migrate
```

### Build

```
npm run build
```

### Run in Development Mode

```
npm run dev
```

## Reference & Info

### TurboRepo

This project uses [Turborepo](https://turbo.build/repo/docs). No paid features are required for the CLI to work :)

### How to Install Individual Project Dependencies

```
npm --workspace apps/api install packageName
npm --workspace apps/web install packageName

```

### Folder Structure

- `apps/`: contains api and web. add additional apps with folders containing package.json, etc.
- `packages/`: shared code between projects. eg: database. extend with folders containing package.json, etc.

### Project Components

- `api`: an [Nest.js](https://nestjs.com/) server
- `web`: a Static React app Packaged with [Vite.js](https://vitejs.dev/)
- `@repo/database`: a Prisma Database package used in API.
- `@repo/logger`: a dummy backend package: isomorphic logger (a small wrapper around console.log)
- `@repo/ui`: a dummy React UI library (which contains a single `<CounterButton>` component)
- `scripts`: Jest and ESLint configurations ()
- `@repo/typescript-config`: tsconfig.json's used throughout the monorepo

Each package and app is (mostly) built with [TypeScript](https://www.typescriptlang.org/).

### Utilities

This [Turborepo](https://turbo.build/repo/docs) has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

You may need to install extensions if you use vscode or cursor as your editor.

### Recommended Developer Tools

- [DBeaver](https://dbeaver.io/) Universal Database tool
- [VsCode](https://code.visualstudio.com/) All-In-One Code Editor
