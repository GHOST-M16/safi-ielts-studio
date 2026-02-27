"use client";

const testimonials = [
  {
    quote:
      "Safi IELTS Studio helped me go from 6.5 to 8.0. The structured approach and mock tests were exactly what I needed.",
    name: "Ayesha K.",
    band: "8.0",
    course: "IELTS Academic",
  },
  {
    quote:
      "Best investment for my migration goals. The trainers are patient and the materials are up to date.",
    name: "Hassan R.",
    band: "7.5",
    course: "IELTS General",
  },
  {
    quote:
      "I was nervous about speaking. The small batches and constant practice gave me the confidence I needed.",
    name: "Maria S.",
    band: "8.0",
    course: "Spoken English",
  },
  {
    quote:
      "Clear feedback and a structured plan. I achieved my target in one attempt. Highly recommend.",
    name: "Omar T.",
    band: "7.5",
    course: "IELTS Academic",
  },
  {
    quote:
      "The level test helped me know where I stood. The course was tailored to my weak areas.",
    name: "Zara M.",
    band: "8.5",
    course: "IELTS Academic",
  },
];

// Duplicate for seamless loop
const duplicated = [...testimonials, ...testimonials];

export default function TestimonialMarquee() {
  return (
    <section className="bg-slate-950 py-16 overflow-hidden">
      <div className="mb-8 text-center">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
          What Our Students Say
        </h2>
        <p className="mt-2 text-slate-400">Trusted by thousands worldwide</p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee gap-6 whitespace-nowrap will-change-transform" style={{ width: "max-content" }}>
          {duplicated.map((t, i) => (
            <div
              key={i}
              className="inline-flex shrink-0 w-[80vw] max-w-md rounded-2xl bg-slate-800/80 p-6 backdrop-blur sm:w-[400px]"
            >
              <p className="text-slate-200 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-semibold text-white">{t.name}</span>
                <span className="rounded-lg bg-primary/20 px-2 py-1 text-sm font-medium text-primary">
                  Band {t.band}
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500">{t.course}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
