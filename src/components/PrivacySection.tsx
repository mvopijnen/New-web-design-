import React from 'react';
import { ShieldCheck } from 'lucide-react';

export function PrivacySection() {
  const claims = [
    "Geen antwoorden nodig voor de selectie van de volgende kaart.",
    "Geen profiel van jullie relatie op basis van wat jullie zeggen.",
    "Geen advertenties gebaseerd op persoonlijke gesprekken."
  ];

  return (
    <section className="py-24 bg-white border-y border-[#EFE6DE]">
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#6E625D] uppercase">
            <ShieldCheck className="w-4 h-4 text-[#BD3A53]" />
            <span>WAT TUSSEN JULLIE GEBEURT</span>
          </div>
          <h2 className="font-editorial text-3xl md:text-5xl font-normal text-[#201A18] tracking-tight">
            Hoeft niet van ons te zijn.
          </h2>
          <p className="text-base md:text-lg text-[#6E625D] leading-relaxed pt-2">
            Tussen Ons is ontworpen vanuit een eenvoudig uitgangspunt: een app hoeft niet te weten wat mensen tegen elkaar zeggen om een goed gesprek te kunnen begeleiden.
          </p>
        </div>

        {/* Concrete Claims */}
        <div className="bg-[#FAF5F0] border border-[#EFE6DE] rounded-3xl p-8 md:p-12 space-y-6 shadow-sm">
          {claims.map((claim, idx) => (
            <div key={idx} className="flex items-start gap-4 pb-6 last:pb-0 border-b last:border-b-0 border-[#EFE6DE]">
              <div className="w-2 h-2 rounded-full bg-[#BD3A53] mt-2.5 flex-shrink-0"></div>
              <p className="text-base md:text-lg text-[#201A18] font-medium leading-relaxed">
                {claim}
              </p>
            </div>
          ))}
        </div>

        {/* Slotzin */}
        <div className="text-center">
          <p className="font-editorial text-2xl md:text-3xl text-[#201A18]">
            Het gesprek is van jullie.
          </p>
        </div>

      </div>
    </section>
  );
}
