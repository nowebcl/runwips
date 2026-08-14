import React, { useState } from 'react';
import { X, ShieldCheck, Lock, CreditCard, Building2, Truck, Check, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import shippingRatesData from '../data/shippingRates.json';

export default function CheckoutModal() {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cartItems,
    subtotal,
    discountAmount,
    discountInfo,
    selectedRegion,
    setSelectedRegion,
    isFreeShipping,
    shippingCost,
    total,
    formatCLP,
    clearCart,
    setLastOrder,
    setIsOrderSuccessOpen
  } = useCart();

  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    rut: '',
    phone: '',
    address: '',
    comuna: '',
    notes: '',
    paymentMethod: 'webpay'
  });

  const [isProcessing, setIsProcessing] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegionChange = (e) => {
    const found = shippingRatesData.find((r) => r.region === e.target.value);
    if (found) setSelectedRegion(found);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const orderId = `RW-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

    setTimeout(() => {
      const orderSummary = {
        orderId,
        date: new Date().toLocaleDateString('es-CL'),
        customer: formData,
        items: [...cartItems],
        subtotal,
        discountAmount,
        discountInfo,
        region: selectedRegion.region,
        shippingCost,
        total,
        paymentMethod: formData.paymentMethod
      };

      setLastOrder(orderSummary);
      clearCart();
      setIsProcessing(false);
      setIsCheckoutOpen(false);
      setIsOrderSuccessOpen(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl my-auto animate-in zoom-in-95 max-h-[92vh] flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-black/50">
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-rw-cyan" />
            <div>
              <h2 className="font-montserrat text-lg font-black text-white uppercase tracking-tight">
                CHECKOUT SEGURO // RUNWIPS
              </h2>
              <p className="text-xs font-mono text-neutral-400">Encriptación SSL 256-Bit // Envíos a todo Chile</p>
            </div>
          </div>

          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="w-9 h-9 rounded-xl border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body Grid */}
        <div className="overflow-y-auto p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Form (7 cols) */}
          <form onSubmit={handleSubmitOrder} className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Contact */}
            <div className="space-y-3">
              <span className="rw-label text-[10px]">PASO 1</span>
              <h3 className="font-montserrat font-bold text-sm text-white uppercase">Información de Contacto</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Correo electrónico *"
                  className="px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-rw-cyan font-sans"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Teléfono móvil (ej. +569 1234 5678) *"
                  className="px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-rw-cyan font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Nombre y Apellidos *"
                  className="px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-rw-cyan font-sans"
                />
                <input
                  type="text"
                  name="rut"
                  required
                  value={formData.rut}
                  onChange={handleInputChange}
                  placeholder="RUT (ej. 12.345.678-9) *"
                  className="px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-rw-cyan font-sans"
                />
              </div>
            </div>

            {/* Step 2: Shipping */}
            <div className="space-y-3 pt-4 border-t border-neutral-900">
              <span className="rw-label text-[10px]">PASO 2</span>
              <h3 className="font-montserrat font-bold text-sm text-white uppercase">Dirección de Despacho</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-mono text-neutral-400 uppercase mb-1 block">Región de Destino *</label>
                  <select
                    value={selectedRegion.region}
                    onChange={handleRegionChange}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-rw-cyan font-sans"
                  >
                    {shippingRatesData.map((r) => (
                      <option key={r.region} value={r.region}>
                        {r.region} ({r.priceFormatted})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-mono text-neutral-400 uppercase mb-1 block">Comuna / Ciudad *</label>
                  <input
                    type="text"
                    name="comuna"
                    required
                    value={formData.comuna}
                    onChange={handleInputChange}
                    placeholder="Ej. Santiago Centro, Viña del Mar..."
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-rw-cyan font-sans"
                  />
                </div>
              </div>

              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Calle, Número, Depto / Casa *"
                className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-rw-cyan font-sans"
              />
            </div>

            {/* Step 3: Payment */}
            <div className="space-y-3 pt-4 border-t border-neutral-900">
              <span className="rw-label text-[10px]">PASO 3</span>
              <h3 className="font-montserrat font-bold text-sm text-white uppercase">Método de Pago</h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label
                  className={`p-3 rounded-xl border flex flex-col justify-between cursor-pointer transition-all ${
                    formData.paymentMethod === 'webpay'
                      ? 'border-rw-cyan bg-rw-cyan/10'
                      : 'border-neutral-800 bg-neutral-900 text-neutral-400'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="webpay"
                    checked={formData.paymentMethod === 'webpay'}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <CreditCard className="w-5 h-5 text-rw-cyan mb-2" />
                  <span className="text-xs font-bold text-white">Webpay Plus</span>
                  <span className="text-[10px] text-neutral-400">Débito / Crédito</span>
                </label>

                <label
                  className={`p-3 rounded-xl border flex flex-col justify-between cursor-pointer transition-all ${
                    formData.paymentMethod === 'mercadopago'
                      ? 'border-rw-cyan bg-rw-cyan/10'
                      : 'border-neutral-800 bg-neutral-900 text-neutral-400'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mercadopago"
                    checked={formData.paymentMethod === 'mercadopago'}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs mb-2">
                    MP
                  </div>
                  <span className="text-xs font-bold text-white">MercadoPago</span>
                  <span className="text-[10px] text-neutral-400">Cuotas sin interés</span>
                </label>

                <label
                  className={`p-3 rounded-xl border flex flex-col justify-between cursor-pointer transition-all ${
                    formData.paymentMethod === 'transfer'
                      ? 'border-rw-cyan bg-rw-cyan/10'
                      : 'border-neutral-800 bg-neutral-900 text-neutral-400'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="transfer"
                    checked={formData.paymentMethod === 'transfer'}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <Building2 className="w-5 h-5 text-emerald-400 mb-2" />
                  <span className="text-xs font-bold text-white">Transferencia</span>
                  <span className="text-[10px] text-neutral-400">Cuenta Corriente</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing || cartItems.length === 0}
              className="w-full py-4 rounded-xl bg-rw-cyan text-black font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white hover:shadow-[0_0_25px_#00e5ff] transition-all active:scale-95 disabled:opacity-50"
            >
              {isProcessing ? (
                <span>PROCESANDO ORDEN...</span>
              ) : (
                <>
                  <span>CONFIRMAR Y PAGAR ({formatCLP(total)})</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Right Summary (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5 space-y-4 h-fit sticky top-6">
            <h3 className="font-montserrat font-bold text-sm text-white uppercase tracking-tight">
              Resumen del Pedido ({cartItems.length} drops)
            </h3>

            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {cartItems.map((item) => (
                <div key={item.variantKey} className="flex items-center gap-3 text-xs">
                  <div className="relative w-12 h-12 rounded-lg bg-black border border-neutral-800 overflow-hidden shrink-0">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    <span className="absolute top-0 right-0 px-1 bg-rw-cyan text-black font-mono text-[9px] font-bold rounded-bl">
                      x{item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-white truncate">{item.title}</p>
                    <p className="text-[10px] font-mono text-neutral-400">
                      Talla {item.size} / {item.color}
                    </p>
                  </div>
                  <span className="font-mono font-bold text-white">
                    {formatCLP(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-2 pt-3 border-t border-neutral-800 text-xs font-mono text-neutral-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white font-bold">{formatCLP(subtotal)}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-400 font-bold">
                  <span>Descuento ({discountInfo?.code})</span>
                  <span>-{formatCLP(discountAmount)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Envío ({selectedRegion.region})</span>
                {isFreeShipping ? (
                  <span className="text-emerald-400 font-bold">GRATIS</span>
                ) : (
                  <span className="text-white font-bold">{formatCLP(shippingCost)}</span>
                )}
              </div>

              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-neutral-800">
                <span>Total a Pagar</span>
                <span className="font-mono text-xl font-black text-rw-cyan">
                  {formatCLP(total)}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-[11px] font-mono text-neutral-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-rw-cyan shrink-0" />
              <span>Garantía de cambio 30 días sin costo</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
