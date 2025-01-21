# -- QUICKSILVER -- 
## Nest.js + Vite Starter App 

Use NVM or NVM-WINDOWS to manage node version

https://github.com/coreybutler/nvm-windows

https://github.com/nvm-sh/nvm


### Install Node JS

```
nvm install 20.9.0
nvm use 20.9.0
nvm list
```

## Install Dependencies

```
npm i
```

## Install Individual Project Dependencies

```
npm --workspace apps/api install
npm --workspace apps/web install

```

## Database Stuff

Copy the .env sample to get started:

```
cp apps/api/.env.sample apps/api/.env

```
Install Postgres, MySQL or another database on your local machine & add connection information to your .env to connect to it.

Then, run these commands to migrate your postgres instance to match the prisma schema. (packages/database/prisma/schema.prisma)

```
npm run prisma:migrate
npm run prism:seed
```

## Build & Run

```
npm run build
npm run dev
```

## Folder Structure

- `apps/`: contains api, web, and mobile, our backend, frontend and mobile app code bases
- `packages/`: shared code between projects

## Project Components

- `api`: an [Nest.js](https://nestjs.com/) server
- `web`: a [Vite.js](https://vitejs.dev/) app
- `@repo/logger`: isomorphic logger (a small wrapper around console.log)
- `@repo/ui`: a dummy React UI library (which contains a single `<CounterButton>` component)
- `scripts`: Jest and ESLint configurations
- `@repo/typescript-config`: tsconfig.json's used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

## Recommended Developer Tools

- [DBeaver](https://dbeaver.io/) Universal Database tool
- [VsCode](https://code.visualstudio.com/) All-In-One Code Editor
