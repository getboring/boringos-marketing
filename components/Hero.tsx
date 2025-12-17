import React, { useState, useEffect, useRef } from 'react';
import { BRAND } from '../constants';
import { Button } from './Button';

interface HeroProps {
  onBuildClick?: () => void;
}

type SystemState = 'booting' | 'typing' | 'clearing' | 'desktop' | 'peace';

// --- DATA: Static Resources ---
const BOOT_LOGS = [
  { id: 'kernel', label: 'Initializing Calm', status: 'OK', color: 'text-emerald-600' },
  { id: 'silence', label: 'Removing Distractions', status: 'DONE', color: 'text-emerald-600' },
  { id: 'mount', label: 'Securing File System', status: 'LOCKED', color: 'text-boring-orange' },
  { id: 'telemetry', label: 'Blocking Trackers', status: 'ACTIVE', color: 'text-emerald-600' },
];

const ICONS = {
    globe: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    folder: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
    pen: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
    terminal: "M8 9l3 3-3 3m5 0h3"
};

// --- SUB-COMPONENT: Clock ---
const StatusClock = React.memo(() => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    update();

    const now = new Date();
    const msUntilNextMinute = (60 - now.getSeconds()) * 1000;

    let intervalId: ReturnType<typeof setInterval> | null = null;

    const timeoutId = setTimeout(() => {
        update();
        intervalId = setInterval(update, 60000);
    }, msUntilNextMinute);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return <span>{time}</span>;
});

// --- SUB-COMPONENT: App Icon ---
const AppIcon = React.memo(({ icon, label, active = false }: { icon: keyof typeof ICONS, label: string, active?: boolean }) => {
    return (
        <div className="group relative cursor-pointer" aria-label={label} role="button">
            <div className="w-10 h-10 bg-boring-gray-100 rounded-xl flex items-center justify-center text-boring-gray-600 hover:bg-boring-orange hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={ICONS[icon]} />
                </svg>
            </div>
            {active && (
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-boring-black rounded-full"></div>
            )}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-boring-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
    );
});

