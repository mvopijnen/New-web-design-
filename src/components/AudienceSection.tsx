import React from 'react';

export function AudienceSection() {
  const audiences = [
    {
      name: "DATE",
      tagline: "Van eerste ontmoeting tot iets dat misschien serieuzer wordt.",
      accent: "bg-[#F7D8D3]/50"
    },
    {
      name: "PARTNER",
      tagline: "Voor date nights, lange relaties en alles ertussenin.",
      accent: "bg-white"
    },
    {
      name: "VRIENDEN",
      tagline: "Voor verhalen die je kent én verhalen die je blijkbaar nog nooit hebt gehoord.",
      accent: "bg-white"
    },
    {
      name: "FAMILIE",
      tagline: "Voor herinneringen, onverwachte vragen en nieuwe gesprekken.",
      accent: "bg-white"
    },
    {
      name: "GROEPEN",
      tagline: "Voor avonden die iets leuker mogen worden dan smalltalk.",
      accent: "bg-[#F7D8D3]/30"
    }
  ];

  return (
    <section id="voor-wie" className="py-24 bg-white border-y border-[#EFE6DE]">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#6E625D] uppercase">
            <span>VOOR WIE</span>
          </div>
          <h2 className="font-editorial text-3xl md:text-5xl font-normal text-[#201A18] tracking-tight">
            Iedere relatie heeft andere gesprekken.
          </h2>
        </div>

        {/* 5 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((aud, idx) => (
            <div 
              key={idx}
              className={`border border-[#EFE6DE] rounded-3xl p-8 md:p-10 space-y-6 flex flex-col justify-between transition-transform hover:-translate-y-1 duration-200 ${
                idx === 0 ? 'md:col-span-2 lg:col-span-2 bg-[#FAF5F0]' : 'bg-white'
              }`}
            >
              <div className="space-y-4">
                <span className="text-xs font-semibold text-[#BD3A53] tracking-widest uppercase block">
                  0{idx + 1} // {aud.name}
                </span>
                <h3 className="font-editorial text-3xl md:text-4xl font-normal text-[#201A18]">
                  {aud.name}
                </h3>
                <p className="text-base md:text-lg text-[#6E625D] leading-relaxed max-w-md">
                  {aud.tagline}
                </p>
              </div>

              <div className="pt-6 border-t border-[#EFE6DE] flex items-center justify-between text-xs text-[#6E625D]">
                <span>Tussen Ons Sessie</span>
                <span className="text-[#BD3A53] font-medium">Bekijk momenten →</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
