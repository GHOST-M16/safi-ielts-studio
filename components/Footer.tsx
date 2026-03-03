import Link from "next/link";
import type { ComponentType } from "react";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/success-gallery", label: "Success Gallery" },
  { href: "/calculator", label: "Calculator" },
  { href: "/portal", label: "Portal" },
  { href: "/contact", label: "Contact" },
];

type IconProps = {
  size?: string | number;
};

type SocialLink = {
  href: string;
  label: string;
  icon: ComponentType<IconProps>;
};

function TikTokIcon({ size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="fill-current"
    >
      <path d="M16.5 4.5c.6 1.2 1.6 2.1 2.8 2.7.4.2.9.3 1.4.3V10c-.6 0-1.3-.1-1.9-.3-.7-.2-1.4-.5-2.1-.9v6.1c0 3-2.4 5.4-5.4 5.4S5 17.9 5 14.9 7.4 9.5 10.4 9.5c.4 0 .7 0 1.1.1v3.1c-.3-.1-.7-.2-1.1-.2-1.4 0-2.6 1.2-2.6 2.6s1.1 2.6 2.6 2.6 2.6-1.2 2.6-2.6V3h3.5v1.5z" />
    </svg>
  );
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.facebook.com/share/1E7EVsqGtB/?mibextid=wwXIfr",
    label: "Facebook",
    icon: Facebook,
  },
  {
    href: "https://www.instagram.com/safi_ielts_studio?igsh=NW1paWIzZmVka216&utm_source=qr",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://youtube.com/@faridsafi?feature=shared",
    label: "YouTube",
    icon: Youtube,
  },
  {
    href: "https://www.tiktok.com/@safiieltsstudioofficial?_r=1&_t=ZS-94M81ucTzpF",
    label: "TikTok",
    icon: TikTokIcon,
  },
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
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
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
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-primary-light"
                />
                <span>
                  <span className="font-semibold">Mardan Campus</span>
                  <br />
                  College Chowk, near Passport Office, Mardan
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-primary-light"
                />
                <span>
                  <span className="font-semibold">Peshawar Campus</span>
                  <br />
                  Abdara Road, near Excel Learners Academy, Peshawar
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="shrink-0 text-primary-light" />
                <a href="tel:+923078799996" className="hover:text-white transition-colors">
                  +92 307 8799996
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