export const Hero: React.FC<HeroProps> = ({ onBuildClick }) => {
  const [text, setText] = useState("");
  const [systemState, setSystemState] = useState<SystemState>('booting');
  
  // Using recursive setTimeout is more precise for animation frames than setInterval
  const timers = useRef<{ [key: string]: ReturnType<typeof setTimeout> }>({});
  
  const fullText = "BoringOS...";

  // --- LOGIC: Boot State Machine ---
  useEffect(() => {
    // 1. BIOS Phase (1.5s)
    timers.current.boot = setTimeout(() => {
      setSystemState('typing');
      
      let charIndex = 0;
      
      // 2. Typing Phase
      // Recursive function to guarantee consistent speed
      const typeNextChar = () => {
        charIndex++;
        setText(fullText.slice(0, charIndex));
        
        if (charIndex < fullText.length) {
            timers.current.typing = setTimeout(typeNextChar, 80); // 80ms typing speed
        } else {
            // Typing Complete
            // 3. Pause for reading
            timers.current.transition = setTimeout(() => {
                setSystemState('clearing');
                
                // 4. Desktop Fade In
                timers.current.desktop = setTimeout(() => {
                    setSystemState('desktop');
                    
                    // 5. The "Peace" Moment (Blur Overlay)
                    timers.current.peace = setTimeout(() => {
                        setSystemState('peace');
                    }, 2500); // Wait 2.5s on desktop before finding peace
                    
                }, 800); // Time for 'clearing' fade out
            }, 1200); // Time to hold text
        }
      };

      typeNextChar();

    }, 1500); 

    return () => {
      Object.values(timers.current).forEach(timer => clearTimeout(timer as any));
    };
  }, []);

  const isDesktopOrPeace = systemState === 'desktop' || systemState === 'peace';
  const isPeace = systemState === 'peace';
  
  const layerClasses = {
    // BIOS Layer
    boot: `absolute inset-0 z-20 flex flex-col items-center justify-center transition-opacity duration-1000 ${isDesktopOrPeace ? 'opacity-0 pointer-events-none' : 'opacity-100'}`,
    
    // Desktop Container
    desktopWrapper: `absolute inset-0 z-10 bg-white transition-all duration-1000 delay-300 ${isDesktopOrPeace ? 'opacity-100' : 'opacity-0'}`,
    
    // The Active Desktop Content (Gets Blurred in Peace Mode)
    desktopContent: `absolute inset-0 transition-all duration-1000 ${isPeace ? 'blur-sm opacity-40 grayscale' : 'blur-0 opacity-100'}`,
    
    topBar: `absolute top-0 left-0 right-0 h-8 bg-white/80 backdrop-blur-md border-b border-boring-gray-100 flex justify-between items-center px-4 transition-transform duration-1000 ${isDesktopOrPeace ? 'translate-y-0' : '-translate-y-full'}`,
    dock: `absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-xl border border-boring-gray-200 shadow-xl shadow-boring-gray-200/50 rounded-2xl px-3 py-2 flex items-center gap-3 transition-transform duration-1000 delay-200 ${isDesktopOrPeace ? 'translate-y-0 scale-100' : 'translate-y-20 scale-90'}`
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-24 bg-boring-white relative overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none" 
           style={{
             backgroundImage: 'radial-gradient(#A3A39F 1px, transparent 1px)', 
             backgroundSize: '32px 32px',
             opacity: 0.08
           }}>
      </div>
      
      {/* Main Content Container - Focused & Symmetrical */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Status Badge - The Anchor Point */}
        <div className="mb-10 animate-reveal-up opacity-100 transition-opacity duration-1000">
             <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-white border border-boring-gray-200 shadow-sm cursor-default transition-transform hover:scale-105">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[9px] font-mono font-extrabold text-boring-gray-600 uppercase tracking-widest group-hover:text-boring-black transition-colors">
                    v1 Mockingbird <span className="text-boring-gray-300">::</span> System Stable
                </span>
            </div>
        </div>
        
        {/* Headline - The Pyramid Top */}
        <div className="max-w-4xl mx-auto mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight-swiss leading-[0.95] text-boring-black select-none">
              {BRAND.heroHeadline}<span className="text-boring-orange">.</span>
            </h1>
        </div>
        
        {/* Subtagline - The Bridge */}
        <div className="max-w-2xl mx-auto mb-14">
            <p className="text-lg md:text-xl text-boring-gray-600 font-medium leading-relaxed">
              {BRAND.subTagline}
            </p>
        </div>

        {/* CTAs - The Action Layer */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center mb-32">
          <Button
              variant="primary"
              onClick={onBuildClick}
              className="w-full sm:w-auto h-12 px-8 text-base shadow-xl shadow-boring-black/5 hover:shadow-boring-black/10"
            >
              Start the Transition
            </Button>
          <a href="#why-boring" className="no-underline w-full sm:w-auto">
            <button className="text-boring-gray-500 hover:text-boring-black font-extrabold transition-colors px-6 py-3 text-sm tracking-wide uppercase">
              Read the Manifesto →
            </button>
          </a>
        </div>

        {/* --- THE MONITOR INTERFACE --- */}
        {/* This acts as the heavy 'base' of the composition */}
        <div className="w-full max-w-3xl perspective-1000 group">
          <div className="bg-white rounded-xl shadow-2xl shadow-boring-gray-200/80 border border-boring-gray-200 overflow-hidden aspect-[16/10] relative transform transition-all duration-700 ease-out hover:shadow-boring-gray-300/50 hover:translate-y-[-2px] flex flex-col">
            
            {/* SCREEN CONTENT AREA */}
            <div className="relative flex-grow bg-white flex items-center justify-center overflow-hidden" aria-label="Interactive demonstration of BoringOS interface">
              
              {/* LAYER 1: BOOT & TYPING */}
              <div className={layerClasses.boot} aria-hidden={isDesktopOrPeace}>
                  
                  {/* Phase A: BIOS Logs */}
                  {systemState === 'booting' && (
                      <div className="font-mono text-[10px] text-boring-gray-600 font-extrabold uppercase tracking-widest space-y-2 text-left w-64">
                          {BOOT_LOGS.map((log) => (
                              <div key={log.id} className="flex justify-between">
                                  <span>{log.label}...</span>
                                  <span className={log.color}>{log.status}</span>
                              </div>
                          ))}
                      </div>
                  )}

                  {/* Phase B: Splash Screen */}
                  {(systemState === 'typing' || systemState === 'clearing') && (
                     <div className={`text-center relative transition-opacity duration-700 ${systemState === 'clearing' ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                        <span className="sr-only">BoringOS Loading</span>
                        {/* Bug Fix: whitespace-nowrap prevents text wrapping/clipping on small screens */}
                        <span className="font-bold tracking-tight-swiss text-4xl md:text-5xl text-boring-black whitespace-nowrap" aria-hidden="true">
                            {text}
                        </span>
                        <span className="animate-blink font-light text-4xl md:text-5xl text-boring-orange ml-1" aria-hidden="true">_</span>
                    </div>
                  )}
              </div>

              {/* LAYER 2: THE DESKTOP */}
              <div className={layerClasses.desktopWrapper}>
                 
                 {/* 2A. ACTIVE DESKTOP CONTENT (Gets blurred in Peace mode) */}
                 <div className={layerClasses.desktopContent}>
                    {/* Top Bar */}
                    <div className={layerClasses.topBar}>
                        <div className="text-[10px] font-extrabold text-boring-black cursor-default">Activities</div>
                        
                        <div className="absolute left-1/2 -translate-x-1/2 text-[10px] font-mono font-extrabold text-boring-black flex gap-3">
                            <span>{new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                            <StatusClock />
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <svg className="w-3 h-3 text-boring-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
                            <div className="w-4 h-2 border border-boring-black rounded-[1px] relative">
                                <div className="absolute inset-0.5 bg-boring-black w-3/4"></div>
                                <div className="absolute -right-0.5 top-0.5 bottom-0.5 w-[1px] bg-boring-black"></div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Wallpaper Area */}
                    <div className="w-full h-full flex items-center justify-center relative">
                        {/* The abstract wallpaper shape */}
                        <div className="w-32 h-32 rounded-full bg-boring-gray-100/50 blur-3xl"></div>
                    </div>

                    {/* The Dock */}
                    <div className={layerClasses.dock}>
                        <AppIcon icon="globe" label="Browser" active />
                        <AppIcon icon="folder" label="Files" />
                        <AppIcon icon="terminal" label="Terminal" />
                    </div>
                 </div>

                 {/* 2B. PEACE MESSAGE OVERLAY (Stays sharp) */}
                 <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${isPeace ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight-swiss text-boring-black mb-2">Finally, peace.</h2>
                        <p className="text-[10px] font-mono text-boring-gray-500 uppercase tracking-widest font-extrabold">System Ready • No Distractions</p>
                    </div>
                 </div>

              </div>
            </div>

            {/* Hardware Status Footer */}
            <div className="h-10 bg-boring-paper/30 border-t border-boring-gray-100 flex items-center justify-between px-4 text-[9px] font-mono text-boring-gray-600 uppercase tracking-widest z-30 relative select-none font-extrabold">
                <div className="flex items-center gap-4">
                    <div className="flex flex-col gap-0.5">
                        <div className="flex justify-between w-24">
                            <span className="text-[8px] text-boring-gray-500 font-extrabold">Distractions</span>
                            {/* Narrative: Peace = None */}
                            {isPeace && <span className="text-[8px] text-emerald-600 font-extrabold">None</span>}
                        </div>
                        {/* Visual representation of network activity (Flatlines on Peace) */}
                        <div className="flex items-end gap-0.5 h-3 w-24">
                            {[...Array(16)].map((_, i) => (
                                <div key={i} className={`w-1 h-full rounded-sm transition-all duration-300 origin-bottom ${!isPeace ? 'animate-equalizer bg-emerald-300' : 'bg-emerald-200'}`} style={{ animationDelay: `${i * 0.05}s`, transform: isPeace ? 'scaleY(0.1)' : undefined }}></div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="flex items-center gap-4 opacity-75">
                    <div className="flex items-center gap-2">
                         <span className="text-[8px] text-boring-gray-500 font-extrabold">Your Data</span>
                         {/* Narrative: Home is warm. Blocked is cold. */}
                         <span className={`font-extrabold transition-colors duration-1000 ${isPeace ? 'text-emerald-600' : 'text-boring-black'}`}>
                             {isPeace ? 'Home' : 'Securing'}
                         </span>
                    </div>
                    <div className="w-px h-3 bg-boring-gray-200"></div>
                    <div className="flex items-center gap-2">
                         <span className="text-[8px] text-boring-gray-500 font-extrabold">Owner</span>
                         {/* Narrative: Affirmation of ownership. */}
                         <span className="font-extrabold text-boring-black">You</span>
                    </div>
                </div>
            </div>

          </div>
        </div>

        {/* Footer Social Proof - INK MODE */}
        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-4 justify-center items-center text-xs font-extrabold text-boring-gray-500 tracking-widest uppercase">
           {['Open Source', 'Auditable', 'User Owned'].map((proof) => (
             <div key={proof} className="flex items-center gap-2 group cursor-default hover:text-boring-black transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-boring-gray-400 group-hover:bg-boring-black transition-colors"></span> 
                <span>{proof}</span>
             </div>
           ))}
        </div>

        {/* CIRCUIT BREAKER - CONNECTING LINE TO NEXT SECTION */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-24 w-px bg-boring-gray-200 z-0"></div>

      </div>
    </section>
  );
};