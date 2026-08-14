import React, { useState } from 'react';
import { Package, Sparkles, ShieldCheck, Check, Copy } from 'lucide-react';
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
    <section id="rw-offer-section" className="relative w-full overflow-hidden bg-black font-sans my-12">
      <div className="relative w-full min-h-[560px] overflow-hidden">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat filter brightness-90 contrast-[1.02] saturate-95 z-0"
          style={{
            backgroundImage: `url('https://runwips.shop/wp-content/uploads/2026/02/POLERASELDENRING-scaled.webp')`,
            backgroundPosition: '50% 20%'
          }}
        />

        {/* Gradient Overlays */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(900px 520px at 45% 52%, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.92) 100%), linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 52%, rgba(0,0,0,0.95) 100%)'
          }}
        />

        {/* Dot Matrix Decoration */}
        <div className="rw-dots-tr absolute top-0 right-0 w-96 h-60 opacity-30 pointer-events-none z-20" />
        <div className="rw-dots-bl absolute bottom-0 left-0 w-80 h-52 opacity-20 pointer-events-none z-20" />

        {/* Inner Content Grid */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col justify-between min-h-[560px]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Spacer for visual focus on person/artwork */}
            <div className="hidden lg:block lg:col-span-6 min-h-[300px]" />

            {/* Form Content */}
            <div className="lg:col-span-6 bg-black/70 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-neutral-800 shadow-2xl">
              <span className="rw-label text-xs">// PROMO EXCLUSIVA</span>
              <h2 className="font-montserrat text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-2 leading-tight">
                Obtén un descuento <br />
                <span className="text-rw-cyan">en tu primera compra</span>
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 mt-3 font-medium">
                Suscríbete y recibe tu código promocional con 10% OFF al instante.
              </p>

              {generatedCode ? (
                <div className="mt-6 p-4 rounded-2xl bg-neutral-900 border border-rw-cyan/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block">Tu código de descuento:</span>
                    <span className="font-mono text-xl font-black text-rw-cyan tracking-wider">{generatedCode}</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="px-4 py-2 rounded-xl bg-rw-cyan text-black font-mono font-bold text-xs flex items-center gap-1.5 hover:bg-white transition-colors"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? '¡COPIADO!' : 'COPIAR'}</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo electrónico..."
                    className="flex-1 h-14 px-5 rounded-2xl bg-black/60 border border-neutral-700 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-rw-cyan focus:ring-1 focus:ring-rw-cyan transition-all"
                  />
                  <button
                    type="submit"
                    className="h-14 px-8 rounded-2xl bg-rw-cyan text-black font-mono font-black text-xs uppercase tracking-wider hover:bg-white hover:shadow-[0_0_20px_#00e5ff] transition-all active:scale-95 shrink-0"
                  >
                    RECIBIR CÓDIGO
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Benefits Strip at Bottom */}
          <div className="mt-12 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-neutral-200">
              <Package className="w-6 h-6 text-rw-cyan shrink-0" />
              <div>
                <h4 className="text-xs font-mono font-bold uppercase text-white">Envíos a todo Chile</h4>
                <p className="text-[11px] text-neutral-400">Blue Express / Starken a domicilio</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-neutral-200 md:border-l md:border-neutral-800 md:pl-6">
              <Sparkles className="w-6 h-6 text-rw-cyan shrink-0" />
              <div>
                <h4 className="text-xs font-mono font-bold uppercase text-white">Drops Limitados</h4>
                <p className="text-[11px] text-neutral-400">Diseños originales sin reimpresión</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-neutral-200 md:border-l md:border-neutral-800 md:pl-6">
              <ShieldCheck className="w-6 h-6 text-rw-cyan shrink-0" />
              <div>
                <h4 className="text-xs font-mono font-bold uppercase text-white">Pago Seguro 100%</h4>
                <p className="text-[11px] text-neutral-400">Webpay Plus, MercadoPago, Transferencia</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
