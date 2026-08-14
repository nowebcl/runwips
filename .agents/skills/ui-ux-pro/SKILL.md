---
name: ui-ux-pro
description: >-
  Expert UI/UX engineering and modern design system skill. Use this skill whenever designing, styling, building, or refining user interfaces (UI), user experience (UX), design systems, typography hierarchies, micro-interactions, responsive layouts, accessibility (a11y), dark/light modes, and modern web animations.
---

# UI/UX Pro: Modern Design System & Interface Engineering

This skill equips the agent with high-standard UI/UX principles, design system tokens, accessible component structures, and fluid micro-interactions to create visually stunning and functional web applications.

---

## Core Design Principles

### 1. Function-Driven & Intentional Design
*   **Visual Hierarchy**: Establish clear dominant elements (H1, Primary CTAs) down to tertiary metadata. Use scale, contrast, weight, and whitespace to guide the eye.
*   **Whitespace Balance**: Generous padding (`px-6 py-8`, `gap-6` or `gap-8`) allows content to breathe and gives a luxury, premium feel. Avoid cramped containers.
*   **Zero Cliché Anti-Patterns**:
    *   NO raw unstyled input borders or harsh 100% black shadows.
    *   NO violet text over pure black unless specifically branded.
    *   NO cluttered bento boxes with decorative icons that convey zero value.
    *   NO generic template placeholders or low-contrast gray text on light gray backgrounds.

### 2. Color System & Design Tokens
*   **Harmonious Color Palettes**: Use modern HSL / OKLCH color spaces.
    *   **Primary Brand**: Dynamic tint ramp (50, 100, 200 ... 900, 950).
    *   **Neutral Surface**: Neutral slate/zinc/gray scale for backgrounds, borders, and card surfaces.
    *   **Semantic Feedback**: Success (Emerald/Green), Warning (Amber), Error (Rose/Red), Info (Sky/Blue).
*   **Surface Elevation & Shadows**:
    *   Subtle layered box-shadows with low opacity: `0 1px 3px 0 rgba(0,0,0,0.05), 0 1px 2px -1px rgba(0,0,0,0.05)`.
    *   Elevated floating cards: `0 10px 25px -5px rgba(0,0,0,0.06), 0 8px 10px -6px rgba(0,0,0,0.04)`.
    *   Subtle border dividers (`border-neutral-200/80` in light mode, `border-neutral-800/80` in dark mode).

### 3. Modern Typography System
*   **Font Stacks**:
    *   *Modern Tech / Minimalist*: Inter, Geist Sans, Plus Jakarta Sans, Figtree.
    *   *Editorial / Luxury / Fashion*: Playfair Display, Cinzel, Instrument Serif paired with Outfit or Plus Jakarta Sans.
    *   *Clean Productive*: SF Pro / system-ui, Roboto, Roboto Flex.
*   **Typographic Ratios**:
    *   H1: `clamp(2rem, 5vw, 3.5rem)` | `font-bold` | `tracking-tight` (`-0.025em`) | `line-height: 1.15`
    *   H2: `clamp(1.5rem, 3.5vw, 2.25rem)` | `font-semibold` | `tracking-tight` | `line-height: 1.25`
    *   H3: `1.25rem - 1.5rem` | `font-semibold` | `tracking-normal`
    *   Body: `1rem` (16px) | `text-neutral-600 dark:text-neutral-300` | `line-height: 1.6`
    *   Caption / Label: `0.75rem - 0.875rem` | `font-medium` | `uppercase tracking-wider` for badges.

---

## Component Architecture & Patterns

### 1. Buttons & Action Elements
*   **Interactive States**: Every interactive element MUST have distinct `:hover`, `:active`, `:focus-visible`, and `disabled` states.
*   **Physics-Based Feel**: Smooth transition durations (`150ms` to `250ms`) using `cubic-bezier(0.16, 1, 0.3, 1)`.

### 2. Form Inputs & Floating Labels
*   High-touch inputs with clear focus indicators, helper hints, error message animations, and accessible labels.
*   Always include `aria-invalid`, `aria-describedby`, and accessible `id`/`for` attributes.

### 3. Modals, Drawers & Overlays
*   **Backdrop Blur**: `backdrop-blur-md bg-neutral-900/40`.
*   **Focus Trap & Escape Key**: Trap keyboard focus within open dialogs and allow closing via ESC key.
*   **Body Scroll Lock**: Prevent background body scrolling when modal/drawer is open (`overflow: hidden`).

---

## Accessibility (A11Y) & Usability Checklist

1.  **Contrast**: Ensure text passes WCAG AA contrast ratio (minimum 4.5:1 for normal text, 3:1 for large text).
2.  **Keyboard Navigation**: Tab index logical flow, visible `:focus-visible` focus ring (`outline: 2px solid var(--primary)`).
3.  **Screen Readers**: Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`, `<section>`).
4.  **Touch Targets**: Minimum 44x44px clickable area for all mobile interactive targets.
