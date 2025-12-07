import React from 'react';
import { Phone, Facebook, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="scroll-mt-28 bg-brand-darkBrown text-brand-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold mb-4 text-white">Jayli Bakers</h3>
            <p className="text-brand-cream/80 mb-6">
              Bringing sweetness to your life, one cake at a time. Order today for a taste of happiness.
            </p>
            <div className="flex justify-center md:justify-start">
              <a 
                href="https://www.facebook.com/JayliBakers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-brand-pink transition-colors flex items-center gap-2 group"
                aria-label="Visit Jayli Bakers on Facebook"
              >
                <div className="p-2 bg-brand-cream/10 rounded-full group-hover:bg-brand-pink/20 transition-colors">
                  <Facebook size={24} />
                </div>
                <span className="font-medium">Jayli Bakers</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 inline-block md:block">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => handleScroll(e, '#home')}
                  className="hover:text-brand-pink transition-colors cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#menu" 
                  onClick={(e) => handleScroll(e, '#menu')}
                  className="hover:text-brand-pink transition-colors cursor-pointer"
                >
                  Menu
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleScroll(e, '#about')}
                  className="hover:text-brand-pink transition-colors cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="hover:text-brand-pink transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-6 text-white">Get in Touch</h4>
            <div className="flex flex-col items-center md:items-start space-y-4">
              <a href="tel:0706816485" className="flex items-center gap-2 hover:text-brand-pink transition-colors">
                <Phone size={20} />
                <span>0706816485</span>
              </a>
              <div className="flex items-center gap-2 text-brand-cream/80">
                <MapPin size={20} />
                <span>Mbita, Kenya</span>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-6 text-white">Find Us</h4>
            <div className="rounded-xl overflow-hidden shadow-lg h-48 w-full bg-brand-cream/10 border border-brand-cream/20">
              <iframe 
                width="100%" 
                height="100%" 
                id="gmap_canvas" 
                src="https://maps.google.com/maps?q=Mbita,Kenya&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0}
                title="Jayli Bakers Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-cream/10 pt-8 text-center text-sm text-brand-cream/60">
          <p>&copy; {new Date().getFullYear()} Jayli Bakers. All rights reserved. | Design by Bussllus Bertrand</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;