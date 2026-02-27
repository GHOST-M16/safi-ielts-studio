"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";

const options = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9];

function roundBand(n: number) {
  const floor = Math.floor(n);
  const dec = n - floor;
  if (dec < 0.25) return floor;
  if (dec < 0.75) return floor + 0.5;
  return floor + 1;
}

export default function CalculatorPage() {
  const [scores, setScores] = useState({
    listening: 0,
    reading: 0,
    writing: 0,
    speaking: 0,
  });

  const update = (key: keyof typeof scores, value: number) => {
    setScores((prev) => ({ ...prev, [key]: value }));
  };

  const sum =
    scores.listening + scores.reading + scores.writing + scores.speaking;
  const avg = sum / 4;
  const overall = avg > 0 ? roundBand(avg) : null;

  return (
    <div className="min-h-[80vh] bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-xl border border-slate-100 sm:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
              <Calculator size={24} />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold text-slate-850">
                IELTS Band Score Calculator
              </h1>
              <p className="text-sm text-slate-600">
                Enter your section scores (1–9). Overall is the average rounded to the nearest 0.5.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            {(
              [
                "listening",
                "reading",
                "writing",
                "speaking",
              ] as const
            ).map((key) => (
              <div
                key={key}
                className="flex flex-wrap items-center justify-between gap-4"
              >
                <label className="capitalize font-medium text-slate-750">
                  {key}
                </label>
                <div className="flex flex-wrap gap-2">
                  {options.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => update(key, opt)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-all hover:scale-105 ${
                        scores[key] === opt
                          ? "bg-primary text-white shadow-md"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {overall !== null && (
            <div className="mt-8 rounded-2xl bg-primary/10 p-6 text-center">
              <p className="text-sm font-medium text-slate-600">
                Your estimated overall band score
              </p>
              <p className="mt-2 font-display text-4xl font-bold text-primary">
                {overall.toFixed(1)}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Average of four sections, rounded to nearest 0.5
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
