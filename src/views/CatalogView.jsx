import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, ArrowUpDown, X, Search, RotateCcw } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import allProducts from '../data/products.json';
import categoriesData from '../data/categories.json';

export default function CatalogView({ selectedCategory, setSelectedCategory }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGender, setSelectedGender] = useState('all'); // all, Hombre, Mujer
  const [selectedSize, setSelectedSize] = useState('all'); // all, S, M, L, XL, XXL
  const [selectedColor, setSelectedColor] = useState('all'); // all, Negro, Blanco
  const [sortBy, setSortBy] = useState('featured'); // featured, price-asc, price-desc, name
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter logic
  const filteredProducts = useMemo(() => {
    return allProducts
      .filter((p) => {
        // Category filter
        if (selectedCategory && selectedCategory !== 'todos') {
          if (selectedCategory === 'anime' && !p.category.includes('Anime')) return false;
          if (selectedCategory === 'gaming' && !p.category.includes('Gaming')) return false;
          if (selectedCategory === 'musica' && !p.category.includes('Música')) return false;
          if (selectedCategory === 'cultura-pop' && !p.category.includes('Pop') && !p.category.includes('Memes')) return false;
          if (selectedCategory === 'straycats' && !p.category.includes('Stray')) return false;
        }

        // Search query
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          if (!p.title.toLowerCase().includes(q) && !p.category.toLowerCase().includes(q)) {
            return false;
          }
        }

        // Gender filter
        if (selectedGender !== 'all' && !p.genders.includes(selectedGender)) {
          return false;
        }

        // Size filter
        if (selectedSize !== 'all' && !p.sizes.includes(selectedSize)) {
          return false;
        }

        // Color filter
        if (selectedColor !== 'all' && !p.colors.includes(selectedColor)) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'name') return a.title.localeCompare(b.title);
        return 0; // default order
      });
  }, [selectedCategory, searchQuery, selectedGender, selectedSize, selectedColor, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('todos');
    setSearchQuery('');
    setSelectedGender('all');
    setSelectedSize('all');
    setSelectedColor('all');
    setSortBy('featured');
  };

  const activeFiltersCount =
    (selectedCategory !== 'todos' ? 1 : 0) +
    (selectedGender !== 'all' ? 1 : 0) +
    (selectedSize !== 'all' ? 1 : 0) +
    (selectedColor !== 'all' ? 1 : 0) +
    (searchQuery !== '' ? 1 : 0);

  return (
    <div className="bg-black min-h-screen py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Heading */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-2">
            <span>RUNWIPS</span>
            <span>/</span>
            <span className="text-rw-cyan">CATÁLOGO</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-neutral-900">
            <div>
              <span className="rw-label text-xs">// TODOS LOS LANZAMIENTOS</span>
              <h1 className="rw-title mt-1 text-3xl sm:text-4xl">
                CATÁLOGO DE DROPS
              </h1>
            </div>

            {/* Top Toolbar (Sort & Mobile Filter Trigger) */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="lg:hidden px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono font-bold text-white flex items-center gap-2 hover:border-rw-cyan"
              >
                <SlidersHorizontal className="w-4 h-4 text-rw-cyan" />
                <span>FILTROS {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
              </button>

              <div className="flex items-center gap-2 bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2">
                <ArrowUpDown className="w-3.5 h-3.5 text-neutral-400" />
                <span className="text-xs font-mono text-neutral-400 hidden sm:inline">Ordenar:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-xs font-mono font-bold text-white focus:outline-none cursor-pointer"
                >
                  <option value="featured" className="bg-neutral-900">Destacados</option>
                  <option value="price-asc" className="bg-neutral-900">Precio: Menor a Mayor</option>
                  <option value="price-desc" className="bg-neutral-900">Precio: Mayor a Menor</option>
                  <option value="name" className="bg-neutral-900">Nombre (A - Z)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar Filter (3 cols) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6 bg-neutral-950 border border-neutral-900 p-6 rounded-3xl sticky top-28">
            
            <div className="flex items-center justify-between pb-3 border-b border-neutral-900">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-rw-cyan" />
                <h3 className="font-mono text-xs font-bold uppercase text-white tracking-wider">Filtros</h3>
              </div>

              {activeFiltersCount > 0 && (
                <button
                  onClick={handleResetFilters}
                  className="text-[11px] font-mono text-rose-400 hover:underline flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Limpiar</span>
                </button>
              )}
            </div>

            {/* Search within catalog */}
            <div>
              <label className="text-[10px] font-mono font-bold uppercase text-neutral-400 block mb-2">Búsqueda rápida</label>
              <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2">
                <Search className="w-3.5 h-3.5 text-neutral-500 mr-2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filtrar por título..."
                  className="w-full bg-transparent text-xs text-white placeholder:text-neutral-600 focus:outline-none"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="text-neutral-500 hover:text-white">
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>

            {/* Categories */}
            <div>
              <label className="text-[10px] font-mono font-bold uppercase text-neutral-400 block mb-2">Categorías</label>
              <div className="space-y-1">
                {categoriesData.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-mono flex items-center justify-between transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-rw-cyan text-black font-black shadow-sm'
                        : 'text-neutral-400 hover:bg-neutral-900 hover:text-white'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] opacity-75">{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Gender / Fit */}
            <div className="pt-4 border-t border-neutral-900">
              <label className="text-[10px] font-mono font-bold uppercase text-neutral-400 block mb-2">Género / Corte</label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'all', label: 'Todos' },
                  { id: 'Hombre', label: 'Hombre' },
                  { id: 'Mujer', label: 'Mujer' }
                ].map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setSelectedGender(g.id)}
                    className={`py-1.5 rounded-lg text-xs font-mono font-bold border transition-all ${
                      selectedGender === g.id
                        ? 'border-rw-cyan bg-rw-cyan/10 text-rw-cyan'
                        : 'border-neutral-800 bg-neutral-900 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="pt-4 border-t border-neutral-900">
              <label className="text-[10px] font-mono font-bold uppercase text-neutral-400 block mb-2">Tallas</label>
              <div className="grid grid-cols-3 gap-1.5">
                {['all', 'S', 'M', 'L', 'XL', 'XXL'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`py-1.5 rounded-lg text-xs font-mono font-bold border transition-all ${
                      selectedSize === s
                        ? 'border-rw-cyan bg-rw-cyan/10 text-rw-cyan'
                        : 'border-neutral-800 bg-neutral-900 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    {s === 'all' ? 'Todas' : s}
                  </button>
                ))}
              </div>
            </div>

            {/* Color */}
            <div className="pt-4 border-t border-neutral-900">
              <label className="text-[10px] font-mono font-bold uppercase text-neutral-400 block mb-2">Color Base</label>
              <div className="flex gap-2">
                {[
                  { id: 'all', label: 'Todos' },
                  { id: 'Negro', label: 'Negro' },
                  { id: 'Blanco', label: 'Blanco' }
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedColor(c.id)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-mono font-bold border transition-all ${
                      selectedColor === c.id
                        ? 'border-rw-cyan bg-rw-cyan/10 text-rw-cyan'
                        : 'border-neutral-800 bg-neutral-900 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

          </aside>

          {/* Right Product Grid (9 cols) */}
          <main className="lg:col-span-9 space-y-6">
            
            {/* Status Bar */}
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 bg-neutral-950 p-4 rounded-2xl border border-neutral-900">
              <span>
                Mostrando <strong className="text-white">{filteredProducts.length}</strong> de {allProducts.length} drops disponibles
              </span>
              <span className="text-rw-cyan font-bold hidden sm:inline">100% Algodón Peinado 24/1</span>
            </div>

            {/* Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-neutral-950 border border-neutral-900 rounded-3xl p-12 text-center space-y-4">
                <h3 className="font-montserrat text-xl font-bold text-white">No se encontraron poleras</h3>
                <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                  No hay productos que coincidan con los filtros seleccionados. Intenta restablecer los filtros para ver todos los drops.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 rounded-xl bg-rw-cyan text-black font-mono font-bold text-xs uppercase hover:bg-white transition-colors"
                >
                  Restablecer Filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

          </main>

        </div>

      </div>

      {/* Mobile Filter Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          <div
            onClick={() => setIsMobileFilterOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-xs bg-neutral-950 border-l border-neutral-800 p-6 overflow-y-auto space-y-6 flex flex-col justify-between">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                  <h3 className="font-mono text-sm font-bold uppercase text-white">Filtros de Catálogo</h3>
                  <button onClick={() => setIsMobileFilterOpen(false)} className="text-neutral-400">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Categories */}
                <div>
                  <label className="text-xs font-mono font-bold uppercase text-neutral-400 block mb-2">Categoría</label>
                  <div className="space-y-1">
                    {categoriesData.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setIsMobileFilterOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-mono flex items-center justify-between ${
                          selectedCategory === cat.id ? 'bg-rw-cyan text-black font-black' : 'text-neutral-300 bg-neutral-900'
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span>{cat.count}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <label className="text-xs font-mono font-bold uppercase text-neutral-400 block mb-2">Talla</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['all', 'S', 'M', 'L', 'XL', 'XXL'].map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`py-2 rounded-xl text-xs font-mono font-bold border ${
                          selectedSize === s ? 'border-rw-cyan bg-rw-cyan text-black' : 'border-neutral-800 bg-neutral-900 text-neutral-300'
                        }`}
                      >
                        {s === 'all' ? 'Todas' : s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-800 space-y-2">
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-full py-3.5 rounded-xl bg-rw-cyan text-black font-mono font-black text-xs uppercase"
                >
                  VER {filteredProducts.length} RESULTADOS
                </button>
                <button
                  onClick={handleResetFilters}
                  className="w-full py-2 text-xs font-mono text-neutral-400 hover:text-white"
                >
                  Limpiar Filtros
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
