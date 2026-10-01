import React from 'react';
import { Smartphone, ExternalLink } from 'lucide-react';

interface AppAccessSectionProps {
  onOpenApp: () => void;
}

export function AppAccessSection({ onOpenApp }: AppAccessSectionProps) {
  return (
    <section className="py-24 bg-white border-y border-[#EFE6DE]">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
        
        <div className="w-16 h-16 bg-[#FAF5F0] border border-[#EFE6DE] rounded-2xl flex items-center justify-center mx-auto text-[#BD3A53]">
          <Smartphone className="w-8 h-8" />
        </div>

        <div className="space-y-4 max-w-xl mx-auto">
          <h2 className="font-editorial text-3xl md:text-5xl font-normal text-[#201A18] tracking-tight">
            Tussen Ons altijd bij de hand.
          </h2>
          <p className="text-base md:text-lg text-[#6E625D] leading-relaxed">
            Open Tussen Ons wanneer je het nodig hebt. Geen App Store nodig om te beginnen. Wanneer de app als PWA beschikbaar is, kan de gebruiker hem vanuit de app op het beginscherm zetten.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={onOpenApp}
            className="px-8 py-4 text-base font-medium text-white bg-[#BD3A53] hover:bg-[#a63048] transition-all rounded-xl shadow-sm inline-flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#BD3A53]/50"
          >
            <span>Open Tussen Ons</span>
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs md:text-sm text-[#6E625D]">
          Werkt op telefoon, tablet en desktop.
        </p>

      </div>
    </section>
  );
}
