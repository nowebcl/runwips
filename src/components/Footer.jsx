import React from 'react';
import { Ruler, ShieldCheck, Truck, MessageCircle, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Footer({ onNavigate }) {
  const { setIsSizeGuideOpen } = useCart();

  return (
    <footer className="bg-black border-t border-neutral-900 font-sans text-neutral-400">
      
      {/* Top Banner Ticker */}
      <div className="border-b border-neutral-900/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-rw-cyan shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-mono font-bold uppercase text-white">Despachos a todo Chile</h4>
              <p className="text-[11px] text-neutral-500">Santiago en 24-48 hrs / Regiones vía Blue Express</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-rw-cyan shrink-0">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-mono font-bold uppercase text-white">Calce & Tallas Reales</h4>
              <p className="text-[11px] text-neutral-500">100% Algodón Peinado 24/1 DTF Ultra HD</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-rw-cyan shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-mono font-bold uppercase text-white">Garantía de Satisfacción</h4>
              <p className="text-[11px] text-neutral-500">Cambios fáciles y compras 100% protegidas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand Manifesto (2 cols wide) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <span className="font-montserrat text-2xl sm:text-3xl font-black tracking-tighter text-white">
                RUN
              </span>
              <span className="font-montserrat text-2xl sm:text-3xl font-black tracking-tighter text-rw-cyan drop-shadow-[0_0_12px_rgba(0,229,255,0.6)]">
                WIPS
              </span>
              <span className="text-rw-cyan font-black text-2xl sm:text-3xl">.</span>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Marca chilena independiente de indumentaria inspirada en gaming, anime, cine y cultura pop. Diseños exclusivos impresos con la más alta tecnología DTF Ultra HD.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-rw-cyan hover:border-rw-cyan transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://wa.me/56900000000"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Colecciones */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">Colecciones</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('catalog', 'anime')} className="hover:text-rw-cyan transition-colors">
                  Anime & Manga
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('catalog', 'gaming')} className="hover:text-rw-cyan transition-colors">
                  Gaming & Rol
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('catalog', 'musica')} className="hover:text-rw-cyan transition-colors">
                  Música / Rock
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('catalog', 'cultura-pop')} className="hover:text-rw-cyan transition-colors">
                  Cultura Pop & Memes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('catalog', 'todos')} className="hover:text-rw-cyan transition-colors">
                  Todos los Drops
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Ayuda & Guías */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">Información</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setIsSizeGuideOpen(true)} className="hover:text-rw-cyan transition-colors">
                  Guía de Tallas (S-XXL)
                </button>
              </li>
              <li>
                <a href="#rw-shipping-section" className="hover:text-rw-cyan transition-colors">
                  Tarifas de Envíos a Regiones
                </a>
              </li>
              <li>
                <span className="text-neutral-500">Cuidado de Prendas (Lavado)</span>
              </li>
              <li>
                <span className="text-neutral-500">Términos y Condiciones</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Métodos de Pago */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">Pagos Aceptados</h4>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300">
                Webpay Plus
              </span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300">
                Redcompra
              </span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300">
                MercadoPago
              </span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300">
                Cuenta RUT
              </span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300">
                Transferencia
              </span>
            </div>
            <p className="text-[11px] text-neutral-500 pt-2">
              Despachos asegurados a todo el territorio nacional chileno 🇨🇱
            </p>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>© {new Date().getFullYear()} RUNWIPS.SHOP — Santiago de Chile. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>para la comunidad gamer y otaku</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
