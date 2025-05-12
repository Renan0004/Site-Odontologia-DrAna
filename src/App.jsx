import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Location from './components/Location';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieConsent from './components/CookieConsent';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula o carregamento dos recursos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 segundos de loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading key="loading" />
        ) : (
          <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <BeforeAfter />
            <Testimonials />
            <Gallery />
            <Location />
            <AppointmentForm />
            <Footer />
            <WhatsAppButton />
            <CookieConsent />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default App; 