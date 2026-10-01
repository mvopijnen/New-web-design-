import React, { useState } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';

const demoQuestions = {
  Date: {
    question: "Wat dacht je over mij na onze eerste ontmoeting, maar heb je nooit verteld?",
    vibe: "Nieuwsgierig & Eerlijk",
  },
  Partner: {
    question: "Wat is een moment in het afgelopen jaar waarop je dacht: 'Ik ben echt blij met wie we nu zijn'?",
    vibe: "Warm & Verdiepend",
  },
  Vriend: {
    question: "Welk verhaal over mij vertel je het liefst aan mensen die mij niet kennen?",
    vibe: "Luchtig & Verrassend",
  },
  Familietijd: {
    question: "Welke eigenschap van een van onze ouders zie je onverwachts terug in jezelf?",
    vibe: "Herkenbaar & Persoonlijk",
  },
};

type AudienceKey = keyof typeof demoQuestions;

export function InteractiveDemo() {
  const [selectedAudience, setSelectedAudience] = useState<AudienceKey>('Date');
  const [isRotating, setIsRotating] = useState(false);

  const handleSelect = (audience: AudienceKey) => {
    setIsRotating(true);
    setSelectedAudience(audience);
    setTimeout(() => setIsRotating(false), 300);
  };

  const current = demoQuestions[selectedAudience];

  return (
    <section id="demo" className="py-24 bg-[#FAF5F0]">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#BD3A53] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROBEER HET EENS</span>
          </div>
          <h2 className="font-editorial text-3xl md:text-5xl font-normal text-[#201A18] tracking-tight">
            Probeer het eens.
          </h2>
          <p className="text-base md:text-lg text-[#6E625D] max-w-lg mx-auto">
            Soms heb je maar één goede vraag nodig.
          </p>
        </div>

        {/* Interactive Card Container */}
        <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 md:p-12 shadow-sm text-left relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#EFE6DE]">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#6E625D] block mb-1">Voor wie zit tegenover je?</span>
              <div className="flex flex-wrap gap-2 pt-2">
                {(Object.keys(demoQuestions) as AudienceKey[]).map((aud) => (
                  <button
                    key={aud}
                    onClick={() => handleSelect(aud)}
                    className={`px-4 py-2 text-xs md:text-sm font-medium rounded-xl transition-all ${
                      selectedAudience === aud
                        ? 'bg-[#BD3A53] text-white shadow-sm'
                        : 'bg-[#FAF5F0] text-[#6E625D] hover:bg-[#EFE6DE] hover:text-[#201A18]'
                    }`}
                  >
                    {aud}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="text-right hidden sm:block">
              <span className="text-xs text-[#6E625D] block">Vibe</span>
              <span className="text-sm font-medium text-[#BD3A53]">{current.vibe}</span>
            </div>
          </div>

          {/* Question Display */}
          <div className={`py-12 md:py-16 transition-opacity duration-300 ${isRotating ? 'opacity-0' : 'opacity-100'}`}>
            <p className="font-editorial text-2xl md:text-4xl text-[#201A18] leading-relaxed text-center max-w-2xl mx-auto">
              "{current.question}"
            </p>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-[#EFE6DE] text-xs text-[#6E625D]">
            <span>Interactieve voorbeeldkaart</span>
            <span className="italic">Neem om de beurt de tijd voor elkaars antwoord.</span>
          </div>

        </div>

        {/* Footer note */}
        <p className="text-sm text-[#6E625D]">
          Dit is maar één kaart. Tussen Ons bouwt de rest van het gesprek op basis van jullie moment.
        </p>

      </div>
    </section>
  );
}
