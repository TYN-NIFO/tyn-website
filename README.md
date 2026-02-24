# The Yellow Network — Enterprise AI Execution

The official website for **The Yellow Network (TYN)** — helping enterprise leaders cut through the AI noise, choose what actually matters, and implement systems that create real business lift.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Backend:** Next.js API Routes (Google Sheets, Nodemailer)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Local Development

```sh
# Clone the repository
git clone <REPO_URL>

# Navigate to the project
cd "Website final"

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:3000`.

### Production Build

```sh
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Next.js App Router pages & API routes
│   ├── api/contact/  # Contact form → Google Sheets + email
│   ├── services/     # Services page
│   ├── about/        # About page
│   ├── careers/      # Careers page
│   └── ...
├── components/
│   ├── layout/       # Header, Footer, ScrollToTop
│   ├── sections/     # Page-specific sections (hero, CTA, etc.)
│   └── ui/           # Reusable UI primitives (shadcn/ui)
├── data/             # Local blog & whitepaper content
└── lib/              # Utilities
```

## Key Features

- **Services Portal** — BUY, BUILD, AI COE service tracks with deep-dive content
- **Accelerators** — NiFo, yZone, Ynfinity program pages
- **Resources** — Blog & whitepaper library
- **Contact Form** — Submissions tracked in Google Sheets with email notifications
- **Responsive Design** — Optimised for desktop, tablet, and mobile

## Environment Variables

Create a `.env.local` file with:

```env
GOOGLE_CLIENT_EMAIL=...
GOOGLE_PRIVATE_KEY=...
SMTP_HOST=...
SMTP_PORT=...
SMTP_USER=...
SMTP_PASS=...
```

## License

Proprietary — © The Yellow Network. All rights reserved.
