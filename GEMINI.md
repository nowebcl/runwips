# Project Guidelines & Standards: UI/UX & E-Commerce

## 1. UI & Visual Aesthetics Standards
- **Function-First, Premium Aesthetics**: Every component must look meticulous, responsive, and tactile. Avoid cookie-cutter generic templates.
- **Design Tokens**: Standardize colors on modern HSL/OKLCH palettes with proper contrast ratios (WCAG AA minimum 4.5:1).
- **Interactive Feedback**: Every button, input, toggle, and card must have clear `:hover`, `:active`, `:focus-visible`, and `disabled` states with smooth transitions (`150ms-250ms`).
- **Typography**: Clear hierarchy with proportional scaling, proper line-height (`1.5-1.6` for body text), and negative letter-spacing (`tracking-tight`) for major titles.

## 2. E-Commerce Engineering Standards
- **Cart & Persistence**: Always maintain cart state with local storage fallback and multi-tab synchronization.
- **Variant Handling**: Support multi-attribute matrix (Size, Color, Material) with out-of-stock validation.
- **Frictionless Funnel**: Optimize checkout steps with inline error validation, express payment shortcuts (Stripe / Apple Pay / PayPal), and sticky order summaries on mobile.
- **CRO & Analytics**: Integrate standard e-commerce event triggers (`view_item`, `add_to_cart`, `begin_checkout`, `purchase`) and trust signals.
