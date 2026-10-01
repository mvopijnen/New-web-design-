import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

interface PlusSectionProps {
  onOpenApp: () => void;
}

export function PlusSection({ onOpenApp }: PlusSectionProps) {
  const packs = [
    "Weekend Weg",
    "Date Night",
    "Eerste Date",
    "We kennen elkaar al jaren",
    "Seizoenssessies"
  ];

  return (
    <section id="plus" className="py-24 bg-[#FAF5F0]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#BD3A53] uppercase">
              <Star className="w-3.5 h-3.5" />
              <span>TUSSEN ONS PLUS</span>
            </div>
            <h2 className="font-editorial text-3xl md:text-5xl font-normal text-[#201A18] tracking-tight">
              Meer manieren om elkaar te ontdekken.
            </h2>
            <p className="text-base md:text-lg text-[#6E625D] leading-relaxed">
              De gratis ervaring moet al goed zijn. Plus is er voor mensen die Tussen Ons vaker willen gebruiken en meer situaties, vibes en speciale sessies willen openen.
            </p>
            <div className="pt-4">
              <button
                onClick={onOpenApp}
                className="px-8 py-4 text-base font-medium text-white bg-[#BD3A53] hover:bg-[#a63048] transition-all rounded-xl shadow-sm inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#BD3A53]/50"
              >
                <span>Ontdek Tussen Ons Plus</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Packs Grid */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 md:p-10 space-y-6 shadow-sm">
              <span className="text-xs uppercase tracking-wider text-[#6E625D] block font-medium">Inclusief speciale sessies & vibes</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {packs.map((pack, idx) => (
                  <div key={idx} className="bg-[#FAF5F0] border border-[#EFE6DE] rounded-2xl p-4 text-center font-editorial text-lg text-[#201A18]">
                    {pack}
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-[#EFE6DE] text-xs text-[#6E625D] text-center">
                Geen vaste abonnementsdruk. Altijd op jouw eigen tempo.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
