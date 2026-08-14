import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';

export default function HeroBanner({ onExploreCatalog }) {
  return (
    <div id="rw-hero-banner" className="relative w-full overflow-hidden bg-black">
      <div className="relative w-full h-[540px] sm:h-[620px] lg:h-[720px] overflow-hidden bg-black font-sans">
        
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-90 contrast-[1.08] saturate-[1.02] z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="https://runwips.shop/wp-content/uploads/2026/02/MConverter.eu_grok-video-bb3287f2-cad2-474c-8a1a-a47d3afdc92e.webm"
            type="video/webm"
          />
        </video>

        {/* Gradient Veil */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              'radial-gradient(1000px 520px at 55% 32%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.85) 100%), linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 48%, rgba(0,0,0,0.75) 100%)'
          }}
        />

        {/* HUD Vector Overlays */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {/* Halftone Top Left */}
          <div className="rw-halftone-tl hidden sm:block" />
          
          {/* Halftone Bottom Right */}
          <div className="rw-halftone-br hidden sm:block" />

          {/* Left HUD Line */}
          <div className="absolute left-6 sm:left-10 top-36 w-[1px] h-72 bg-white/20 hidden md:block" />

          {/* Bottom HUD Line */}
          <div className="absolute left-6 sm:left-10 bottom-12 w-64 h-[1px] bg-white/20 hidden md:block" />

          {/* Top Right HUD Line & Dot */}
          <div className="absolute right-10 top-8 w-48 h-[1px] bg-white/20 hidden md:block" />
          <div className="absolute right-8 top-6 w-3 h-3 rounded-full border border-white/40 shadow-inner flex items-center justify-center hidden md:flex">
            <div className="w-1.5 h-1.5 rounded-full bg-rw-cyan animate-ping" />
          </div>

          {/* Bottom Left Cyan Dot */}
          <div className="absolute left-4 sm:left-8 bottom-10 w-3 h-3 rounded-full border border-white/40 shadow-inner flex items-center justify-center hidden md:flex">
            <div className="w-1.5 h-1.5 rounded-full bg-rw-cyan" />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-30 max-w-7xl mx-auto h-full px-6 sm:px-8 flex flex-col justify-center">
          
          {/* Title */}
          <div className="max-w-2xl">
            <h1 className="font-montserrat font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9] text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
              <span>RUN</span>
              <span className="text-rw-cyan drop-shadow-[0_0_20px_rgba(0,229,255,0.7)]">WIPS</span>
              <span className="text-rw-cyan">.</span>
            </h1>

            {/* Kicker & Subtitle */}
            <div className="mt-6 sm:mt-8 space-y-2">
              <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-mono font-bold tracking-widest text-white/95 uppercase bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/10">
                <span className="w-2 h-2 rounded-sm bg-rw-cyan shrink-0 animate-pulse" />
                <span>DROP READY — ARTE ORIGINAL</span>
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-200 font-medium tracking-wide">
                Poleras inspiradas en gaming, anime y cine.
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 font-mono">
                Diseños propios // 100% Algodón Peinado 24/1 // Drops limitados.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreCatalog}
                className="group relative inline-flex items-center justify-center h-12 sm:h-14 px-8 rounded-xl font-mono font-bold text-xs sm:text-sm uppercase tracking-wider text-white bg-black/60 border border-rw-cyan hover:border-rw-cyan hover:bg-rw-cyan hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.25)] hover:shadow-[0_0_35px_rgba(0,229,255,0.6)] active:scale-95"
              >
                <span>VER CATÁLOGO</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-neutral-900/60 backdrop-blur px-4 py-3 rounded-xl border border-neutral-800">
                <Flame className="w-4 h-4 text-rose-500 animate-bounce" />
                <span>HOT DROPS DISPONIBLES</span>
              </div>
            </div>
          </div>

          {/* Bottom HUD Ticker */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs font-mono tracking-[0.2em] text-neutral-500 uppercase whitespace-nowrap hidden sm:block">
            DROPS <span className="text-rw-cyan mx-2">|</span> COLECCIONES <span className="text-rw-cyan mx-2">|</span> NUEVO
          </div>

        </div>
      </div>
    </div>
  );
}
