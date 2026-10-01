import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenApp: () => void;
  onTryDemo: () => void;
}

export function Hero({ onOpenApp, onTryDemo }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-[#FAF5F0]">
      {/* Subtle ambient soft rose background glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none opacity-45"
        style={{ backgroundColor: '#F7D8D3' }}
        aria-hidden="true"
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-[#6E625D] uppercase">
              <span>EEN GESPREK DAT MET JULLIE MEEBEWEEGT</span>
            </div>

            {/* Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#201A18] tracking-tight leading-[1.15]">
              De juiste vraag.{' '}
              <span className="text-[#BD3A53] block sm:inline mt-1 sm:mt-0 font-light italic">
                Op het juiste moment.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-editorial text-xl md:text-2xl text-[#6E625D] font-normal leading-relaxed">
              Voor gesprekken die anders misschien nooit waren begonnen.
            </p>

            {/* Supporting text */}
            <p className="text-base md:text-lg text-[#6E625D] max-w-xl leading-relaxed">
              Kies wie er tegenover je zit, waar jullie zin in hebben en hoeveel tijd jullie hebben. Tussen Ons doet de rest.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenApp}
                className="px-8 py-4 text-base font-medium text-white bg-[#BD3A53] hover:bg-[#a63048] transition-all rounded-xl shadow-sm text-center flex items-center justify-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#BD3A53]/50"
              >
                <span>Begin samen</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={onTryDemo}
                className="px-8 py-4 text-base font-medium text-[#201A18] bg-white hover:bg-[#FAF5F0] border border-[#EFE6DE] transition-all rounded-xl text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-[#201A18]/20"
              >
                Probeer een vraag
              </button>
            </div>

            {/* Under CTA note */}
            <div className="flex items-center gap-3 text-xs md:text-sm text-[#6E625D] pt-1">
              <span>Geen account nodig</span>
              <span aria-hidden="true" className="text-[#BD3A53]">•</span>
              <span>Jullie antwoorden hoeven niet te worden opgeslagen</span>
            </div>

          </div>

          {/* Right Column: Floating Question Card Editorial Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md relative">
              
              {/* Back decorative shadow/card element */}
              <div className="absolute inset-0 bg-[#EFE6DE] rounded-3xl transform rotate-3 scale-95 opacity-70"></div>
              
              {/* Main Card */}
              <div className="relative bg-white border border-[#EFE6DE] rounded-3xl p-8 md:p-10 shadow-xl space-y-6">
                
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF5F0] rounded-full text-xs font-medium text-[#BD3A53]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Ontdekken</span>
                  </div>
                  <span className="text-xs text-[#6E625D]">Kaart 01</span>
                </div>

                <div className="py-4">
                  <p className="font-editorial text-2xl md:text-3xl text-[#201A18] leading-snug">
                    "Wat is iets kleins waardoor jij je meteen op je gemak voelt bij iemand?"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EFE6DE] flex items-center justify-between text-xs text-[#6E625D]">
                  <span>Date of Partner</span>
                  <span className="italic">Neem om de beurt de tijd.</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
