import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Safi IELTS Studio | Top IELTS Training Academy",
  description:
    "Premium IELTS preparation with expert tutors. Achieve your target band score with our proven methods. Book a free demo or take a level test today.",
  openGraph: {
    title: "Safi IELTS Studio | Top IELTS Training Academy",
    description: "Premium IELTS preparation. 5000+ students. 8.5 average band score.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
        <Footer />
      </body>
    </html>
  );
}
