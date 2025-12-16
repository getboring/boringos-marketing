import React from 'react';
import { APP_SUITE } from '../constants';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 md:py-32 px-6 bg-white relative z-10">
      
      <div className="max-w-6xl mx-auto">
        
        {/* CIRCUIT BREAKER HEADER */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24 relative">
             {/* Anchor Line - Solid Physical Connection */}
             <div className="h-24 w-px bg-boring-gray-200 absolute -top-24 left-1/2 -translate-x-1/2"></div>
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-boring-paper border border-boring-gray-200 shadow-sm relative z-10 cursor-default group hover:border-boring-orange/30 transition-colors">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-boring-orange opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-boring-orange"></span>
                </span>
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-boring-gray-600 group-hover:text-boring-orange transition-colors">
                    Inventory Loaded
                </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight-swiss mb-8 text-boring-black leading-[0.95]">
                Curated for clarity.
            </h2>
            
            <p className="text-xl text-boring-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
                We included everything you need to do your work, and nothing you don't.
            </p>
        </div>
        
        {/* Symmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {APP_SUITE.map((suite, index) => (
            <div key={index} className="flex flex-col p-10 rounded-3xl bg-boring-paper border border-boring-gray-200 hover:border-boring-gray-300 transition-colors group">
                
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 p-3.5 bg-white rounded-2xl text-boring-black shadow-sm border border-boring-gray-100 group-hover:scale-105 transition-transform duration-500">
                            <svg viewBox="0 0 24 24" className="w-full h-full fill-current"><path d={suite.icon} /></svg>
                        </div>
                        <div>
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-boring-gray-500 block mb-1">Package 0{index + 1}</span>
                            <h3 className="text-2xl font-bold text-boring-black">{suite.category}</h3>
                        </div>
                    </div>
                </div>

                {/* Description - Ink Mode Compliant */}
                <p className="text-boring-gray-600 font-medium leading-relaxed text-sm mb-10 flex-grow max-w-md">
                    {suite.description}
                </p>

                {/* Apps Grid */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                    {suite.apps.map((app, idx) => (
                        <div key={idx} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-boring-gray-200 text-xs font-extrabold text-boring-gray-600 uppercase tracking-wide group-hover:border-boring-gray-300 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-boring-gray-400 group-hover:bg-boring-orange transition-colors"></div>
                            {app}
                        </div>
                    ))}
                </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};