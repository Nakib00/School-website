---
name: Academic Heritage
colors:
  surface: '#f8faf3'
  surface-dim: '#d8dbd4'
  surface-bright: '#f8faf3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f5ed'
  surface-container: '#ecefe7'
  surface-container-high: '#e6e9e2'
  surface-container-highest: '#e0e3dc'
  on-surface: '#191d18'
  on-surface-variant: '#40493f'
  inverse-surface: '#2e312d'
  inverse-on-surface: '#eff2ea'
  outline: '#717a6f'
  outline-variant: '#c0c9bc'
  surface-tint: '#2a6b37'
  primary: '#004317'
  on-primary: '#ffffff'
  primary-container: '#1a5c2a'
  on-primary-container: '#8fd394'
  inverse-primary: '#93d697'
  secondary: '#815500'
  on-secondary: '#ffffff'
  secondary-container: '#feb234'
  on-secondary-container: '#6d4700'
  tertiary: '#662035'
  on-tertiary: '#ffffff'
  tertiary-container: '#83374b'
  on-tertiary-container: '#ffacbd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#aef3b1'
  primary-fixed-dim: '#93d697'
  on-primary-fixed: '#002108'
  on-primary-fixed-variant: '#0c5221'
  secondary-fixed: '#ffddb2'
  secondary-fixed-dim: '#ffb94c'
  on-secondary-fixed: '#291800'
  on-secondary-fixed-variant: '#624000'
  tertiary-fixed: '#ffd9df'
  tertiary-fixed-dim: '#ffb1c1'
  on-tertiary-fixed: '#3e0117'
  on-tertiary-fixed-variant: '#772e42'
  background: '#f8faf3'
  on-background: '#191d18'
  surface-variant: '#e0e3dc'
typography:
  headline-lg:
    fontFamily: Noto Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Noto Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Noto Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Noto Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Noto Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Noto Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Noto Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: auto
  max-width: 1200px
---

## Brand & Style
This design system is built to evoke a sense of academic excellence, national pride, and institutional trust. It serves a dual-purpose audience: parents seeking a reliable educational foundation for their children and students looking for a modern, engaging learning environment. 

The aesthetic is **Corporate / Modern** with a subtle infusion of Bangladeshi cultural motifs. It utilizes a structured layout to convey stability, while incorporating geometric border patterns—inspired by traditional Jamdani weaves—to add a distinctive cultural layer. The overall mood is professional yet welcoming, ensuring information is accessible and authoritative.

## Colors
The palette is rooted in the national identity of Bangladesh. The **Primary Deep Green** symbolizes growth and vitality, used for navigation, primary actions, and brand-heavy sections. The **Accent Gold** represents excellence and achievement, reserved for highlights, call-to-actions, and decorative motifs.

Surfaces utilize a warm **Light Gray** to reduce eye strain and provide a more scholarly, "paper-like" feel than pure white. Text is rendered in deep grays rather than pure black to maintain a sophisticated, professional contrast.

## Typography
The design system employs **Noto Sans** for its exceptional bilingual legibility, ensuring that both Bengali and English scripts maintain a consistent visual weight and professional tone. 

Headlines use a bold weight to establish a clear information hierarchy, while body text uses a generous line height (1.6) to improve readability for long-form educational content and announcements. Labels use uppercase styling with slight letter spacing to differentiate metadata from body prose.

## Layout & Spacing
The layout follows a **Fixed Grid** model for desktop to maintain an organized, traditional institutional feel, centered within a 1200px container. It utilizes a 12-column system with 24px gutters.

- **Desktop:** Elements are aligned to the 12-column grid. Large vertical spacing (xl) is used between major sections (e.g., News vs. About Us).
- **Tablet:** Transitions to an 8-column grid with 24px margins.
- **Mobile:** Uses a 4-column fluid grid with 16px side margins. 

Spacing units follow an 8px base grid to ensure mathematical harmony across all components and containers.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and **Ambient Shadows**. This design system avoids aggressive floating effects to remain grounded.

- **Level 0 (Floor):** The Light Gray surface (#f5f5f0) acts as the base canvas.
- **Level 1 (Cards/Sections):** White surfaces (#ffffff) with a very soft, diffused shadow (0px 4px 12px rgba(26, 92, 42, 0.05)) and a subtle 1px border (#e2e2d8).
- **Level 2 (Interactive):** Elements like active input fields or hovered cards increase shadow density and may feature a thin Green or Gold accent border.

Geometric border patterns are applied as "background-stamps" or "dividers" rather than layers, maintaining a flat but textured academic aesthetic.

## Shapes
This design system uses **Rounded** geometry (8px-12px) to soften the institutional nature of the site, making it feel more accessible to students and parents. 

- **Standard Elements:** 0.5rem (8px) for buttons, input fields, and small cards.
- **Large Containers:** 1rem (16px) for hero sections and primary content blocks.
- **Decorative:** Subtle geometric patterns (circles/diamonds) used in the footer and headers should follow these radii for consistency.

## Components
- **Buttons:** 
  - *Primary:* Solid Deep Green background with White text. High contrast, 8px corner radius.
  - *Secondary:* Solid Gold background with Deep Green or Dark Gray text for high-visibility alerts or scholarship CTAs.
  - *Ghost:* Transparent background with a 2px Green border.
- **Cards:** White background, 8px border-radius, soft 0.05 opacity green-tinted shadow. Includes a 4px top-border in Green or Gold to categorize content.
- **Input Fields:** Light gray background (#f5f5f0) with a bottom-only 2px border that turns Green on focus.
- **Chips/Badges:** Used for grade levels (e.g., "Class 5") or subjects. Rounded-pill shape with light primary tints.
- **Lists:** Academic calendars and news lists use a leading icon (Gold diamond) and subtle 1px horizontal separators.
- **Patterns:** A recurring geometric SVG pattern is applied to the Footer background (low opacity green-on-green) and the Header top-bar.