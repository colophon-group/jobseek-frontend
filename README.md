# Job Seek Frontend

Marketing landing page for Job Seek, a job-search companion that lets users follow target companies, track applications, and switch between light/dark themes. Built with Next.js 16 (App Router), React 19, TailwindCSS 4, Stackframe auth surfaces, and MUI icons.

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` and edit copy in `src/content/site.ts` to customize navigation, hero text, and feature data.

## Deployment

### Vercel (recommended)
1. Push the repo to GitHub.
2. Import it into Vercel and pick the default Next.js preset (`npm run build`).
3. No environment variables are required; deploy immediately.

### Self-host / container
1. Install dependencies and build: `npm install && npm run build`.
2. Start the production server: `npm run start`.
3. Serve the app behind your platform’s reverse proxy on port `3000`.
