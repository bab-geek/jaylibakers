import React, { useState } from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2, ArrowRight, MessageCircle } from 'lucide-react';
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

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCheckoutClick = () => {
    setShowConfirmation(true);
  };

  const handleOrderMore = () => {
    toggleCart();
    setTimeout(() => {
      const menuSection = document.getElementById('menu');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const confirmCheckout = () => {
    const phoneNumber = "254706816485";
    
    // Generate item list string
    const itemsList = items
      .map((item, index) => `${index + 1}. 🎂 ${item.name} (x${item.quantity}) - KES ${(item.price * item.quantity).toLocaleString()}`)
      .join('\n');

    const message = `Hello Jayli Bakers, 👋\n\nI would like to place an order via your website cart:\n\n${itemsList}\n\n💰 *Total Amount:* KES ${cartTotal.toLocaleString()}\n\n🚚 *Delivery / Collection:*\nDo you require delivery within Mbita? (Yes/No):\n- If Yes, Delivery Address/Landmark:\n\n📅 *Preferred Date & Time:*\n- Date:\n- Time:\n\nKindly confirm availability and delivery charges.`;
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setShowConfirmation(false);
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
          <div className="border-t border-brand-brown/10 p-6 bg-[#FDF6E3] space-y-3 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center mb-1">
              <span className="text-brand-brown font-medium">Subtotal</span>
              <span className="text-xl font-bold text-brand-darkBrown">KES {cartTotal.toLocaleString()}</span>
            </div>
            
            <p className="text-xs text-gray-500 text-center mb-4">
              Shipping and taxes calculated via WhatsApp.
            </p>

            <Button 
              onClick={handleOrderMore}
              variant="outline"
              className="w-full border-brand-brown/30 text-brand-brown hover:bg-brand-brown hover:text-white"
            >
              Order More
            </Button>

            <Button 
              onClick={handleCheckoutClick} 
              className="w-full justify-between group !bg-[#4E342E] hover:!bg-[#8D6E63] text-brand-cream shadow-lg hover:shadow-xl border-none"
            >
              <span>Checkout via WhatsApp</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
         <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
            {/* Modal Backdrop */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
              onClick={() => setShowConfirmation(false)}
            />
            
            {/* Modal Content */}
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 relative z-90 animate-fade-in-up scale-100">
              <div className="flex flex-col items-center text-center">
                 <div className="bg-[#25D366]/10 p-4 rounded-full mb-4 text-[#25D366]">
                    <MessageCircle size={32} />
                 </div>
                 <h3 className="text-xl font-serif font-bold text-brand-darkBrown mb-2">Proceed to WhatsApp?</h3>
                 <p className="text-gray-600 mb-6 text-sm">
                   You will be redirected to WhatsApp to send your order details to Jayli Bakers.
                 </p>
                 
                 <div className="bg-brand-cream/30 rounded-lg p-4 w-full mb-6 text-left">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Items:</span>
                      <span className="font-bold text-brand-darkBrown">{items.reduce((acc, item) => acc + item.quantity, 0)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold border-t border-brand-brown/10 pt-2 mt-1">
                      <span className="text-brand-darkBrown">Total:</span>
                      <span className="text-brand-brown">KES {cartTotal.toLocaleString()}</span>
                    </div>
                 </div>

                 <div className="flex gap-3 w-full">
                   <Button 
                     variant="outline" 
                     className="flex-1 border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                     onClick={() => setShowConfirmation(false)}
                   >
                     Cancel
                   </Button>
                   <Button 
                     className="flex-1 !bg-[#25D366] hover:!bg-[#128C7E] text-white border-none shadow-md hover:shadow-lg"
                     onClick={confirmCheckout}
                   >
                     Confirm Order
                   </Button>
                 </div>
              </div>
            </div>
         </div>
      )}
    </>
  );
};

export default CartDrawer;