# CodeLens — Developer Portfolio UI

A component-based developer portfolio landing page built with React and Tailwind CSS. Separate sections present an introduction, background, skills, services, and contact-oriented content.

**Stack:** React 18 · Vite 5 · Tailwind CSS 3 · React Icons

## Highlights

- Page composition from eight reusable section components.
- Responsive layouts expressed through Tailwind breakpoint utilities.
- Desktop navigation with a hover-based projects dropdown.
- A compact contact link on smaller screens.
- Local hero/profile photography and React Icons.

## Run locally

Install Node.js and npm, then:

```sh
git clone https://github.com/itzhoman/CodeLens.git
cd CodeLens
npm ci
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173). 

## Development commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production app |
| `npm run lint` | Run the configured lint command |
| `npm run preview` | Preview the Vite production bundle |

No automated test script is currently defined in `package.json`.

## Project structure

| Path | Responsibility |
| --- | --- |
| `src/App.jsx` | Composes the portfolio sections |
| `src/main.jsx` | React application entry point |
| `src/components/` | Navbar, Hero, Designing, GetToKnow, AboutMe, Transform, DigitalMaster, Footer |
| `src/assets/` | Local photos and illustrations |
| `src/index.css` | Tailwind directives |
| `tailwind.config.js` | Theme and Tailwind configuration |
| `vite.config.js` | Vite development/build configuration |

## Customize

- Edit each section in `src/components/` to replace the portfolio text.
- Replace local images in `src/assets/` and update their imports.
- Update the navigation anchors, footer links, and placeholder email.

## Current scope

The repository is a static portfolio UI without a backend or contact-submission service. Some text and links are placeholders.

## Repository

[Source on GitHub](https://github.com/itzhoman/CodeLens) · [Hooman Hajimohamadi](https://github.com/itzhoman)

Documentation reviewed against source commit [`030525b`](https://github.com/itzhoman/CodeLens/commit/030525b5543c7aea4e478c67df68366324f37f50).
