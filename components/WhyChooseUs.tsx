import { Users, Award, BookMarked, TrendingUp } from "lucide-react";

const stats = [
  {
    value: "5000+",
    label: "Students Trained",
    icon: Users,
  },
  {
    value: "8.5",
    label: "Average Band Score",
    icon: Award,
  },
  {
    value: "98%",
    label: "Satisfaction Rate",
    icon: BookMarked,
  },
  {
    value: "4.9",
    label: "Google Rating",
    icon: TrendingUp,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-slate-850 sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Numbers that speak for themselves. Join a community of achievers.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8 text-center transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                <stat.icon size={28} />
              </div>
              <p className="mt-4 font-display text-3xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
