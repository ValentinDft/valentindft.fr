# Portfolio

Mon portfolio de developpeur web, construit avec Angular 21 et le rendu cote serveur (SSR).

## Stack technique

- **Framework**: Angular 21 (standalone components)
- **Rendu**: Server-Side Rendering (SSR) avec Express
- **Styles**: SCSS (mobile-first, BEM)
- **Tests**: Vitest
- **Linting**: ESLint + Prettier
- **Icons**: Font Awesome

## Pages

- **Home** - Page d'accueil avec header, a propos, competences et experiences
- **Projects** - Mes projets
- **Timeline** - Mon parcours

## Installation

```bash
npm install
```

## Developpement

Lancer le serveur de developpement:

```bash
npm start
```

L'application est disponible sur `http://localhost:4200/`.

## Build

Build de production:

```bash
npm run build
```

Servir le build SSR:

```bash
npm run serve:ssr:portfolio
```

## Tests et qualite

```bash
npm test      # Tests unitaires (Vitest)
npm run lint  # ESLint + templates Angular
```

## Git Hooks

- **pre-commit**: lint automatique
- **pre-push**: tests automatiques
