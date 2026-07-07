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
tailwind.base.black: "#05080D"
tailwind.base.white: "#FFFFFF"
```

## Blue

```yaml
tailwind.blue.50: "#F2F7FF"
tailwind.blue.100: "#E5F0FF"
tailwind.blue.200: "#C3DBFF"
tailwind.blue.300: "#7AA4FF"
tailwind.blue.400: "#2F6AFF"
tailwind.blue.500: "#0048FF"
tailwind.blue.600: "#3333FF"
tailwind.blue.700: "#003BD3"
tailwind.blue.800: "#002C9B"
tailwind.blue.900: "#001C65"
tailwind.blue.950: "#00113E"
```

## Mint

```yaml
tailwind.mint.50: "#F2FFFD"
tailwind.mint.100: "#D9FFF9"
tailwind.mint.200: "#BFFFE4"
tailwind.mint.300: "#80FFBF"
tailwind.mint.400: "#57D9A3"
tailwind.mint.500: "#30BF8F"
tailwind.mint.600: "#22735F"
tailwind.mint.700: "#0F4D42"
tailwind.mint.800: "#0A332C"
tailwind.mint.900: "#041A16"
tailwind.mint.950: "#041A16"
```

## Gray

```yaml
tailwind.gray.50: "#F5F7FA"
tailwind.gray.100: "#EBEEF2"
tailwind.gray.200: "#DADFE5"
tailwind.gray.300: "#B8BFCC"
tailwind.gray.400: "#8A93A6"
tailwind.gray.500: "#69758C"
tailwind.gray.600: "#475166"
tailwind.gray.700: "#313A4C"
tailwind.gray.800: "#1C2433"
tailwind.gray.900: "#0A0F1A"
tailwind.gray.950: "#010204"
```

## Red

```yaml
tailwind.red.50: "#FFF2F4"
tailwind.red.100: "#FFE5E8"
tailwind.red.200: "#FFCCCC"
tailwind.red.300: "#FF9999"
tailwind.red.400: "#F26161"
tailwind.red.500: "#D92121"
tailwind.red.600: "#A6111D"
tailwind.red.700: "#800D17"
tailwind.red.800: "#590910"
tailwind.red.900: "#400005"
tailwind.red.950: "#400005"
```

## Yellow

```yaml
tailwind.yellow.50: "#FFFDF2"
tailwind.yellow.100: "#FFF9D9"
tailwind.yellow.200: "#FFF2B2"
tailwind.yellow.300: "#FFE566"
tailwind.yellow.400: "#F2D230"
tailwind.yellow.500: "#D9B500"
tailwind.yellow.600: "#A67C00"
tailwind.yellow.700: "#664605"
tailwind.yellow.800: "#593C00"
tailwind.yellow.900: "#402B00"
tailwind.yellow.950: "#402B00"
```

## Purple

```yaml
tailwind.purple.50: "#F5F3FF"
tailwind.purple.100: "#EDE9FE"
tailwind.purple.200: "#DED8FE"
tailwind.purple.300: "#BFB2FF"
tailwind.purple.400: "#9F8CFF"
tailwind.purple.500: "#8C66FF"
tailwind.purple.600: "#6D45E5"
tailwind.purple.700: "#4E2DB2"
tailwind.purple.800: "#381C8C"
tailwind.purple.900: "#250F66"
tailwind.purple.950: "#250F66"
```

## Green

```yaml
tailwind.green.50: "#F0FDF4"
tailwind.green.100: "#DCFCE7"
tailwind.green.200: "#BBF7D0"
tailwind.green.300: "#86EFAC"
tailwind.green.400: "#4ADE80"
tailwind.green.500: "#22C55E"
tailwind.green.600: "#16A34A"
tailwind.green.700: "#15803D"
tailwind.green.800: "#166534"
tailwind.green.900: "#14532D"
tailwind.green.950: "#052E16"
```

## Orange

```yaml
tailwind.orange.50: "#FFF7ED"
tailwind.orange.100: "#FFEDD5"
tailwind.orange.200: "#FED7AA"
tailwind.orange.300: "#FDBA74"
tailwind.orange.400: "#FB923C"
tailwind.orange.500: "#F97316"
tailwind.orange.600: "#EA580C"
tailwind.orange.700: "#C2410C"
tailwind.orange.800: "#9A3412"
tailwind.orange.900: "#7C2D12"
tailwind.orange.950: "#431407"
```

## Brown

```yaml
tailwind.brown.50: "#FCF6F1"
tailwind.brown.100: "#FFDFD0"
tailwind.brown.200: "#E6CAAF"
tailwind.brown.300: "#CEAC8D"
tailwind.brown.400: "#B7916D"
tailwind.brown.500: "#926F4E"
tailwind.brown.600: "#6B4F34"
tailwind.brown.700: "#58402A"
tailwind.brown.800: "#3A2919"
tailwind.brown.900: "#281C11"
tailwind.brown.950: "#110C07"
```

# shadcn Theme

Primary and Accent are semantic roles. Their hues change with the active mode.

## Application Shell

Use `background-body` as the base background of the application shell. It sits behind the App Bar, Sidebar, Main Content, and visible layout gutters in every color mode. Do not use it as the Main Content canvas.

```yaml
background-body: "{tailwind.base.black}"
```

## 1. Light Mode

### Background

Use `background-light` as the Main Content background in Light Mode. The application shell behind it uses `background-body`, while `inverse-light` is reserved for dark content sections that need strong contrast.

```yaml
background-light: "{tailwind.base.white}"
inverse-light: "{tailwind.base.black}"
white: "{tailwind.base.white}"
black: "{tailwind.base.black}"
transparent: "{tailwind.base.white}/0%"
```

### Surface

Use surface tokens for containers layered above the page background. `card-light` is the default card surface, `card-low-light` adds subtle separation, and `card-high-light` creates stronger separation for elevated or grouped content.

```yaml
card-light: "{tailwind.base.white}"
card-low-light: "#F9FAFC"
card-high-light: "{colors.muted-light}"
popover-light: "{tailwind.base.white}"
muted-light: "{tailwind.gray.50}"
```

### Foreground

Use foreground tokens to define text and icon hierarchy. `foreground-light` is for primary content, `subtle-foreground-light` for secondary content, and `muted-foreground-light` for placeholders, disabled states, timestamps, and low-emphasis metadata.

```yaml
foreground-light: "{tailwind.base.black}"
subtle-foreground-light: "{tailwind.gray.500}"
muted-foreground-light: "{tailwind.gray.400}"
inverse-foreground-light: "{tailwind.base.white}"
card-foreground-light: "{colors.foreground-light}"
popover-foreground-light: "{colors.foreground-light}"
```

### Brand & Accent

Use brand tokens for actions, navigation states, and key moments. In Light Mode, `primary-light` is Electric Blue for main CTAs, links, and active states, while `accent-light` is Mint for supporting highlights and secondary emphasis.

```yaml
primary-light: "{tailwind.blue.500}"
primary-foreground-light: "{tailwind.blue.50}"
primary-subtle-light: "{tailwind.blue.500}/10%"
primary-outline-light: "{tailwind.blue.500}/50%"
secondary-light: "{tailwind.gray.800}"
secondary-foreground-light: "{tailwind.gray.300}"
secondary-subtle-light: "{tailwind.gray.100}"
secondary-outline-light: "{tailwind.gray.800}/50%"
accent-light: "{tailwind.mint.300}"
accent-foreground-light: "{tailwind.mint.800}"
accent-subtle-light: "{tailwind.mint.300}/20%"
accent-outline-light: "{tailwind.mint.300}/50%"
```

### Semantic

Use semantic tokens only when a color communicates status, priority, or meaning. These tokens should not replace neutral hierarchy unless the UI needs to signal danger, warning, success, categorization, or supporting status.

```yaml
destructive: "{tailwind.red.500}"
destructive-foreground: "{tailwind.red.50}"
destructive-subtle: "{tailwind.red.500}/20%"
warning: "{tailwind.yellow.400}"
warning-foreground: "{tailwind.yellow.900}"
warning-subtle-foreground: "{tailwind.yellow.600}"
warning-subtle: "{tailwind.yellow.400}/20%"
success: "{tailwind.green.500}"
success-foreground: "{tailwind.green.50}"
success-subtle: "{tailwind.green.500}/20%"
purple: "{tailwind.purple.500}"
purple-foreground: "{tailwind.purple.50}"
purple-subtle: "{tailwind.purple.500}/20%"
orange: "{tailwind.orange.500}"
orange-foreground: "{tailwind.orange.50}"
orange-subtle: "{tailwind.orange.500}/20%"
brown-light: "{tailwind.brown.700}"
brown-foreground: "{tailwind.brown.50}"
brown-subtle-light: "{tailwind.brown.700}/20%"
```

### Border & Ring

Use border and ring tokens for structure, input boundaries, focus states, and interactive feedback. Borders should stay neutral and low-emphasis, while rings should be reserved for focus, selection, or active interaction states.

```yaml
border-light: "{tailwind.gray.200}"
input-light: "{tailwind.gray.200}"
ring-light: "{tailwind.blue.400}"
destructive-outline: "{tailwind.red.500}/50%"
warning-outline: "{tailwind.yellow.400}/50%"
success-outline: "{tailwind.green.500}/50%"
purple-outline: "{tailwind.purple.500}/50%"
orange-outline: "{tailwind.orange.500}/50%"
brown-outline-light: "{tailwind.brown.700}/50%"
```

### Sidebar

Use sidebar tokens for persistent navigation surfaces. The sidebar uses an inverse dark surface in Light Mode to create strong product navigation contrast against the main white workspace.

```yaml
sidebar: "{tailwind.base.black}"
sidebar-hover: "{tailwind.gray.800}"
sidebar-foreground: "{tailwind.gray.300}"
sidebar-active: "{tailwind.gray.800}"
sidebar-divider: "{tailwind.gray.800}"
sidebar-accent: "{tailwind.gray.900}"
sidebar-accent-foreground: "{tailwind.mint.300}"
sidebar-border-light: "{tailwind.base.black}"
sidebar-ring: "{tailwind.mint.300}"
hover-white: "{tailwind.mint.300}/20%"
```

### Appbar

Use Appbar tokens for top navigation surfaces. In Dark Mode, appbar surfaces stay aligned with the dark product shell and use Mint accents for active or highlighted navigation states.

```yaml
appbar: "{tailwind.base.black}"
appbar-hover: "{tailwind.gray.800}"
appbar-foreground: "{tailwind.gray.300}"
appbar-active: "{tailwind.gray.800}"
appbar-active-foreground: "{tailwind.base.white}"
appbar-accent: "{tailwind.gray.900}"
appbar-accent-foreground: "{tailwind.mint.300}"
appbar-border: "{tailwind.base.black}"
```

## 2. Dark Mode

### Background

Use `background-dark` as the Main Content background in Dark Mode. The application shell behind it continues to use `background-body`, while `inverse-dark` is reserved for light content sections that need strong contrast.

```yaml
background-dark: "{tailwind.base.black}"
inverse-dark: "{tailwind.base.white}"
white: "{tailwind.base.white}"
black: "{tailwind.base.black}"
transparent: "{tailwind.base.white}/0%"
```

### Surface

Use surface tokens to create depth across dark containers. `card-dark` is the default card surface, `card-low-dark` adds subtle separation, and `card-high-dark` creates stronger contrast for elevated or grouped content.

```yaml
card-dark: "{tailwind.gray.900}"
card-low-dark: "#121723"
card-high-dark: "#121723"
popover-dark: "{tailwind.base.black}"
muted-dark: "#121723"
```

### Foreground

Use foreground tokens to define text and icon hierarchy on dark surfaces. `foreground-dark` is for primary content, `subtle-foreground-dark` for secondary content, and `muted-foreground-dark` for placeholders, disabled states, timestamps, and low-emphasis metadata.

```yaml
foreground-dark: "{tailwind.gray.200}"
subtle-foreground-dark: "{tailwind.gray.400}"
muted-foreground-dark: "{tailwind.gray.500}"
inverse-foreground-dark: "{tailwind.base.black}"
card-foreground-dark: "{colors.foreground-dark}"
popover-foreground-dark: "{colors.foreground-dark}"
```

### Brand & Accent

Use brand tokens for actions, navigation states, and key moments. In Dark Mode, `primary-dark` is Mint for main CTAs, links, and active states, while `accent-dark` is Electric Blue for supporting highlights and secondary emphasis.

```yaml
primary-dark: "{tailwind.mint.300}"
primary-foreground-dark: "{tailwind.mint.600}"
primary-subtle-dark: "{tailwind.mint.300}/10%"
primary-outline-dark: "{tailwind.mint.300}/50%"
secondary-dark: "{tailwind.gray.600}"
secondary-foreground-dark: "{tailwind.gray.100}"
secondary-subtle-dark: "{tailwind.gray.800}"
secondary-outline-dark: "{tailwind.gray.800}/50%"
accent-dark: "{tailwind.blue.500}"
accent-foreground-dark: "{tailwind.blue.50}"
accent-subtle-dark: "{tailwind.blue.500}/20%"
accent-outline-dark: "{tailwind.blue.500}/50%"
```

### Semantic

Use semantic tokens only when a color communicates status, priority, or meaning. These shared semantic tokens remain consistent across modes and should be used for danger, warning, success, categorization, or supporting status.

```yaml
destructive: "{tailwind.red.500}"
destructive-foreground: "{tailwind.red.50}"
destructive-subtle: "{tailwind.red.500}/20%"
warning: "{tailwind.yellow.400}"
warning-foreground: "{tailwind.yellow.900}"
warning-subtle-foreground: "{tailwind.yellow.600}"
warning-subtle: "{tailwind.yellow.400}/20%"
success: "{tailwind.green.500}"
success-foreground: "{tailwind.green.50}"
success-subtle: "{tailwind.green.500}/20%"
purple: "{tailwind.purple.500}"
purple-foreground: "{tailwind.purple.50}"
purple-subtle: "{tailwind.purple.500}/20%"
orange: "{tailwind.orange.500}"
orange-foreground: "{tailwind.orange.50}"
orange-subtle: "{tailwind.orange.500}/20%"
brown-dark: "{tailwind.brown.500}"
brown-foreground: "{tailwind.brown.50}"
brown-subtle-dark: "{tailwind.brown.700}/40%"
```

### Border & Ring

Use border and ring tokens for structure, input boundaries, focus states, and interactive feedback. Dark Mode borders should preserve separation without overpowering the surface, while rings remain reserved for focus, selection, or active interaction states.

```yaml
border-dark: "{tailwind.gray.700}"
input-dark: "{tailwind.gray.700}"
ring-dark: "{tailwind.blue.400}"
destructive-outline: "{tailwind.red.500}/50%"
warning-outline: "{tailwind.yellow.400}/50%"
success-outline: "{tailwind.green.500}/50%"
purple-outline: "{tailwind.purple.500}/50%"
orange-outline: "{tailwind.orange.500}/50%"
brown-outline-dark: "{tailwind.brown.700}/80%"
```

### Sidebar

Use sidebar tokens for persistent navigation surfaces. In Dark Mode, sidebar surfaces stay aligned with the dark product shell, Gray defines active and divided areas, and Mint is reserved for focus indication.

```yaml
sidebar: "{tailwind.base.black}"
sidebar-hover: "{tailwind.gray.800}"
sidebar-foreground: "{tailwind.gray.300}"
sidebar-active: "{tailwind.gray.800}"
sidebar-divider: "{tailwind.gray.800}"
sidebar-accent: "{tailwind.gray.900}"
sidebar-accent-foreground: "{tailwind.mint.300}"
sidebar-border-dark: "{tailwind.gray.800}"
sidebar-ring: "{tailwind.mint.300}"
hover-white: "{tailwind.mint.300}/20%"
```

### Appbar

Use Appbar tokens for top navigation surfaces. In Dark Mode, appbar surfaces stay aligned with the dark product shell and use Mint accents for active or highlighted navigation states.

```yaml
appbar: "{tailwind.base.black}"
appbar-hover: "{tailwind.gray.800}"
appbar-foreground: "{tailwind.gray.300}"
appbar-active: "{tailwind.gray.800}"
appbar-active-foreground: "{tailwind.base.white}"
appbar-accent: "{tailwind.gray.900}"
appbar-accent-foreground: "{tailwind.mint.300}"
appbar-border: "{tailwind.base.black}"
```

# Color Usage

## Light Mode

### Surface Hierarchy

- `background-body`: Base application shell behind the App Bar, Sidebar, Main Content, and layout gutters.
- `background-light`: Main Content background in Light Mode.
- `muted-light`: Secondary sections that need subtle separation.
- `inverse-light`: High-contrast dark surface.
- `card-light`: Default card surface with no additional contrast.
- `card-low-light`: Card surface with low contrast.
- `card-high-light`: Card surface with higher contrast.

### Text Hierarchy

- `foreground-light`: Titles, body text, and active icons.
- `subtle-foreground-light`: Subtitles, descriptions, and inactive icons.
- `muted-foreground-light`: Placeholders, disabled states, and timestamps.
- `inverse-foreground-light`: Text displayed on `inverse-light`.
- `card-foreground-light`: Text displayed on card surfaces.
- `popover-foreground-light`: Text displayed on `popover-light`.

### Common Surfaces and Text Pairings

```yaml
application-body:
  surface: "{colors.background-body}"
  usage: "Base application shell and visible layout gutters"

