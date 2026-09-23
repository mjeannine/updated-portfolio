# My Portfolio

## Tech Stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/) + TypeScript
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started Locally

Requires [Node.js](https://nodejs.org/) (v18+) and npm.

```sh
# Clone the repository
git clone https://github.com/mjeannine/updated-portfolio.git
cd updated-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Project Structure

```
src/
  components/     # Page sections (Hero, About, Experience, Projects, Skills, Contact, Footer)
  components/ui/  # shadcn/ui components
  assets/         # Images
  pages/          # Route pages
```

## Editing Content

Each section's content lives directly in its component file under `src/components/`:

- `Hero.tsx` — name, title, tagline, contact info
- `About.tsx` — summary and education
- `Experience.tsx` — work history
- `Projects.tsx` — featured projects
- `Skills.tsx` — technical skills
- `Contact.tsx` — contact details

Colors and design tokens are defined in `src/index.css` and `tailwind.config.ts`.

## Building for Production

```sh
npm run build
```

This outputs a static production build to the `dist/` folder.

## Deployment (Netlify)

This site is deployed on [Netlify](https://www.netlify.com/), connected directly to this GitHub repository:

1. Push changes to the `main` branch on GitHub.
2. Netlify automatically detects the push and rebuilds the site.
3. Build settings: **Build command** `npm run build`, **Publish directory** `dist`.

