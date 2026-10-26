---
status: pending
title: Hello World app
---

The project is currently empty (only README.md and env.example exist), so this plan scaffolds a minimal working app that displays a friendly "Hello, World!" page.

1. Create `package.json` with the project scripts (dev, build, preview) and the dependencies for React, Vite, TypeScript, TanStack Router (router + router plugin), and Tailwind CSS v4 (`tailwindcss` + `@tailwindcss/vite`).
   - Outcome: running `npm install` installs everything the app needs.

2. Create `vite.config.ts` registering the TanStack Router plugin and the Tailwind CSS v4 Vite plugin, and enabling the `@` path alias for `src/`.
   - Outcome: the dev server starts and the router auto-generates the route tree.

3. Create `tsconfig.json` (plus any referenced config files Vite expects) with strict TypeScript settings, bundler module resolution, JSX support, and the `@/*` path mapping.
   - Outcome: TypeScript typechecking passes across the project.

4. Create `index.html` at the project root with a root mount element and a script tag pointing at `src/main.tsx`, with the page title set to "Hello World".
   - Outcome: the browser loads the app entry point.

5. Create `src/styles/global.css` starting with exactly `@import "tailwindcss";` and a small amount of global page styling (full-height background, centered content defaults).
   - Outcome: Tailwind utilities work app-wide from a single stylesheet.

6. Create `src/main.tsx` that imports the global stylesheet, builds the router from the generated route tree, and mounts the app into the root element.
   - Outcome: the app renders in the browser without errors.

7. Create `src/routes/__root.tsx` as the app shell that renders the router outlet.
   - Outcome: every route shares one consistent shell.

8. Create `src/routes/index.tsx` as the home route showing a large "Hello, World!" heading centered on the screen with a short welcoming subtitle, styled with Tailwind utilities (no inline styles).
   - Outcome: visiting `/` displays the Hello World page.

9. Verify the app builds and typechecks cleanly, and that the home page renders as described.
   - Outcome: a working Hello World app ready to view and extend.
