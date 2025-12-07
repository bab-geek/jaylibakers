import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Cake, ShoppingCart } from 'lucide-react';
import { NavItem } from '../types';
import { useCart } from '../context/CartContext';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-brand-pink rounded-full text-brand-darkBrown">
              <Cake size={24} />
            </div>
            <span className="text-2xl font-serif font-bold text-brand-darkBrown">
              Jayli Bakers
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-brand-darkBrown hover:text-brand-accent font-medium transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Cart Button */}
            <button
              onClick={toggleCart}
              className="relative p-2.5 text-brand-darkBrown hover:bg-brand-pink/20 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-pink group"
              aria-label="Open cart"
            >
              <ShoppingCart size={24} className="group-hover:scale-110 transition-transform duration-200" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-brown text-white text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full animate-pulse-slow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2.5 text-brand-darkBrown hover:bg-brand-pink/20 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-brand-pink"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-500 ease-in-out overflow-hidden transform origin-top ${
          isOpen 
            ? 'max-h-96 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4'
        }`}
      >
        <div className="flex flex-col px-4 py-4 space-y-2 border-t border-brand-cream/50">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block px-4 py-3 text-brand-darkBrown hover:bg-brand-pink/10 rounded-lg font-medium cursor-pointer text-base transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;