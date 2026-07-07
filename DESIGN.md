version: 0.1.0
name: Mint Design System
product: Omise (Monolith Payment Orchestration)
description: Design System Specifications for a digital-first payment orchestration platform featuring semantic, mode-aware color tokens sourced from shadcn theme/light.tokens.json and shadcn theme/dark.tokens.json. Light mode uses Electric Blue as primary and Mint as accent; Dark mode uses Mint as primary and Electric Blue as accent.

# Brand Assets

Canonical Omise CDN assets for company logos and favicons.

## Asset URLs

```yaml
logo-primary-on-dark: "https://assets-cdn.omise.co/assets/company-logos/logo-primary-light.png"
logo-primary-on-light: "https://assets-cdn.omise.co/assets/company-logos/logo-primary-dark.png"
favicon-svg: "https://assets-cdn.omise.co/assets/company-logos/favicon.svg"
favicon-svg-16: "https://assets-cdn.omise.co/assets/company-logos/favicon16x16.svg"
favicon-png-182: "https://assets-cdn.omise.co/assets/company-logos/favicon182x182.png"
```

# Implementation Rules

All implementation rules live in this section. Other sections define tokens, pairings, and component specs.

## Brand Assets

- Use only the canonical Omise CDN assets listed in `Brand Assets`.
- Keep the original Omise file naming in code and documentation.
- Use `logo-primary-on-dark` only on dark or high-contrast backgrounds.
- Use `logo-primary-on-light` only on light backgrounds.
- Use `favicon-svg` as the default favicon when SVG is supported.
- Use `favicon-svg-16` for explicit 16x16 favicon slots.
- Use `favicon-png-182` for Apple touch icons or PNG-only environments.
- Do not recolor, rename, crop, stretch, or recreate these assets.
- Do not swap the light and dark logo files. `logo-primary-light.png` is artwork for dark backgrounds; `logo-primary-dark.png` is artwork for light backgrounds.

## Colors

- Use only colors from tokens in `DESIGN.md` or their mapped CSS variables.
- Use token-based CSS variables, for example `var(--background)`, `var(--card-low)`, and `var(--primary)`.
- Use Tailwind utilities only when they map to CSS variables, for example `bg-background-body`, `bg-background`, `bg-card-low`, `text-foreground`, and `border-border`.
- Apply `background-body` only to the outer application shell and layout gutters.
- Map the mode-aware `background` CSS variable to `background-light` or `background-dark`, and apply it to Main Content rather than the application shell.
- Do not hardcode colors in components, styles, inline styles, JavaScript, TypeScript, or Tailwind arbitrary values.
- Do not create local color constants, color maps, swatches, `colorGroup`, or similar replacements for shared tokens.
- If a required color does not exist, add it to `DESIGN.md` and the shared CSS variables first.

## Typography

- Use Outfit for `h1` and `h2`.
- Use DM Sans for `h3`-`h6` and body text.
- Use DM Mono for code, data, identifiers, and token values.
- Reserve `h1` and `h2` for the Omise Landing Page only.
- Start Back Office and Dashboard heading hierarchy at `h3`.

## Component Creation and Reuse

- If a component is defined in `DESIGN.md`, implement it as a reusable component that follows the documented tokens, variants, sizes, states, spacing, radius, typography, and accessibility behavior.
- Current documented reusable components are `Sidebar`, `App Bar`, `Button`, `IconButton`, and `Badge`.
- Use the matching shadcn/ui component as the implementation base when available, for example `Button`, `Badge`, `Sidebar`, or composition primitives. Extend it with Mint Design System tokens instead of creating a separate visual system.
- For components without an exact shadcn/ui match, compose from shadcn/ui primitives and Mint Design System tokens.
- Keep shadcn/ui composition patterns, props, slots, variants, and accessibility defaults unless `DESIGN.md` explicitly overrides them.
- Expose only the variants, colors, sizes, and states documented in the component spec.
- Do not recreate a documented component with page-local markup or one-off Tailwind classes.
- Do not duplicate component styling inside feature screens. Reuse the shared component and pass props or slots.
- If a needed component or variant is missing from `DESIGN.md`, add the design spec first, then implement the reusable component.

# Tailwind Color Palette

Foundation colors used by the shadcn theme tokens.

## Base

```yaml
tailwind.base.black: "{alias}"
tailwind.base.black: "#05080D"
tailwind.base.white: "{alias}"
tailwind.base.white: "#FFFFFF"
```

## Blue

