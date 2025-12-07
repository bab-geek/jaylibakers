import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-brand-cream relative">
        <Navbar />
        <CartDrawer />
        <Toast />
        <main>
          <Hero />
          <Menu />
          <About />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;