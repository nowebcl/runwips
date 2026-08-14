import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Flame } from 'lucide-react';
import ProductCard from './ProductCard';

export default function ProductCarousel({ title, subtitle, products }) {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Nav buttons */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-rose-500" />
              <span className="rw-label">{subtitle || '// DROPS DESTACADOS'}</span>
            </div>
            <h2 className="rw-title mt-1">{title || 'LANZAMIENTOS RECIENTES'}</h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-xl border border-neutral-800 bg-neutral-950 flex items-center justify-center text-neutral-300 hover:text-rw-cyan hover:border-rw-cyan/50 hover:bg-neutral-900 transition-all active:scale-95"
              aria-label="Desplazar hacia la izquierda"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-xl border border-neutral-800 bg-neutral-950 flex items-center justify-center text-neutral-300 hover:text-rw-cyan hover:border-rw-cyan/50 hover:bg-neutral-900 transition-all active:scale-95"
              aria-label="Desplazar hacia la derecha"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Row */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[260px] sm:w-[290px] shrink-0 snap-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
