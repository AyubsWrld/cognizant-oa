cognizant-oa
Tech Stack I used to create the project.
Framework — Next.js 16 (App Router, Turbopack)
AI — Vercel AI SDK + OpenAI
Database — PostgreSQL via Drizzle ORM
Auth — NextAuth.js
Styling — Tailwind CSS + shadcn/ui
Package Manager — pnpm
Getting Started
Prerequisites
Node.js 18+
pnpm
A PostgreSQL database (local or hosted, e.g. Neon, Supabase)
An OpenAI API key
1. Clone the repo
git clone https://github.com/AyubsWrld/cognizant-oa.git
cd cognizant-oa
2. Install dependencies
pnpm install
3. Set up environment variables
Copy the example env file and fill in your values:

cp .env.example .env.local
Then edit .env.local:

# Auth
AUTH_SECRET=your_random_secret_here         # generate with: openssl rand -base64 32

# Database
POSTGRES_URL=postgresql://user:password@host:5432/dbname

# OpenAI
OPENAI_API_KEY=sk-...

# Optional: Redis for resumable streams
REDIS_URL=redis://...
4. Run database migrations
pnpm db:migrate
5. Start the development server
pnpm dev
Open http://localhost:3000 in your browser.

MIT
