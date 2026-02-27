import Link from "next/link";
import { BookOpen, Globe, MessageCircle, ArrowRight } from "lucide-react";

const features = [
  {
    title: "IELTS Academic",
    description:
      "Structured preparation for university admissions and professional registration. Master all four modules with our expert-led classes.",
    icon: BookOpen,
    href: "/courses#academic",
    cta: "View programme",
  },
  {
    title: "IELTS General",
    description:
      "Targeted training for migration and work visas. Real-world tasks and practice tests aligned with official criteria.",
    icon: Globe,
    href: "/courses#general",
    cta: "View programme",
  },
  {
    title: "Spoken English",
    description:
      "Build fluency and confidence for interviews and daily communication. Small groups and personalised feedback.",
    icon: MessageCircle,
    href: "/courses#spoken",
    cta: "View programme",
  },
];

export default function FeatureCards() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-slate-850 sm:text-4xl">
            Choose Your Path
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Whether you need IELTS for study, work, or migration, we have a
            programme tailored to your goals.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="group rounded-2xl bg-white p-8 shadow-md border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <feature.icon size={24} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-slate-850">
                {feature.title}
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                {feature.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                {feature.cta}
                <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
