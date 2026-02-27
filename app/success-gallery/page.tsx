"use client";

import { Award, Play, Mic, BookOpen, Headphones, Pen } from "lucide-react";

const students = [
  {
    name: "Ayesha Khan",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    overall: 8.5,
    reading: 9.0,
    listening: 8.5,
    writing: 8.0,
    speaking: 8.5,
  },
  {
    name: "Hassan Raza",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    overall: 7.5,
    reading: 7.5,
    listening: 8.0,
    writing: 7.0,
    speaking: 7.5,
  },
  {
    name: "Maria Siddiqui",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    overall: 8.0,
    reading: 8.0,
    listening: 8.5,
    writing: 7.5,
    speaking: 8.0,
  },
  {
    name: "Omar Tariq",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    overall: 7.5,
    reading: 8.0,
    listening: 7.5,
    writing: 7.0,
    speaking: 7.5,
  },
  {
    name: "Zara Malik",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
    overall: 8.5,
    reading: 9.0,
    listening: 8.5,
    writing: 8.5,
    speaking: 8.0,
  },
  {
    name: "Ali Farooq",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    overall: 7.0,
    reading: 7.0,
    listening: 7.5,
    writing: 6.5,
    speaking: 7.0,
  },
];

export default function SuccessGalleryPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-12">
          <h1 className="font-display text-4xl font-bold text-slate-850 sm:text-5xl">
            Wall of Fame
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-600">
            Real results from our students. Every band score represents hard work and the right guidance.
          </p>
        </div>

        {/* Video Testimonial placeholder */}
        <section className="mb-14">
          <h2 className="font-display text-xl font-semibold text-slate-850 mb-4">
            Video Testimonial
          </h2>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-200 border border-slate-200">
            <div className="absolute inset-0 flex items-center justify-center bg-slate-800/60">
              <button
                type="button"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark hover:scale-110 transition-all"
                aria-label="Play video"
              >
                <Play size={32} className="ml-1" />
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <p className="font-display font-semibold">Hear from our students</p>
              <p className="text-sm text-white/90">Success stories in their own words</p>
            </div>
          </div>
        </section>

        {/* Wall of Fame grid */}
        <section>
          <h2 className="font-display text-xl font-semibold text-slate-850 mb-6">
            Student Results
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {students.map((s) => (
              <div
                key={s.name}
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex gap-4 p-5">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                    <img
                      src={s.photo}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-semibold text-slate-850 truncate">
                      {s.name}
                    </h3>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="font-display text-2xl font-bold text-primary">
                        {s.overall}
                      </span>
                      <span className="text-sm text-slate-500">overall</span>
                    </div>
                  </div>
                  <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Award size={24} />
                  </div>
                </div>
                <div className="border-t border-slate-100 px-5 py-3 grid grid-cols-4 gap-2 text-center">
                  <div>
                    <BookOpen size={14} className="mx-auto text-slate-400" />
                    <p className="text-xs font-medium text-slate-600 mt-0.5">R {s.reading}</p>
                  </div>
                  <div>
                    <Headphones size={14} className="mx-auto text-slate-400" />
                    <p className="text-xs font-medium text-slate-600 mt-0.5">L {s.listening}</p>
                  </div>
                  <div>
                    <Pen size={14} className="mx-auto text-slate-400" />
                    <p className="text-xs font-medium text-slate-600 mt-0.5">W {s.writing}</p>
                  </div>
                  <div>
                    <Mic size={14} className="mx-auto text-slate-400" />
                    <p className="text-xs font-medium text-slate-600 mt-0.5">S {s.speaking}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
