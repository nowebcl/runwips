import React from 'react';
import { X, Ruler, CheckCircle2, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function SizeGuideModal() {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useCart();

  if (!isSizeGuideOpen) return null;

  const sizeTable = [
    { size: 'S', chest: '48 cm', length: '70 cm', recommended: 'Estatura 1.60 - 1.70m (50-65 kg)' },
    { size: 'M', chest: '51 cm', length: '72 cm', recommended: 'Estatura 1.70 - 1.78m (65-75 kg)' },
    { size: 'L', chest: '54 cm', length: '74 cm', recommended: 'Estatura 1.75 - 1.84m (75-85 kg)' },
    { size: 'XL', chest: '57 cm', length: '76 cm', recommended: 'Estatura 1.80 - 1.90m (85-95 kg)' },
    { size: 'XXL', chest: '60 cm', length: '78 cm', recommended: 'Estatura 1.85m+ (95kg+)' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={() => setIsSizeGuideOpen(false)}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-rw-cyan/10 border border-rw-cyan flex items-center justify-center text-rw-cyan">
            <Ruler className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-montserrat font-bold text-xl text-white uppercase tracking-tight">
              Guía de Tallas y Medidas
            </h3>
            <p className="text-xs font-mono text-neutral-400">Poleras 100% Algodón Peinado 24/1 (Regular Fit)</p>
          </div>
        </div>

        <div className="rw-separator my-4" />

        {/* Table */}
        <div className="overflow-x-auto my-6 border border-neutral-800 rounded-2xl">
          <table className="w-full text-left font-mono text-xs">
            <thead className="bg-neutral-900 text-rw-cyan border-b border-neutral-800">
              <tr>
                <th className="p-3.5 font-black uppercase">Talla</th>
                <th className="p-3.5 font-black uppercase">Ancho (Pecho)</th>
                <th className="p-3.5 font-black uppercase">Largo Total</th>
                <th className="p-3.5 font-black uppercase hidden sm:table-cell">Ajuste sugerido</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/80 text-neutral-300">
              {sizeTable.map((row) => (
                <tr key={row.size} className="hover:bg-neutral-900/50 transition-colors">
                  <td className="p-3.5 font-black text-white bg-neutral-900/30">{row.size}</td>
                  <td className="p-3.5">{row.chest}</td>
                  <td className="p-3.5">{row.length}</td>
                  <td className="p-3.5 text-neutral-400 hidden sm:table-cell">{row.recommended}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Measuring Tip */}
        <div className="p-4 rounded-2xl bg-neutral-900/70 border border-neutral-800 text-xs text-neutral-300 space-y-2">
          <div className="flex items-center gap-2 font-bold text-rw-cyan uppercase tracking-wider font-mono">
            <Info className="w-4 h-4" />
            <span>¿Cómo medir tu polera favorita?</span>
          </div>
          <p className="leading-relaxed">
            1. Extiende una polera que te quede cómoda sobre una superficie plana.<br />
            2. Mide el <strong>Ancho</strong> de axila a axila.<br />
            3. Mide el <strong>Largo</strong> desde el punto más alto del cuello hasta el borde inferior.
          </p>
        </div>

        <button
          onClick={() => setIsSizeGuideOpen(false)}
          className="mt-6 w-full py-3.5 rounded-xl bg-rw-cyan text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-md"
        >
          ENTENDIDO
        </button>

      </div>
    </div>
  );
}
