import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onOpenApp: () => void;
}

export function FinalCTA({ onOpenApp }: FinalCTAProps) {
  return (
    <section className="py-28 md:py-36 bg-white border-y border-[#EFE6DE] text-center relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-30"
        style={{ backgroundColor: '#F7D8D3' }}
        aria-hidden="true"
      ></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-10">
        
        <div className="space-y-4">
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#201A18] tracking-tight leading-[1.15]">
            Je kent elkaar waarschijnlijk al.<br />
            <span className="text-[#BD3A53] italic">Maar nog lang niet helemaal.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#6E625D] pt-2">
            Begin met één vraag. Kijk waar jullie uitkomen.
          </p>
        </div>

        <div className="pt-4">
          <button
            onClick={onOpenApp}
            className="px-9 py-4 text-base font-medium text-white bg-[#BD3A53] hover:bg-[#a63048] transition-all rounded-xl shadow-sm inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#BD3A53]/50"
          >
            <span>Begin samen</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="pt-6 space-y-1">
          <p className="font-editorial text-sm tracking-wide text-[#6E625D]">
            De juiste vraag.
          </p>
          <p className="font-editorial text-sm tracking-wide text-[#BD3A53] italic">
            Op het juiste moment.
          </p>
        </div>

      </div>
    </section>
  );
}
