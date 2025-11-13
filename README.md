# Job Seek Frontend

Marketing landing page for Job Seek, a job-search companion that lets users follow target companies, track applications, and switch between light/dark themes. Built with Next.js 16 (App Router), React 19, the MUI component library, Stackframe auth surfaces, and a small custom CSS design system (no Tailwind required).

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` and edit copy in `src/content/site.ts` to customize navigation, hero text, feature sections, and which public-domain artwork appears in each slot.

## Deployment

### Vercel (recommended)
1. Push the repo to GitHub.
2. Import it into Vercel and pick the default Next.js preset (`npm run build`).
3. No environment variables are required; deploy immediately.

### Self-host / container
1. Install dependencies and build: `npm install && npm run build`.
2. Start the production server: `npm run start`.
3. Serve the app behind your platform’s reverse proxy on port `3000`.

## License

- Application code: [MIT License](https://github.com/colophon-group/jobseek-frontend/blob/main/LICENSE)
- Job data (Collection of Job Postings): [CC BY-NC 4.0](https://github.com/colophon-group/jobseek-frontend/blob/main/LICENSE-JOB-DATA)

See `/license` in the app for a plain-language summary.
