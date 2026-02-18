# cognizant-oa

An AI-powered chat application built with Next.js, the Vercel AI SDK, and OpenAI. Features persistent chat history, artifact rendering, resumable streams, and tool use.

---

## Tech Stack

- **Framework** — Next.js 16 (App Router, Turbopack)
- **AI** — Vercel AI SDK + OpenAI
- **Database** — PostgreSQL via Drizzle ORM
- **Auth** — NextAuth.js
- **Styling** — Tailwind CSS + shadcn/ui
- **Package Manager** — pnpm

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- A PostgreSQL database (local or hosted, e.g. Neon, Supabase)
- An OpenAI API key

### 1. Clone the repo

```bash
git clone https://github.com/AyubsWrld/cognizant-oa.git
cd cognizant-oa
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env.local
```

Then edit `.env.local`:

```env
# Auth
AUTH_SECRET=your_random_secret_here         # generate with: openssl rand -base64 32

# Database
POSTGRES_URL=postgresql://user:password@host:5432/dbname

# OpenAI
OPENAI_API_KEY=sk-...

# Optional: Redis for resumable streams
REDIS_URL=redis://...
```

### 4. Run database migrations

```bash
pnpm db:migrate
```

### 5. Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
├── app/                  # Next.js App Router pages & API routes
│   ├── (auth)/           # Auth pages (login, register)
│   └── (chat)/           # Chat UI and API endpoints
├── artifacts/            # Artifact renderers (text, code, etc.)
├── components/           # Shared UI components
├── hooks/                # Custom React hooks
├── lib/
│   ├── ai/               # AI providers, prompts, tools
│   └── db/               # Drizzle schema, queries, migrations
└── public/               # Static assets
```

---

## Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start local dev server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm db:migrate` | Run database migrations |
| `pnpm db:studio` | Open Drizzle Studio (DB GUI) |
| `pnpm lint` | Run Biome linter |

---

## License

MIT
