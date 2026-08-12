# Insta-Doctor

Healthcare marketplace MVP: patient web app + NestJS API + PostgreSQL/Prisma.

## Stack
- Next.js / TypeScript web
- NestJS / TypeScript API
- PostgreSQL + Prisma
- JWT authentication

## Local run
1. `docker compose up -d`
2. `cd backend && npm install && cp .env.example .env && npx prisma migrate dev --name init && npm run start:dev`
3. `cd web && npm install && npm run dev`

Web: http://localhost:3000
API: http://localhost:3001

## Production
GitHub stores the source code. Deploy the web to Vercel and API/database to a cloud provider such as Render/Supabase, then point `instadoctor.net` and `api.instadoctor.net` to them.
