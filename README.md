# Circinly — App

The real product, following the [Circinly](https://circinly.app) waitlist landing page. "Your career. Planned. Tracked. Launched."

Circinly is a career-launch dashboard: **Missions** (a step-by-step roadmap), **Opportunities** (a job tracker), **Insights** (search analytics), and a **Profile** that holds your Flight Oath and momentum streak.

## Stack

- [Vite](https://vitejs.dev/) + React 18 + TypeScript
- [React Router](https://reactrouter.com/) for client-side routing
- [Tailwind CSS](https://tailwindcss.com/) for styling, with brand tokens in `tailwind.config.js`
- [lucide-react](https://lucide.dev/) for icons
- Mock data in `src/data/mockData.ts` — swap this out for real API calls when the backend is ready

## Getting started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/     # Reusable UI: Sidebar, TopBar, cards, the orbit graphic, progress ring
  pages/          # One file per route: Home, Missions, Opportunities, Insights, Profile
  data/           # Mock data standing in for the API layer
  types/          # Shared TypeScript types for Missions, Opportunities, Insights, Profile
  App.tsx         # Route table + shell layout (sidebar / mobile nav + content)
  main.tsx        # App entry point
```

## Design system

- **Background:** warm off-white paper (`#fbfaf8`), white cards on a hairline border (`#e8e6e1`)
- **Accent:** indigo/violet brand scale (`brand-500` = `#635bf0`)
- **Display type:** Space Grotesk for headings, Inter for body text
- **Motif:** orbit rings, dotted trajectories, and a small rocket — used sparingly (hero graphic + mission progress ring) so it doesn't fight the data-dense pages

Colors and type live in `tailwind.config.js`. Shared component classes (`.card`, `.btn-primary`, `.pill`, etc.) live in `src/index.css`.

## Wiring up real data

Everything currently reads from `src/data/mockData.ts`. To connect a real backend:

1. Replace the exported constants (`currentUser`, `missions`, `opportunities`, `insightMetrics`, `todaysFocus`) with API calls — e.g. via `fetch` in a small `src/lib/api.ts`, or a data-fetching library like TanStack Query.
2. The `types/index.ts` shapes are already what each page expects, so keep API responses conforming to those types (or map them) and the UI won't need to change.
3. Add auth (e.g. an `AuthProvider` wrapping `<App />` in `main.tsx`) once there's a real user session instead of the hardcoded `currentUser`.

## Next steps to consider

- Persist focus-item completion and opportunity stage changes (currently local component state only)
- Add a form/modal for creating new Opportunities and Missions
- Wire the "Edit oath" button on the Profile page to an actual editor
- Add auth + a real backend (Supabase, Firebase, or a custom API all fit cleanly here)
