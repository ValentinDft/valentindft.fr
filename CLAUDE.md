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
- `src/app/pages/` - Route pages (Home, Projects, Timeline)
- `src/app/components/` - Shared components (Topbar, Footer)
- `src/app/pages/home/components/` - Home page sections (Header, About, Skills, Experience)
- `src/style/` - Global SCSS partials (_colors, _breakpoints, _fonts)

**Component folder structure:**
```
my-component/
  components/        # child components
  data/              # static data files
  interfaces/        # TypeScript interfaces
  my-component.ts
  my-component.html
  my-component.scss
  my-component.spec.ts
```

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

## SCSS Conventions

### Mobile-first
Always write base styles for mobile, then override at larger breakpoints using `responsive-min-width`:

```scss
@use 'style/colors' as colors;
@use 'style/breakpoints' as breakpoints;

.block {
  font-size: 14px; // mobile base

  @include breakpoints.responsive-min-width(breakpoints.$l) {
    font-size: 20px; // desktop override
  }
}
```

### Breakpoints available (`src/style/_breakpoints.scss`)
| Variable | Value |
|----------|-------|
| `$xs`    | 320px |
| `$s`     | 375px |
| `$m`     | 425px |
| `$l`     | 768px |
| `$xl`    | 1024px |
| `$xxl`   | 1440px |

Never use raw `@media` values — always use the mixin with a breakpoint variable.

### BEM naming
Use BEM for all component class names:
- Block: `.card`
- Element: `.card__section`, `.card__title`
- Modifier: `.card--active`

Nest with SCSS `&` shorthand:
```scss
.card {
  &__section { ... }
  &__title { ... }
  &--active { ... }
}
```

### Host-based pseudo-selectors
When `:first-child` / `:last-child` need to target a component's position in a list, use `:host` since the component's root element is always the only child of its host:

```scss
.card {
  :host(:not(:first-child)) & { padding-top: 20px; }
  :host(:last-child) & { border-bottom: none; }
}
```

### Global classes (do not redefine)
- `.title-section-left` / `.title-section-right` — section headings
- `.dot-title` — decorative dot after heading

## Accessibility

- Must pass all AXE checks
- Must meet WCAG AA standards (focus management, color contrast, ARIA)

## Git Hooks (Husky)

- **pre-commit**: runs `npm run lint`
- **pre-push**: runs `npm test`

## Selectors

- Components: `app-*` (kebab-case)
- Directives: `app*` (camelCase)
