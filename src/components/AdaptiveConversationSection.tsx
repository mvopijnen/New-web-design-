import React from 'react';

export function AdaptiveConversationSection() {
  const flowSteps = [
    "Luchtig",
    "Nieuwsgierig",
    "Persoonlijk",
    "Verrassend",
    "Een fijne afsluiting"
  ];

  return (
    <section className="py-24 bg-[#FAF5F0]">
      <div className="max-w-5xl mx-auto px-6 space-y-16 text-center">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#BD3A53] uppercase">
            <span>NIET IEDEREEN HEEFT OP HETZELFDE MOMENT ZIN IN HETZELFDE GESPREK</span>
          </div>
          <h2 className="font-editorial text-3xl md:text-5xl font-normal text-[#201A18] tracking-tight">
            Daarom staat de volgende vraag niet vast.
          </h2>
          <p className="text-base md:text-lg text-[#6E625D] leading-relaxed pt-2">
            Een gesprek kan beginnen met lachen, vanzelf persoonlijker worden en daarna weer lucht nodig hebben. Tussen Ons is ontworpen om die beweging te ondersteunen.
          </p>
        </div>

        {/* Soft Flow Visualization */}
        <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6">
            {flowSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#FAF5F0] border border-[#EFE6DE] flex items-center justify-center font-editorial text-sm font-semibold text-[#BD3A53]">
                    0{idx + 1}
                  </div>
                  <span className="text-sm font-medium text-[#201A18]">{step}</span>
                </div>
                {idx < flowSteps.length - 1 && (
                  <div className="hidden md:block w-12 h-[1px] bg-[#EFE6DE]" aria-hidden="true"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <p className="font-editorial text-xl md:text-2xl text-[#6E625D]">
          Geen score. Geen oordeel. Geen <span className="text-[#201A18] italic">“jullie relatie is 82% compatibel”</span>.
        </p>

      </div>
    </section>
  );
}
