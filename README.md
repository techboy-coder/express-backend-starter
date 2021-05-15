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
- Webpack

## Get Started

### Commands

#### Clone Repo

```bash
git clone "https://github.com/techboy-coder/express-backend-starter" && cd express-backend-starter && yarn
```

#### Additional Commands (in package.json)

*<u>Don’t forget to install modules first</u>*

- `dev`  -  Running a dev server (ts-node-dev)
- `build`  -  Export TypeScript to JavaScript + bundle JS into 1 file.
- `start`  -  Run build + `node "./production/bundle.js"` (Starts Server)
- `dev:migrate`  -  Make migrations from `schema.prisma` file.

## API usage
API uses Express-Sessions. This means it will generate a session cookie.
### Register User

```json
POST http://localhost:4000/v1/user/register
Json Body:
{
    "name": "Bob Smith",
    "email": "bob@email.com",
    "password": "secret",
    "password_confirmation": "secret"
}
```

### Login User

```json
POST http://localhost:4000/v1/user/login
Json Body:
{
    "email": "bob@email.com",
    "password": "secret"
}
```

### Get User Info

```json
GET http://localhost:4000/v1/user/
```

### Delete User

*User gets recognized thanks to session.*

```json
DELETE http://localhost:4000/v1/user/
```

### Example Protected Route

```json
GET http://localhost:4000/v1/user/protected
```

## File tree

```
📦express-backend-starter
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

M​a​de​ ​w​it​h​ :heart: by [techboy-coder](https://github.com/techboy-coder/) - Express Backend Starter