background:
  surface: "{colors.background-light}"
  usage: "Main Content canvas"
  primaryText: "{colors.foreground-light}"
  secondaryText: "{colors.subtle-foreground-light}"
  tertiaryText: "{colors.muted-foreground-light}"

muted:
  surface: "{colors.muted-light}"
  primaryText: "{colors.foreground-light}"
  secondaryText: "{colors.subtle-foreground-light}"
  tertiaryText: "{colors.muted-foreground-light}"

inverse:
  surface: "{colors.inverse-light}"
  primaryText: "{colors.inverse-foreground-light}"

card:
  surface: "{colors.card-light}"
  primaryText: "{colors.card-foreground-light}"
  secondaryText: "{colors.subtle-foreground-light}"
  tertiaryText: "{colors.muted-foreground-light}"

card-low:
  surface: "{colors.card-low-light}"
  primaryText: "{colors.foreground-light}"
  secondaryText: "{colors.subtle-foreground-light}"
  tertiaryText: "{colors.muted-foreground-light}"

card-high:
  surface: "{colors.card-high-light}"
  primaryText: "{colors.foreground-light}"
  secondaryText: "{colors.subtle-foreground-light}"
  tertiaryText: "{colors.muted-foreground-light}"
```

### Brand and Semantic Colors

Use brand and semantic colors only when communicating an action, status, or priority.

- Solid surfaces use their matching foreground token.
- Subtle surfaces use the explicitly defined text token for that color.
- Do not infer token names because pairing conventions vary by color.

#### Primary

```yaml
solid:
  background: "{colors.primary-light}"
  text: "{colors.primary-foreground-light}"

