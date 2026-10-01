# Heni Mezni — Robotics & Embedded Systems Portfolio

A bilingual (English and French) portfolio built with Next.js App Router, React and TypeScript. The content comes from the supplied French and English CVs. The CV PDFs are source material only: they are ignored by Git, are not copied into `public/`, and are not linked for download.

## Run locally

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`. English is the home page; French is available at `/fr/`.

## Quality checks

```powershell
npm run lint
npm run typecheck
npm run build
```

The production build creates a static `out/` export. It can be served by GitHub Pages or another static host. The project pages are generated at build time from the typed project content in `src/content/portfolio.ts`.

## Project structure

- `src/features/` holds page sections and project views by feature.
- `src/content/portfolio.ts` is the typed source for projects, experience, education, skills and recognition.
- `src/shared/i18n/messages.ts` contains all interface copy for English and French.
- `src/shared/ui/` contains shared navigation, theme controls and layout primitives.
- `public/images/` contains optimized WebP copies of the portrait and project illustrations.

The generated hero illustration was reviewed but not used because it depicts an invented person. The real portrait is used for Heni's identity; the generated project illustrations are labeled as conceptual illustrations.
