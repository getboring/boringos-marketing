import React, { useEffect, useState, useRef } from 'react';
import { MOCKINGBIRD_DEEP_DIVE } from '../constants';
import { Button } from './Button';

interface MockingbirdPageProps {
  onBack: () => void;
}

const SYSTEM_CHECKS = [
  { id: 1, label: "Core Operating System", status: "LOCKED", desc: "Read-only mode active." },
  { id: 2, label: "Application Layer", status: "ISOLATED", desc: "Apps run in glass boxes." },
  { id: 3, label: "Network Telemetry", status: "SILENT", desc: "No outgoing data." },
];

export const MockingbirdPage: React.FC<MockingbirdPageProps> = ({ onBack }) => {
  const [activeCheck, setActiveCheck] = useState(0);
  const [isStackExpanded, setIsStackExpanded] = useState(false);

  // --- SCROLL OBSERVER STATE ---
  const [headerVisible, setHeaderVisible] = useState(false);
  const [stackVisible, setStackVisible] = useState(false);
  const [diagVisible, setDiagVisible] = useState(false);
  const [deepDiveVisible, setDeepDiveVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  const stackRef = useRef<HTMLDivElement>(null);
  const diagRef = useRef<HTMLDivElement>(null);
  const deepDiveRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  // 1. Header Trigger (Immediate)
  useEffect(() => {
    setHeaderVisible(true);
  }, []);

  // 2. Scroll Observers
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === stackRef.current) setStackVisible(true);
            if (entry.target === diagRef.current) setDiagVisible(true);
            if (entry.target === deepDiveRef.current) setDeepDiveVisible(true);
            if (entry.target === footerRef.current) setFooterVisible(true);
            
            // Unobserve after triggering to keep it visible
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' } 
    );

    const refs = [stackRef.current, diagRef.current, deepDiveRef.current, footerRef.current];
    refs.forEach(ref => {
        if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // 3. Diagnostics Animation Trigger (Only when visible)
  useEffect(() => {
    if (diagVisible && activeCheck < SYSTEM_CHECKS.length) {
      const timeout = setTimeout(() => {
        setActiveCheck(prev => prev + 1);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [activeCheck, diagVisible]);

  return (
    <div className="min-h-screen bg-boring-white text-boring-black font-sans relative selection:bg-boring-orange selection:text-white overflow-x-hidden">
      
      {/* Custom Styles for Advanced Animations */}
      <style>{`
        .bezier-premium {
          transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .reveal-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease-out, transform 1s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .reveal-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .iso-grid {
           background-image: linear-gradient(0deg, transparent 24%, rgba(0, 0, 0, .05) 25%, rgba(0, 0, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, .05) 75%, rgba(0, 0, 0, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 0, 0, .05) 25%, rgba(0, 0, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, .05) 75%, rgba(0, 0, 0, .05) 76%, transparent 77%, transparent);
           background-size: 50px 50px;
        }
        /* Stack Expansion Logic */
        .stack-group.expanded .layer-3 { transform: translateY(-5rem); }
        .stack-group.expanded .layer-2 { transform: translateY(0); }
        .stack-group.expanded .layer-1 { transform: translateY(5rem); }
        
        .stack-group.expanded .connector-line { opacity: 1; height: 100%; }
      `}</style>

      {/* BACKGROUND - Technical Grid */}
      <div className="absolute inset-0 pointer-events-none z-0 iso-grid opacity-30"></div>
      
      {/* Soft Vignette */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(253,251,249,0.8)_60%)]"></div>

      {/* Center Axis Line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-96 w-px bg-gradient-to-b from-boring-gray-300 to-transparent opacity-50 z-0"></div>

      <div className="relative z-10 pt-32 pb-24">
        
        {/* =========================================
            1. CENTERED PYRAMID HEADER
           ========================================= */}
        <div className={`max-w-4xl mx-auto px-6 mb-32 text-center reveal-up ${headerVisible ? 'visible' : ''}`}>
           
           {/* Breadcrumb - The Anchor */}
           <div className="flex justify-center mb-8">
              <button 
                onClick={onBack}
                className="group flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-boring-gray-400 hover:text-boring-orange transition-colors bg-white px-4 py-2 rounded-full border border-boring-gray-200 shadow-sm"
              >
                <span className="text-boring-gray-300">/</span> Home <span className="text-boring-gray-300">/</span> <span className="text-boring-black group-hover:text-boring-orange">Blueprint</span>
              </button>
           </div>

           {/* Title - The Apex */}
           <h1 className="text-6xl md:text-8xl font-bold tracking-tight-swiss mb-8 leading-[0.9] text-boring-black">
                The Blueprint<span className="text-boring-gray-300">.</span>
           </h1>

           {/* Subtitle - The Base */}
           <p className="text-xl md:text-2xl text-boring-gray-600 max-w-2xl mx-auto leading-relaxed font-medium mb-10">
                How we built a computer that cannot be broken by normal use.
           </p>

           {/* Badge */}
           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-500/5 border border-emerald-500/20 text-emerald-700 text-[10px] font-bold uppercase tracking-widest font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                System Nominal
            </div>
        </div>

        {/* =========================================
            2. THE MONOLITH (CENTERED STACK)
           ========================================= */}
        <section 
            ref={stackRef}
            className={`max-w-4xl mx-auto px-6 mb-40 reveal-up ${stackVisible ? 'visible' : ''}`} 
        >
            
            {/* Instruction Label */}
            <div className="text-center mb-12">
                 <div className="inline-block text-[9px] font-mono text-boring-gray-400 uppercase tracking-widest border-b border-boring-gray-200 pb-1">
                    Interactive Architecture
                 </div>
            </div>

            <div 
                className={`relative group stack-group cursor-pointer py-10 ${isStackExpanded ? 'expanded' : ''}`}
                onMouseEnter={() => setIsStackExpanded(true)}
                onMouseLeave={() => setIsStackExpanded(false)}
                onClick={() => setIsStackExpanded(!isStackExpanded)}
            >
                {/* Connector Lines (Vertical Axis) */}
                <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-px bg-boring-gray-300 opacity-0 transition-opacity duration-500 connector-line"></div>

                {/* Layer 3: Surface (Apps) */}
                <div className="layer-3 relative z-30 transition-all duration-700 bezier-premium max-w-2xl mx-auto">
                    <div className="bg-white border border-boring-gray-200 p-8 rounded-2xl shadow-xl shadow-boring-gray-200/50 flex items-center justify-between relative overflow-hidden group-hover:border-boring-orange/50 transition-colors">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-boring-gray-200 group-hover:bg-boring-orange transition-colors"></div>
                        <div className="pl-4">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-[10px] font-bold text-boring-gray-400 uppercase tracking-widest">Layer 03</span>
                                <span className="px-1.5 py-0.5 bg-boring-gray-100 rounded text-[9px] font-mono font-bold text-boring-gray-500 uppercase">Mutable</span>
                            </div>
                            <h3 className="text-xl font-bold text-boring-black">User Space</h3>
                            <p className="text-xs text-boring-gray-500 mt-1">Apps, Documents, Configs. The only layer you can touch.</p>
                        </div>
                        <div className="h-12 w-12 bg-boring-paper rounded-xl flex items-center justify-center border border-boring-gray-100">
                            <svg className="w-6 h-6 text-boring-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                        </div>
                    </div>
                </div>

                {/* Layer 2: Core (OS) */}
                <div className="layer-2 relative z-20 -mt-6 transition-all duration-700 bezier-premium max-w-2xl mx-auto">
                    <div className="bg-[#1A1A19] text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden border border-black group-hover:border-emerald-500/50 transition-colors">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500"></div>
                        <div className="flex items-center justify-between relative z-10 pl-4">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Layer 02</span>
                                    <span className="px-1.5 py-0.5 bg-white/10 rounded text-[9px] font-mono font-bold text-emerald-400 uppercase">Immutable</span>
                                </div>
                                <h3 className="text-xl font-bold text-white">System Core</h3>
                                <p className="text-xs text-gray-400 mt-1">Kernel, Drivers, Services. Read-only and verified.</p>
                            </div>
                            <div className="h-12 w-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                                <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Layer 1: Hardware */}
                <div className="layer-1 relative z-10 -mt-6 transition-all duration-700 bezier-premium max-w-2xl mx-auto">
                    <div className="bg-[#E5E5E5] border border-boring-gray-300 p-8 rounded-2xl shadow-inner flex items-center justify-between relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-boring-gray-400"></div>
                        <div className="pl-4">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-[10px] font-bold text-boring-gray-500 uppercase tracking-widest">Layer 01</span>
                                <span className="px-1.5 py-0.5 bg-black/5 rounded text-[9px] font-mono font-bold text-boring-gray-600 uppercase">Physical</span>
                            </div>
                            <h3 className="text-xl font-bold text-boring-gray-700">Hardware</h3>
                            <p className="text-xs text-boring-gray-500 mt-1">CPU, Memory, Disk. The abstraction layer.</p>
                        </div>
                        <div className="h-12 w-12 bg-white/50 rounded-xl flex items-center justify-center border border-white/50">
                            <svg className="w-6 h-6 text-boring-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
                        </div>
                    </div>
                </div>

            </div>
            
            <div className="text-center mt-8 opacity-60 transition-opacity hover:opacity-100">
                <span className={`inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-boring-gray-400 transition-transform duration-500 ${isStackExpanded ? 'translate-y-4' : 'translate-y-0'}`}>
                    <span className={`transition-transform duration-500 ${isStackExpanded ? 'rotate-180' : ''}`}>▼</span>
                    {isStackExpanded ? "Click to Compact Stack" : "Hover to Explode View"}
                </span>
            </div>
        </section>

        {/* =========================================
            3. DIAGNOSTICS (CENTERED GRID)
           ========================================= */}
        <section 
            ref={diagRef}
            className={`max-w-6xl mx-auto px-6 mb-40 reveal-up ${diagVisible ? 'visible' : ''}`} 
        >
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-boring-gray-200 border border-boring-gray-200 rounded-lg overflow-hidden">
                {SYSTEM_CHECKS.map((check, i) => (
                    <div key={check.id} className="bg-white p-8 text-center group hover:bg-boring-paper transition-colors">
                        <div className="flex justify-center mb-4">
                             <div className={`w-2 h-2 rounded-full transition-all duration-500 ${i <= activeCheck ? 'bg-emerald-500 scale-100' : 'bg-boring-gray-300 scale-75'}`}></div>
                        </div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-boring-black mb-2">
                            {check.label}
                        </h4>
                        <p className="text-sm text-boring-gray-500 font-medium">
                            {check.desc}
                        </p>
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-[9px] font-mono text-boring-gray-400 uppercase tracking-widest">
                            {i <= activeCheck ? check.status : 'PENDING...'}
                        </div>
                    </div>
                ))}
            </div>
            
        </section>

        {/* =========================================
            4. DEEP DIVE (SYMMETRICAL DARK GRID)
           ========================================= */}
        <section className="bg-boring-black text-white py-32 px-6">
            <div 
                ref={deepDiveRef}
                className={`max-w-7xl mx-auto reveal-up ${deepDiveVisible ? 'visible' : ''}`} 
            >
                
                {/* Header */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                     <span className="text-xs font-bold uppercase tracking-widest text-boring-orange mb-4 block flex items-center justify-center gap-3">
                        <div className="w-6 h-px bg-boring-orange/50"></div>
                        Under the hood
                        <div className="w-6 h-px bg-boring-orange/50"></div>
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight-swiss mb-6">
                        Complex engineering.<br/>Simple experience.
                    </h2>
                    <p className="text-boring-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
                        We leverage the rock-solid foundation of Linux, but strip away the complexity so you never have to see a terminal.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {MOCKINGBIRD_DEEP_DIVE.map((item, index) => (
                        <div key={index} className="bg-[#1F1F1E] border border-white/5 p-12 hover:border-boring-orange/30 transition-all duration-300 group relative overflow-hidden rounded-sm shadow-2xl hover:-translate-y-1 flex flex-col items-center text-center">
                            {/* Top Status Bar */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 group-hover:bg-boring-orange transition-colors"></div>
                            
                            <div className="mb-8">
                                <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                                    <span className="text-[10px] font-mono text-boring-gray-500 uppercase tracking-widest">Module 0{index + 1}</span>
                                    <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                                </div>
                                <h3 className="text-3xl font-bold text-white group-hover:text-boring-orange transition-colors mb-2">
                                    {item.title}
                                </h3>
                                <div className="text-[10px] font-mono text-boring-orange uppercase tracking-wide">
                                    {item.tech}
                                </div>
                            </div>

                            <div className="mb-8 max-w-md">
                                <div className="text-xl font-medium text-white mb-4 leading-tight">
                                    "{item.benefit}."
                                </div>
                                <p className="text-sm text-boring-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            <div className="flex gap-2 flex-wrap justify-center mt-auto">
                                {item.features.map((feat, idx) => (
                                    <span key={idx} className="text-[9px] uppercase font-bold text-boring-gray-500 bg-black/20 px-3 py-1.5 rounded border border-white/5">
                                        {feat}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Attribution */}
                <div className="mt-24 pt-12 border-t border-white/10 flex flex-col items-center text-center gap-6 opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-boring-gray-500 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-boring-gray-600"></span>
                        System Lineage
                    </span>
                    <div className="flex flex-wrap justify-center gap-8 text-[10px] font-mono text-boring-gray-500 uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                            Fedora
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                            uBlue
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                            BlueBuild
                        </div>
                    </div>
                </div>

            </div>
        </section>

        {/* =========================================
            5. FOOTER CTA
           ========================================= */}
        <section 
            ref={footerRef}
            className={`max-w-4xl mx-auto px-6 py-40 text-center reveal-up ${footerVisible ? 'visible' : ''}`} 
        >
            <div className="relative">
                {/* Minimalist decorative lines */}
                <div className="absolute left-1/2 -top-16 -translate-x-1/2 w-px h-16 bg-boring-gray-300"></div>

                <h2 className="text-4xl md:text-6xl font-bold tracking-tight-swiss mb-8 text-boring-black">
                    Ready to build?
                </h2>
                <p className="text-xl text-boring-gray-600 max-w-xl mx-auto mb-12">
                    You don't need to be an engineer. You just need a USB drive and 15 minutes.
                </p>

                <div className="flex flex-col items-center gap-8">
                    <a href="#download" onClick={onBack} className="no-underline">
                        <Button variant="primary" className="text-lg px-12 py-5 shadow-xl hover:scale-105 transition-transform">
                            Download Image
                        </Button>
                    </a>
                    
                    {/* Technical Artifacts */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-[10px] font-mono text-boring-gray-400 uppercase tracking-widest mt-2 border border-boring-gray-200 bg-boring-paper px-6 py-3 rounded-lg">
                        <div className="flex items-center gap-2">
                             <span className="font-bold text-boring-gray-500">Size:</span> 3.2 GB
                        </div>
                        <div className="hidden sm:block w-px bg-boring-gray-300 h-4"></div>
                        <div className="flex items-center gap-2">
                             <span className="font-bold text-boring-gray-500">Hash:</span> SHA256: 8f4a...2c1
                        </div>
                        <div className="hidden sm:block w-px bg-boring-gray-300 h-4"></div>
                        <div className="flex items-center gap-2">
                             <span className="font-bold text-boring-gray-500">Build:</span> 2025.04.12
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
};