subtle:
  background: "{colors.primary-subtle-light}"
  text: "{colors.primary-light}"
```

#### Secondary

```yaml
solid:
  background: "{colors.secondary-light}"
  text: "{colors.secondary-foreground-light}"

subtle:
  background: "{colors.secondary-subtle-light}"
  text: "{colors.secondary-light}"
```

#### Accent

```yaml
solid:
  background: "{colors.accent-light}"
  text: "{colors.accent-foreground-light}"

subtle:
  background: "{colors.accent-subtle-light}"
  text: "{colors.accent-foreground-light}"
```

#### Status and Supporting Colors

Each pair is ordered as `[background, text]`.

```yaml
destructive:
  solid: ["{colors.destructive}", "{colors.destructive-foreground}"]
  subtle: ["{colors.destructive-subtle}", "{colors.destructive}"]

warning:
  solid: ["{colors.warning}", "{colors.warning-foreground}"]
  subtle: ["{colors.warning-subtle}", "{colors.warning-subtle-foreground}"]

success:
  solid: ["{colors.success}", "{colors.success-foreground}"]
  subtle: ["{colors.success-subtle}", "{colors.success}"]

purple:
  solid: ["{colors.purple}", "{colors.purple-foreground}"]
  subtle: ["{colors.purple-subtle}", "{colors.purple}"]

