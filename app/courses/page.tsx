"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Clock,
  FileCheck,
  Filter,
  MapPin,
  Monitor,
  ArrowRight,
} from "lucide-react";

const courses = [
  {
    id: "academic-power-pack",
    title: "IELTS Academic Power Pack",
    duration: "8 weeks",
    mockTests: 6,
    price: "PKR 28,000",
    level: "advanced" as const,
    format: "online" as const,
    description:
      "Intensive preparation for university admissions. Full-length mocks, writing feedback, and speaking practice.",
  },
  {
    id: "general-intensive",
    title: "General Training Intensive",
    duration: "6 weeks",
    mockTests: 4,
    price: "PKR 22,000",
    level: "beginner" as const,
    format: "in-person" as const,
    description:
      "Focused on migration and work visas. Real-world tasks and practice tests aligned with General format.",
  },
  {
    id: "speaking-bootcamp",
    title: "1-on-1 Speaking Boot Camp",
    duration: "4 weeks",
    mockTests: 2,
    price: "PKR 18,000",
    level: "beginner" as const,
    format: "online" as const,
    description:
      "Personalised speaking sessions with expert tutors. Build fluency and confidence for the speaking test.",
  },
];

type LevelFilter = "all" | "beginner" | "advanced";
type FormatFilter = "all" | "online" | "in-person";

export default function CoursesPage() {
  const [level, setLevel] = useState<LevelFilter>("all");
  const [format, setFormat] = useState<FormatFilter>("all");

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      if (level !== "all" && c.level !== level) return false;
      if (format !== "all" && c.format !== format) return false;
      return true;
    });
  }, [level, format]);

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-10">
          <h1 className="font-display text-4xl font-bold text-slate-850 sm:text-5xl">
            Course Catalog
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-600">
            Choose the right programme for your goal. Filter by level and format.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Filter sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
              <div className="flex items-center gap-2 text-slate-850 font-semibold">
                <Filter size={20} />
                Filter
              </div>
              <div className="mt-5 space-y-5">
                <div>
                  <p className="text-sm font-medium text-slate-600 mb-2">
                    Level
                  </p>
                  <div className="space-y-2">
                    {(["all", "beginner", "advanced"] as const).map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="level"
                          checked={level === opt}
                          onChange={() => setLevel(opt)}
                          className="text-primary focus:ring-primary"
                        />
                        <span className="text-sm capitalize">
                          {opt === "all" ? "All levels" : opt}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-600 mb-2">
                    Format
                  </p>
                  <div className="space-y-2">
                    {(["all", "online", "in-person"] as const).map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="format"
                          checked={format === opt}
                          onChange={() => setFormat(opt)}
                          className="text-primary focus:ring-primary"
                        />
                        <span className="text-sm capitalize">
                          {opt === "all" ? "All" : opt}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Course cards */}
          <div className="flex-1 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((course, i) => (
              <div
                key={course.id}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
              >
                <h2 className="font-display text-xl font-bold text-slate-850">
                  {course.title}
                </h2>
                <p className="mt-2 text-sm text-slate-600">{course.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <Clock size={16} className="text-primary shrink-0" />
                    {course.duration}
                  </li>
                  <li className="flex items-center gap-2">
                    <FileCheck size={16} className="text-primary shrink-0" />
                    {course.mockTests} mock tests
                  </li>
                  <li className="flex items-center gap-2">
                    {course.format === "online" ? (
                      <Monitor size={16} className="text-primary shrink-0" />
                    ) : (
                      <MapPin size={16} className="text-primary shrink-0" />
                    )}
                    <span className="capitalize">{course.format}</span>
                  </li>
                </ul>
                <p className="mt-4 font-display text-2xl font-bold text-primary">
                  {course.price}
                </p>
                <Link
                  href={`/courses#${course.id}`}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
                >
                  View Curriculum
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-slate-600 py-12">
            No courses match the selected filters. Try changing Level or Format.
          </p>
        )}
      </div>
    </div>
  );
}
