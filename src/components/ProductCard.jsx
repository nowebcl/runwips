import React, { useState } from 'react';
import { Eye, ShoppingBag, Flame, Sparkles, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { openQuickView, addToCart, formatCLP } = useCart();
  const [selectedSize, setSelectedSize] = useState('L');
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product, { size: selectedSize, color: 'Negro', gender: 'Hombre' }, 1);
    setTimeout(() => setIsAdding(false), 800);
  };

  return (
    <div
      onClick={() => openQuickView(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-neutral-950 border border-neutral-900 hover:border-rw-cyan/60 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(0,229,255,0.15)] cursor-pointer"
    >
      {/* Product Image Container */}
      <div className="relative aspect-square w-full bg-neutral-900/80 overflow-hidden">
        <img
          src={product.fullImg || product.img}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* HUD Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-rw-cyan text-black font-mono font-black text-[10px] uppercase tracking-wider shadow-md">
              <Flame className="w-3 h-3 fill-black text-black" />
              {product.badge}
            </span>
          )}
          <span className="inline-block px-2 py-0.5 rounded-md bg-black/70 backdrop-blur text-[10px] font-mono text-neutral-300 border border-white/10">
            {product.category}
          </span>
        </div>

        {/* Hover Quick View & Quick Add Action Overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          {/* Quick Size Selector */}
          <div className="flex items-center justify-between bg-black/90 backdrop-blur-md p-1.5 rounded-xl border border-neutral-800">
            <span className="text-[10px] font-mono font-bold text-neutral-400 pl-1.5">TALLA:</span>
            <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
              {['S', 'M', 'L', 'XL'].map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`w-6 h-6 rounded-md font-mono text-[10px] font-bold transition-all ${
                    selectedSize === s
                      ? 'bg-rw-cyan text-black shadow-sm'
                      : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Add Button */}
          <div className="flex gap-2">
            <button
              onClick={handleQuickAdd}
              disabled={isAdding}
              className="flex-1 py-2 px-3 rounded-xl bg-rw-cyan text-black font-mono font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-white hover:shadow-[0_0_15px_#00e5ff] transition-all active:scale-95"
            >
              {isAdding ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>AGREGADO</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>AGREGAR ({selectedSize})</span>
                </>
              )}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                openQuickView(product);
              }}
              className="p-2 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-rw-cyan hover:border-rw-cyan transition-all"
              title="Vista rápida"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Meta */}
      <div className="p-4 flex-1 flex flex-col justify-between bg-neutral-950">
        <div>
          <h3 className="font-montserrat text-sm font-extrabold text-white group-hover:text-rw-cyan transition-colors uppercase tracking-tight line-clamp-1">
            {product.title}
          </h3>
          <p className="text-xs text-neutral-500 font-mono mt-1">
            100% Algodón Peinado // DTF HD
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-neutral-900/80 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-base font-extrabold text-rw-cyan">
              {product.priceFormatted}
            </span>
            <span className="font-mono text-xs text-neutral-600 line-through">
              {product.compareAtPriceFormatted}
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>STOCK</span>
          </div>
        </div>
      </div>
    </div>
  );
}
