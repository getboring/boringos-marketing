import React from 'react';
import { Logo } from './Logo';
import { Button } from './Button';

interface HeaderProps {
  onNavigate?: () => void; // Blueprint/How It Works
  onHome?: () => void;
  onPhilosophy?: () => void; // Promise/Why
  onOperators?: () => void; // Tools/Apps
  onSpecs?: () => void; // Value/Specs
  onDownload?: (e: React.MouseEvent) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onNavigate, 
  onHome, 
  onPhilosophy, 
  onOperators,
  onSpecs,
  onDownload 
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 border-b border-boring-gray-200 bg-boring-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-boring-white/60">
      <div className="flex items-center gap-6">
        <div className="text-xl cursor-pointer" onClick={onHome}>
          <Logo />
        </div>
        
        {/* Version Badge - "Stable" is a friendly word for reliability */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-sm bg-boring-gray-100/50 border border-boring-gray-200">
           <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
           <span className="text-[10px] font-mono font-bold text-boring-gray-600 uppercase tracking-widest">v1.0 Stable</span>
        </div>
      </div>

      {/* Navigation - StoryBrand Friendly: The Promise, The Plan, The Tools */}
      <div className="hidden md:flex gap-1 items-center list-none bg-boring-gray-100/50 p-1 rounded-full border border-boring-gray-200/50">
        <button onClick={onPhilosophy} className="text-boring-gray-600 hover:text-boring-black transition-colors text-xs font-bold uppercase tracking-widest bg-transparent border-none cursor-pointer px-4 py-2.5 rounded-full hover:bg-white">Our Promise</button>
        <button onClick={onOperators} className="text-boring-gray-600 hover:text-boring-black transition-colors text-xs font-bold uppercase tracking-widest bg-transparent border-none cursor-pointer px-4 py-2.5 rounded-full hover:bg-white">Apps</button>
        <button onClick={onNavigate} className="text-boring-gray-600 hover:text-boring-orange transition-colors text-xs font-bold uppercase tracking-widest bg-transparent border-none cursor-pointer px-4 py-2.5 rounded-full hover:bg-white">How It Works</button>
        <button onClick={onSpecs} className="text-boring-gray-600 hover:text-boring-black transition-colors text-xs font-bold uppercase tracking-widest bg-transparent border-none cursor-pointer px-4 py-2.5 rounded-full hover:bg-white">Why It Lasts</button>
      </div>
      
      <div>
        <a href="#download" onClick={onDownload} className="no-underline">
           <Button variant="primary" className="py-2.5 px-5 text-xs uppercase tracking-widest shadow-none hover:shadow-md bg-boring-black text-white border border-boring-black">
             Get BoringOS
           </Button>
        </a>
      </div>
    </nav>
  );
};