orange:
  solid: ["{colors.orange}", "{colors.orange-foreground}"]
  subtle: ["{colors.orange-subtle}", "{colors.orange}"]

brown:
  solid: ["{colors.brown-light}", "{colors.brown-foreground}"]
  subtle: ["{colors.brown-subtle-light}", "{colors.brown-light}"]
```

## Dark Mode

Use semantic color tokens based on the content background to maintain readability, hierarchy, and accessibility.

### Surface Hierarchy

- `background-body`: Base application shell behind the App Bar, Sidebar, Main Content, and layout gutters.
- `background-dark`: Main Content background in Dark Mode.
- `muted-dark`: Secondary sections that need low contrast.
- `inverse-dark`: High-contrast light surface.
- `card-dark`: Default card surface with no additional contrast.
- `card-low-dark`: Card surface with low contrast.
- `card-high-dark`: Card surface with higher contrast.

### Text Hierarchy

- `foreground-dark`: Titles, body text, and active icons.
- `subtle-foreground-dark`: Subtitles, descriptions, and inactive icons.
- `muted-foreground-dark`: Placeholders, disabled states, and timestamps.
- `inverse-foreground-dark`: Text displayed on `inverse-dark`.
- `card-foreground-dark`: Text displayed on card surfaces.
- `popover-foreground-dark`: Text displayed on `popover-dark`.

### Common Surfaces and Text Pairings

```yaml
application-body:
  surface: "{colors.background-body}"
  usage: "Base application shell and visible layout gutters"

background:
  surface: "{colors.background-dark}"
  usage: "Main Content canvas"
  primaryText: "{colors.foreground-dark}"
  secondaryText: "{colors.subtle-foreground-dark}"
  tertiaryText: "{colors.muted-foreground-dark}"

muted:
  surface: "{colors.muted-dark}"
  primaryText: "{colors.foreground-dark}"
  secondaryText: "{colors.subtle-foreground-dark}"
  tertiaryText: "{colors.muted-foreground-dark}"

inverse:
  surface: "{colors.inverse-dark}"
  primaryText: "{colors.inverse-foreground-dark}"

card:
  surface: "{colors.card-dark}"
  primaryText: "{colors.card-foreground-dark}"
  secondaryText: "{colors.subtle-foreground-dark}"
  tertiaryText: "{colors.muted-foreground-dark}"

card-low:
  surface: "{colors.card-low-dark}"
  primaryText: "{colors.foreground-dark}"
  secondaryText: "{colors.subtle-foreground-dark}"
  tertiaryText: "{colors.muted-foreground-dark}"

card-high:
  surface: "{colors.card-high-dark}"
  primaryText: "{colors.foreground-dark}"
  secondaryText: "{colors.subtle-foreground-dark}"
  tertiaryText: "{colors.muted-foreground-dark}"
```

### Brand and Semantic Colors

Use brand and semantic colors only when communicating an action, status, or priority.

- Solid surfaces use their matching foreground token.
- Subtle surfaces use the explicitly defined text token for that color.
- Do not infer token names because pairing conventions vary by color.

#### Primary

```yaml
solid:
  background: "{colors.primary-dark}"
  text: "{colors.primary-foreground-dark}"

subtle:
  background: "{colors.primary-subtle-dark}"
  text: "{colors.primary-dark}"
```

#### Secondary

```yaml
solid:
  background: "{colors.secondary-dark}"
  text: "{colors.secondary-foreground-dark}"

subtle:
  background: "{colors.secondary-subtle-dark}"
  text: "{colors.secondary-foreground-dark}"
```

#### Accent

```yaml
solid:
  background: "{colors.accent-dark}"
  text: "{colors.accent-foreground-dark}"

subtle:
  background: "{colors.accent-subtle-dark}"
  text: "{colors.accent-foreground-dark}"
```

#### Status and Supporting Colors

Each pair is ordered as `[background, text]`.

```yaml
destructive:
  solid: ["{colors.destructive}", "{colors.destructive-foreground}"]
  subtle: ["{colors.destructive-subtle}", "{colors.destructive}"]

warning:
  solid: ["{colors.warning}", "{colors.warning-foreground}"]
  subtle: ["{colors.warning-subtle}", "{colors.warning-subtle-foreground}"]

success:
  solid: ["{colors.success}", "{colors.success-foreground}"]
  subtle: ["{colors.success-subtle}", "{colors.success}"]

purple:
  solid: ["{colors.purple}", "{colors.purple-foreground}"]
  subtle: ["{colors.purple-subtle}", "{colors.purple}"]

orange:
  solid: ["{colors.orange}", "{colors.orange-foreground}"]
  subtle: ["{colors.orange-subtle}", "{colors.orange}"]

brown:
  solid: ["{colors.brown-dark}", "{colors.brown-foreground}"]
  subtle: ["{colors.brown-subtle-dark}", "{colors.brown-foreground}"]
```

# Typography Tokens

Typography token definitions.

## Google Fonts

Add once inside the document `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Outfit:wght@100..900&display=swap">
```

## Display Headings

```yaml
h1-regular:
  usage: "Hero and landing-page headlines"
  fontFamily: "Outfit"
  fontSize: 64px
  lineHeight: "120%"
  fontWeight: 400

h1-uppercase:
  usage: "Uppercase hero and landing-page headlines"
  fontFamily: "Outfit"
  fontSize: 64px
  lineHeight: "120%"
  fontWeight: 300
  textTransform: "uppercase"

h1-bold:
  usage: "Emphasized hero and landing-page headlines"
  fontFamily: "Outfit"
  fontSize: 64px
  lineHeight: "120%"
  fontWeight: 600

h2-regular:
  usage: "Page titles and major sections"
  fontFamily: "Outfit"
  fontSize: 56px
  lineHeight: "120%"
  fontWeight: 400

h2-uppercase:
  usage: "Uppercase page titles and major sections"
  fontFamily: "Outfit"
  fontSize: 56px
  lineHeight: "120%"
  fontWeight: 300
  textTransform: "uppercase"

h2-bold:
  usage: "Emphasized page titles and major sections"
  fontFamily: "Outfit"
  fontSize: 56px
  lineHeight: "120%"
  fontWeight: 600
```

## Interface Headings

```yaml
h3-regular:
  usage: "Primary page title and card titles"
  fontFamily: "DM Sans"
  fontSize: 48px
  lineHeight: "120%"
  fontWeight: 400

