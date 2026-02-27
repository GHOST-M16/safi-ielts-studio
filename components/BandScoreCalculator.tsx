"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";

export default function BandScoreCalculator() {
  const [scores, setScores] = useState({ listening: 0, reading: 0, writing: 0, speaking: 0 });
  const [overall, setOverall] = useState<number | null>(null);

  const update = (key: keyof typeof scores, value: number) => {
    const next = { ...scores, [key]: value };
    setScores(next);
    const sum = next.listening + next.reading + next.writing + next.speaking;
    const avg = sum / 4;
    setOverall(avg);
  };

  const roundBand = (n: number) => {
    const floor = Math.floor(n);
    const dec = n - floor;
    if (dec < 0.25) return floor;
    if (dec < 0.75) return floor + 0.5;
    return floor + 1;
  };

  const options = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9];

  return (
    <section id="calculator" className="bg-slate-50 py-20 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-xl border border-slate-100 sm:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
              <Calculator size={24} />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-850">
                Band Score Calculator
              </h2>
              <p className="text-sm text-slate-600">
                Estimate your overall IELTS band from section scores
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            {(["listening", "reading", "writing", "speaking"] as const).map(
              (key) => (
                <div key={key} className="flex flex-wrap items-center justify-between gap-4">
                  <label className="capitalize font-medium text-slate-750">
                    {key}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {options.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => update(key, opt)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                          scores[key] === opt
                            ? "bg-primary text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>

          {overall !== null && (
            <div className="mt-8 rounded-2xl bg-primary/10 p-6 text-center">
              <p className="text-sm font-medium text-slate-600">
                Your estimated overall band score
              </p>
              <p className="mt-2 font-display text-4xl font-bold text-primary">
                {roundBand(overall).toFixed(1)}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                (Average of four sections, rounded to nearest 0.5)
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
