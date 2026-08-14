import React, { createContext, useContext, useState, useEffect } from 'react';
import shippingRatesData from '../data/shippingRates.json';

const CartContext = createContext(null);

const FREE_SHIPPING_THRESHOLD = 60000; // CLP $60.000

export function CartProvider({ children }) {
  // Cart items state
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('rw_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // UI state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isOrderSuccessOpen, setIsOrderSuccessOpen] = useState(false);
  const [lastOrder, setLastOrder] = useState(null);

  // Discount state
  const [discountCode, setDiscountCode] = useState('');
  const [discountInfo, setDiscountInfo] = useState(null); // { code, type: 'percent'|'fixed', value, description }
  const [couponError, setCouponError] = useState('');

  // Shipping state
  const [selectedRegion, setSelectedRegion] = useState(shippingRatesData[0]);

  // Toast notification
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3500);
  };

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('rw_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Error saving cart to localStorage', e);
    }
  }, [cartItems]);

  // Add Item to Cart
  const addToCart = (product, options = {}, quantity = 1) => {
    const color = options.color || 'Negro';
    const gender = options.gender || 'Hombre';
    const size = options.size || 'L';
    const variantKey = `${product.id}_${color}_${gender}_${size}`;

    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.variantKey === variantKey);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prevItems,
          {
            id: product.id,
            variantKey,
            title: product.title,
            price: product.price,
            priceFormatted: product.priceFormatted,
            img: product.img,
            fullImg: product.fullImg,
            category: product.category,
            color,
            gender,
            size,
            quantity
          }
        ];
      }
    });

    showToast(`¡${product.title} (${size}/${color}) agregado al drop!`);
    setIsCartOpen(true);
  };

  // Update Quantity
  const updateQuantity = (variantKey, delta) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.variantKey === variantKey) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  // Remove Item
  const removeFromCart = (variantKey) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.variantKey !== variantKey));
  };

  // Clear Cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Apply Coupon
  const applyCoupon = (code) => {
    const cleanCode = code.trim().toUpperCase();
    setCouponError('');

    if (cleanCode === 'RUNWIPS10') {
      setDiscountInfo({
        code: cleanCode,
        type: 'percent',
        value: 10,
        description: '10% de descuento en tu orden'
      });
      setDiscountCode(cleanCode);
      showToast('¡Cupón RUNWIPS10 aplicado con éxito!');
      return true;
    } else if (cleanCode === 'PRIMERACOMPRA' || cleanCode === 'CYBERWIPS') {
      setDiscountInfo({
        code: cleanCode,
        type: 'fixed',
        value: 4000,
        description: '$4.000 CLP de descuento'
      });
      setDiscountCode(cleanCode);
      showToast(`¡Cupón ${cleanCode} aplicado: -$4.000 CLP!`);
      return true;
    } else {
      setCouponError('Código no válido o expirado. Prueba con RUNWIPS10');
      return false;
    }
  };

  const removeCoupon = () => {
    setDiscountInfo(null);
    setDiscountCode('');
    setCouponError('');
  };

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Discount calculation
  let discountAmount = 0;
  if (discountInfo) {
    if (discountInfo.type === 'percent') {
      discountAmount = Math.round((subtotal * discountInfo.value) / 100);
    } else if (discountInfo.type === 'fixed') {
      discountAmount = Math.min(discountInfo.value, subtotal);
    }
  }

  // Free shipping check
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingCost = isFreeShipping ? 0 : (selectedRegion ? selectedRegion.price : 3490);
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  const total = Math.max(0, subtotal - discountAmount + shippingCost);

  // Open Quick View
  const openQuickView = (product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setIsQuickViewOpen(false);
    setQuickViewProduct(null);
  };

  const formatCLP = (val) => {
    return '$' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItems,
        subtotal,
        discountAmount,
        discountInfo,
        discountCode,
        couponError,
        applyCoupon,
        removeCoupon,
        shippingCost,
        selectedRegion,
        setSelectedRegion,
        isFreeShipping,
        amountToFreeShipping,
        freeShippingProgress,
        FREE_SHIPPING_THRESHOLD,
        total,
        formatCLP,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isQuickViewOpen,
        quickViewProduct,
        openQuickView,
        closeQuickView,
        isSizeGuideOpen,
        setIsSizeGuideOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isOrderSuccessOpen,
        setIsOrderSuccessOpen,
        lastOrder,
        setLastOrder,
        toastMessage,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
