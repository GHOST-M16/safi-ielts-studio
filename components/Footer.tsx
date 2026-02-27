import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/success-gallery", label: "Success Gallery" },
  { href: "/calculator", label: "Calculator" },
  { href: "/portal", label: "Portal" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "#", icon: Facebook },
  { href: "#", icon: Instagram },
  { href: "#", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="font-display text-xl font-bold">
              Safi <span className="text-primary-light">IELTS</span> Studio
            </Link>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Your path to IELTS success. Expert training, proven results, and a
              community of achievers.
            </p>
            <div className="mt-4 flex gap-4">
              {socialLinks.map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/calculator" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Band Score Calculator
                </Link>
              </li>
              <li>
                <Link href="/contact#demo" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Book a Free Demo
                </Link>
              </li>
              <li>
                <Link href="/contact#level-test" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Take a Level Test
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary-light" />
                <span>123 Education Avenue, Knowledge Park, City</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="shrink-0 text-primary-light" />
                <a href="tel:+921234567890" className="hover:text-white transition-colors">
                  +92 123 4567890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="shrink-0 text-primary-light" />
                <a href="mailto:info@safiielts.com" className="hover:text-white transition-colors">
                  info@safiielts.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Safi IELTS Studio. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Designed for students who aim higher.
          </p>
        </div>
      </div>
    </footer>
  );
}
