import React from 'react';
import { CheckCircle2, Package, MessageCircle, ArrowRight, Truck, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function OrderSuccessModal({ onContinueShopping }) {
  const { isOrderSuccessOpen, setIsOrderSuccessOpen, lastOrder, formatCLP } = useCart();

  if (!isOrderSuccessOpen || !lastOrder) return null;

  const handleWhatsAppNotify = () => {
    const text = encodeURIComponent(
      `¡Hola RUNWIPS! Acabo de realizar el pedido *${lastOrder.orderId}* por un total de *${formatCLP(lastOrder.total)}* a nombre de ${lastOrder.customer.fullName}. Dirección: ${lastOrder.customer.address}, ${lastOrder.customer.comuna}, ${lastOrder.region}. ¡Quedo atento al número de seguimiento!`
    );
    window.open(`https://wa.me/56900000000?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-neutral-950 border border-rw-cyan/60 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,229,255,0.2)] my-auto animate-in zoom-in-95 text-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-rw-cyan/10 border border-rw-cyan flex items-center justify-center text-rw-cyan mx-auto mb-4 animate-bounce">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="rw-label text-xs">// ORDEN CONFIRMADA</span>
        <h2 className="font-montserrat text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-1">
          ¡DROP ASEGURADO CON ÉXITO!
        </h2>
        <p className="text-xs font-mono text-neutral-400 mt-2">
          Número de Pedido: <span className="font-bold text-rw-cyan">{lastOrder.orderId}</span>
        </p>

        {/* Order Details Receipt Box */}
        <div className="my-6 p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 text-left font-mono text-xs space-y-3">
          <div className="flex justify-between border-b border-neutral-800 pb-2 text-neutral-400">
            <span>Fecha: {lastOrder.date}</span>
            <span>Método: {lastOrder.paymentMethod.toUpperCase()}</span>
          </div>

          <div className="space-y-1 text-neutral-300">
            <p><strong>Destinatario:</strong> {lastOrder.customer.fullName} ({lastOrder.customer.rut})</p>
            <p><strong>Email:</strong> {lastOrder.customer.email}</p>
            <p><strong>Despacho:</strong> {lastOrder.customer.address}, {lastOrder.customer.comuna} ({lastOrder.region})</p>
          </div>

          <div className="border-t border-neutral-800 pt-2 flex justify-between font-bold text-white text-sm">
            <span>Total Pagado:</span>
            <span className="text-rw-cyan font-black">{formatCLP(lastOrder.total)}</span>
          </div>
        </div>

        {/* Delivery Alert */}
        <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-left text-xs font-mono text-emerald-300 flex items-start gap-2.5 mb-6">
          <Truck className="w-4 h-4 shrink-0 mt-0.5" />
          <p>
            Recibirás el código de seguimiento de <strong>Blue Express / Starken</strong> en tu correo electrónico una vez despachado el paquete.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleWhatsAppNotify}
            className="flex-1 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>NOTIFICAR POR WHATSAPP</span>
          </button>

          <button
            onClick={() => {
              setIsOrderSuccessOpen(false);
              if (onContinueShopping) onContinueShopping();
            }}
            className="flex-1 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 hover:border-rw-cyan transition-all"
          >
            SEGUIR COMPRANDO
          </button>
        </div>
      </div>
    </div>
  );
}
