import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function OfferSection() {
  const { applyCoupon } = useCart();
  const [email, setEmail] = useState('');
  const [generatedCode, setGeneratedCode] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setGeneratedCode('RUNWIPS10');
      applyCoupon('RUNWIPS10');
    }
  };

  const handleCopy = () => {
    if (generatedCode) {
      navigator.clipboard.writeText(generatedCode);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <section id="rw-offer-section" className="relative w-full overflow-hidden bg-black font-sans select-none">
      <div className="relative w-full min-h-[640px] sm:min-h-[720px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image of Elden Ring Photoshoot */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat z-0"
          style={{
            backgroundImage: `url('https://runwips.shop/wp-content/uploads/2026/02/POLERASELDENRING-scaled.webp')`,
            backgroundPosition: 'center 18%',
            filter: 'brightness(0.85) contrast(1.05) saturate(0.98)'
          }}
        />

        {/* Radial & Linear Gradient Overlays */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 65%, rgba(0,0,0,0.92) 100%), linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.7) 100%)'
          }}
        />

        {/* Halftone Top-Right & Bottom-Left */}
        <div className="rw-dots-tr absolute top-0 right-0 w-80 h-52 opacity-25 pointer-events-none z-20" />
        <div className="rw-dots-bl absolute bottom-0 left-0 w-72 h-44 opacity-20 pointer-events-none z-20" />

        {/* Centered Content */}
        <div className="relative z-30 max-w-xl w-full mx-auto px-6 py-16 text-center flex flex-col items-center justify-center">
          
          {/* Main Headline */}
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-[42px] text-white uppercase tracking-tight leading-[1.08] drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)]">
            OBTÉN UN DESCUENTO <br />
            EN TU PRIMERA COMPRA
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base text-white/90 font-sans font-medium drop-shadow-md">
            Suscríbete y recibe tu código al instante
          </p>

          {/* Form / Code State */}
          <div className="mt-7 w-full max-w-[420px]">
            {generatedCode ? (
              <div className="p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-rw-cyan/70 shadow-[0_0_25px_rgba(0,229,255,0.3)] flex items-center justify-between animate-in zoom-in-95">
                <div className="text-left font-mono">
                  <span className="text-[10px] uppercase text-neutral-400 block">Tu código 10% OFF:</span>
                  <span className="text-xl font-black text-rw-cyan tracking-wider">{generatedCode}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="px-4 py-2.5 rounded-full bg-rw-cyan text-black font-mono font-bold text-xs flex items-center gap-1.5 hover:bg-white transition-all shadow-md active:scale-95"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{isCopied ? '¡COPIADO!' : 'COPIAR'}</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 w-full">
                {/* Input with translucent background and white border */}
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  className="w-full h-12 sm:h-13 px-5 rounded-xl bg-black/35 backdrop-blur-sm border border-white/30 text-sm text-white placeholder:text-neutral-400 focus:outline-none focus:border-white focus:bg-black/55 transition-all text-center"
                />

                {/* Pill Button with Cyan Border & Text */}
                <button
                  type="submit"
                  className="w-full h-12 sm:h-13 rounded-full bg-black/40 backdrop-blur-sm border border-rw-cyan text-rw-cyan font-sans font-bold text-sm sm:text-base tracking-wide hover:bg-rw-cyan hover:text-black hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] active:scale-[0.99] transition-all duration-200"
                >
                  Recibir código
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
