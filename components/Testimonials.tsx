import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Adhiambo O.",
    role: "Regular Customer",
    content: "The best cakes in Mbita hands down! I ordered a custom birthday cake for my daughter and it was not only beautiful but moist and delicious.",
    rating: 5
  },
  {
    id: 2,
    name: "Kevin M.",
    role: "Wedding Client",
    content: "Jayli Bakers never disappoints. Their Red Velvet is absolutely to die for. Great service and very professional staff who understood our vision.",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah K.",
    role: "Event Planner",
    content: "I use Jayli for all my events around the lake region. The quality is consistent, they are always on time, and the presentation is top-notch.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-brand-pink/10 scroll-mt-28" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-darkBrown mb-4">
            What Our Customers Say
          </h2>
          <div className="w-20 md:w-24 h-1 bg-brand-brown mx-auto rounded-full"></div>
        </div>

        {/* Grid logic: 1 col on mobile, 3 cols on tablet and desktop to fit 3 items perfectly */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 relative flex flex-col"
            >
              <Quote className="absolute top-6 right-6 text-brand-pink/30" size={40} />
              
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-brand-accent text-brand-accent" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 italic relative z-10 leading-relaxed text-sm md:text-base flex-grow">
                "{testimonial.content}"
              </p>
              
              <div className="mt-auto">
                <h4 className="font-bold text-lg text-brand-darkBrown">{testimonial.name}</h4>
                <p className="text-sm text-brand-brown font-medium">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;