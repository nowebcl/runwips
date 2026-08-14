import React from 'react';
import shippingRatesData from '../data/shippingRates.json';

export default function ShippingMarquee() {
  // Duplicate list to achieve continuous infinite marquee loop
  const duplicatedRates = [...shippingRatesData, ...shippingRatesData];

  return (
    <section className="rw-shipping-section py-12 bg-black border-y border-neutral-900 overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-rw-cyan shrink-0" />
          <h2 className="font-montserrat text-xl sm:text-2xl lg:text-3xl font-black text-white uppercase tracking-tight">
            TARIFAS DE ENVÍO <span>A TODO CHILE</span>
          </h2>
        </div>
        <p className="text-xs font-mono text-neutral-400 mt-1 pl-6">
          Despachos vía Blue Express y Starken con seguimiento en tiempo real
        </p>
      </div>

      {/* Infinite Marquee Strip */}
      <div className="w-full overflow-hidden bg-neutral-950/60 border-y border-neutral-900/80 py-6">
        <div className="animate-marquee flex items-center">
          {duplicatedRates.map((item, index) => (
            <div
              key={`${item.region}-${index}`}
              className="flex flex-col justify-center min-w-[240px] px-8 border-r border-neutral-800/80 shrink-0"
            >
              <span className="text-[11px] font-mono font-bold tracking-widest text-rw-cyan uppercase mb-1">
                {item.region}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-2xl font-black text-white">
                  {item.priceFormatted}
                </span>
                <span className="text-[10px] text-neutral-500 font-mono">
                  {item.days}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
