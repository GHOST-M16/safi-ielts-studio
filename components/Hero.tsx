import Link from "next/link";
import { ArrowRight, BookOpen, ClipboardCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:px-8 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              Premium IELTS Training
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-850 sm:text-5xl lg:text-6xl">
              Achieve Your Target Band Score with{" "}
              <span className="text-primary">Expert Guidance</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600 leading-relaxed">
              Join 5000+ successful students. Our proven methodology, expert
              tutors, and structured programmes are designed to help you excel
              in IELTS Academic, General, or Spoken English.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact#demo"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-primary-dark hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a Free Demo
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact#level-test"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-300 px-6 py-3.5 text-base font-semibold text-slate-750 hover:border-primary hover:text-primary hover:bg-red-50/50 transition-all duration-200"
              >
                <ClipboardCheck size={20} />
                Take a Level Test
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Students in IELTS training session"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-xl border border-slate-100">
              <p className="font-display text-2xl font-bold text-primary">8.5</p>
              <p className="text-sm text-slate-600">Avg. Band Score</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
