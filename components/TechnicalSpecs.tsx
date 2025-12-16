import React from 'react';
import { TECHNICAL_SPECS } from '../constants';

export const TechnicalSpecs: React.FC = () => {
  return (
    <section id="specs" className="py-24 md:py-32 px-6 bg-[#1A1A19] text-white relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* CIRCUIT BREAKER HEADER (DARK MODE) */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 pb-8 border-b border-white/10 relative">
             {/* Anchor Line - Fade from top to match light sections above */}
             <div className="h-24 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent absolute -top-24 left-1/2 -translate-x-1/2"></div>
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-sm relative z-10 cursor-default group hover:border-emerald-500/30 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-gray-400 group-hover:text-emerald-500 transition-colors">
                    System Internals
                </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight-swiss text-white mb-8">
                Why it lasts.
            </h2>

            <div className="text-xs font-mono font-extrabold text-gray-500 uppercase tracking-widest flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                v1 Mockingbird / Stable
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {TECHNICAL_SPECS.map((spec, index) => (
            <div key={index} className="group bg-[#1A1A19] p-8 hover:bg-[#222] transition-colors relative text-center">
              <h4 className="text-[9px] font-extrabold uppercase tracking-widest text-gray-500 mb-4 group-hover:text-boring-orange transition-colors">
                {spec.label}
              </h4>
              <div className="flex items-center justify-center gap-2 mb-4">
                <p className="text-2xl font-mono font-bold text-white">
                    {spec.value}
                </p>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-medium transition-colors">
                {spec.detail}
              </p>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row gap-12 justify-center text-center md:text-left">
            <div className="md:w-1/3 flex flex-col items-center md:items-start">
                <h4 className="font-bold text-white mb-3 text-sm flex items-center gap-2">
                    <div className="w-1 h-4 bg-boring-orange"></div>
                    Built to Last
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                    Most software gets slower so you have to buy a new computer. We write efficient code so you can keep using your current laptop for years longer.
                </p>
            </div>
            <div className="md:w-1/3 flex flex-col items-center md:items-start">
                <h4 className="font-bold text-white mb-3 text-sm flex items-center gap-2">
                    <div className="w-1 h-4 bg-emerald-500"></div>
                    Unbreakable Core
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                   The core system is "read-only." This means viruses and bad apps physically cannot break your computer, because they aren't allowed to touch the engine.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};