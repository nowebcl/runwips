import React from 'react';
import HeroBanner from '../components/HeroBanner';
import CategoryGrid from '../components/CategoryGrid';
import ProductCarousel from '../components/ProductCarousel';
import ProductCard from '../components/ProductCard';
import ShippingMarquee from '../components/ShippingMarquee';
import OfferSection from '../components/OfferSection';
import allProducts from '../data/products.json';
import { ArrowRight, Flame, Sparkles } from 'lucide-react';

export default function HomeView({ onExploreCatalog, onSelectCategory }) {
  // Recent drops for carousel (first 10)
  const recentDrops = allProducts.slice(0, 10);
  
  // Trending / Hot drops (next 12)
  const trendingDrops = allProducts.slice(10, 22);

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

      {/* Trending Drops Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 pb-4 border-b border-neutral-900 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-rose-500" />
                <span className="rw-label">// MÁS POPULARES</span>
              </div>
              <h2 className="rw-title mt-1">BEST SELLERS DEL MES</h2>
            </div>

            <button
              onClick={() => onExploreCatalog('todos')}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-rw-cyan hover:text-white transition-colors group"
            >
              <span>VER LOS 48 DROPS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {trendingDrops.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onExploreCatalog('todos')}
              className="inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-neutral-950 border border-rw-cyan/60 text-rw-cyan hover:bg-rw-cyan hover:text-black font-mono font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.15)] hover:shadow-[0_0_35px_rgba(0,229,255,0.5)] active:scale-95"
            >
              <span>EXPLORAR CATÁLOGO COMPLETO</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Elden Ring Promo Offer Section */}
      <OfferSection />

    </div>
  );
}
