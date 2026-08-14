---
name: tailwind-design-system
description: >-
  Advanced Tailwind CSS (v3 & v4) design systems and styling mastery. Use this skill when building or styling web applications with Tailwind CSS, custom design tokens, fluid typography, theme configuration, dark mode strategies, responsive utility compositions, and modern UI components.
---

# Tailwind CSS Design System & Utility Mastery

This skill provides comprehensive patterns for building state-of-the-art responsive user interfaces using Tailwind CSS (supporting both Tailwind CSS v3 and v4 `@theme` specifications).

---

## 1. Modern Configuration & Theme Architecture

### Tailwind v4 `@theme` Setup
```css
@import "tailwindcss";

@theme {
  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-serif: 'Playfair Display', Georgia, serif;
  
  --color-brand-50: #f0fdfa;
  --color-brand-500: #14b8a6;
  --color-brand-600: #0d9488;
  --color-brand-700: #0f766e;
  
  --radius-badge: 9999px;
  --radius-card: 1.25rem;
  
  --shadow-glow: 0 0 20px -5px rgba(20, 184, 166, 0.3);
}
```

## 2. Advanced Utility Composition Patterns

1.  **Group and Peer Modifiers**: `group-hover:translate-x-1`, `peer-checked:bg-brand-600`
2.  **Container Queries**: `@container` on parent and `@sm:grid-cols-2` on children.
3.  **Fluid Typography with `clamp()`**: `text-[clamp(1.5rem,4vw,2.5rem)]`
4.  **Glassmorphism Surfaces**: `bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg`
