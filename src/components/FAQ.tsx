import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is Tussen Ons een datingapp?",
      a: "Nee. Tussen Ons brengt je niet met nieuwe mensen in contact. Je gebruikt het juist met iemand die al tegenover je zit."
    },
    {
      q: "Is Tussen Ons relatietherapie?",
      a: "Nee. Tussen Ons is een gesprekservaring, geen therapie of relatiebehandeling."
    },
    {
      q: "Moeten we allebei de app hebben?",
      a: "Nee. Eén scherm is genoeg om samen een sessie te spelen."
    },
    {
      q: "Slaat Tussen Ons onze antwoorden op?",
      a: "De ervaring is ontworpen zodat jullie het gesprek met elkaar voeren, niet met de app."
    },
    {
      q: "Is het alleen voor koppels?",
      a: "Nee. Tussen Ons kan worden gebruikt met dates, partners, vrienden, familie en groepen."
    },
    {
      q: "Moeten we meteen persoonlijke vragen beantwoorden?",
      a: "Nee. Jullie kiezen zelf de sfeer en gewenste diepte. Een gesprek mag net zo goed gewoon grappig of verrassend zijn."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#FAF5F0]">
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#BD3A53] uppercase">
            <span>VEELGESTELDE VRAGEN</span>
          </div>
          <h2 className="font-editorial text-3xl md:text-5xl font-normal text-[#201A18] tracking-tight">
            Alles wat je wilt weten.
          </h2>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-[#EFE6DE] rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#BD3A53]/20"
                >
                  <span className="font-editorial text-lg md:text-xl font-normal text-[#201A18]">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#6E625D] transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180 text-[#BD3A53]' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-[#6E625D] text-base leading-relaxed border-t border-[#EFE6DE]/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
