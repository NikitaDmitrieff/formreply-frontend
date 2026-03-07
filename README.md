# FormReply

**AI-drafted replies to every form submission -- in your inbox in 10 seconds.**

For freelancers, agencies, and small businesses that lose leads to slow response times. FormReply reads each contact form submission and drafts a personalized reply so you can respond while the conversation is still warm.

**Live at [formreply.app](https://formreply.app)**

---

## Features

- **AI-personalized drafts** -- every reply is tailored to the submission, not a static template
- **10-second delivery** -- draft lands in your inbox moments after submission
- **One-click send** -- review the draft, tweak if needed, send from your own email
- **Spam filtering** -- bot and junk submissions are filtered automatically
- **Multi-provider support** -- Typeform (OAuth), Google Forms (OAuth), Webflow, Jotform, Tally (webhook)
- **Email open tracking** -- know when recipients read your replies
- **Dashboard** -- submission history, reply stats, and open tracking in one place
- **"Powered by FormReply" branding** -- viral loop built into every reply

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS v4 |
| Backend services | Supabase (Auth, Postgres, Storage) |
| Payments | Stripe (subscriptions + webhooks) |
| Testing | Vitest, Testing Library |
| CI/CD | GitHub Actions |
| Hosting | Railway |

## Quick Start

```bash
# Clone the repo
git clone <repo-url>
cd formreply-frontend

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Fill in the values (see Environment Variables below)

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-side only) |
| `NEXT_PUBLIC_BACKEND_URL` | Backend API URL (defaults to production Railway URL) |
| `NEXT_PUBLIC_APP_URL` | Public app URL (used for Stripe redirect URLs) |
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret |
| `BACKEND_URL` | Backend URL for server-side API calls (demo route) |

## Testing

```bash
# Run all tests (47 passing)
npm test

# Watch mode
npm run test:watch
```

## Project Structure

```
app/
  page.tsx                  # Landing page
  layout.tsx                # Root layout, metadata, analytics
  dashboard/                # User dashboard (submission history, stats)
  onboarding/               # Signup and form connection flow
  success/                  # Post-connection success page with webhook setup
  demo/                     # Interactive demo
  stats/                    # Public stats page
  blog/                     # SEO content (30+ articles)
  vs/                       # Comparison pages (vs Zapier, vs manual)
  tools/                    # Free tools (reply generator, spam checker, etc.)
  support/                  # Support page
  privacy-and-tos/          # Privacy policy and terms of service
  components/               # Shared components (NavBar, TryDemo, TrackEvent)
  api/
    checkout/               # Stripe checkout session creation
    demo/                   # Demo endpoint proxy
    auth/callback/          # OAuth callbacks (Typeform, Google)
    webhooks/stripe/        # Stripe webhook handler
lib/
  supabase.ts               # Supabase client
```

## Deployment

The app deploys to Railway via GitHub Actions on push to `main`.

Production URL: [https://formreply.app](https://formreply.app)

Backend API (separate repo): `formreply-backend` on Railway.

## Pricing

- **Free** -- 5 AI-drafted replies per month, no card required
- **Starter** -- $19/month, unlimited submissions, 14-day free trial

## License

MIT
