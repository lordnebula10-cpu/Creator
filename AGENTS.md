# AGENTS.md

## Project Overview
A minimal React Native messaging app (single `App.js` file) — a simple message list with input and send button.

## Dev Environment
The repo has no build tooling of its own. A Vite + react-native-web dev environment was added to run the React Native code in a browser:

- **`vite.config.js`** — aliases `react-native` → `react-native-web`, and uses a custom `js-as-jsx` plugin to pre-transform JSX in `.js` files (Vite's default import-analysis can't parse JSX in `.js`).
- **`src/main.jsx`** — entry point that mounts `App.js` into the DOM.
- **`index.html`** — Vite HTML entry with an app-like centered frame.

## Running
```bash
docker compose -f docker-compose.base44.yml up -d
```
The app serves on port 3000. Vite dev server with live reload is used (no image rebuild needed for edits).

## Key Notes
- `App.js` uses JSX but has a `.js` extension — the custom Vite plugin handles this; don't rename it.
- No external credentials or secrets are needed.
- No backend, database, or API — purely a client-side React Native app.
