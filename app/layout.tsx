import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
