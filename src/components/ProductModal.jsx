import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, Ruler, Check, ShieldCheck, Truck, Sparkles, MessageCircle, ChevronDown, ChevronUp, Star, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductModal() {
  const { isQuickViewOpen, quickViewProduct, closeQuickView, addToCart, setIsSizeGuideOpen, formatCLP } = useCart();
  
  const [selectedColor, setSelectedColor] = useState('Negro');
  const [selectedGender, setSelectedGender] = useState('Hombre');
  const [selectedSize, setSelectedSize] = useState('L');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('material');
  const [isBundleSelected, setIsBundleSelected] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedColor('Negro');
      setSelectedGender('Hombre');
      setSelectedSize('L');
      setQuantity(1);
      setIsBundleSelected(false);
    }
  }, [quickViewProduct]);

  if (!isQuickViewOpen || !quickViewProduct) return null;

  const handleAddToCart = () => {
    addToCart(
      quickViewProduct,
      {
        color: selectedColor,
        gender: selectedGender,
        size: selectedSize
      },
      quantity
    );

    // If bundle cross-sell selected
    if (isBundleSelected) {
      addToCart(
        {
          id: 'rw-tote-bag-cyber',
          title: 'Tote Bag RUNWIPS Cyber Limited',
          price: 9900,
          priceFormatted: '$9.900',
          img: 'https://runwips.shop/wp-content/uploads/2026/02/freepik__-prompt-crear-un-logo-tipogrfico-para-la-marca-run__41764.png',
          category: 'Accesorios'
        },
        { color: 'Negro', size: 'Única' },
        1
      );
    }

    closeQuickView();
  };

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `¡Hola RUNWIPS! Quiero pedir el drop: *${quickViewProduct.title}*\n- Talla: ${selectedSize}\n- Color: ${selectedColor}\n- Género: ${selectedGender}\n- Cantidad: ${quantity}\n- Total: ${formatCLP(quickViewProduct.price * quantity)}`
    );
    window.open(`https://wa.me/56900000000?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in">
      
      {/* Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl my-auto animate-in zoom-in-95 max-h-[90vh] flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={closeQuickView}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-neutral-900/90 border border-neutral-700 text-neutral-300 hover:text-rw-cyan hover:border-rw-cyan flex items-center justify-center transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Image Canvas & Zoom */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div
              className="relative aspect-square w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 group cursor-crosshair"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <img
                src={quickViewProduct.fullImg || quickViewProduct.img}
                alt={quickViewProduct.title}
                className={`w-full h-full object-cover transition-transform duration-300 ${
                  isZoomed ? 'scale-125' : 'scale-100'
                }`}
              />

              {quickViewProduct.badge && (
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-3 py-1 rounded-md bg-rw-cyan text-black font-mono font-black text-xs uppercase tracking-wider shadow-lg">
                  <Flame className="w-3.5 h-3.5 fill-black text-black" />
                  {quickViewProduct.badge}
                </span>
              )}
            </div>

            {/* Quality Guarantee Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 text-[11px] font-mono text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-rw-cyan shrink-0" />
                <span>100% Algodón Peinado</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 text-[11px] font-mono text-neutral-300">
                <Truck className="w-4 h-4 text-rw-cyan shrink-0" />
                <span>Envíos a todo Chile 🇨🇱</span>
              </div>
            </div>
          </div>

          {/* Right Column: Buy Box & Options */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="rw-label text-[10px]">// DROP LIMITADO</span>
                <span className="text-neutral-700">•</span>
                <span className="text-xs font-mono text-neutral-400">{quickViewProduct.category}</span>
              </div>
              <h2 className="font-montserrat text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                {quickViewProduct.title}
              </h2>

              <div className="mt-3 flex items-baseline gap-3">
                <span className="font-mono text-2xl font-black text-rw-cyan">
                  {quickViewProduct.priceFormatted}
                </span>
                <span className="font-mono text-sm text-neutral-600 line-through">
                  {quickViewProduct.compareAtPriceFormatted}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-950/60 text-rose-400 border border-rose-800/40">
                  SAVE 18%
                </span>
              </div>
            </div>

            {/* Select Color */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-neutral-400 mb-2">
                Color: <span className="text-white">{selectedColor}</span>
              </label>
              <div className="flex gap-2">
                {quickViewProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono font-bold border transition-all ${
                      selectedColor === color
                        ? 'border-rw-cyan bg-rw-cyan/10 text-white shadow-[0_0_10px_rgba(0,229,255,0.2)]'
                        : 'border-neutral-800 bg-neutral-900 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <span
                      className={`w-3.5 h-3.5 rounded-full border ${
                        color === 'Negro' ? 'bg-black border-neutral-700' : 'bg-white border-neutral-300'
                      }`}
                    />
                    <span>{color}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Select Gender */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-neutral-400 mb-2">
                Género / Corte: <span className="text-white">{selectedGender}</span>
              </label>
              <div className="flex gap-2">
                {quickViewProduct.genders.map((g) => (
                  <button
                    key={g}
                    onClick={() => setSelectedGender(g)}
                    className={`flex-1 py-2 rounded-xl text-xs font-mono font-bold border transition-all ${
                      selectedGender === g
                        ? 'border-rw-cyan bg-rw-cyan/10 text-white'
                        : 'border-neutral-800 bg-neutral-900 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Select Size & Size Guide Trigger */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono font-bold uppercase text-neutral-400">
                  Talla: <span className="text-white">{selectedSize}</span>
                </label>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="text-[11px] font-mono text-rw-cyan hover:underline flex items-center gap-1"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Tabla de medidas (cm)</span>
                </button>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {quickViewProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2.5 rounded-xl font-mono text-xs font-bold border transition-all ${
                      selectedSize === size
                        ? 'border-rw-cyan bg-rw-cyan text-black shadow-[0_0_12px_#00e5ff]'
                        : 'border-neutral-800 bg-neutral-900 text-neutral-300 hover:bg-neutral-800'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Stepper & Add to Cart Button */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-xl p-1 shrink-0">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg bg-neutral-800 text-white font-mono font-bold hover:bg-neutral-700 flex items-center justify-center"
                >
                  -
                </button>
                <span className="w-10 text-center font-mono font-bold text-sm text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg bg-neutral-800 text-white font-mono font-bold hover:bg-neutral-700 flex items-center justify-center"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 h-12 rounded-xl bg-rw-cyan text-black font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white hover:shadow-[0_0_20px_#00e5ff] transition-all active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>AGREGAR AL DROP ({formatCLP(quickViewProduct.price * quantity)})</span>
              </button>
            </div>

            {/* WhatsApp Fast Order Button */}
            <button
              onClick={handleWhatsAppOrder}
              className="w-full py-2.5 rounded-xl border border-emerald-500/50 bg-emerald-950/20 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center gap-2 hover:bg-emerald-900/30 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pedir por WhatsApp Express</span>
            </button>

            {/* Cross-Sell Bundle Offer */}
            <div className="p-3.5 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="bundle-check"
                  checked={isBundleSelected}
                  onChange={(e) => setIsBundleSelected(e.target.checked)}
                  className="w-4 h-4 accent-rw-cyan rounded cursor-pointer"
                />
                <label htmlFor="bundle-check" className="cursor-pointer">
                  <p className="text-xs font-bold text-white">Añadir Tote Bag Cyberpunk</p>
                  <p className="text-[10px] font-mono text-neutral-400">Por solo +$9.900 CLP (Ahorra $4.000)</p>
                </label>
              </div>
              <span className="font-mono text-xs font-bold text-rw-cyan">+$9.900</span>
            </div>

            {/* Accordion Tabs for Details */}
            <div className="border-t border-neutral-800/80 pt-3 space-y-2 text-xs">
              
              {/* Material Tab */}
              <div className="border border-neutral-900 rounded-xl overflow-hidden">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'material' ? null : 'material')}
                  className="w-full p-3 bg-neutral-950 flex items-center justify-between text-neutral-300 font-bold uppercase tracking-wider text-left"
                >
                  <span>🧵 Calidad & Estampado DTF</span>
                  {activeAccordion === 'material' ? <ChevronUp className="w-4 h-4 text-rw-cyan" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {activeAccordion === 'material' && (
                  <div className="p-3.5 bg-neutral-900/40 text-neutral-400 space-y-1.5 font-sans leading-relaxed">
                    <p>• <strong>100% Algodón Peinado 24/1</strong> (200 grs) de tacto ultra suave y máxima durabilidad.</p>
                    <p>• <strong>Estampado Digital DTF Ultra HD</strong> con tintas textiles ecológicas y alta elasticidad.</p>
                    <p>• No se destiñe ni se resquebraja tras lavados repetidos.</p>
                  </div>
                )}
              </div>

              {/* Shipping Tab */}
              <div className="border border-neutral-900 rounded-xl overflow-hidden">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'shipping' ? null : 'shipping')}
                  className="w-full p-3 bg-neutral-950 flex items-center justify-between text-neutral-300 font-bold uppercase tracking-wider text-left"
                >
                  <span>🚚 Despachos a Todo Chile</span>
                  {activeAccordion === 'shipping' ? <ChevronUp className="w-4 h-4 text-rw-cyan" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {activeAccordion === 'shipping' && (
                  <div className="p-3.5 bg-neutral-900/40 text-neutral-400 space-y-1.5 font-sans leading-relaxed">
                    <p>• <strong>Santiago (RM)</strong>: $3.490 // Entrega en 24 a 48 hrs hábiles.</p>
                    <p>• <strong>Regiones</strong>: Desde $4.100 vía Blue Express / Starken / CorreosChile.</p>
                    <p>• <strong>Envío Gratis</strong> en compras sobre $60.000 CLP.</p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
