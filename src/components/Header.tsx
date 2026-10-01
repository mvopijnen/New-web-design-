import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenApp: () => void;
}

export function Header({ onOpenApp }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF5F0]/90 backdrop-blur-md border-b border-[#EFE6DE]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Zone */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#BD3A53]/30 rounded-lg py-1">
          {/* Abstract brand icon: two organic shapes with space between them representing "Tussen Ons" */}
          <div className="w-8 h-8 flex items-center justify-center relative" aria-hidden="true">
            <div className="absolute left-0 w-3 h-7 bg-[#BD3A53] rounded-sm transform -rotate-6 transition-transform group-hover:rotate-0"></div>
            <div className="absolute right-0 w-3 h-7 bg-[#201A18] rounded-sm transform rotate-6 transition-transform group-hover:rotate-0"></div>
          </div>
          <span className="font-editorial text-xl font-semibold tracking-tight text-[#201A18]">
            Tussen Ons
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6E625D]">
          <a href="#hoe-het-werkt" className="hover:text-[#201A18] transition-colors">Hoe het werkt</a>
          <a href="#voor-wie" className="hover:text-[#201A18] transition-colors">Voor wie</a>
          <a href="#waarom" className="hover:text-[#201A18] transition-colors">Waarom Tussen Ons</a>
          <a href="#plus" className="hover:text-[#201A18] transition-colors">Plus</a>
          <a href="#faq" className="hover:text-[#201A18] transition-colors">FAQ</a>
        </nav>

        {/* Primary Action / Right Zone */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenApp}
            className="px-5 py-2.5 text-sm font-medium text-white bg-[#BD3A53] hover:bg-[#a63048] transition-all rounded-xl shadow-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#BD3A53]/50"
          >
            Begin samen
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onOpenApp}
            className="px-4 py-2 text-xs font-medium text-white bg-[#BD3A53] hover:bg-[#a63048] rounded-lg shadow-sm whitespace-nowrap"
          >
            Begin samen
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#201A18] hover:bg-[#EFE6DE]/50 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF5F0] border-b border-[#EFE6DE] px-6 py-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#6E625D]">
            <a
              href="#hoe-het-werkt"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#201A18] py-1 transition-colors"
            >
              Hoe het werkt
            </a>
            <a
              href="#voor-wie"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#201A18] py-1 transition-colors"
            >
              Voor wie
            </a>
            <a
              href="#waarom"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#201A18] py-1 transition-colors"
            >
              Waarom Tussen Ons
            </a>
            <a
              href="#plus"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#201A18] py-1 transition-colors"
            >
              Plus
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#201A18] py-1 transition-colors"
            >
              Veelgestelde vragen
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
