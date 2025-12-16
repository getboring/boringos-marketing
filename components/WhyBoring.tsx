import React from 'react';
import { PROBLEM, PHILOSOPHY, WHAT_NOT } from '../constants';

export const WhyBoring: React.FC = () => {
  return (
    <section id="why-boring" className="bg-boring-paper relative overflow-hidden">
      
      {/* =========================================
          SECTION 1: THE DIAGNOSTIC REPORT
          Signal: Red (Conflict)
         ========================================= */}
      <div className="py-24 md:py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
            
            {/* CIRCUIT BREAKER HEADER */}
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 relative">
                {/* Anchor Line: Solid Physical Connection (No Gradients) */}
                <div className="h-24 w-px bg-boring-gray-200 absolute -top-24 left-1/2 -translate-x-1/2"></div>
                
                {/* Status Pill */}
                <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white border border-boring-gray-200 shadow-sm relative z-10 group hover:border-red-200 transition-colors cursor-default">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-boring-gray-600 group-hover:text-red-500 transition-colors">
                        System Conflict
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight-swiss mb-8 leading-[0.95] text-boring-black">
                   {PROBLEM.headline}.
                </h2>
                
                {/* Subtext */}
                <p className="text-xl md:text-2xl text-boring-gray-600 leading-relaxed font-medium max-w-2xl">
                   {PROBLEM.text}
                </p>
            </div>

            {/* THE WORKFLOW CHAIN */}
            <div className="relative mb-24">
                {/* Connecting Line (Desktop) - Physical Wire */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-boring-gray-200 -z-10 -translate-y-1/2"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    
                    {/* STEP 01: SYMPTOM */}
                    <div className="bg-boring-paper md:bg-white p-8 rounded-2xl border border-boring-gray-200 shadow-sm relative group">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-boring-gray-200 px-3 py-1 rounded-full text-[9px] font-extrabold font-mono uppercase tracking-widest text-boring-gray-600">
                            Step 01
                        </div>
                        <div className="mb-4 text-red-600 font-mono text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-2">
                             <span className="w-1.5 h-1.5 bg-red-500 rounded-sm"></span>
                             Err_Interruption
                        </div>
                        <h3 className="text-xl font-bold text-boring-black mb-3">The Symptom</h3>
                        <p className="text-sm text-boring-gray-600 font-medium leading-relaxed">
                             You sit down to do deep work. 5 minutes later, a notification slides in. An update reboots your machine. Your flow is broken.
                        </p>
                        {/* Mobile Connector */}
                        <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full h-12 w-px bg-boring-gray-300"></div>
                        <div className="hidden md:block absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 bg-boring-paper text-boring-gray-300">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </div>
                    </div>

                    {/* STEP 02: ROOT CAUSE */}
                    <div className="bg-boring-paper md:bg-white p-8 rounded-2xl border border-boring-gray-200 shadow-sm relative group mt-12 md:mt-0">
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-boring-gray-200 px-3 py-1 rounded-full text-[9px] font-extrabold font-mono uppercase tracking-widest text-boring-gray-600">
                            Step 02
                        </div>
                        <div className="mb-4 text-boring-orange font-mono text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-2">
                             <span className="w-1.5 h-1.5 bg-boring-orange rounded-sm"></span>
                             Warn_Attention_Theft
                        </div>
                        <h3 className="text-xl font-bold text-boring-black mb-3">The Root Cause</h3>
                        <p className="text-sm text-boring-gray-600 font-medium leading-relaxed">
                             Modern OSs are not tools; they are storefronts. They are designed to extract your data and show you ads, not to help you think.
                        </p>
                         {/* Mobile Connector */}
                         <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full h-12 w-px bg-boring-gray-300"></div>
                         <div className="hidden md:block absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 bg-boring-paper text-boring-gray-300">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </div>
                    </div>

                    {/* STEP 03: PATCH */}
                    <div className="bg-white p-8 rounded-2xl border border-emerald-500/30 shadow-xl shadow-emerald-500/5 relative group mt-12 md:mt-0">
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-[9px] font-extrabold font-mono uppercase tracking-widest text-emerald-700">
                            Step 03
                        </div>
                        <div className="mb-4 text-emerald-700 font-mono text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-2">
                             <span className="w-1.5 h-1.5 bg-emerald-500 rounded-sm"></span>
                             Patch_Applied
                        </div>
                        <h3 className="text-xl font-bold text-boring-black mb-3">The Fix</h3>
                        <p className="text-sm text-boring-gray-600 font-medium leading-relaxed">
                             We strip out the storefront. We remove the trackers. We lock the core. The result is a computer that is silent unless you speak to it.
                        </p>
                        
                        {/* Physical connection to Monitor */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full h-12 w-px bg-emerald-500/30"></div>
                    </div>

                </div>
            </div>

            {/* THE PROOF: Comparative Monitor */}
            <div className="max-w-4xl mx-auto pt-12">
                 <div className="bg-boring-black rounded-3xl shadow-2xl shadow-boring-gray-400/20 border border-boring-gray-200 relative overflow-hidden group">
                    
                    {/* Monitor Header */}
                    <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-[#222]">
                         <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                            <svg className="w-3 h-3 text-boring-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                            Live Architecture Comparison
                         </span>
                         <div className="flex items-center gap-3">
                            <div className="text-[9px] font-mono text-gray-500 uppercase">Load_Balancing: <span className="text-white">Active</span></div>
                            <div className="w-px h-3 bg-white/20"></div>
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                         </div>
                    </div>

                    {/* Comparison Grid */}
                    <div className="grid grid-cols-2 h-64 md:h-80 relative">
                        {/* Center Divider */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 z-10"></div>

                        {/* LEFT: LEGACY */}
                        <div className="bg-[#1A1A19] p-6 md:p-8 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#EF4444 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <div className="text-[10px] font-extrabold text-red-400 uppercase tracking-widest mb-1">Legacy Kernel</div>
                                        <div className="text-xl md:text-2xl font-bold text-white">High Noise</div>
                                    </div>
                                    <div className="px-2 py-1 bg-red-500/10 border border-red-500/20 rounded text-[9px] font-mono font-extrabold text-red-500 uppercase">
                                        Unstable
                                    </div>
                                </div>
                                
                                {/* Metrics */}
                                <div className="space-y-4 font-mono text-[10px] text-gray-500">
                                    <div className="flex justify-between items-center">
                                        <span>BG_Processes</span>
                                        <span className="text-red-400">142 Active</span>
                                    </div>
                                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-red-500 w-3/4 animate-pulse"></div>
                                    </div>

                                    <div className="flex justify-between items-center mt-4">
                                        <span>Telemetry_Out</span>
                                        <span className="text-red-400">Uploading...</span>
                                    </div>
                                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-boring-orange w-1/2 animate-pulse" style={{ animationDuration: '0.5s' }}></div>
                                    </div>
                                </div>
                                
                                <div className="mt-auto pt-4 border-t border-white/5">
                                    <div className="text-[9px] text-red-400/60 uppercase tracking-widest font-extrabold">Interrupt detected: Update_Svc.exe</div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: BORING */}
                        <div className="bg-[#1A1A19] p-6 md:p-8 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#10B981 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <div className="text-[10px] font-extrabold text-emerald-500 uppercase tracking-widest mb-1">Boring Kernel</div>
                                        <div className="text-xl md:text-2xl font-bold text-white">Silence</div>
                                    </div>
                                    <div className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[9px] font-mono font-extrabold text-emerald-500 uppercase">
                                        Optimal
                                    </div>
                                </div>

                                {/* Metrics */}
                                <div className="space-y-4 font-mono text-[10px] text-gray-500">
                                    <div className="flex justify-between items-center">
                                        <span>BG_Processes</span>
                                        <span className="text-emerald-500">12 Active</span>
                                    </div>
                                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-emerald-500 w-[8%]"></div>
                                    </div>

                                    <div className="flex justify-between items-center mt-4">
                                        <span>Telemetry_Out</span>
                                        <span className="text-emerald-500">Blocked (0kb)</span>
                                    </div>
                                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-emerald-900 w-px"></div>
                                    </div>
                                </div>

                                <div className="mt-auto pt-4 border-t border-white/5">
                                    <div className="text-[9px] text-emerald-500/60 uppercase tracking-widest font-extrabold">System Status: User_Focused</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
      
      {/* =========================================
          SECTION 2: THE PROMISE
          Signal: Emerald (Nominal)
         ========================================= */}
      <div id="philosophy" className="py-24 md:py-32 bg-white px-6 border-y border-boring-gray-100 relative z-10">
         <div className="max-w-6xl mx-auto">
            
            {/* CIRCUIT BREAKER HEADER */}
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 relative">
                {/* Anchor Line: Solid Physical Connection */}
                <div className="h-24 w-px bg-boring-gray-200 absolute -top-24 left-1/2 -translate-x-1/2"></div>

                {/* Status Pill */}
                <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-boring-paper border border-boring-gray-200 shadow-sm relative z-10 cursor-default group hover:border-emerald-200 transition-colors">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-boring-gray-600 group-hover:text-emerald-600 transition-colors">
                        System Nominal
                    </span>
                </div>

                <h2 className="text-5xl md:text-7xl font-bold tracking-tight-swiss mb-8 text-boring-black leading-[0.95]">
                    {PHILOSOPHY.title}
                </h2>
                <p className="text-xl md:text-2xl text-boring-gray-600 leading-relaxed font-medium">
                    {PHILOSOPHY.subtitle}
                </p>
                <p className="mt-6 text-lg text-boring-gray-600 leading-relaxed max-w-2xl font-medium">
                    {PHILOSOPHY.text}
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {PHILOSOPHY.cards.map((card, index) => (
                    <div key={index} className="p-8 rounded-2xl bg-boring-paper border border-boring-gray-100 hover:bg-white hover:border-boring-gray-200 hover:shadow-xl hover:shadow-boring-gray-200/50 transition-all duration-300 group flex flex-col items-center text-center">
                        <div className="mb-6">
                            <div className="w-12 h-12 rounded-full bg-white border border-boring-gray-200 flex items-center justify-center group-hover:border-boring-orange/30 transition-colors shadow-sm">
                                <div className="w-3 h-3 rounded-full bg-boring-orange group-hover:scale-125 transition-transform"></div>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-boring-black mb-4 group-hover:text-boring-orange transition-colors">
                            {card.title}
                        </h3>
                        <p className="text-boring-gray-600 text-sm leading-relaxed font-medium">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>

         </div>
      </div>

      {/* =========================================
          SECTION 3: THE RELIEF
          Signal: Orange (Optimization)
         ========================================= */}
      <div className="py-24 md:py-32 px-6 bg-boring-paper text-boring-black relative z-10">
        <div className="max-w-6xl mx-auto">
            
            {/* CIRCUIT BREAKER HEADER */}
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 relative">
                 {/* Anchor Line: Solid Physical Connection */}
                 <div className="h-24 w-px bg-boring-gray-200 absolute -top-24 left-1/2 -translate-x-1/2"></div>
                 
                 {/* Status Pill */}
                 <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white border border-boring-gray-200 shadow-sm relative z-10 cursor-default group hover:border-boring-orange/30 transition-colors">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-boring-orange opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-boring-orange"></span>
                    </span>
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-boring-gray-600 group-hover:text-boring-orange transition-colors">
                        Optimization
                    </span>
                </div>

                <h2 className="text-5xl md:text-7xl font-bold tracking-tight-swiss mb-6 leading-[0.95]">
                    {WHAT_NOT.headline}.
                </h2>
                <p className="text-xl text-boring-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
                    {WHAT_NOT.description}
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {WHAT_NOT.items.map((item, index) => (
                    <div key={index} className="p-8 rounded-2xl bg-white shadow-sm border border-boring-gray-200 text-left hover:-translate-y-2 transition-transform duration-300 group relative overflow-hidden">
                        
                        {/* New 'Removed' Badge - Top Right */}
                        <div className="absolute top-4 right-4 bg-red-50 border border-red-100 text-red-600 text-[9px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">
                            Removed
                        </div>

                        <div className="w-12 h-1 bg-boring-gray-200 mb-6 rounded-full group-hover:bg-boring-orange transition-colors"></div>
                        <h4 className="text-lg font-bold mb-3 text-boring-black">
                            {item.title.replace('No ', '')}
                        </h4>
                        <p className="text-sm text-boring-gray-600 font-medium leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};