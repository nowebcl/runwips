import React, { useState, useRef, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Ruler, Sparkles, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import allProducts from '../data/products.json';

export default function Header({ currentView, setCurrentView, selectedCategory, setSelectedCategory, isScrolled }) {
  const { totalItems, setIsCartOpen, setIsSizeGuideOpen, openQuickView } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  // Live search filtering
  const searchResults = searchQuery.trim() === ''
    ? []
    : allProducts.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleNavClick = (view, catId = null) => {
    setCurrentView(view);
    if (catId) {
      setSelectedCategory(catId);
    }
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If on home and NOT scrolled down past hero, hide the header completely so the cover is clean!
  const isHidden = currentView === 'home' && !isScrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-neutral-900 transition-all duration-300 ${
        isHidden ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 group text-left focus:outline-none"
            >
              <div className="flex items-center">
                <span className="font-montserrat text-2xl sm:text-3xl font-black tracking-tighter text-white group-hover:text-neutral-200 transition-colors">
                  RUN
                </span>
                <span className="font-montserrat text-2xl sm:text-3xl font-black tracking-tighter text-rw-cyan group-hover:drop-shadow-[0_0_12px_rgba(0,229,255,0.8)] transition-all">
                  WIPS
                </span>
                <span className="text-rw-cyan font-black text-2xl sm:text-3xl animate-pulse">.</span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-neutral-400">
              <button
                onClick={() => handleNavClick('home')}
                className={`transition-colors hover:text-rw-cyan py-2 relative ${
                  currentView === 'home' ? 'text-white' : ''
                }`}
              >
                Inicio
                {currentView === 'home' && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-rw-cyan shadow-[0_0_8px_#00e5ff]"></span>
                )}
              </button>

              <button
                onClick={() => handleNavClick('catalog', 'todos')}
                className={`transition-colors hover:text-rw-cyan py-2 relative ${
                  currentView === 'catalog' && selectedCategory === 'todos' ? 'text-white' : ''
                }`}
              >
                Catálogo
                {currentView === 'catalog' && selectedCategory === 'todos' && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-rw-cyan shadow-[0_0_8px_#00e5ff]"></span>
                )}
              </button>

              <button
                onClick={() => handleNavClick('catalog', 'anime')}
                className={`transition-colors hover:text-rw-cyan py-2 relative ${
                  currentView === 'catalog' && selectedCategory === 'anime' ? 'text-white' : ''
                }`}
              >
                Anime
              </button>

              <button
                onClick={() => handleNavClick('catalog', 'gaming')}
                className={`transition-colors hover:text-rw-cyan py-2 relative ${
                  currentView === 'catalog' && selectedCategory === 'gaming' ? 'text-white' : ''
                }`}
              >
                Gaming
              </button>

              <button
                onClick={() => handleNavClick('catalog', 'musica')}
                className={`transition-colors hover:text-rw-cyan py-2 relative ${
                  currentView === 'catalog' && selectedCategory === 'musica' ? 'text-white' : ''
                }`}
              >
                Música / Rock
              </button>

              <button
                onClick={() => handleNavClick('catalog', 'cultura-pop')}
                className={`transition-colors hover:text-rw-cyan py-2 relative ${
                  currentView === 'catalog' && selectedCategory === 'cultura-pop' ? 'text-white' : ''
                }`}
              >
                Memes & Pop
              </button>
            </nav>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Live Search */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center bg-neutral-900 border border-rw-cyan/60 rounded-xl px-3 py-1.5 w-56 sm:w-80 shadow-[0_0_15px_rgba(0,229,255,0.15)] transition-all">
                  <Search className="w-4 h-4 text-rw-cyan mr-2 shrink-0" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar polera..."
                    className="w-full bg-transparent text-xs text-white placeholder:text-neutral-500 focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="text-neutral-400 hover:text-white ml-1 p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl border border-neutral-800 bg-neutral-950 flex items-center justify-center text-neutral-300 hover:text-rw-cyan hover:border-rw-cyan/50 hover:bg-neutral-900 transition-all"
                  aria-label="Buscar productos"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}

              {/* Instant Search Results Dropdown */}
              {isSearchOpen && searchResults.length > 0 && (
                <div className="absolute right-0 top-12 w-80 sm:w-96 bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="text-[10px] font-mono uppercase text-rw-cyan tracking-wider px-2 py-1 border-b border-neutral-900 mb-2 flex justify-between">
                    <span>Resultados ({searchResults.length})</span>
                    <span className="text-neutral-500">Presiona para ver</span>
                  </div>
                  <div className="space-y-1 max-h-72 overflow-y-auto">
                    {searchResults.map((prod) => (
                      <div
                        key={prod.id}
                        onClick={() => {
                          openQuickView(prod);
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-neutral-900 cursor-pointer transition-colors group"
                      >
                        <img
                          src={prod.img}
                          alt={prod.title}
                          className="w-12 h-12 object-cover rounded-lg bg-neutral-900 border border-neutral-800 group-hover:border-rw-cyan/40"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-white group-hover:text-rw-cyan truncate">
                            {prod.title}
                          </h4>
                          <span className="text-[10px] text-neutral-400">{prod.category}</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-rw-cyan">
                          {prod.priceFormatted}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Cart Trigger Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2.5 px-3 sm:px-4 h-9 sm:h-10 rounded-xl border border-neutral-800 bg-neutral-950 hover:bg-neutral-900 hover:border-rw-cyan/60 hover:shadow-[0_0_15px_rgba(0,229,255,0.15)] transition-all group"
              aria-label="Abrir carrito de compras"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-neutral-300 group-hover:text-rw-cyan transition-colors" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2.5 min-w-4 h-4 px-1 rounded-full bg-rw-cyan text-black font-mono font-black text-[10px] flex items-center justify-center shadow-md">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-mono font-bold text-xs text-neutral-300 group-hover:text-white">
                CARRO
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-9 sm:w-10 h-9 sm:h-10 rounded-xl border border-neutral-800 bg-neutral-950 flex items-center justify-center text-neutral-300 hover:text-white"
              aria-label="Abrir menú de navegación"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950 border-b border-neutral-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-4">
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center justify-between w-full py-3 text-sm font-bold uppercase tracking-wider text-white border-b border-neutral-900"
            >
              <span>Inicio</span>
              <ChevronRight className="w-4 h-4 text-neutral-600" />
            </button>
            <button
              onClick={() => handleNavClick('catalog', 'todos')}
              className="flex items-center justify-between w-full py-3 text-sm font-bold uppercase tracking-wider text-white border-b border-neutral-900"
            >
              <span>Catálogo Completo (48 Drops)</span>
              <span className="text-xs text-rw-cyan font-mono font-semibold">ALL</span>
            </button>
            <button
              onClick={() => handleNavClick('catalog', 'anime')}
              className="flex items-center justify-between w-full py-3 text-sm font-bold uppercase tracking-wider text-neutral-300 border-b border-neutral-900"
            >
              <span>Anime & Manga</span>
              <ChevronRight className="w-4 h-4 text-neutral-600" />
            </button>
            <button
              onClick={() => handleNavClick('catalog', 'gaming')}
              className="flex items-center justify-between w-full py-3 text-sm font-bold uppercase tracking-wider text-neutral-300 border-b border-neutral-900"
            >
              <span>Gaming & Rol</span>
              <ChevronRight className="w-4 h-4 text-neutral-600" />
            </button>
            <button
              onClick={() => handleNavClick('catalog', 'musica')}
              className="flex items-center justify-between w-full py-3 text-sm font-bold uppercase tracking-wider text-neutral-300 border-b border-neutral-900"
            >
              <span>Música / Rock</span>
              <ChevronRight className="w-4 h-4 text-neutral-600" />
            </button>
            <button
              onClick={() => handleNavClick('catalog', 'cultura-pop')}
              className="flex items-center justify-between w-full py-3 text-sm font-bold uppercase tracking-wider text-neutral-300 border-b border-neutral-900"
            >
              <span>Memes & Cultura Pop</span>
              <ChevronRight className="w-4 h-4 text-neutral-600" />
            </button>
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsSizeGuideOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl border border-neutral-800 bg-neutral-900 text-xs font-mono font-bold uppercase text-neutral-300 flex items-center justify-center gap-2"
            >
              <Ruler className="w-4 h-4 text-rw-cyan" />
              <span>Ver Guía de Tallas (S - XXL)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
