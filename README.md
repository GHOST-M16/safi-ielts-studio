# Safi IELTS Studio

Premium, high-converting multipage website for **Safi IELTS Studio** — a top-tier IELTS training academy.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS**
- **Lucide React** (icons)
- **TypeScript**

## Brand

- **Primary:** Red `#D32F2F`
- **Text:** Slate gray; **Background:** White
- **Fonts:** Inter (body), Montserrat (headings)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, feature cards, Why Choose Us, testimonial marquee, Band Score Calculator |
| `/courses` | Course catalog — IELTS Academic, General, Spoken English (duration, price, inclusions) |
| `/success-gallery` | Student result cards with band scores |
| `/portal` | Staff/Student portal — login UI (dashboard-style) |
| `/contact` | Lead gen form with validation, “Find us on Map” placeholder |

## Features

- Sticky nav with **Join Now** button
- Hover animations on cards and buttons
- **Band Score Calculator** widget on home
- Mobile-first responsive layout
- SEO-friendly footer (quick links, social icons, contact)

## Run locally

1. **Install dependencies** (required first time):
   ```bash
   npm install
   ```
2. **Start the dev server**:
   ```bash
   npm run dev
   ```
3. Open **http://localhost:3001** in your browser.

This project uses port **3001** so it doesn’t conflict with other sites on 3000.

## Build

```bash
npm run build
npm start
```
