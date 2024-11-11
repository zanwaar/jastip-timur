import React from 'react';
import { Package2, Navigation, Shield, MapPin, TrendingUp, Search } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import PopularServices from './components/PopularServices';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <PopularServices />
      <Footer />
    </div>
  );
}

export default App;