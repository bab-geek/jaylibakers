import React, { useState } from 'react';
import { ShoppingCart, Plus, AlertCircle, MessageCircle } from 'lucide-react';
import Button from './Button';
import { Cake } from '../types';
import { useCart } from '../context/CartContext';

const cakes: Cake[] = [
  {
    id: 1,
    name: 'Chocolate Drip',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    description: 'Rich chocolate sponge with decadent ganache drip.'
  },
  {
    id: 2,
    name: 'Vanilla Sponge',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=800&q=80',
    description: 'Classic fluffy vanilla layers with buttercream frosting.'
  },
  {
    id: 3,
    name: 'Red Velvet',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=800&q=80',
    description: 'Silky red velvet cake with signature cream cheese icing.'
  },
  {
    id: 4,
    name: 'Black Forest',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80',
    description: 'Layers of chocolate, cherries, and whipped cream.'
  },
  {
    id: 5,
    name: 'Carrot Delight',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=800&q=80',
    description: 'Spiced carrot cake with walnuts and smooth frosting.'
  },
  {
    id: 6,
    name: 'Exotic Fruit Cake',
    price: 4000,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
    description: 'Dense fruit cake loaded with premium dried fruits and nuts.'
  }
];

const Menu: React.FC = () => {
  const { addToCart } = useCart();
  const [orderingId, setOrderingId] = useState<number | null>(null);
  const [errorId, setErrorId] = useState<number | null>(null);

  const handleOrder = async (cake: Cake) => {
    setOrderingId(cake.id);
    setErrorId(null);

    // Simulate processing delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));

    try {
      const phoneNumber = "254706816485";
      const message = `Hello Jayli Bakers, 👋\n\nI would like to place a direct order for:\n\n🎂 *${cake.name}*\nPrice: KES ${cake.price.toLocaleString()}\n\n🚚 *Delivery / Collection:*\nDo you require delivery within Mbita? (Yes/No):\n- If Yes, Delivery Address/Landmark:\n\n📅 *Preferred Date & Time:*\n- Date:\n- Time:\n\nKindly confirm availability.`;
      
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      const newWindow = window.open(url, '_blank');

      // Check if popup was blocked
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        throw new Error('Popup blocked');
      }
    } catch (err) {
      console.error("Order failed:", err);
      setErrorId(cake.id);
    } finally {
      setOrderingId(null);
    }
  };

  return (
    <section id="menu" className="scroll-mt-28 py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-brand-cream/50 rounded-3xl my-8">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-darkBrown mb-4">
          Our Signature Cakes
        </h2>
        <div className="w-20 md:w-24 h-1 bg-brand-pink mx-auto rounded-full"></div>
        <p className="mt-4 text-brand-brown text-base md:text-lg max-w-2xl mx-auto">
          Handcrafted daily for your special moments.
        </p>
      </div>

      {/* Optimized Grid: 1 col on XS, 2 cols on SM (tablets), 3 cols on LG */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {cakes.map((cake) => (
          <div 
            key={cake.id} 
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
          >
            {/* Responsive Image Height: h-48 on mobile (compact), h-56 on sm, h-64 on lg */}
            <div className="relative overflow-hidden h-48 sm:h-56 lg:h-64 flex-shrink-0">
              <img 
                src={cake.image} 
                alt={cake.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              
              {/* Quick add button overlay for mobile convenience */}
              <button 
                onClick={() => addToCart(cake)}
                className="absolute bottom-3 right-3 bg-white text-brand-darkBrown p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-pink transform translate-y-4 group-hover:translate-y-0"
                aria-label={`Add ${cake.name} to cart`}
              >
                <Plus size={20} />
              </button>
            </div>
            
            <div className="p-5 sm:p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2 gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-brand-darkBrown leading-tight">{cake.name}</h3>
                <span className="bg-brand-cream text-brand-brown px-2.5 py-1 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">
                  KES {cake.price.toLocaleString()}
                </span>
              </div>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                {cake.description}
              </p>
              
              <div className="mt-auto space-y-3">
                {errorId === cake.id && (
                  <div className="text-red-500 text-xs flex items-center gap-1 bg-red-50 p-2 rounded-lg animate-fade-in-up border border-red-100">
                    <AlertCircle size={14} className="flex-shrink-0" />
                    <span>Could not open WhatsApp. Please try again later.</span>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button 
                    onClick={() => handleOrder(cake)}
                    disabled={orderingId === cake.id}
                    isLoading={orderingId === cake.id}
                    variant="outline"
                    className="flex-1 text-sm px-3 !border-[#4E342E] !text-[#4E342E] hover:!bg-[#4E342E] hover:!text-brand-cream"
                  >
                    {orderingId === cake.id ? 'Opening...' : 'Order Now'}
                  </Button>

                  <Button 
                    onClick={() => addToCart(cake)}
                    className="flex-1 text-sm px-3 !bg-[#4E342E] hover:!bg-[#8D6E63] text-white shadow-md hover:shadow-lg border border-transparent"
                  >
                    <ShoppingCart size={16} />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;