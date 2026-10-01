import React, { useState } from 'react';
import { Layers, ChevronDown } from 'lucide-react';

export function DepthLayerDemo() {
  const [deepRevealed, setDeepRevealed] = useState(false);

  return (
    <section className="py-24 bg-white border-y border-[#EFE6DE]">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#BD3A53] uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>NOG EEN LAAGJE?</span>
          </div>
          <h2 className="font-editorial text-3xl md:text-5xl font-normal text-[#201A18] tracking-tight">
            Nog een laagje?
          </h2>
          <p className="text-base md:text-lg text-[#6E625D] max-w-xl mx-auto leading-relaxed">
            Niet iedere goede vraag hoeft meteen diep te zijn. Daarom kan een gesprek eerst licht beginnen. En alleen wanneer jullie daar zin in hebben, kan een vraag een tweede laag openen.
          </p>
        </div>

        {/* Interactive Depth Demo Card */}
        <div className="bg-[#FAF5F0] border border-[#EFE6DE] rounded-3xl p-8 md:p-12 space-y-8 shadow-sm">
          
          {/* Layer 1 */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#6E625D]">Eerste laag</span>
            <p className="font-editorial text-xl md:text-2xl text-[#201A18]">
              "Wat is iets kleins waardoor jij je snel op je gemak voelt bij iemand?"
            </p>
          </div>

          {!deepRevealed ? (
            <div className="pt-4 border-t border-[#EFE6DE] flex justify-center">
              <button
                onClick={() => setDeepRevealed(true)}
                className="px-6 py-3 text-sm font-medium text-white bg-[#BD3A53] hover:bg-[#a63048] rounded-xl transition-all shadow-sm flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#BD3A53]/50"
              >
                <span>Ga een laagje dieper</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="pt-6 border-t border-[#EFE6DE] space-y-3 animate-fadeIn">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#BD3A53]">Tweede laag</span>
              <p className="font-editorial text-xl md:text-2xl text-[#201A18]">
                "Wanneer voelde jij je voor het laatst echt veilig bij iemand, en waardoor kwam dat?"
              </p>
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setDeepRevealed(false)}
                  className="text-xs text-[#6E625D] hover:text-[#201A18] underline transition-colors"
                >
                  Terug naar eerste laag
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-[#6E625D]">
          Jullie bepalen hoe ver het gesprek gaat. Niet de app.
        </p>

      </div>
    </section>
  );
}
