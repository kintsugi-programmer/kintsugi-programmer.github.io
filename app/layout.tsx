import type { Metadata } from "next";
import { DM_Serif_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Siddhant Bali — Kintsugi Programmer",
  description:
    "Chief Product Engineer @ Metagates Innovation. Building HealthTech SaaS, ABDM-integrated platforms, and clinical systems. IIIT Delhi CSD'26, Dean's List.",
  keywords: [
    "Siddhant Bali",
    "kintsugi-programmer",
    "IIIT Delhi",
    "CSD",
    "Portfolio",
    "HCI",
    "Web Developer",
    "Computer Science",
  ],
  authors: [{ name: "Siddhant Bali" }],
  openGraph: {
    title: "Siddhant Bali — Kintsugi Programmer",
    description:
      "Chief Product Engineer @ Metagates Innovation. Building HealthTech SaaS, ABDM-integrated platforms, and clinical systems. IIIT Delhi CSD'26.",
    url: "https://kintsugi-programmer.github.io",
    siteName: "Siddhant Bali",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Siddhant Bali — Kintsugi Programmer",
    description: "Chief Product Engineer · HealthTech · IIIT Delhi CSD'26",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
