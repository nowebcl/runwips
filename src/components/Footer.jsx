import React from 'react';

export default function Footer({ onNavigate }) {
  const handleWhatsAppContact = () => {
    const text = encodeURIComponent('¡Hola RUNWIPS! Necesito asistencia con un pedido o consulta.');
    window.open(`https://wa.me/56900000000?text=${text}`, '_blank');
  };

  return (
    <footer className="bg-black border-t border-neutral-900/80 font-mono text-neutral-400 py-16 px-4 sm:px-8 lg:px-12 select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Top 4-Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Col 1: Brand & Manifesto (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <div className="flex items-center">
              <span className="font-montserrat text-3xl font-black tracking-tighter text-white">
                RUN
              </span>
              <span className="font-montserrat text-3xl font-black tracking-tighter text-rw-cyan drop-shadow-[0_0_15px_rgba(0,229,255,0.7)]">
                WIPS
              </span>
              <span className="text-rw-cyan font-black text-3xl">.</span>
            </div>

            <div className="text-xs leading-relaxed text-neutral-400 max-w-[200px]">
              <p>High-</p>
              <p>performance</p>
              <p>techwear</p>
              <p>drops</p>
              <p>Inspirado en el</p>
              <p>anime, gaming</p>
              <p>y la cultura</p>
              <p>urbana.</p>
            </div>

            <div className="pt-2 text-xs space-y-1">
              <span className="text-rw-cyan font-bold tracking-wider">// HQ:</span>
              <p className="text-neutral-300 font-bold tracking-wider">PUERTO</p>
              <p className="text-neutral-300 font-bold tracking-wider">MONTT_CHILE</p>
            </div>
          </div>

          {/* Col 2: SISTEMA_NAVEGACIÓN (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-neutral-600 uppercase tracking-widest">
              SISTEMA_NAVEGACIÓN
            </h4>
            <ul className="space-y-3 text-xs tracking-wider">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-neutral-300 hover:text-rw-cyan transition-colors"
                >
                  [ INICIO ]
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog', 'todos')}
                  className="text-neutral-300 hover:text-rw-cyan transition-colors"
                >
                  [ TIENDA ]
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog', 'anime')}
                  className="text-neutral-300 hover:text-rw-cyan transition-colors"
                >
                  [ ANIME_DROPS ]
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog', 'gaming')}
                  className="text-neutral-300 hover:text-rw-cyan transition-colors"
                >
                  [ GAMING_ZONE ]
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: PROTOCOLO_SOPORTE (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-neutral-600 uppercase tracking-widest">
              PROTOCOLO_SOPORTE
            </h4>
            <ul className="space-y-3 text-xs tracking-wider">
              <li>
                <button
                  onClick={handleWhatsAppContact}
                  className="text-neutral-300 hover:text-rw-cyan transition-colors text-left"
                >
                  CONTACTO_DIRECTO
                </button>
              </li>
              <li>
                <span className="text-neutral-300 hover:text-rw-cyan cursor-pointer transition-colors">
                  TÉRMINOS_SERVICIO
                </span>
              </li>
              <li>
                <span className="text-neutral-300 hover:text-rw-cyan cursor-pointer transition-colors">
                  PRIVACIDAD_DATA
                </span>
              </li>
              <li>
                <button
                  onClick={handleWhatsAppContact}
                  className="text-neutral-300 hover:text-rw-cyan transition-colors text-left"
                >
                  RASTREO_PEDIDO
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: CONEXIÓN_EXTERNA & STATUS (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-bold text-neutral-600 uppercase tracking-widest">
              CONEXIÓN_EXTERNA
            </h4>
            
            {/* Social badges */}
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded bg-black border border-neutral-800 text-xs font-bold text-neutral-300 hover:text-rw-cyan hover:border-rw-cyan transition-colors"
              >
                IG
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded bg-black border border-neutral-800 text-xs font-bold text-neutral-300 hover:text-rw-cyan hover:border-rw-cyan transition-colors"
              >
                TK
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded bg-black border border-neutral-800 text-xs font-bold text-neutral-300 hover:text-rw-cyan hover:border-rw-cyan transition-colors"
              >
                FB
              </a>
            </div>

            {/* Status Online */}
            <div className="flex items-center gap-2 text-xs font-bold text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-rw-cyan shadow-[0_0_8px_#00e5ff] animate-pulse"></span>
              <span className="tracking-wider">STATUS: ONLINE</span>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="mt-20 pt-8 border-t border-neutral-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-600 tracking-widest">
          <p>© 2026 RUNWIPS_STUDIO. TODOS LOS DERECHOS RESERVADOS.</p>
          <p className="text-neutral-500 font-bold">DESIGNED BY NOWEB_LABS</p>
        </div>

      </div>
    </footer>
  );
}
