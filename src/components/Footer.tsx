import React from 'react';

interface FooterProps {
  onOpenApp: () => void;
}

export function Footer({ onOpenApp }: FooterProps) {
  return (
    <footer className="bg-[#FAF5F0] border-t border-[#EFE6DE] py-16 text-[#6E625D]">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-[#EFE6DE]">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 flex items-center justify-center relative" aria-hidden="true">
                <div className="absolute left-0 w-2.5 h-5 bg-[#BD3A53] rounded-sm transform -rotate-6"></div>
                <div className="absolute right-0 w-2.5 h-5 bg-[#201A18] rounded-sm transform rotate-6"></div>
              </div>
              <span className="font-editorial text-xl font-semibold text-[#201A18]">
                Tussen Ons
              </span>
            </div>
            <p className="font-editorial text-sm text-[#6E625D] max-w-sm">
              Voor gesprekken die anders misschien nooit waren begonnen.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-[#201A18]">
            <a href="#hoe-het-werkt" className="hover:text-[#BD3A53] transition-colors">Hoe het werkt</a>
            <a href="#voor-wie" className="hover:text-[#BD3A53] transition-colors">Voor wie</a>
            <a href="#plus" className="hover:text-[#BD3A53] transition-colors">Plus</a>
            <a href="#faq" className="hover:text-[#BD3A53] transition-colors">Veelgestelde vragen</a>
            <button onClick={onOpenApp} className="hover:text-[#BD3A53] transition-colors text-left font-medium">
              Open Tussen Ons
            </button>
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#201A18] transition-colors">Privacy</a>
            <a href="#voorwaarden" className="hover:text-[#201A18] transition-colors">Voorwaarden</a>
            <a href="#contact" className="hover:text-[#201A18] transition-colors">Contact</a>
          </div>
          <div>
            © {new Date().getFullYear()} Tussen Ons. Alle rechten voorbehouden.
          </div>
        </div>

      </div>
    </footer>
  );
}
