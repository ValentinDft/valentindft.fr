# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` - Start dev server
- `npm run build` - Production build
- `npm run lint` - Run ESLint
- `npm test` - Run all tests (no watch mode)
- `npm run serve:ssr:portfolio` - Serve SSR build locally

## Architecture

Angular 21 portfolio with SSR (Server-Side Rendering). Uses standalone components exclusively (no NgModules).

**Entry points:**
- `src/main.ts` - Browser bootstrap
- `src/main.server.ts` - Server bootstrap
- `src/server.ts` - Express SSR server

**Structure:**
- `src/app/pages/` - Route pages (Home, Projects, Timelife)
- `src/app/components/` - Shared components (Topbar, Footer)
- `src/app/pages/home/components/` - Home page sections (Header, About, Skills)
- `src/style/` - Global SCSS partials (_colors, _breakpoints, _fonts)

## Angular Conventions

- Use `input()` and `output()` functions instead of decorators
- Use signals for state management; use `computed()` for derived state
- Use `ChangeDetectionStrategy.OnPush` in components
- Use native control flow (`@if`, `@for`, `@switch`) in templates
- Use `inject()` function instead of constructor injection
- Use `NgOptimizedImage` for static images
- Put host bindings in `host` object of decorator (not `@HostBinding`/`@HostListener`)
- Use class bindings instead of `ngClass`, style bindings instead of `ngStyle`
- Do NOT set `standalone: true` (it's the default in Angular 21)

## Accessibility

- Must pass all AXE checks
- Must meet WCAG AA standards (focus management, color contrast, ARIA)

## Git Hooks (Husky)

- **pre-commit**: runs `npm run lint`
- **pre-push**: runs `npm test`

## Selectors

- Components: `app-*` (kebab-case)
- Directives: `app*` (camelCase)