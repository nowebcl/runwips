import React from 'react';
import HeroBanner from '../components/HeroBanner';
import CategoryGrid from '../components/CategoryGrid';
import ProductCarousel from '../components/ProductCarousel';
import ShippingMarquee from '../components/ShippingMarquee';
import OfferSection from '../components/OfferSection';
import allProducts from '../data/products.json';

export default function HomeView({ onExploreCatalog, onSelectCategory }) {
  // Recent drops for carousel (first 10)
  const recentDrops = allProducts.slice(0, 10);

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Banner with video and HUD */}
      <HeroBanner onExploreCatalog={() => onExploreCatalog('todos')} />

      {/* Categories Selection */}
      <CategoryGrid onSelectCategory={onSelectCategory} />

      {/* Featured Drops Carousel */}
      <ProductCarousel
        title="EXPLORA LOS ÚLTIMOS DROPS"
        subtitle="// NUEVA TEMPORADA"
        products={recentDrops}
      />

      {/* Infinite Shipping Marquee with Chilean Regions */}
      <ShippingMarquee />

      {/* Elden Ring Promo Offer Section */}
      <OfferSection />

    </div>
  );
}
