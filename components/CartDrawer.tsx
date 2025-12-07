import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from './Button';

const CartDrawer: React.FC = () => {
  const { 
    items, 
    isCartOpen, 
    toggleCart, 
    removeFromCart, 
    updateQuantity, 
    cartTotal 
  } = useCart();

  const handleCheckout = () => {
    const phoneNumber = "254706816485";
    
    // Generate item list string
    const itemsList = items
      .map((item, index) => `${index + 1}. 🎂 ${item.name} (x${item.quantity}) - KES ${(item.price * item.quantity).toLocaleString()}`)
      .join('\n');

    const message = `Hello Jayli Bakers, 👋\n\nI would like to place an order via your website cart:\n\n${itemsList}\n\n💰 *Total Amount:* KES ${cartTotal.toLocaleString()}\n\n🚚 *Delivery / Collection:*\nDo you require delivery within Mbita? (Yes/No):\n- If Yes, Delivery Address/Landmark:\n\n📅 *Preferred Date & Time:*\n- Date:\n- Time:\n\nKindly confirm availability and delivery charges.`;
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 backdrop-blur-sm"
        onClick={toggleCart}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-[70] w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-brand-cream/30">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-brand-darkBrown" size={24} />
            <h2 className="text-xl font-bold font-serif text-brand-darkBrown">Your Cart</h2>
            <span className="bg-brand-pink text-brand-darkBrown text-xs font-bold px-2 py-0.5 rounded-full">
              {items.length} items
            </span>
          </div>
          <button 
            onClick={toggleCart}
            className="p-2 text-gray-400 hover:text-brand-darkBrown hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-4">
              <div className="bg-brand-cream p-6 rounded-full mb-4">
                <ShoppingBag size={48} className="text-brand-brown/40" />
              </div>
              <h3 className="text-xl font-bold text-brand-darkBrown mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">Looks like you haven't added any treats yet.</p>
              <Button onClick={toggleCart} variant="outline" className="text-sm">
                Start Shopping
              </Button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 animate-fade-in-up">
                <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 border border-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-brand-darkBrown">{item.name}</h4>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-end mt-2">
                    <p className="font-bold text-brand-brown text-sm">
                      KES {(item.price * item.quantity).toLocaleString()}
                    </p>
                    
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1 border border-gray-100">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 hover:bg-white hover:shadow-sm rounded transition-all text-brand-darkBrown disabled:opacity-30"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 hover:bg-white hover:shadow-sm rounded transition-all text-brand-darkBrown"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 p-6 bg-brand-cream/10 space-y-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600 font-medium">Subtotal</span>
              <span className="text-lg font-bold text-brand-darkBrown">KES {cartTotal.toLocaleString()}</span>
            </div>
            
            <p className="text-xs text-gray-500 text-center mb-4">
              Shipping and taxes calculated via WhatsApp.
            </p>

            <Button 
              onClick={handleCheckout} 
              className="w-full justify-between group !bg-brand-darkBrown hover:!bg-brand-brown text-brand-cream"
            >
              <span>Checkout via WhatsApp</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;