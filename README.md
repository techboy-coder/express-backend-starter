# Express JS starter (Backend Only)

> This is a simple starter template to build your backend quickly and efficiently. Clone it and start building your project quicker.

## Overview

**This is a backend starter using Express, Prisma and Typescript. Simply clone this project, and add further functionality and modules.** 

### Techstack

- Typescript
- Express JS
- Mongodb for Express-Sessions
- SQLite (Can be switched quickly)
- Prisma ORM
- Passport JS (Local-Auth setup)

## Get Started

### Commands

#### Clone Repo

```bash
git clone "https://github.com/techboy-coder/express-backend-starter"
```

#### Additional Commands (in package.json)

- `dev`  -  Running a dev server (ts-node-dev)
- `build`  -  Export TypeScript to JavaScript + bundle JS into 1 file.
- `start`  -  Run build + `npm "./production/bundle.js"` (Starts Server)
- `dev:migrate`  -  Make migrations from `schema.prisma` file.

## File tree

```
📦backend-fastapi
 ┣ 📂.git
 ┣ 📂prisma
 ┃ ┣ 📜dev.db
 ┃ ┗ 📜schema.prisma
 ┣ 📂src
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂config
 ┃ ┃ ┃ ┣ 📂strategy
 ┃ ┃ ┃ ┃ ┗ 📜local.ts
 ┃ ┃ ┃ ┗ 📜passport.ts
 ┃ ┃ ┣ 📂middleware
 ┃ ┃ ┃ ┗ 📜auth.ts
 ┃ ┃ ┣ 📜controller.ts
 ┃ ┃ ┣ 📜services.ts
 ┃ ┃ ┗ 📜validators.ts
 ┃ ┣ 📂modules
 ┃ ┃ ┣ 📂module 1 (Implement your own ones here)
 ┃ ┃ ┗ 📂module 2
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜README.md
 ┃ ┣ 📜routes.ts
 ┃ ┣ 📜secrets.ts
 ┃ ┗ 📜session.ts
 ┣ 📜.env.example (Change to .env)
 ┣ 📜.gitignore
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜tsconfig.json
 ┣ 📜webpack.config.js
 ┗ 📜yarn.lock
```

---

