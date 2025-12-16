import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyBoring } from './components/WhyBoring';
import { Features } from './components/Features';
import { Audience } from './components/Audience';
import { HowItWorks } from './components/HowItWorks';
import { TechnicalSpecs } from './components/TechnicalSpecs';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { MockingbirdPage } from './components/MockingbirdPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'mockingbird'>('home');

  const navigateToMockingbird = () => {
    window.scrollTo(0, 0);
    setCurrentPage('mockingbird');
  };

  const navigateToHome = () => {
    window.scrollTo(0, 0);
    setCurrentPage('home');
  };

  // Unified Section Scroller
  const scrollToSection = (sectionId: string) => {
    if (currentPage === 'mockingbird') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    scrollToSection('download');
  };

  if (currentPage === 'mockingbird') {
    return (
      <div className="min-h-screen bg-boring-white text-boring-black selection:bg-boring-orange selection:text-white font-sans">
        <Header 
          onNavigate={navigateToMockingbird} 
          onHome={navigateToHome}
          onPhilosophy={() => scrollToSection('philosophy')}
          onOperators={() => scrollToSection('features')}
          onSpecs={() => scrollToSection('specs')} 
          onDownload={handleDownloadClick} 
        />
        <MockingbirdPage onBack={navigateToHome} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-boring-white text-boring-black selection:bg-boring-orange selection:text-white font-sans">
      <Header 
        onNavigate={navigateToMockingbird} 
        onHome={navigateToHome}
        onPhilosophy={() => scrollToSection('philosophy')}
        onOperators={() => scrollToSection('features')}
        onSpecs={() => scrollToSection('specs')}
        onDownload={handleDownloadClick}
      />
      <main>
        <Hero onBuildClick={navigateToMockingbird} />
        <WhyBoring />
        <Features />
        <Audience />
        <HowItWorks />
        <TechnicalSpecs />
        
        {/* Call to Action Section - The Escape Hatch */}
        <section id="download" className="py-32 px-6 bg-boring-gray-100 border-t border-boring-gray-200 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-5" 
             style={{
               backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
               backgroundSize: '24px 24px',
             }}>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
             
             {/* CIRCUIT BREAKER HEADER for Download */}
             <div className="flex flex-col items-center text-center mb-12 relative">
                {/* Anchor Line */}
                <div className="h-24 w-px bg-boring-gray-300 absolute -top-32 left-1/2 -translate-x-1/2"></div>
                
                {/* Status Pill */}
                <div className="mb-8 inline-flex items-center gap-2 bg-white border border-boring-gray-200 px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-boring-gray-600 shadow-sm">
                    Exit Protocol
                </div>
             </div>
             
             {/* The Card */}
             <div className="bg-white p-12 md:p-20 rounded-3xl shadow-xl border border-boring-gray-200 relative overflow-hidden group">
                 {/* Top Accent */}
                 <div className="absolute top-0 left-0 right-0 h-2 bg-boring-black"></div>
                 
                 <h2 className="text-5xl md:text-7xl font-bold tracking-tight-swiss mb-8 leading-[0.95] text-boring-black">
                   Exit the cycle.
                 </h2>
                 <p className="text-xl md:text-2xl text-boring-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
                   Stop fighting your computer. Stop renting your tools. Stop feeding the algorithm.
                 </p>
                 
                 <div className="flex flex-col items-center gap-8">
                    <a href="#" className="no-underline w-full md:w-auto" onClick={(e) => e.preventDefault()}>
                      <Button variant="primary" className="text-xl px-16 py-6 w-full md:w-auto hover:scale-105 transition-transform shadow-2xl shadow-boring-black/20 rounded-2xl">
                        Download Image
                      </Button>
                    </a>
                    
                    <div className="flex items-center gap-6 text-[10px] font-mono font-extrabold text-boring-gray-600 uppercase tracking-widest bg-boring-gray-100 px-6 py-3 rounded-lg border border-boring-gray-200">
                      <span>3.2GB ISO</span>
                      <div className="w-px h-3 bg-boring-gray-400"></div>
                      <span>MD5: 8f4a...2c1</span>
                      <div className="w-px h-3 bg-boring-gray-400"></div>
                      <span>100% Free</span>
                    </div>
                 </div>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;