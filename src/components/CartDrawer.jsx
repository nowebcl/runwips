import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Tag, Check, Truck, ShieldCheck, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ onExploreCatalog }) {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    updateQuantity,
    removeFromCart,
    subtotal,
    discountAmount,
    discountInfo,
    discountCode,
    couponError,
    applyCoupon,
    removeCoupon,
    isFreeShipping,
    amountToFreeShipping,
    freeShippingProgress,
    FREE_SHIPPING_THRESHOLD,
    total,
    formatCLP,
    setIsCheckoutOpen
  } = useCart();

  const [inputCode, setInputCode] = useState('');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (inputCode.trim()) {
      applyCoupon(inputCode);
      setInputCode('');
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-in fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-neutral-950 border-l border-neutral-800 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* Top Header */}
          <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-rw-cyan" />
              <div>
                <h3 className="font-montserrat font-bold text-base text-white uppercase tracking-tight">
                  Tus Drops ({cartItems.length})
                </h3>
                <span className="text-[10px] font-mono text-neutral-400">Despachos a todo Chile</span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="w-9 h-9 rounded-xl border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-700 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="px-6 py-4 bg-neutral-900/60 border-b border-neutral-800/80">
            <div className="flex justify-between items-center text-xs font-mono mb-2">
              {isFreeShipping ? (
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  ¡CALIFICAS PARA ENVÍO GRATIS A TODO CHILE!
                </span>
              ) : (
                <span className="text-neutral-300">
                  Te faltan <strong className="text-rw-cyan font-bold">{formatCLP(amountToFreeShipping)}</strong> para Envío Gratis
                </span>
              )}
              <span className="font-bold text-neutral-400">{freeShippingProgress}%</span>
            </div>

            <div className="w-full h-2 rounded-full bg-neutral-800 overflow-hidden">
              <div
                className={`h-full transition-all duration-500 rounded-full ${
                  isFreeShipping ? 'bg-emerald-400 shadow-[0_0_10px_#34d399]' : 'bg-rw-cyan shadow-[0_0_10px_#00e5ff]'
                }`}
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-600">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-lg text-white">Tu carro está vacío</h4>
                  <p className="text-xs text-neutral-400 mt-1 max-w-[220px]">
                    Explora los drops exclusivos de Anime, Gaming y Cine.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    if (onExploreCatalog) onExploreCatalog();
                  }}
                  className="px-6 py-3 rounded-xl bg-rw-cyan text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                >
                  EXPLORAR DROPS
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.variantKey}
                  className="flex gap-4 p-3 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 hover:border-neutral-700 transition-colors"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-xl bg-neutral-900 border border-neutral-800 shrink-0"
                  />

                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <h4 className="font-montserrat text-xs font-bold text-white truncate">
                        {item.title}
                      </h4>
                      <p className="text-[11px] font-mono text-neutral-400 mt-0.5">
                        Talla: <span className="text-white font-bold">{item.size}</span> / {item.color}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center bg-black border border-neutral-800 rounded-lg p-0.5">
                        <button
                          onClick={() => updateQuantity(item.variantKey, -1)}
                          className="w-6 h-6 rounded bg-neutral-900 text-xs font-mono font-bold text-neutral-300 hover:text-white flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="w-7 text-center font-mono text-xs font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.variantKey, 1)}
                          className="w-6 h-6 rounded bg-neutral-900 text-xs font-mono font-bold text-neutral-300 hover:text-white flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm font-bold text-rw-cyan">
                          {formatCLP(item.price * item.quantity)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.variantKey)}
                          className="text-neutral-500 hover:text-rose-400 transition-colors p-1"
                          title="Eliminar ítem"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-neutral-950 border-t border-neutral-800 space-y-4">
              
              {/* Coupon Form */}
              <div>
                {discountInfo ? (
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-xs font-mono">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <Tag className="w-3.5 h-3.5" />
                      <span>{discountInfo.code}: {discountInfo.description}</span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-neutral-400 hover:text-rose-400 font-bold"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      value={inputCode}
                      onChange={(e) => setInputCode(e.target.value)}
                      placeholder="Cupón de descuento (ej. RUNWIPS10)"
                      className="flex-1 px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-rw-cyan uppercase font-mono"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-neutral-800 text-xs font-mono font-bold text-neutral-300 hover:text-black hover:bg-rw-cyan transition-colors"
                    >
                      APLICAR
                    </button>
                  </form>
                )}
                {couponError && (
                  <p className="text-[11px] font-mono text-rose-400 mt-1">{couponError}</p>
                )}
              </div>

              {/* Cost Summary Breakdown */}
              <div className="space-y-1.5 text-xs font-mono text-neutral-400 border-t border-neutral-900 pt-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white font-bold">{formatCLP(subtotal)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-bold">
                    <span>Descuento aplicado</span>
                    <span>-{formatCLP(discountAmount)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Despacho</span>
                  {isFreeShipping ? (
                    <span className="text-emerald-400 font-bold">GRATIS</span>
                  ) : (
                    <span className="text-neutral-300">Calculado en checkout</span>
                  )}
                </div>

                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-neutral-900">
                  <span>Total Estimado</span>
                  <span className="font-mono text-lg font-black text-rw-cyan">
                    {formatCLP(Math.max(0, subtotal - discountAmount))}
                  </span>
                </div>
              </div>

              {/* Checkout Action Button */}
              <button
                onClick={handleProceedToCheckout}
                className="w-full py-4 rounded-xl bg-rw-cyan text-black font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white hover:shadow-[0_0_25px_#00e5ff] transition-all active:scale-95 shadow-lg"
              >
                <span>INICIAR CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-neutral-500">
                <ShieldCheck className="w-3.5 h-3.5 text-rw-cyan" />
                <span>Transacciones 100% encriptadas // Webpay Plus Chile</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
