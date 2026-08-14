---
name: ecommerce-pro
description: >-
  High-converting E-Commerce architecture and engineering skill. Use this skill when creating, optimizing, or maintaining e-commerce web applications, storefronts, product catalogs, shopping carts, checkout funnels, payment gateways (Stripe, PayPal, MercadoPago), conversion rate optimization (CRO), order management, and analytics tracking.
---

# E-Commerce Pro: Storefronts, Cart & Conversion Engineering

This skill equips the agent with industry-leading architecture for e-commerce platforms, conversion-optimized shopping flows, bulletproof state management, payment integrations, and analytics tracking.

---

## 1. Product Catalog & Variant Matrices

### Data Structure for Products
```json
{
  "id": "prod_aurora_watch_01",
  "title": "Aurora Chrono Automatic Watch",
  "handle": "aurora-chrono-automatic",
  "description": "Handcrafted sapphire glass automatic timepiece with 48-hour power reserve.",
  "price": 24900,
  "compare_at_price": 32900,
  "currency": "USD",
  "inventory_status": "in_stock",
  "inventory_count": 14,
  "images": [
    { "src": "/images/watch-main.jpg", "alt": "Front view of watch" },
    { "src": "/images/watch-side.jpg", "alt": "Side profile view" }
  ],
  "options": [
    { "name": "Color", "values": ["Midnight Black", "Silver Steel", "Rose Gold"] },
    { "name": "Strap", "values": ["Italian Leather", "Mesh Steel", "Silicone"] }
  ],
  "variants": [
    {
      "id": "var_01_black_leather",
      "title": "Midnight Black / Italian Leather",
      "options": { "Color": "Midnight Black", "Strap": "Italian Leather" },
      "price": 24900,
      "sku": "AUR-BLK-LTH",
      "available": true
    }
  ],
  "rating": 4.9,
  "review_count": 128
}
```

---

## 2. Cart & State Management Best Practices

1.  **Slide-Over Drawer Cart**: Provide an instant, frictionless slide-over cart drawer upon adding an item (`add_to_cart`), showing thumbnail, selected variant, quantity adjusters, subtotal, and direct checkout CTA.
2.  **Free Shipping Threshold Meter**: Real-time progress towards free shipping.
3.  **Local Storage Persistence & Multi-Tab Sync**: Ensure the cart state is stored in `localStorage` and synchronized across browser tabs.
4.  **Optimistic UI Updates**: Immediately reflect item addition, quantity increment, and deletion before waiting for server roundtrip, with rollback on error.

---

## 3. High-Converting Checkout Architecture

1.  **1-Step / Express Checkout**: Support Google Pay, Apple Pay, PayPal Express, and Stripe Link for 1-click purchases.
2.  **Order Summary Accordion**: On mobile devices, keep a sticky, collapsible order summary showing subtotal, shipping, discounts, and total.
3.  **Trust & Security Signals**: SSL 256-bit encryption badge, 30-day money-back guarantee, verified reviews.
4.  **Form Optimization**: Single-field full name, address auto-complete, inline credit card brand detection.

---

## 4. CRO (Conversion Rate Optimization) Enhancements

*   **Sticky Mobile Add-to-Cart Bar**: Floating buy bar on mobile PDP.
*   **Frequently Bought Together (Cross-Sells)**: Dynamic bundle checkbox that recalculates bundled discount in real-time.
*   **Urgency & Social Proof**: Stock counters and recent purchase indicators.

---

## 5. Analytics & Event Tracking (GA4 + Pixel)

Always fire standardized e-commerce tracking events:
1.  `view_item_list` (Collection / search result page)
2.  `view_item` (PDP visit)
3.  `add_to_cart` (Item added to cart drawer)
4.  `begin_checkout` (User initiates checkout)
5.  `add_shipping_info` & `add_payment_info`
6.  `purchase` (Order confirmed with transaction ID, revenue, tax, shipping, and items list)