h3-uppercase:
  usage: "Uppercase primary page title and card titles"
  fontFamily: "DM Sans"
  fontSize: 48px
  lineHeight: "120%"
  fontWeight: 300
  textTransform: "uppercase"

h3-bold:
  usage: "Emphasized primary page title and card titles"
  fontFamily: "DM Sans"
  fontSize: 48px
  lineHeight: "120%"
  fontWeight: 600

h4-regular:
  usage: "Sub-sections header and sidebar headers"
  fontFamily: "DM Sans"
  fontSize: 40px
  lineHeight: "120%"
  fontWeight: 400

h4-uppercase:
  usage: "Uppercase sub-sections header and sidebar headers"
  fontFamily: "DM Sans"
  fontSize: 40px
  lineHeight: "120%"
  fontWeight: 300
  textTransform: "uppercase"

h4-bold:
  usage: "Emphasized sub-sections header and sidebar headers"
  fontFamily: "DM Sans"
  fontSize: 40px
  lineHeight: "120%"
  fontWeight: 600

h5-regular:
  usage: "Dialog titles and card headers"
  fontFamily: "DM Sans"
  fontSize: 32px
  lineHeight: "120%"
  fontWeight: 400

h5-bold:
  usage: "Emphasized dialog titles and card headers"
  fontFamily: "DM Sans"
  fontSize: 32px
  lineHeight: "120%"
  fontWeight: 600

h6-regular:
  usage: "Form groups and small headers"
  fontFamily: "DM Sans"
  fontSize: 24px
  lineHeight: "120%"
  fontWeight: 400

h6-bold:
  usage: "Emphasized form groups and small headers"
  fontFamily: "DM Sans"
  fontSize: 24px
  lineHeight: "120%"
  fontWeight: 600
```

## Body Text

```yaml
text-lg-regular:
  usage: "Introductory paragraphs and lead copy"
  fontFamily: "DM Sans"
  fontSize: 18px
  lineHeight: "150%"
  fontWeight: 400

text-lg-bold:
  usage: "Emphasized lead copy"
  fontFamily: "DM Sans"
  fontSize: 18px
  lineHeight: "150%"
  fontWeight: 600

text-base-regular:
  usage: "Default UI body copy"
  fontFamily: "DM Sans"
  fontSize: 16px
  lineHeight: "150%"
  fontWeight: 400

text-base-bold:
  usage: "Emphasized UI body copy"
  fontFamily: "DM Sans"
  fontSize: 16px
  lineHeight: "150%"
  fontWeight: 600

text-base-mono:
  usage: "Code, data, identifiers, and token values"
  fontFamily: "DM Mono"
  fontSize: 16px
  lineHeight: "150%"
  fontWeight: 400

text-sm-regular:
  usage: "Tooltips, card descriptions, and the base font for every Button variant"
  fontFamily: "DM Sans"
  fontSize: 14px
  lineHeight: "150%"
  fontWeight: 400

text-sm-bold:
  usage: "Emphasized tooltips and descriptions"
  fontFamily: "DM Sans"
  fontSize: 14px
  lineHeight: "150%"
  fontWeight: 600

text-sm-mono:
  usage: "Compact data and technical details"
  fontFamily: "DM Mono"
  fontSize: 14px
  lineHeight: "150%"
  fontWeight: 400
```

## Captions & Element Text

```yaml
text-xs-regular:
  usage: "Captions, timestamps, and footnotes"
  fontFamily: "DM Sans"
  fontSize: 12px
  lineHeight: "150%"
  fontWeight: 400

text-xs-bold:
  usage: "Emphasized captions and metadata"
  fontFamily: "DM Sans"
  fontSize: 12px
  lineHeight: "150%"
  fontWeight: 600

text-xs-mono:
  usage: "Compact metadata and technical captions"
  fontFamily: "DM Mono"
  fontSize: 12px
  lineHeight: "150%"
  fontWeight: 400

text-xs-uppercase:
  usage: "Uppercase metadata and labels"
  fontFamily: "DM Sans"
  fontSize: 12px
  lineHeight: "150%"
  fontWeight: 400
  textTransform: "uppercase"

text-xxs-regular:
  usage: "Compact control and element labels"
  fontFamily: "DM Sans"
  fontSize: 10px
  lineHeight: "150%"
  fontWeight: 400

text-xxs-bold:
  usage: "Emphasized compact element labels"
  fontFamily: "DM Sans"
  fontSize: 10px
  lineHeight: "150%"
  fontWeight: 600

text-xxs-uppercase:
  usage: "Uppercase micro-labels and status indicators"
  fontFamily: "DM Sans"
  fontSize: 10px
  lineHeight: "150%"
  fontWeight: 400
  textTransform: "uppercase"
  letterSpacing: "1.6%"
```

# Layout Guideline

## Application Shell

- Apply `background-body` to the outer application shell.
- Arrange the shell as a vertical layout with the App Bar first and the workspace below it.
- Set the application shell height to the dynamic viewport height (`100dvh`) and prevent the document body from scrolling.
- The workspace contains the Sidebar and Main Content in a horizontal layout.
- Set the workspace height to the remaining viewport height (`calc(100dvh - 72px)`), apply `min-height: 0`, and clip workspace overflow so its children own their scrolling behavior.

## App Bar

- Place the App Bar at the top of the application shell.
- Use a fixed height of `72px` and the full available width.
- Keep the App Bar outside `SidebarProvider` so collapsing the Sidebar does not move or resize it.
- The App Bar sidebar toggle and the Sidebar trigger must control the same `SidebarProvider` open state.
- Arrange App Bar content in three horizontal clusters: left, center-left, and right.
- The left cluster contains the sidebar toggle, Omise logo, and workspace name in that order with a `12px` gap.
- The center-left cluster contains workspace-specific menu items.
- The right cluster contains the Merchant-only mode switcher, user identity, and avatar menu with a `12px` gap.
- Stack the user name above the email address and align both lines to the right.

## Sidebar

- Place the Sidebar at the left edge below the App Bar.
- Use a width of `288px` when expanded.
- Set the Sidebar height to the full workspace height (`calc(100dvh - 72px)`) at every viewport size and clip overflow on the Sidebar root.
- Keep the Sidebar adjacent to Main Content without applying the Main Content gutter to it.
- When the Sidebar collapses, Main Content expands into the released horizontal space.
- Arrange the Sidebar as a vertical layout with `SidebarContent` above `SidebarFooter`.
- Apply `min-height: 0` to `SidebarContent`, allow it to fill all space above `SidebarFooter`, and make it the only vertically scrollable region inside the Sidebar.
- Apply `16px` vertical and `12px` horizontal padding to `SidebarContent`, creating a `264px` content width when the Sidebar is expanded.
- Stack `SidebarGroup` sections vertically with an `8px` gap between their labels and menu content.
- Arrange each menu button horizontally as a leading icon, label, and optional trailing action.
- Place `SidebarMenuSub` directly below its parent menu button and indent submenu labels by `40px` from the content edge.
- Keep `SidebarFooter` fixed to the bottom edge of the Sidebar, outside the `SidebarContent` scroll region, and prevent it from shrinking or scrolling.
- Separate `SidebarFooter` from the scrollable content with a top divider and use the Sidebar background behind it.
- Arrange footer items vertically with an `8px` gap and `16px` vertical and `12px` horizontal padding.
- Place `SidebarTrigger` inside `SidebarFooter` as its final item so it always remains at the bottom of the Sidebar.

## Main Content

- Place Main Content to the right of the Sidebar and allow it to fill the remaining width.
- Apply `8px` padding around the Main Content container. The visible space around the container uses `background-body`.
- Set the Main Content gutter height to the full workspace height (`calc(100dvh - 72px)`) and apply `min-height: 0`.
- Make the Main Content canvas fill the gutter's available inner height after the required `8px` outer padding.
- Apply a `12px` corner radius to the Main Content container and clip overflowing content.
- Use `background-light` for the Main Content canvas in Light Mode and `background-dark` in Dark Mode.
- Make the Main Content canvas vertically scrollable while keeping the App Bar, Sidebar, and Sidebar Footer stationary.
- Do not allow Main Content overflow to increase the document height or move the application shell.
- Keep page-level padding, headers, sections, and cards inside the Main Content canvas.

# Components

## Sidebar

```yaml
sidebar-provider:
component: "<SidebarProvider>"
defaultOpen: true

