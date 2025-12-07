import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1920&q=80" 
          alt="Delicious pastries background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-darkBrown/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
        <div className="flex flex-col items-center">
          {/* Typography adjusted: text-3xl for XS screens, scaling up smoothly */}
          <h1 className="animate-fade-in-up text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Freshly Baked Happiness at <span className="text-brand-pink">Jayli Bakers</span>.
          </h1>
          <p className="animate-fade-in-up-delay-1 text-base sm:text-xl md:text-2xl text-gray-100 mb-8 font-light max-w-2xl mx-auto drop-shadow-md px-2">
            Mbita's favorite bakery. Crafting memories one slice at a time with the finest local ingredients and a touch of love.
          </p>
          <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <a 
              href="#menu" 
              onClick={handleScroll}
              className="inline-block w-full sm:w-auto"
            >
              <Button 
                className="animate-pulse-slow w-full sm:w-auto text-base px-8 py-3.5 md:text-lg md:px-10 md:py-4 bg-brand-darkBrown text-brand-cream hover:bg-brand-brown hover:text-white font-bold shadow-lg hover:shadow-xl hover:animate-none border-2 border-brand-cream/20"
              >
                View Menu
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;