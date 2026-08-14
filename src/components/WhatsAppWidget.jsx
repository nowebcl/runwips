import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChat = () => {
    const text = encodeURIComponent('¡Hola RUNWIPS! Tengo una consulta sobre los drops y las tallas de poleras.');
    window.open(`https://wa.me/56900000000?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 font-sans">
      {isOpen && (
        <div className="bg-neutral-950 border border-neutral-800 p-4 rounded-2xl shadow-2xl max-w-xs w-72 text-left animate-in fade-in slide-in-from-bottom-3">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-900 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-mono font-bold text-white uppercase">Soporte RUNWIPS</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-neutral-500 hover:text-white">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed">
            ¿Tienes dudas con tu talla, envíos a regiones o personalizaciones? Escríbenos directamente a nuestro WhatsApp oficial.
          </p>
          <button
            onClick={handleOpenChat}
            className="mt-3 w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>INICIAR CHAT</span>
          </button>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-500 text-black flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-105 hover:bg-emerald-400 active:scale-95 transition-all group"
        aria-label="Soporte por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-black" />
      </button>
    </div>
  );
}
