import React from 'react';
import { Heart, Star, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-28 py-16 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="lg:w-1/2 relative w-full">
            <div className="absolute top-4 -left-4 w-full h-full bg-brand-pink rounded-3xl -z-10 transform rotate-2"></div>
            <img 
              src="https://images.unsplash.com/photo-1586985289906-406988974504?auto=format&fit=crop&w=800&q=80" 
              alt="Baker decorating a cake" 
              className="rounded-3xl shadow-lg w-full object-cover h-64 sm:h-96 md:h-[500px]"
            />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-darkBrown mb-6">
              Baking with Love & Quality Ingredients
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              Proudly serving the Mbita community, we believe that every cake tells a story. At Jayli Bakers, our journey began right here with a simple mission: to bring world-class baking to our hometown.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
              We meticulously source the finest ingredients—from rich cocoa to fresh local dairy—to ensure that every bite is a celebration. Whether it's a wedding at the shores of Lake Victoria, a birthday party, or just a sweet craving, we pour our heart into every batter, frosting, and decoration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-brand-cream rounded-xl">
                <Heart className="text-brand-pink mb-2" size={32} />
                <span className="font-semibold text-brand-darkBrown">Made with Love</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-brand-cream rounded-xl">
                <Star className="text-brand-accent mb-2" size={32} />
                <span className="font-semibold text-brand-darkBrown">Premium Quality</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-brand-cream rounded-xl">
                <Award className="text-brand-brown mb-2" size={32} />
                <span className="font-semibold text-brand-darkBrown">Expertly Baked</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;