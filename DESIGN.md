---
name: Cinematic Neon Discovery
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#ffc640'
  on-secondary: '#402d00'
  secondary-container: '#e3aa00'
  on-secondary-container: '#5a4100'
  tertiary: '#c5c9ff'
  on-tertiary: '#131e8c'
  tertiary-container: '#a3abff'
  on-tertiary-container: '#2c37a0'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#ffdf9f'
  secondary-fixed-dim: '#f9bd22'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5c4300'
  tertiary-fixed: '#e0e0ff'
  tertiary-fixed-dim: '#bdc2ff'
  on-tertiary-fixed: '#000767'
  on-tertiary-fixed-variant: '#2f3aa3'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-hero:
    fontFamily: Outfit
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Outfit
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  metric-badge:
    fontFamily: Outfit
    fontSize: 13px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 2.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system delivers an immersive, theater-grade environment tailored for cinematic media discovery and intelligent recommendation workflows. The target audience encompasses cinephiles, casual viewers, and content curators seeking high-velocity exploration with sensory sophistication. 

The aesthetic marries **Modern Cinematic Glassmorphism** with purposeful dark-mode immersion. UI chrome recedes into deep cosmic tones to prioritize vibrant movie posters and high-resolution video stills, while concentrated electric accents guide discovery and interaction. The emotional goal is suspenseful, elevated, and frictionless—evoking the anticipation of the dimming lights in a screening room paired with crisp, high-tech navigational clarity. Frosted layered surfaces, soft atmospheric light bleeds, and subtle neon glows provide an intuitive visual hierarchy without visual clutter.

## Colors

The palette is engineered exclusively around a dark-first foundation that protects visual stamina and honors cinematic contrast ratios.

- **Primary Accent (`#38bdf8` / Sky-400):** The discovery engine's pulse. Used for primary interactions, active navigation states, interactive score meters, and glowing focal points.
- **Secondary Accent (`#fbbf24` / Amber-400):** The critical evaluation signal. Reserved for star ratings, prestige badges, festival laurels, and top-tier match percentages.
- **Tertiary Accent (`#818cf8` / Indigo-400):** Ambient intelligence. Used for AI recommendation prompts, mood filters, and dynamic genre tags.
- **Neutral Foundations (`#0f172a` base):** Deep slate canvas steps through `#020617` (canvas baseline), `#0f172a` (page background), `#1e293b` (surface container), and `#334155` (structural stroke / hairline dividers).
- **Text & Content Tiers:** `#ffffff` and `#f1f5f9` (high-contrast titles, primary data), `#94a3b8` (metadata, plot synopses, timestamps), and `#64748b` (disabled labels, secondary counters).

## Typography

The type system blends the structural, geometric presence of Outfit for editorial anchors with the legibility of Inter for continuous reading and dense metadata.

- **Headlines:** Use Outfit with tight tracking to evoke the bold title cards of contemporary widescreen cinema.
- **Body & Captions:** Rely on Inter for descriptions, plot overviews, and technical specs, preserving neutral clarity against varying poster color keys.
- **Numbers & Metrics:** Percentage scores, runtimes, and critical review points leverage Outfit's high-visibility numerics for scanning efficiency across discovery carousels.

## Layout & Spacing

A 12-column fluid grid defines layout structures on desktop screens, consolidating to a 6-column architecture on tablets and a 4-column column layout on mobile devices.

- **Media Grids:** Card rails and recommendation shelves adjust responsively. Desktop platforms show 5 to 6 poster cards across 12 columns, tablet reflows to 3 cards, and mobile uses a single-column lead card transitioning into horizontal swipeable strips with peek-ahead margins.
- **Canvas Margins:** Wide 40px (`2.5rem`) outer canvas borders anchor desktop widescreen viewports to avoid visual crowding along monitor edges, collapsing down to 16px (`1rem`) on small viewports.
- **Component Breathing Room:** Poster cards use consistent vertical gaps (`1.5rem`) and compact metadata inner spacing (`0.5rem` to `1rem`) to keep focus centered on artwork.