sidebar:
component: "<Sidebar>"
side: "left"
collapsible: "icon"
width: 288px
height: "calc(100dvh - 72px)"
minHeight: 0
overflow: "hidden"
backgroundColor: "{colors.sidebar}"
textColor: "{colors.sidebar-foreground}"
borderRight:
  width: 1px
  color:
    light: "{colors.sidebar-border-light}"
    dark: "{colors.sidebar-border-dark}"

sidebar-content:
component: "<SidebarContent>"
flex: 1
minHeight: 0
overflowY: "auto"
padding: 16px 12px
gap: 8px
itemWidth: 264px

sidebar-group:
component: "<SidebarGroup>"
gap: 8px

sidebar-group-label:
component: "<SidebarGroupLabel>"
padding: 8px 16px 4px
typography: "{text-xxs-uppercase}"
textColor: "{colors.subtle-foreground}"

sidebar-menu:
component: "<SidebarMenu>"

sidebar-menu-item:
component: "<SidebarMenuItem>"

sidebar-menu-button:
component: "<SidebarMenuButton>"
height: 41px
padding: 10px 12px
gap: 12px
rounded: 6px
iconSize: 16px
typography: "{typography.text-sm-regular}"
textColor: "{colors.sidebar-foreground}"

sidebar-menu-button-hover:
backgroundColor: "{colors.sidebar-hover}"

sidebar-menu-button-active:
backgroundColor: "{colors.sidebar-active}"
textColor: "{colors.sidebar-foreground}"

sidebar-menu-action:
component: "<SidebarMenuAction>"
icons: ["chevron-down", "chevron-up"]
iconSize: 16px

sidebar-menu-sub:
component: "<SidebarMenuSub>"

sidebar-menu-sub-item:
component: "<SidebarMenuSubItem>"

sidebar-menu-sub-button:
component: "<SidebarMenuSubButton>"
minHeight: 32px
padding: 10px 12px 10px 40px
rounded: 6px
typography: "{typography.text-sm-regular}"
textColor: "{colors.sidebar-foreground}"

sidebar-footer:
component: "<SidebarFooter>"
width: 288px
position: "sticky"
bottom: 0
flexShrink: 0
padding: 16px 12px
gap: 8px
backgroundColor: "{colors.sidebar}"
borderTop:
  width: 1px
  color: "{colors.sidebar-divider}"

sidebar-trigger:
component: "<SidebarTrigger>"
height: 41px
padding: 10px 12px
gap: 8px
behavior: "Toggle the SidebarProvider open state"
icon:
  expanded: "panel-right-open"
  collapsed: "panel-right-close"
iconSize: 16px
label:
  expanded: "Collapse menu"
  collapsed: "Expand menu"
```

## App Bar

```yaml
appbar-root:
height: 72px
backgroundColor: "{colors.appbar}"
textColor: "{colors.appbar-foreground}"
borderColor: "{colors.appbar-border}"

appbar-sidebar-toggle:
component: "{components.icon-button-xs-secondary-solid}"
icon: "layout-grid"
behavior: "Toggle the SidebarProvider open state"
label:
  expanded: "Collapse sidebar"
  collapsed: "Expand sidebar"

appbar-logo:
height: 20px

appbar-workspace-name:
usage: "Workspace label, such as Merchant, Admin Centre, or Home"
fontFamily: "Outfit"
fontSize: 28px
fontWeight: 200
textColor: "{colors.appbar-accent-foreground}"
textTransform: "uppercase"

appbar-item:
usage: "Workspace-specific menu item in App Bar"
height: 40px
padding: 8px 12px
gap: "{spacing.2}"
rounded: "{rounded.full}"
typography: "{typography.text-sm-regular}"
backgroundColor: "transparent"
textColor: "{colors.appbar-foreground}"

appbar-item-hover:
backgroundColor: "{colors.appbar-hover}"
textColor: "{colors.appbar-active-foreground}"

appbar-item-active:
backgroundColor: "{colors.appbar-active}"
textColor: "{colors.appbar-active-foreground}"

appbar-item-focus:
ringColor: "{colors.sidebar-ring}"
ringWidth: 2px

appbar-mode-switcher:
usage: "Dashboard mode switcher for Test and Live. Only available in Merchant Workspace and hidden in other workspaces."
height: 40px
padding: 6px
rounded: "{rounded.full}"
backgroundColor: "{colors.appbar-active}"
textColor: "{colors.appbar-foreground}"
typography: "{typography.text-sm-regular}"

appbar-mode-switcher-test-selected:
backgroundColor: "{colors.warning}"
textColor: "{colors.warning-foreground}"
typography: "{typography.text-sm-bold}"

appbar-mode-switcher-live-selected:
backgroundColor: "{colors.success}"
textColor: "{colors.success-foreground}"
typography: "{typography.text-sm-bold}"

appbar-mode-switcher-disabled:
opacity: 50%

appbar-user-name:
typography: "{typography.text-xs-bold}"
textColor: "{colors.appbar-foreground}"

