import React from 'react';

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Kies wie er tegenover je zit",
      description: "Date, partner, vrienden, familie of een groep."
    },
    {
      number: "02",
      title: "Kies waar jullie zin in hebben",
      description: "Lachen. Ontdekken. Flirten. Verdiepen. Verrassen."
    },
    {
      number: "03",
      title: "Begin het gesprek",
      description: "Tussen Ons kiest vragen en interacties die passen bij jullie situatie."
    }
  ];

  return (
    <section id="hoe-het-werkt" className="py-24 bg-white border-y border-[#EFE6DE]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#6E625D] uppercase">
            <span>HOE HET WERKT</span>
          </div>
          <h2 className="font-editorial text-3xl md:text-5xl font-normal text-[#201A18] tracking-tight">
            Jullie kiezen het moment.<br />
            <span className="text-[#BD3A53] italic">Tussen Ons vindt de richting.</span>
          </h2>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, idx) => (
            <div key={idx} className="space-y-6 relative">
              <div className="font-editorial text-5xl md:text-6xl font-light text-[#BD3A53]/30">
                {step.number}
              </div>
              <h3 className="font-editorial text-2xl font-normal text-[#201A18]">
                {step.title}
              </h3>
              <p className="text-base text-[#6E625D] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-20 text-center border-t border-[#EFE6DE] pt-12">
          <p className="font-editorial text-xl md:text-2xl text-[#201A18] font-normal">
            Geen vaste vragenlijst.{' '}
            <span className="text-[#6E625D] font-sans text-base block sm:inline mt-1 sm:mt-0">
              Geen volgorde die voor iedereen hetzelfde is.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
