import React from 'react';
import { AUDIENCE } from '../constants';

export const Audience: React.FC = () => {
  return (
    <section id="audience" className="py-24 md:py-40 px-6 bg-boring-paper border-y border-boring-gray-100 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* CIRCUIT BREAKER HEADER */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24 relative">
             {/* Anchor Line */}
             <div className="h-24 w-px bg-gradient-to-b from-white via-boring-gray-200 to-boring-gray-200 absolute -top-24 left-1/2 -translate-x-1/2"></div>
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white border border-boring-gray-200 shadow-sm relative z-10 cursor-default group hover:border-emerald-200 transition-colors">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-boring-gray-500 group-hover:text-emerald-600 transition-colors">
                    Operator Profiles
                </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold tracking-tight-swiss text-boring-black mb-6 leading-[0.95]">
                Who is this for.
            </h2>
            <p className="text-xl text-boring-gray-600 max-w-2xl leading-relaxed font-medium">
                We build tools for people who want to own their technology, not lease it.
            </p>
        </div>
        
        {/* Symmetrical 4-Col Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUDIENCE.map((item, index) => (
                <div key={index} className="group bg-white p-8 rounded-2xl border border-boring-gray-200 shadow-sm hover:shadow-xl hover:shadow-boring-gray-200/50 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full text-center">
                    <div className="mb-6 flex justify-center">
                        <span className="text-[10px] font-mono font-extrabold text-boring-gray-400 uppercase tracking-widest border border-boring-gray-200 bg-boring-gray-100/50 px-2 py-1 rounded group-hover:text-boring-orange group-hover:border-boring-orange/30 transition-colors">
                            Profile 0{index + 1}
                        </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold tracking-tight-swiss text-boring-black mb-4 group-hover:text-boring-orange transition-colors">
                        {item.title}.
                    </h3>
                    
                    <div className="mt-auto pt-6 border-t border-boring-gray-100 w-full">
                        <p className="text-sm text-boring-gray-600 font-medium leading-relaxed">
                            {item.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-24 text-center">
            <p className="inline-block text-xs font-mono font-bold text-boring-gray-400 uppercase tracking-widest border-b border-boring-gray-300 pb-1">
                If this sounds like you, you are home.
            </p>
        </div>
      </div>
    </section>
  );
};