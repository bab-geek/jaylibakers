import React, { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Toast: React.FC = () => {
  const { toastMessage } = useCart();
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (toastMessage) {
      setMessage(toastMessage);
      setIsVisible(true);
      
      // Hide animation slightly before the context clears the message
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2700);
      
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  if (!message) return null;

  return (
    <div 
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[100] transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
      }`}
    >
       <div className="bg-[#4E342E] text-white px-6 py-3.5 rounded-full shadow-2xl flex items-center gap-3 border border-brand-cream/10 backdrop-blur-md bg-opacity-95">
         <div className="bg-[#25D366] rounded-full p-0.5">
           <CheckCircle size={16} className="text-white fill-none stroke-current stroke-[3]" />
         </div>
         <span className="font-medium text-sm tracking-wide">{message}</span>
       </div>
    </div>
  );
};

export default Toast;