import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 border-b border-boring-gray-200 bg-boring-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tight-swiss mb-6">
            The Judo Move.
          </h2>
          <p className="text-lg text-boring-gray-600 leading-relaxed mb-6">
            "Boring" is normally an insult. We own it. We turn it into our greatest strength.
          </p>
          <ul className="space-y-4 border-l-2 border-boring-orange pl-6">
            <li className="text-boring-black font-medium"><span className="font-bold">Boring = Reliable.</span> It does what you expect.</li>
            <li className="text-boring-black font-medium"><span className="font-bold">Boring = Predictable.</span> No surprises.</li>
            <li className="text-boring-black font-medium"><span className="font-bold">Boring = Finished.</span> Not a project. An appliance.</li>
          </ul>
        </div>
        <div className="flex items-center justify-center bg-boring-gray-200 min-h-[300px]">
           {/* Placeholder for Product Shot - Structural/Geometric */}
           <div className="text-boring-gray-600 font-mono text-sm uppercase tracking-widest text-center">
             [ System Interface ]<br/>
             No Distractions
           </div>
        </div>
      </div>
    </section>
  );
};