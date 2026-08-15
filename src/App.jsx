import React, { useState, useEffect } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import Header from './components/Header';
import HomeView from './views/HomeView';
import CatalogView from './views/CatalogView';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import SizeGuideModal from './components/SizeGuideModal';
import CheckoutModal from './components/CheckoutModal';
import OrderSuccessModal from './components/OrderSuccessModal';
import WhatsAppWidget from './components/WhatsAppWidget';
import { Check } from 'lucide-react';

function AppContent() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'catalog'
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [isScrolled, setIsScrolled] = useState(false);
  const { toastMessage } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      // Trigger header appearance when scrolled down past ~350px
      if (window.scrollY > 350) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreCatalog = (catId = 'todos') => {
    setSelectedCategory(catId);
    setCurrentView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    setCurrentView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col font-sans selection:bg-rw-cyan selection:text-black">
      
      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-neutral-950/95 border border-rw-cyan/80 text-white shadow-[0_0_30px_rgba(0,229,255,0.3)] backdrop-blur-md">
            <div className="w-6 h-6 rounded-full bg-rw-cyan text-black flex items-center justify-center font-bold">
              <Check className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-mono font-semibold">{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Navbar Header (Hidden on home cover, shows on scroll or in catalog) */}
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isScrolled={isScrolled}
      />

      {/* Main View Router */}
      <main className={`flex-1 ${currentView === 'catalog' ? 'pt-24 sm:pt-28' : ''}`}>
        {currentView === 'home' ? (
          <HomeView
            onExploreCatalog={handleExploreCatalog}
            onSelectCategory={handleSelectCategory}
          />
        ) : (
          <CatalogView
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
      </main>

      {/* Footer (Only on catalog / inner pages, not on home page) */}
      {currentView === 'catalog' && <Footer onNavigate={handleExploreCatalog} />}

      {/* Modals & Overlays */}
      <CartDrawer onExploreCatalog={() => handleExploreCatalog('todos')} />
      <ProductModal />
      <SizeGuideModal />
      <CheckoutModal />
      <OrderSuccessModal onContinueShopping={() => handleExploreCatalog('todos')} />
      <WhatsAppWidget />

    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
