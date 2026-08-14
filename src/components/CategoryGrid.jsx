import React from 'react';
import { Gamepad2, Tv, Sparkles, Music, Cat, Layers, ChevronRight } from 'lucide-react';
import categoriesData from '../data/categories.json';

const categoryIcons = {
  todos: Layers,
  anime: Tv,
  gaming: Gamepad2,
  musica: Music,
  'cultura-pop': Sparkles,
  straycats: Cat
};

export default function CategoryGrid({ onSelectCategory }) {
  return (
    <section className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HUD Section Header */}
        <div className="mb-8">
          <span className="rw-label">// SELECCIÓN DE DROPS</span>
          <h2 className="rw-title mt-1">EXPLORA EL DROP</h2>
          <div className="rw-separator" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categoriesData.map((cat) => {
            const Icon = categoryIcons[cat.id] || Layers;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="rw-cat-item group text-left rounded-xl"
              >
                <div className="rw-cat-info flex-1">
                  <h3 className="font-montserrat text-lg sm:text-xl font-extrabold text-white group-hover:text-rw-cyan transition-colors">
                    {cat.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="rw-cat-stat font-mono font-semibold text-neutral-400">
                      ITEMS: {cat.count}
                    </span>
                    <span className="text-[10px] text-neutral-600">•</span>
                    <span className="text-[11px] text-neutral-500 truncate max-w-[180px]">
                      {cat.description}
                    </span>
                  </div>
                </div>

                <div className="rw-cat-icon-box rounded-lg shrink-0 ml-4">
                  <Icon className="w-5 h-5 text-rw-cyan group-hover:text-black transition-colors" />
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
