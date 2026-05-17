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

const siteUrl = "https://kintsugi-programmer.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Siddhant Bali — Kintsugi Programmer",
    template: "%s — Kintsugi Programmer",
  },
  description:
    "Chief Product Engineer @ Metagates Innovation. Building HealthTech SaaS platforms, ABDM-integrated clinical systems, and scalable web infrastructure. IIIT Delhi CSD'26, Dean's List.",
  keywords: [
    "Siddhant Bali",
    "kintsugi-programmer",
    "IIIT Delhi",
    "CSD",
    "Computer Science and Design",
    "Chief Product Engineer",
    "Metagates Innovation",
    "HealthTech",
    "ABDM",
    "Ayushman Bharat",
    "Full-Stack Developer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Rust",
    "Python",
    "Software Engineer",
    "Portfolio",
    "HCI",
    "Human-Computer Interaction",
    "New Delhi",
    "India",
    "Startup",
    "SaaS",
    "Product Engineer",
    "TelemetryTradeAI",
    "Crypto Intelligence",
    "Deans List",
    "Top 100 Products",
    "Delhi SYF",
  ],
  authors: [{ name: "Siddhant Bali", url: siteUrl }],
  creator: "Siddhant Bali",
  publisher: "Siddhant Bali",
  openGraph: {
    title: "Siddhant Bali — Kintsugi Programmer",
    description:
      "Chief Product Engineer @ Metagates Innovation. Building HealthTech SaaS platforms, ABDM-integrated clinical systems, and scalable web infrastructure. IIIT Delhi CSD'26, Dean's List.",
    url: siteUrl,
    siteName: "Siddhant Bali",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Siddhant Bali — Kintsugi Programmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddhant Bali — Kintsugi Programmer",
    description: "Chief Product Engineer · HealthTech · IIIT Delhi CSD'26",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Siddhant Bali",
      givenName: "Siddhant",
      familyName: "Bali",
      alternateName: "kintsugi-programmer",
      jobTitle: "Chief Product Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Metagates Innovation",
        url: "https://easeclaim.com",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "IIIT Delhi",
        url: "https://iiitd.ac.in",
      },
      url: siteUrl,
      image: `${siteUrl}/profile.webp`,
      sameAs: [
        "https://github.com/kintsugi-programmer",
        "https://www.linkedin.com/in/siddhantbali",
        "https://sbali.tech",
      ],
      knowsAbout: [
        "HealthTech",
        "ABDM",
        "Full-Stack Development",
        "Next.js",
        "React",
        "TypeScript",
        "Rust",
        "Python",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Siddhant Bali — Kintsugi Programmer",
      description:
        "Chief Product Engineer @ Metagates Innovation. Building HealthTech SaaS, ABDM-integrated platforms, and clinical systems.",
      publisher: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