appbar-user-email:
typography: "{typography.text-xs-regular}"
textColor: "{colors.appbar-foreground}"

appbar-avatar:
usage: "Avatar menu showing the first letter of the user's first name and last name"
backgroundColor: "{colors.accent-subtle-dark}"
textColor: "{colors.accent-dark}"
```

## Button

```yaml
button-base:
component: "<Button>"
layout: "inline-flex items-center justify-center"
gap: "{gap-1}"
rounded: "{rounded-md}"
typography: "{typography.text-sm-regular}"
iconSize: 16px
states: ["normal", "hover", "focused", "disabled", "loading"]
variants: ["solid", "subtle", "outline", "ghost", "link"]
colors: ["primary", "secondary", "destructive", "accent", "inverse"]

button-md:
height: "{data-input/h-md}" # 40px
padding: "{padding/p-2} {padding/p-3}" # 8px 12px

button-sm:
height: "{data-input/h-sm}" # 32px
padding: "{padding/p-1,5} {padding/p-3}" # 6px 12px

button-icon-slot:
usage: "Start and end icons inside Button"
size: 16px
gap: "{gap-1}"
iconLibrary: "Lucide"

button-state-hover:
usage: "Use the matching hover token for the selected color and variant."

button-state-focused:
ring:
  primary: "{focus ring/2px - Primary}"
  secondary: "{focus ring/2px - Primary}"
  accent: "{focus ring/2px - Primary}"
  inverse: "{focus ring/2px - Primary}"
  destructive: "{focus ring/2px - Destructive}"

button-state-disabled:
opacity: "{states/disabled}" # 50%
cursor: "not-allowed"

button-state-loading:
usage: "Replace start/end icons with loading indicator while preserving size, height, and horizontal padding."

button-primary-solid:
backgroundColor: "{colors.primary}"
textColor: "{colors.primary-foreground}"

button-primary-subtle:
backgroundColor: "{colors.primary-subtle}"
textColor: "{colors.primary}"

button-primary-outline:
backgroundColor: "transparent"
borderColor: "{colors.primary-outline}"
textColor: "{colors.primary}"

button-primary-ghost:
backgroundColor: "transparent"
textColor: "{colors.primary}"

button-primary-link:
backgroundColor: "transparent"
textColor: "{colors.primary}"
textDecoration:
  hover: "underline"

button-secondary-solid:
backgroundColor: "{colors.secondary}"
textColor: "{colors.secondary-foreground}"

button-secondary-subtle:
backgroundColor: "{colors.secondary-subtle}"
textColor: "{colors.secondary}"

button-secondary-outline:
backgroundColor: "transparent"
borderColor: "{colors.secondary-outline}"
textColor: "{colors.secondary}"

button-secondary-ghost:
backgroundColor: "transparent"
textColor: "{colors.secondary}"

button-secondary-link:
backgroundColor: "transparent"
textColor: "{colors.secondary}"
textDecoration:
  hover: "underline"

button-destructive-solid:
backgroundColor: "{colors.destructive}"
textColor: "{colors.destructive-foreground}"

button-destructive-subtle:
backgroundColor: "{colors.destructive-subtle}"
textColor: "{colors.destructive}"

button-destructive-outline:
backgroundColor: "transparent"
borderColor: "{colors.destructive-outline}"
textColor: "{colors.destructive}"

button-destructive-ghost:
backgroundColor: "transparent"
textColor: "{colors.destructive}"

button-destructive-link:
backgroundColor: "transparent"
textColor: "{colors.destructive}"
textDecoration:
  hover: "underline"

button-accent-solid:
backgroundColor: "{colors.accent}"
textColor: "{colors.accent-foreground}"

button-accent-subtle:
backgroundColor: "{colors.accent-subtle}"
textColor: "{colors.accent-foreground}"

button-accent-outline:
backgroundColor: "transparent"
borderColor: "{colors.accent-outline}"
textColor: "{colors.accent-foreground}"

button-accent-ghost:
backgroundColor: "transparent"
textColor: "{colors.accent-foreground}"

button-accent-link:
backgroundColor: "transparent"
textColor: "{colors.accent-foreground}"
textDecoration:
  hover: "underline"

button-inverse-solid:
backgroundColor: "{colors.inverse}"
textColor: "{colors.inverse-foreground}"

button-inverse-subtle:
backgroundColor: "{colors.inverse}/10%"
textColor: "{colors.inverse}"

button-inverse-outline:
backgroundColor: "transparent"
borderColor: "{colors.inverse-outline}"
textColor: "{colors.inverse}"

button-inverse-ghost:
backgroundColor: "transparent"
textColor: "{colors.inverse}"

button-inverse-link:
backgroundColor: "transparent"
textColor: "{colors.inverse}"
textDecoration:
  hover: "underline"

icon-button-base:
component: "<IconButton>"
layout: "inline-flex items-center justify-center"
gap: "{gap-1}"
padding: "{p-0}"
rounded: "{rounded-md}"
states: ["normal", "hover", "focused", "disabled"]
variants: ["solid", "subtle", "outline", "ghost"]
colors: ["primary", "secondary", "destructive", "mint", "muted"]

icon-button-md:
size: 40px
iconSize: 16px
padding: "{padding/p-3}" # 12px

icon-button-sm:
size: 32px
iconSize: 16px
padding: "{padding/p-2}" # 8px

icon-button-xs:
size: 28px
iconSize: 16px
padding: "{padding/p-1,5}" # 6px

icon-button-xxs:
size: 20px
iconSize: 16px
padding: "{padding/p-0,5}" # 2px

icon-button-state-focused:
ring:
  primary: "{focus ring/2px - Primary}"
  secondary: "{focus ring/2px - Primary}"
  mint: "{focus ring/2px - Primary}"
  muted: "{focus ring/2px - Primary}"
  destructive: "{focus ring/2px - Destructive}"

icon-button-state-disabled:
opacity: "{states/disabled}" # 50%
cursor: "not-allowed"

icon-button-primary-solid:
backgroundColor: "{colors.primary}"
textColor: "{colors.primary-foreground}"

icon-button-primary-subtle:
backgroundColor: "{colors.primary-subtle}"
textColor: "{colors.primary}"

icon-button-primary-outline:
backgroundColor: "transparent"
borderColor: "{colors.primary-outline}"
textColor: "{colors.primary}"

icon-button-primary-ghost:
backgroundColor: "transparent"
textColor: "{colors.primary}"

icon-button-secondary-solid:
backgroundColor: "{colors.secondary}"
textColor: "{colors.secondary-foreground}"

icon-button-secondary-subtle:
backgroundColor: "{colors.secondary-subtle}"
textColor: "{colors.secondary}"

