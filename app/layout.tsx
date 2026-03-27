import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siddhant Bali — Kintsugi Programmer",
  description:
    "Computer Science & Design Scholar at IIIT Delhi. Builder of web platforms, researcher in HCI & distributed systems, and open-source enthusiast.",
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
      "Computer Science & Design Scholar at IIIT Delhi. Builder of web platforms, researcher in HCI & distributed systems.",
    url: "https://kintsugi-programmer.github.io",
    siteName: "Siddhant Bali",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Siddhant Bali — Kintsugi Programmer",
    description: "CS & Design Scholar @ IIIT Delhi · Builder · Researcher",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
