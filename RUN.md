# How to run the site

## 1. Open terminal in this folder

- In VS Code / Cursor: **Terminal → New Terminal** (it usually opens in the project folder).
- Or in PowerShell / Cmd:  
  `cd "c:\Users\atalz\OneDrive\Documents\fareed ielts website"`  
  (use the quotes because of the space in the path.)

## 2. Install dependencies (first time only)

```bash
npm install
```

Wait until it finishes (can take 1–2 minutes).

## 3. Start the dev server

```bash
npm run dev
```

When you see something like **“Ready on http://localhost:3001”**, open that link in your browser.

## If it still doesn’t work

- **“npm not found”** → Install Node.js from https://nodejs.org (LTS), then try again.
- **Port 3001 in use** → Run: `npm run dev -- -p 3002` and open http://localhost:3002
- **Blank or broken page** → Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac).
