import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { InteractiveDemo } from './components/InteractiveDemo';
import { HowItWorks } from './components/HowItWorks';
import { DifferenceSection } from './components/DifferenceSection';
import { AudienceSection } from './components/AudienceSection';
import { AdaptiveConversationSection } from './components/AdaptiveConversationSection';
import { DepthLayerDemo } from './components/DepthLayerDemo';
import { BrandStatement } from './components/BrandStatement';
import { PrivacySection } from './components/PrivacySection';
import { PlusSection } from './components/PlusSection';
import { AppAccessSection } from './components/AppAccessSection';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AppModal } from './components/AppModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenApp = () => {
    setModalOpen(true);
  };

  const handleTryDemo = () => {
    const demoElement = document.getElementById('demo');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF5F0] text-[#201A18] font-sans selection:bg-[#BD3A53] selection:text-white">
      {/* 1. Header */}
      <Header onOpenApp={handleOpenApp} />

      <main>
        {/* 2. Hero */}
        <Hero onOpenApp={handleOpenApp} onTryDemo={handleTryDemo} />

        {/* 3. Vertrouwensstrip */}
        <TrustStrip />

        {/* 4. Interactieve voorbeeldvraag */}
        <InteractiveDemo />

        {/* 5. Hoe Tussen Ons werkt */}
        <HowItWorks />

        {/* 6. Het verschil */}
        <DifferenceSection />

        {/* 7. Voor wie is Tussen Ons? */}
        <AudienceSection />

        {/* 8. Het gesprek beweegt mee */}
        <AdaptiveConversationSection />

        {/* 9. Ga een laagje dieper */}
        <DepthLayerDemo />

        {/* 10. Productfilosofie */}
        <BrandStatement />

        {/* 11. Privacy */}
        <PrivacySection />

        {/* 12. Tussen Ons Plus */}
        <PlusSection onOpenApp={handleOpenApp} />

        {/* 13. Installeren / gebruiken */}
        <AppAccessSection onOpenApp={handleOpenApp} />

        {/* 14. Veelgestelde vragen */}
        <FAQ />

        {/* 15. Finale CTA */}
        <FinalCTA onOpenApp={handleOpenApp} />
      </main>

      {/* 16. Footer */}
      <Footer onOpenApp={handleOpenApp} />

      {/* App Access Modal */}
      <AppModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
