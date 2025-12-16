import React from 'react';
import { STEPS } from '../constants';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how" className="py-24 md:py-32 px-6 bg-white relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* CIRCUIT BREAKER HEADER */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-32 relative">
             {/* Anchor Line - Solid */}
             <div className="h-24 w-px bg-boring-gray-200 absolute -top-24 left-1/2 -translate-x-1/2"></div>
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-boring-paper border border-boring-gray-200 shadow-sm relative z-10 cursor-default group hover:border-emerald-200 transition-colors">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-boring-gray-600 group-hover:text-emerald-600 transition-colors">
                    Installation Ritual
                </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight-swiss mb-6 text-boring-black leading-[0.95]">
                Fifteen minutes to silence.
            </h2>
            
            <p className="text-xl text-boring-gray-600 max-w-lg mx-auto leading-relaxed font-medium">
                Replacing an operating system sounds scary. We made it boring.
            </p>
        </div>
        
        <div className="relative">
            {/* Main Vertical Timeline Axis - Solid */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-boring-gray-200 md:-translate-x-1/2"></div>

            <div className="space-y-32 relative">
            {STEPS.map((step, index) => {
                const isEven = index % 2 === 0; 
                // Step 1 (Index 0): Text Left, Visual Right
                // Step 2 (Index 1): Visual Left, Text Right
                
                return (
                    <div key={index} className={`flex flex-col md:flex-row items-center gap-12 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        
                        {/* TEXT SIDE */}
                        <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-24 md:text-right' : 'md:pl-24 md:text-left'}`}>
                            <div className={`inline-block mb-4 p-2 rounded-lg bg-boring-paper border border-boring-gray-200 ${isEven ? 'md:ml-auto' : ''}`}>
                                <span className="text-[10px] font-mono font-extrabold text-boring-gray-600 uppercase tracking-widest">
                                    Phase 0{step.num}
                                </span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight-swiss text-boring-black">
                                {step.title}.
                            </h3>
                            <p className="text-boring-gray-600 text-lg leading-relaxed max-w-md ml-auto mr-auto md:mx-0 font-medium">
                                {step.text}
                            </p>
                        </div>

                        {/* CENTER NODE */}
                        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-boring-gray-100 flex items-center justify-center z-10 shadow-sm transition-transform hover:scale-110 duration-300">
                             <div className={`w-3 h-3 rounded-full ${index === 2 ? 'bg-emerald-500 animate-pulse-slow' : 'bg-boring-gray-400'}`}></div>
                        </div>
                        
                        {/* VISUAL SIDE */}
                        <div className={`w-full md:w-1/2 pl-16 md:pl-0 flex ${isEven ? 'justify-start md:pl-24' : 'justify-end md:pr-24'}`}>
                           
                           {/* Step 1 Visual: The ISO Card */}
                           {index === 0 && (
                               <div className="w-full max-w-sm bg-boring-paper p-8 rounded-2xl border border-boring-gray-200 relative group hover:-translate-y-1 transition-transform duration-500">
                                   <div className="flex items-center gap-4 mb-6">
                                       <div className="w-12 h-12 bg-white rounded-lg border border-boring-gray-200 flex items-center justify-center shadow-sm">
                                           <svg className="w-6 h-6 text-boring-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                       </div>
                                       <div>
                                           <div className="text-xs font-bold text-boring-black">boringos-installer.iso</div>
                                           <div className="text-[10px] font-mono font-extrabold text-boring-gray-500 mt-1">3.2 GB • SHA256 VERIFIED</div>
                                       </div>
                                   </div>
                                   <div className="h-2 bg-boring-gray-200 rounded-full overflow-hidden">
                                       <div className="h-full bg-boring-black w-3/4"></div>
                                   </div>
                                   <div className="mt-2 flex justify-between text-[9px] font-mono text-boring-gray-500 font-extrabold uppercase tracking-widest">
                                       <span>Downloading...</span>
                                       <span>75%</span>
                                   </div>
                               </div>
                           )}

                           {/* Step 2 Visual: The USB Drive */}
                           {index === 1 && (
                               <div className="w-full max-w-sm bg-boring-paper p-8 rounded-2xl border border-boring-gray-200 relative group hover:-translate-y-1 transition-transform duration-500">
                                   <div className="absolute top-0 right-0 p-4 opacity-10">
                                       <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>
                                   </div>
                                   <div className="relative z-10">
                                       <div className="flex items-center justify-between mb-8 border-b border-boring-gray-200 pb-4">
                                           <span className="text-xs font-extrabold uppercase tracking-widest text-boring-gray-500">Target Drive</span>
                                           <span className="text-xs font-mono font-extrabold text-boring-black">/dev/sda1</span>
                                       </div>
                                       <div className="space-y-3">
                                           <div className="flex items-center gap-3 text-xs text-boring-gray-600 font-medium">
                                               <div className="w-1.5 h-1.5 bg-boring-orange rounded-full"></div>
                                               <span>Formatting partition...</span>
                                           </div>
                                           <div className="flex items-center gap-3 text-xs text-boring-gray-600 font-medium">
                                               <div className="w-1.5 h-1.5 bg-boring-orange rounded-full"></div>
                                               <span>Writing immutable core...</span>
                                           </div>
                                           <div className="flex items-center gap-3 text-xs text-boring-gray-500 opacity-70 font-medium">
                                               <div className="w-1.5 h-1.5 bg-boring-gray-300 rounded-full"></div>
                                               <span>Verifying checksums...</span>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           )}

                           {/* Step 3 Visual: The System */}
                           {index === 2 && (
                               <div className="w-full max-w-sm bg-boring-black text-white p-8 rounded-2xl border border-boring-gray-600 relative group hover:-translate-y-1 transition-transform duration-500 shadow-xl">
                                   <div className="flex items-center gap-2 mb-6 opacity-50">
                                       <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                       <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                       <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                   </div>
                                   <div className="font-mono text-xs space-y-2">
                                       <div className="text-emerald-500 font-bold">➜  ~ systemctl status</div>
                                       <div>● boring-os.service - The Quiet System</div>
                                       <div className="pl-4 text-boring-gray-500">Loaded: loaded (/etc/systemd/system/boring.service)</div>
                                       <div className="pl-4 flex items-center gap-2">
                                           Active: <span className="text-emerald-500 font-bold">active (running)</span>
                                           <span className="text-gray-500">since Thu 2025-04-12</span>
                                       </div>
                                       <div className="mt-4 text-emerald-500 animate-pulse">➜  ~ <span className="w-2 h-4 bg-emerald-500 inline-block align-middle ml-1"></span></div>
                                   </div>
                               </div>
                           )}

                        </div>
                    </div>
                );
            })}
            </div>

            {/* Success Indicator */}
            <div className="relative mt-32 flex justify-center">
                <div className="relative z-10 bg-white px-8 py-4 rounded-full border border-emerald-200 flex items-center gap-3 shadow-lg shadow-emerald-100/50 hover:scale-105 transition-transform cursor-default">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">System Ready</span>
                </div>
            </div>
            
             {/* Bottom Connector */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 bottom-0 h-24 w-px bg-boring-gray-200"></div>

        </div>
      </div>
    </section>
  );
};