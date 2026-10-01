import React from 'react';

export function BrandStatement() {
  return (
    <section className="py-32 md:py-40 bg-[#FAF5F0] text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        
        {/* Large Typography Statement */}
        <div className="space-y-4">
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal text-[#201A18] tracking-tight leading-[1.1]">
            Niet meer schermtijd.<br />
            <span className="text-[#BD3A53] italic">Meer gesprekstijd.</span>
          </h2>
        </div>

        {/* Sub-text & Extra sentence */}
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-lg md:text-xl text-[#6E625D] leading-relaxed">
            Tussen Ons gebruikt technologie niet om tussen mensen in te gaan staan. Juist om daarna zo snel mogelijk weer naar de achtergrond te verdwijnen.
          </p>
          <p className="font-editorial text-xl md:text-2xl text-[#201A18]">
            De app opent het gesprek. Jullie maken het bijzonder.
          </p>
        </div>

      </div>
    </section>
  );
}
