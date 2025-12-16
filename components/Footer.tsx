import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 bg-boring-paper border-t border-boring-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        <div className="flex flex-col items-start gap-6 max-w-xs">
          <Logo className="text-2xl" />
          <p className="text-sm text-boring-gray-500 leading-relaxed">
            We are building the computer we wanted for ourselves. Quiet, private, and yours.
          </p>
        </div>

        <div className="flex gap-12 text-xs font-extrabold uppercase tracking-widest">
            <div className="flex flex-col gap-4">
                <span className="text-boring-gray-400 mb-2">Explore</span>
                <a href="#philosophy" className="text-boring-black hover:text-boring-orange transition-colors no-underline">Manifesto</a>
                <a href="#how" className="text-boring-black hover:text-boring-orange transition-colors no-underline">Install</a>
                <a href="#specs" className="text-boring-black hover:text-boring-orange transition-colors no-underline">Specs</a>
            </div>
            <div className="flex flex-col gap-4">
                <span className="text-boring-gray-400 mb-2">Project</span>
                <a href="#download" className="text-boring-black hover:text-boring-orange transition-colors no-underline">Source Code</a>
                <a href="#" onClick={(e)=>e.preventDefault()} className="text-boring-black hover:text-boring-orange transition-colors no-underline">Documentation</a>
                <a href="#" onClick={(e)=>e.preventDefault()} className="text-boring-black hover:text-boring-orange transition-colors no-underline">Donate</a>
            </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-boring-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-boring-gray-400 font-mono uppercase tracking-widest">
         <p>
            © 2025 BoringOS. Open Source (MIT).
         </p>
         <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
         </div>
      </div>
    </footer>
  );
};