## Elevation & Depth

Visual depth is achieved through layered glassmorphism, directional backlight bleeds, and hairline border definitions:

- **Surface Layers:**
  - *Base Floor:* Pure matte slate-950 (`#020617` / `#0f172a`).
  - *Floating Container:* Semi-translucent slate-900 at 75% opacity with an active `backdrop-filter: blur(16px)`.
  - *Overlay Modals & Trays:* Slate-900 at 85% opacity with `backdrop-filter: blur(24px)`.
- **Low-Contrast Hairlines:** All floating surfaces utilize a fine 1px border styled with `#334155` at 50% opacity, preventing harsh breaks while separating layers against deep backgrounds.
- **Atmospheric Glows:** Elevations do not rely on standard black drop shadows. Instead, interactive components cast diffused ambient cyan or amber glows (`box-shadow: 0 0 24px -4px rgba(56, 189, 248, 0.25)`) upon hover, simulating radiant display backlighting.

## Shapes

The interface utilizes a rounded corner rhythm (`roundedness: 2`), applying soft curvature that feels tactile yet contemporary.

- **Primary Cards & Containers:** Feature generous `rounded-2xl` (16px to 24px) radii, giving movie posters and recommendation panels a modern screen appearance.
- **Buttons & Controls:** Use `rounded-lg` (8px to 12px) for buttons, text inputs, and filter chips.
- **Badges & Metrics:** Metric pills, age ratings, and genre micro-tags utilize full pill geometries (`rounded-full`) for high-contrast separation from rectangular movie posters.

## Components

### Buttons
- **Primary Action (Play, Match Now):** Electric Sky (`#38bdf8`) fill with slate-950 text (`#020617`, Outfit bold), accompanied by a subtle ambient cyan glow. Hover elevates luminance and broadens glow radius.
- **Secondary Action (Add to Watchlist, Details):** Slate-800 translucent background (`rgba(30, 41, 59, 0.7)`), 1px stroke of `#334155`, high-contrast white text. Hover transitions border color to `#38bdf8`.
- **Icon Actions:** Circular or `rounded-xl` glass frames with 12px padding, subtle border, containing slate-300 icon graphics.

### Media Poster Cards
- **Base Structure:** 2:3 vertical aspect ratio, `rounded-2xl` framing, hidden overflow, subtle hairline boundary.
- **Overlay Information:** Translucent gradient scrim on bottom third (`from-slate-950/90 via-slate-950/40 to-transparent`).
- **Rating Badges:** Floating pill positioned at the top-right corner. Features a frosted dark background (`rgba(15, 23, 42, 0.8)`), 1px gold/cyan border, gold icon/score (`#fbbf24`), or match score (`#38bdf8`).
- **Hover State:** Card scales smoothly (1.03x), border lightens to sky-400 at 50% opacity, casting an ambient glow below the card.

### Filter Chips & Tags
- **Default State:** Frosted dark slate pill (`#1e293b` / 60%), slate-400 label, faint border (`#334155`).
- **Active State:** Cyan-infused surface (`rgba(56, 189, 248, 0.15)`), pure sky-400 typography, sky-400 hairline border.

### Input Fields & Search Bars
- **Cinematic Search Bar:** Floating glass capsule with left-aligned search icon. Fill is `#1e293b` at 60% opacity with `backdrop-filter: blur(12px)`. Inner text in `#f8fafc`, placeholder text in `#64748b`. Focus state triggers a 1px `#38bdf8` perimeter glow.

### Match & Compatibility Meter
- **Component Anatomy:** Circular progress track or micro-bar. Background track in slate-800, active value rendered in Sky-400 glow. Center text displays percentage match using `metric-badge` typography.

### Checkboxes & Segmented Controls
- **Checkboxes:** Custom `rounded-md` (4px) slate-800 box with `#334155` border. Checked state fills with Sky-400 and renders a deep slate check mark.
- **Segmented Control:** Unified `rounded-xl` glass container with an active sliding pill that elevates selected viewing categories (e.g., Movies, Series, Documentaries).