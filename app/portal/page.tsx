"use client";

import { useState } from "react";
import {
  LogIn,
  Calendar,
  FileText,
  Upload,
  Clock,
  Users,
  ChevronRight,
  Download,
  CheckCircle,
  User,
  GraduationCap,
} from "lucide-react";

const studentResources = [
  { name: "IELTS Writing Task 2 Guide.pdf", date: "Jan 15, 2025" },
  { name: "Speaking Part 2 Cue Cards.pdf", date: "Jan 12, 2025" },
  { name: "Academic Reading Practice Set 3.pdf", date: "Jan 10, 2025" },
];

const attendanceData = [
  { name: "Ayesha K.", batch: "Academic A", present: 12, total: 12 },
  { name: "Hassan R.", batch: "General B", present: 10, total: 12 },
  { name: "Maria S.", batch: "Academic A", present: 11, total: 12 },
  { name: "Omar T.", batch: "Speaking 1-on-1", present: 8, total: 8 },
];

const upcomingClasses = [
  { title: "Academic Writing Task 2", time: "Today, 4:00 PM", batch: "Academic A" },
  { title: "General Reading Practice", time: "Tomorrow, 10:00 AM", batch: "General B" },
  { title: "Speaking Mock Test", time: "Wed, 2:00 PM", batch: "Speaking 1-on-1" },
];

export default function PortalPage() {
  const [activeTab, setActiveTab] = useState<"student" | "staff">("student");
  const [loggedIn, setLoggedIn] = useState(false);

  // Mock: days until next exam
  const examDate = new Date();
  examDate.setDate(examDate.getDate() + 14);
  const daysUntil = Math.ceil((examDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24));

  if (!loggedIn) {
    return (
      <div className="min-h-[80vh] bg-slate-50 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl border border-slate-100">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white mx-auto">
            <LogIn size={28} />
          </div>
          <h1 className="mt-6 text-center font-display text-2xl font-bold text-slate-850">
            Staff & Student Portal
          </h1>
          <p className="mt-2 text-center text-slate-600">
            Sign in to access your dashboard, resources, and schedules.
          </p>
          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setLoggedIn(true);
            }}
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-750">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-750">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-primary py-3.5 font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="font-display text-3xl font-bold text-slate-850">
              Portal Dashboard
            </h1>
            <div className="flex rounded-xl border border-slate-200 bg-white p-1">
              <button
                type="button"
                onClick={() => setActiveTab("student")}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "student"
                    ? "bg-primary text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <GraduationCap size={18} />
                Student
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("staff")}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "staff"
                    ? "bg-primary text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Users size={18} />
                Staff
              </button>
            </div>
          </div>
        </div>

        {activeTab === "student" && (
          <div className="space-y-8">
            {/* Days until exam */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 text-slate-600">
                <Calendar size={24} className="text-primary" />
                <span className="font-display font-semibold text-slate-850">
                  Days until next exam
                </span>
              </div>
              <p className="mt-3 font-display text-4xl font-bold text-primary">
                {daysUntil} days
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Your next exam date: {examDate.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
              </p>
            </div>

            {/* Latest resources */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-display text-lg font-semibold text-slate-850 flex items-center gap-2">
                <FileText size={20} className="text-primary" />
                Latest Resources (PDFs)
              </h2>
              <ul className="mt-4 space-y-3">
                {studentResources.map((r) => (
                  <li
                    key={r.name}
                    className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 px-4 py-3 hover:bg-slate-50 transition-colors"
                  >
                    <div className="min-w-0">
                      <p className="font-medium text-slate-850 truncate">{r.name}</p>
                      <p className="text-xs text-slate-500">{r.date}</p>
                    </div>
                    <button
                      type="button"
                      className="ml-3 flex items-center gap-1 rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
                    >
                      <Download size={16} />
                      Download
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Submit assignment */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-display text-lg font-semibold text-slate-850 flex items-center gap-2">
                <Upload size={20} className="text-primary" />
                Submit Assignment
              </h2>
              <div className="mt-4 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/30 p-8 text-center">
                <Upload size={40} className="mx-auto text-slate-400" />
                <p className="mt-2 text-sm font-medium text-slate-600">
                  Drag and drop your file here, or click to browse
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  PDF, DOC up to 10MB
                </p>
                <button
                  type="button"
                  className="mt-4 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
                >
                  Choose file
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "staff" && (
          <div className="space-y-8">
            {/* Attendance table */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 bg-slate-50/50 px-6 py-4">
                <h2 className="font-display text-lg font-semibold text-slate-850 flex items-center gap-2">
                  <User size={20} className="text-primary" />
                  Student Attendance
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[400px]">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/30">
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                        Student
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                        Batch
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                        Attendance
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {attendanceData.map((row) => (
                      <tr key={row.name} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-850">{row.name}</td>
                        <td className="px-6 py-4 text-slate-600">{row.batch}</td>
                        <td className="px-6 py-4 text-slate-600">
                          {row.present}/{row.total}
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            <CheckCircle size={12} />
                            Good
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Upcoming classes */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-display text-lg font-semibold text-slate-850 flex items-center gap-2">
                <Clock size={20} className="text-primary" />
                Upcoming Class Schedules
              </h2>
              <ul className="mt-4 space-y-3">
                {upcomingClasses.map((c) => (
                  <li
                    key={c.title}
                    className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/30 px-4 py-3 hover:bg-slate-50 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-slate-850">{c.title}</p>
                      <p className="text-sm text-slate-500">{c.batch} · {c.time}</p>
                    </div>
                    <ChevronRight size={20} className="text-slate-400" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
