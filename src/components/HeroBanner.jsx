import React from 'react';

export default function HeroBanner({ onExploreCatalog }) {
  return (
    <div id="rw-hero-banner" className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black font-sans select-none">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-95 contrast-[1.07] saturate-[1.02] z-0"
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

      {/* Radial & Linear Gradient Veil */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            'radial-gradient(1000px 520px at 55% 32%, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.65) 100%), linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 48%, rgba(0,0,0,0.5) 100%)'
        }}
      />

      {/* HUD Vector Elements & Dots */}
      <div className="absolute inset-0 pointer-events-none z-20">
        
        {/* Halftone Top-Left */}
        <div className="rw-halftone-tl" />

        {/* Halftone Bottom-Right */}
        <div className="rw-halftone-br" />

        {/* Top-Right HUD Line & Cyan Dot */}
        <div className="absolute right-12 top-8 w-64 lg:w-80 h-[1px] bg-white/20 hidden sm:block" />
        <div className="absolute right-10 top-[26px] w-3 h-3 rounded-full border border-white/50 bg-black/60 shadow-inner flex items-center justify-center hidden sm:flex">
          <div className="w-1.5 h-1.5 rounded-full bg-rw-cyan shadow-[0_0_8px_#00e5ff]" />
        </div>

        {/* Left Vertical HUD Line */}
        <div className="absolute left-8 lg:left-10 top-40 h-[55%] w-[1px] bg-white/20 hidden md:block" />

        {/* Bottom-Left Horizontal HUD Line */}
        <div className="absolute left-8 lg:left-10 bottom-12 w-64 lg:w-80 h-[1px] bg-white/20 hidden sm:block" />

        {/* Bottom-Left Cyan Dot */}
        <div className="absolute left-[26px] lg:left-[34px] bottom-[42px] w-3 h-3 rounded-full border border-white/50 bg-black/60 shadow-inner flex items-center justify-center hidden sm:flex">
          <div className="w-1.5 h-1.5 rounded-full bg-rw-cyan shadow-[0_0_8px_#00e5ff]" />
        </div>

        {/* Very bottom-left subtle line bar */}
        <div className="absolute left-6 bottom-4 w-48 h-[1px] bg-white/15 hidden sm:block" />
      </div>

      {/* Hero Left Content Overlay */}
      <div className="relative z-30 max-w-7xl mx-auto h-full px-6 sm:px-12 lg:px-16 flex flex-col justify-center">
        <div className="max-w-xl text-left">
          
          {/* Main Huge Title */}
          <h1 className="font-montserrat font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.88] text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.85)]">
            <span>RUN</span>
            <span className="text-rw-cyan drop-shadow-[0_0_25px_rgba(0,229,255,0.75)]">WIPS</span>
            <span className="text-rw-cyan">.</span>
          </h1>

          {/* Kicker with Cyan Square */}
          <div className="mt-6 sm:mt-7 flex items-center gap-2.5">
            <span className="font-sans font-bold text-xs sm:text-sm tracking-[0.12em] text-white uppercase drop-shadow-md">
              DROP READY — ARTE ORIGINAL
            </span>
            <span className="w-2.5 h-2.5 bg-rw-cyan shrink-0 shadow-[0_0_8px_#00e5ff]" />
          </div>

          {/* Subtitles */}
          <div className="mt-3 space-y-1 text-xs sm:text-sm lg:text-base text-neutral-200/95 font-medium leading-relaxed drop-shadow-md">
            <p>Poleras inspiradas en gaming, anime y cine</p>
            <p>Diseños propios / Drops limitados</p>
          </div>

          {/* Catálogo Button */}
          <div className="mt-7 sm:mt-8">
            <button
              onClick={onExploreCatalog}
              className="inline-flex items-center justify-center h-11 px-6 rounded-[2px] font-sans font-bold text-xs uppercase tracking-[0.08em] text-white bg-black/40 border border-rw-cyan/60 hover:border-rw-cyan hover:bg-black/70 hover:shadow-[0_0_20px_rgba(0,229,255,0.35)] active:scale-95 transition-all duration-200"
            >
              CATÁLOGO
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Center Ticker */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] sm:text-xs font-sans font-semibold tracking-[0.22em] text-neutral-400/80 uppercase whitespace-nowrap z-30 pointer-events-none">
        DROPS <span className="text-neutral-600 mx-2 sm:mx-3">|</span> COLECCIONES <span className="text-neutral-600 mx-2 sm:mx-3">|</span> NUEVO
      </div>

    </div>
  );
}
