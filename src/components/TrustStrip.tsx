import React from 'react';

export function TrustStrip() {
  const items = [
    "GEEN SCORE",
    "GEEN ANALYSE VAN JULLIE ANTWOORDEN",
    "GEEN EINDELOZE SCHERMTIJD",
    "GEWOON EEN GOED GESPREK"
  ];

  return (
    <section className="bg-white border-y border-[#EFE6DE] py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <div className="text-xs md:text-sm font-semibold tracking-wider text-[#6E625D] uppercase">
                {item}
              </div>
              {index < items.length - 1 && (
                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#BD3A53]" aria-hidden="true"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
