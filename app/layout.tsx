import type { Metadata } from "next";
import "./globals.css";
import { Fredoka, Lilita_One } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

// BODY FONT (default)
const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-sans",
});

// HEADING FONT
const lilita = Lilita_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Compass Experience — Find Your Direction",
  description:
    "A five-week discovery and apprenticeship program helping high school and university students explore who they are, what they love, and where they're headed.",
  keywords: [
    "internship",
    "students",
    "career discovery",
    "apprenticeship",
    "Ghana",
  ],
  openGraph: {
    title: "Compass Experience — Find Your Direction",
    description:
      "A five-week discovery and apprenticeship program helping young people find their direction through learning, experience, and reflection.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(fredoka.variable, lilita.variable)}>
      <body className="antialiased bg-white font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
