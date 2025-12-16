import React from 'react';
import { PROBLEM } from '../constants';

export const Problem: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-boring-white border-b border-boring-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight-swiss mb-8 leading-none">
            {PROBLEM.headline}
          </h2>
          <p className="text-lg md:text-xl text-boring-gray-600 leading-relaxed">
            {PROBLEM.text}
          </p>
        </div>
        
        <div className="bg-boring-gray-100 p-8 md:p-12 border border-boring-gray-200">
          <div className="space-y-8">
            {PROBLEM.definitions.map((item, index) => (
              <div key={index} className="border-l-4 border-boring-orange pl-6">
                <strong className="block text-lg font-bold mb-1 text-boring-black">{item.term}</strong>
                <span className="text-boring-gray-600 font-mono text-sm uppercase tracking-wide">{item.def}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};