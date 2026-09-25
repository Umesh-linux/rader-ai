import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveDemo from './components/InteractiveDemo';
import Features from './components/Features';
import Architecture from './components/Architecture';
import CodeShowcase from './components/CodeShowcase';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import DemoModal from './components/DemoModal';
import Footer from './components/Footer';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  const handleScrollToRadar = () => {
    const el = document.getElementById('radar-demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#04070d] text-slate-100 flex flex-col font-sans selection:bg-radar-glow selection:text-black">
      {/* Top Fixed Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Hero
          onOpenDemo={handleOpenDemo}
          onScrollToRadar={handleScrollToRadar}
        />

        <InteractiveDemo onOpenDemo={handleOpenDemo} />

        <Features onOpenDemo={handleOpenDemo} />

        <Architecture onOpenDemo={handleOpenDemo} />

        <CodeShowcase onOpenDemo={handleOpenDemo} />

        <Pricing onOpenDemo={handleOpenDemo} />

        <Testimonials />
      </main>

      {/* Footer */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* Lead Generation & Provisioning Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </div>
  );
}
