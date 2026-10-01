import React, { useState } from 'react';
import { X, ExternalLink, Sparkles, Smartphone, Check } from 'lucide-react';

interface AppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppModal({ isOpen, onClose }: AppModalProps) {
  const [copied, setCopied] = useState(false);
  // Get VITE_APP_URL from environment or fallback to current origin
  const appUrl = (import.meta as any).env.VITE_APP_URL || window.location.origin;

  if (!isOpen) return null;

  const handleOpenApp = () => {
    window.open(appUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(appUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#201A18]/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 md:p-10 max-w-lg w-full shadow-2xl space-y-6 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#6E625D] hover:text-[#201A18] hover:bg-[#FAF5F0] rounded-full transition-colors"
          aria-label="Sluiten"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="w-12 h-12 bg-[#FAF5F0] border border-[#EFE6DE] rounded-2xl flex items-center justify-center text-[#BD3A53]">
          <Sparkles className="w-6 h-6" />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="font-editorial text-2xl md:text-3xl text-[#201A18]">
            Start Tussen Ons
          </h3>
          <p className="text-sm md:text-base text-[#6E625D] leading-relaxed">
            Je staat op het punt om de interactieve Tussen Ons gesprekservaring te openen. Kies een moment en begin samen.
          </p>
        </div>

        {/* URL Box */}
        <div className="bg-[#FAF5F0] border border-[#EFE6DE] rounded-2xl p-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 overflow-hidden">
            <Smartphone className="w-5 h-5 text-[#6E625D] flex-shrink-0" />
            <span className="text-xs md:text-sm font-mono text-[#201A18] truncate">
              {appUrl}
            </span>
          </div>
          <button
            onClick={handleCopyLink}
            className="px-3 py-1.5 text-xs font-medium text-[#201A18] bg-white border border-[#EFE6DE] rounded-xl hover:bg-[#FAF5F0] transition-colors flex-shrink-0"
          >
            {copied ? <span className="flex items-center gap-1 text-emerald-600"><Check className="w-3.5 h-3.5" /> Gekopieerd</span> : 'Kopieer'}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
          <button
            onClick={handleOpenApp}
            className="flex-1 px-6 py-3.5 text-sm font-medium text-white bg-[#BD3A53] hover:bg-[#a63048] transition-all rounded-xl shadow-sm flex items-center justify-center gap-2"
          >
            <span>Open applicatie</span>
            <ExternalLink className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3.5 text-sm font-medium text-[#6E625D] hover:text-[#201A18] bg-white hover:bg-[#FAF5F0] border border-[#EFE6DE] transition-all rounded-xl text-center"
          >
            Sluiten
          </button>
        </div>

        <p className="text-xs text-center text-[#6E625D] italic">
          Geen account vereist • Direct klaar voor gebruik
        </p>

      </div>
    </div>
  );
}
