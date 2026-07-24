
# Smart Calculator

A full-stack calculator built using:

- React (Vite)
- Spring Boot
- PostgreSQL

---

## Features

- Addition, Subtraction, Multiplication, Division, Modulus, Power,
  Square Root, Percentage
- Calculation history with search
- Delete single entry / clear all history
- Export history to CSV

---

## Run locally

You need a Postgres database to point at. Easiest option if you don't
want to install Postgres on your own machine: create a free one on Render
(see the Deploying section below) and use its "External Database URL" for
local development too — no local install needed at all.

### 1. Database

Once you have a Postgres database (local or Render's free one), run the
schema against it:

```bash
psql "<your-database-url>" -f database/calculator.sql
```

### 2. Backend

```bash
cd backend
export DB_URL=jdbc:postgresql://<host>:5432/<database>
export DB_USERNAME=<your-db-username>
export DB_PASSWORD=<your-db-password>
mvn spring-boot:run
```

Runs on `http://localhost:8080`.

Environment variables:

| Variable               | Required? | Default                 |
|-------------------------|-----------|--------------------------|
| `DB_URL`                | Yes       | *(none)*                |
| `DB_USERNAME`           | Yes       | *(none)*                |
| `DB_PASSWORD`           | Yes       | *(none)*                |
| `CORS_ALLOWED_ORIGINS`  | No        | `http://localhost:5173` |
| `PORT`                  | No        | `8080`                  |

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on `http://localhost:5173` and talks to the backend at
`http://localhost:8080/api` by default. To point it elsewhere, copy
`.env.example` to `.env` and set `VITE_API_URL`.

---

## Deploying (100% free, no credit card)

Three pieces, three free services:

1. **Database → Render (PostgreSQL)**
   - On render.com, click **New +** → **PostgreSQL**
   - Give it a name, leave the rest default, make sure **Free** is
     selected as the instance type → click **Create Database**
   - Once it's ready, scroll to **Connections** and copy the
     **External Database URL** — you'll need it below
   - Run `database/calculator.sql` against it once (e.g. using the
     `psql` command above, or any Postgres GUI tool) to create the table

2. **Backend → Render (Web Service)**
   - Push your code to GitHub first
   - On render.com, click **New +** → **Web Service** → connect your repo
   - Root Directory: `backend`
   - Instance Type: **Free**
   - Add environment variables: `DB_URL`, `DB_USERNAME`, `DB_PASSWORD`
     (all from the database's Connections tab), and
     `CORS_ALLOWED_ORIGINS` (fill in after step 3)
   - Click **Create Web Service**, copy the resulting URL
     (e.g. `https://your-app.onrender.com`)

3. **Frontend → Vercel**
   - On vercel.com, **Add New...** → **Project** → import your repo
   - Root Directory: `frontend`
   - Environment variable: `VITE_API_URL` = your Render backend URL + `/api`
   - Click **Deploy**, copy the resulting URL (e.g. `https://your-app.vercel.app`)

4. **Connect them**
   - Back in Render's backend service → Environment → set
     `CORS_ALLOWED_ORIGINS` to your Vercel URL from step 3 → save

---

## Technologies

React · Spring Boot · PostgreSQL · Axios · Java 17
=======

