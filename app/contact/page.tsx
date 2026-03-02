"use client";

import { useState } from "react";
import {
  MapPin,
  Send,
  CheckCircle,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react";

const BAND_OPTIONS = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    const preferredBand = data.get("preferredBand") as string;
    const message = (data.get("message") as string)?.trim();

    const next: Record<string, string> = {};
    if (!name) next.name = "Name is required.";
    if (!email) next.email = "Email is required.";
    if (!message) next.message = "Message is required.";
    setErrors(next);

    if (Object.keys(next).length > 0) return;

    setSubmitted(true);
    form.reset();
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-10">
          <h1 className="font-display text-4xl font-bold text-slate-850 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-600">
            Book a free demo, take a level test, or ask us anything. We typically respond within 24 hours.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left: Contact form */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/30 p-6 sm:p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={48} className="text-primary" />
                <h2 className="mt-4 font-display text-xl font-semibold text-slate-850">
                  Thank you!
                </h2>
                <p className="mt-2 text-slate-600">
                  We&apos;ve received your message and will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-750">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-850 placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-primary">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-750">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-850 placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-primary">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-750">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+92 300 1234567"
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-850 placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="preferredBand" className="block text-sm font-medium text-slate-750">
                    Preferred Band Score
                  </label>
                  <select
                    id="preferredBand"
                    name="preferredBand"
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-850 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  >
                    <option value="">Select target band</option>
                    {BAND_OPTIONS.map((band) => (
                      <option key={band} value={band}>
                        {band}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-750">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="I'd like to book a demo / take a level test / ask about..."
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-850 placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none resize-none"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-primary">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 font-semibold text-white hover:bg-primary-dark transition-colors"
                >
                  <Send size={18} />
                  Send message
                </button>
              </form>
            )}
          </div>

          {/* Right: Map placeholder, address, WhatsApp */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-100">
              <div className="aspect-[4/3] flex items-center justify-center bg-slate-200 text-slate-500">
                <div className="text-center p-6">
                  <MapPin size={48} className="mx-auto text-slate-400" />
                  <p className="mt-2 font-medium">Find us on Map</p>
                  <p className="text-sm">Google Maps placeholder — embed your map here</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
              <h3 className="font-display font-semibold text-slate-850 mb-4">
                Our Branches
              </h3>
              <div className="space-y-3 text-slate-600 text-sm">
                <p className="flex items-start gap-3">
                  <MapPin size={20} className="shrink-0 text-primary mt-0.5" />
                  <span>
                    <span className="font-semibold">Mardan Campus</span>
                    <br />
                    College Chowk, near Passport Office, Mardan
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <MapPin size={20} className="shrink-0 text-primary mt-0.5" />
                  <span>
                    <span className="font-semibold">Peshawar Campus</span>
                    <br />
                    Abdara Road, near Excel Learners Academy, Peshawar
                  </span>
                </p>
              </div>
              <p className="mt-3 flex items-center gap-3 text-slate-600">
                <Phone size={18} className="shrink-0 text-primary" />
                <a href="tel:+923078799996" className="hover:text-primary transition-colors">
                  +92 307 8799996
                </a>
              </p>
              <p className="mt-2 flex items-center gap-3 text-slate-600">
                <Mail size={18} className="shrink-0 text-primary" />
                <a href="mailto:info@safiielts.com" className="hover:text-primary transition-colors">
                  info@safiielts.com
                </a>
              </p>
            </div>
            <a
              href="https://wa.me/923078799996"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 font-semibold text-white hover:bg-green-700 transition-colors shadow-md"
            >
              <MessageCircle size={22} />
              WhatsApp quick link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
