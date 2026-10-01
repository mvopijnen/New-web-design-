import React from 'react';

export function DifferenceSection() {
  const blocks = [
    {
      title: "Niet willekeurig",
      description: "De relatie, fase, sfeer en gekozen intensiteit bepalen welke vragen passen."
    },
    {
      title: "Niet statisch",
      description: "Wat tijdens de sessie gebeurt kan invloed hebben op wat daarna komt."
    },
    {
      title: "Niet gemaakt om je vast te houden",
      description: "Onze beste sessie is er één waarin je vergeet naar je telefoon te kijken."
    }
  ];

  return (
    <section id="waarom" className="py-24 bg-[#FAF5F0]">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        
        {/* Big Editorial Statement */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#BD3A53] uppercase">
            <span>HET VERSCHIL</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#201A18] leading-[1.2]">
            Een vragenlijst weet wat de volgende vraag is.<br />
            <span className="text-[#BD3A53] italic">Tussen Ons probeert te begrijpen welke vraag nú past.</span>
          </h2>
        </div>

        {/* Three Contrasting Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {blocks.map((block, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-[#EFE6DE] rounded-3xl p-8 md:p-10 space-y-4 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-xs font-semibold text-[#BD3A53] uppercase tracking-wider block">
                  0{idx + 1}
                </span>
                <h3 className="font-editorial text-2xl font-normal text-[#201A18]">
                  {block.title}
                </h3>
                <p className="text-base text-[#6E625D] leading-relaxed">
                  {block.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