icon-button-secondary-outline:
backgroundColor: "transparent"
borderColor: "{colors.secondary-outline}"
textColor: "{colors.secondary}"

icon-button-secondary-ghost:
backgroundColor: "transparent"
textColor: "{colors.secondary}"

icon-button-destructive-solid:
backgroundColor: "{colors.destructive}"
textColor: "{colors.destructive-foreground}"

icon-button-destructive-subtle:
backgroundColor: "{colors.destructive-subtle}"
textColor: "{colors.destructive}"

icon-button-destructive-outline:
backgroundColor: "transparent"
borderColor: "{colors.destructive-outline}"
textColor: "{colors.destructive}"

icon-button-destructive-ghost:
backgroundColor: "transparent"
textColor: "{colors.destructive}"

icon-button-mint-solid:
backgroundColor: "{colors.accent}"
textColor: "{colors.accent-foreground}"

icon-button-mint-subtle:
backgroundColor: "{colors.accent-subtle}"
textColor: "{colors.accent-foreground}"

icon-button-mint-outline:
backgroundColor: "transparent"
borderColor: "{colors.accent-outline}"
textColor: "{colors.accent-foreground}"

icon-button-mint-ghost:
backgroundColor: "transparent"
textColor: "{colors.accent-foreground}"

icon-button-muted-solid:
backgroundColor: "{colors.muted}"
textColor: "{colors.foreground}"

icon-button-muted-subtle:
backgroundColor: "{colors.muted}"
textColor: "{colors.foreground}"

icon-button-muted-outline:
backgroundColor: "transparent"
borderColor: "{colors.border}"
textColor: "{colors.foreground}"

icon-button-muted-ghost:
backgroundColor: "transparent"
textColor: "{colors.foreground}"
```

## Badge

```yaml
badge-base:
layout: "inline-flex items-center"
gap: "{spacing.1}"
labelTypography: "12px / weight 500 / line-height 16px — implement as `text-xs font-medium leading-4`"

badge-icon:
size: "12px"

badge-size-default:
padding: "2px 10px"

badge-size-lg:
padding: "8px 16px"
height: "32px"

badge-shape-pill:
borderRadius: "{rounded.full}"

badge-shape-rect:
borderRadius: "{rounded.md}"

badge-primary-solid:
backgroundColor:
  light: "{colors.primary-light}"
  dark: "{colors.primary-dark}"
textColor:
  light: "{colors.primary-foreground-light}"
  dark: "{colors.primary-foreground-dark}"

badge-primary-subtle:
backgroundColor:
  light: "{colors.primary-subtle-light}"
  dark: "{colors.primary-subtle-dark}"
textColor:
  light: "{colors.primary-light}"
  dark: "{colors.primary-dark}"

badge-primary-outline:
backgroundColor: "transparent"
borderColor:
  light: "{colors.primary-outline-light}"
  dark: "{colors.primary-outline-dark}"
textColor:
  light: "{colors.primary-light}"
  dark: "{colors.primary-dark}"

badge-secondary-solid:
backgroundColor:
  light: "{colors.secondary-light}"
  dark: "{colors.secondary-dark}"
textColor:
  light: "{colors.secondary-foreground-light}"
  dark: "{colors.secondary-foreground-dark}"

badge-secondary-subtle:
backgroundColor:
  light: "{colors.secondary-subtle-light}"
  dark: "{colors.secondary-subtle-dark}"
textColor:
  light: "{colors.secondary-light}"
  dark: "{colors.secondary-foreground-dark}"

badge-secondary-outline:
backgroundColor: "transparent"
borderColor:
  light: "{colors.secondary-outline-light}"
  dark: "{colors.secondary-outline-dark}"
textColor:
  light: "{colors.secondary-light}"
  dark: "{colors.secondary-foreground-dark}"

badge-accent-solid:
backgroundColor:
  light: "{colors.accent-light}"
  dark: "{colors.accent-dark}"
textColor:
  light: "{colors.accent-foreground-light}"
  dark: "{colors.accent-foreground-dark}"

badge-accent-subtle:
backgroundColor:
  light: "{colors.accent-subtle-light}"
  dark: "{colors.accent-subtle-dark}"
textColor:
  light: "{colors.accent-foreground-light}"
  dark: "{colors.accent-foreground-dark}"

badge-accent-outline:
backgroundColor: "transparent"
borderColor:
  light: "{colors.accent-outline-light}"
  dark: "{colors.accent-outline-dark}"
textColor:
  light: "{colors.accent-foreground-light}"
  dark: "{colors.accent-foreground-dark}"

badge-success-solid:
backgroundColor: "{colors.success}"
textColor: "#FFFFFF"

badge-success-subtle:
backgroundColor: "{colors.success-subtle}"
textColor: "{colors.success}"

badge-success-outline:
backgroundColor: "transparent"
borderColor: "{colors.success}"
borderOpacity: "50%"
textColor: "{colors.success}"

badge-warning-solid:
backgroundColor: "{colors.warning}"
textColor: "{colors.warning-foreground}"

badge-warning-subtle:
backgroundColor: "{colors.warning-subtle}"
textColor: "{colors.warning-subtle-foreground}"

badge-warning-outline:
backgroundColor: "transparent"
borderColor: "{colors.warning}"
borderOpacity: "50%"
textColor: "{colors.warning-subtle-foreground}"

badge-destructive-solid:
backgroundColor: "{colors.destructive}"
textColor: "#FFFFFF"

badge-destructive-subtle:
backgroundColor: "{colors.destructive-subtle}"
textColor: "{colors.destructive}"

badge-destructive-outline:
backgroundColor: "transparent"
borderColor: "{colors.destructive}"
borderOpacity: "50%"
textColor: "{colors.destructive}"

badge-purple-solid:
backgroundColor: "{colors.purple}"
textColor: "#FFFFFF"

badge-purple-subtle:
backgroundColor: "{colors.purple-subtle}"
textColor: "{colors.purple}"

badge-purple-outline:
backgroundColor: "transparent"
borderColor: "{colors.purple}"
borderOpacity: "50%"
textColor: "{colors.purple}"

badge-brown-solid:
backgroundColor:
  light: "{colors.brown-light}"
  dark: "{colors.brown-dark}"
textColor: "{colors.brown-foreground}"

badge-brown-subtle:
backgroundColor:
  light: "{colors.brown-subtle-light}"
  dark: "{colors.brown-subtle-dark}"
textColor:
  light: "{colors.brown-light}"
  dark: "{colors.brown-foreground}"

badge-brown-outline:
backgroundColor: "transparent"
borderColor:
  light: "{colors.brown-outline-light}"
  dark: "{colors.brown-outline-dark}"
textColor:
  light: "{colors.brown-light}"
  dark: "{colors.brown-foreground}"
```
