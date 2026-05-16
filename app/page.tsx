"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ───────────────────────────── DATA ────────────────────────────── */

const SOCIAL = [
  {
    label: "GitHub",
    href: "https://github.com/kintsugi-programmer",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/siddhantbali",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "sbali.tech",
    href: "https://sbali.tech",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    label: "Blog",
    href: "https://www.linkedin.com/newsletters/coding-is-meditation-7435057733537722368/",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    label: "Codeforces",
    href: "https://codeforces.com/profile/kintsugi-programmer",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    label: "CV / Résumé",
    href: "https://drive.google.com/file/d/1yscf8O8ERbVmCnqiKwkJJrBYZ3do-Sor/view",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
];

const EXPERIENCE = [
  {
    period: "Mar 2026 – Present",
    title: "Chief Product Engineer",
    org: "Metagates Innovation Pvt. Ltd.",
    location: "South Delhi, Delhi, Full-time",
    link: "https://easeclaim.com",
    desc: "Leading product engineering for Healthcare Information Technology (HIT) solutions. Architecting enterprise-grade platforms and driving full-stack product development from design through deployment.",
  },
  {
    period: "Jan 2025 – Dec 2025",
    title: "Undergraduate Researcher",
    org: "MI Lab, IIIT Delhi (in collaboration with ICMR & AIIMS New Delhi)",
    location: "South Delhi, Delhi, Part-time",
    link: "https://drive.google.com/file/d/1xWXXTdRHHHUULKrngQsqZNJ4AdFiQBNE/view",
    linkLabel: "Research Presentation",
    desc: "Built FMT Hub, a cloud-based RBAC clinical data platform for access-controlled submissions, video uploads, multi-center validation across 6 hospitals, reducing bias and eliminating manual adjudication. Implemented anonymized center identifiers and automated email workflows using Google AppSheet to securely manage 800+ patient records.",
  },
  {
    period: "Apr 2024 – Jul 2025",
    title: "Web Developer & Part-Time Intern",
    location: "South Delhi, Delhi, Part-time",
    org: "IIIT Delhi — Multiple Departments",
    subItems: [
      { title: "IIC", link: "https://ecell.iiitd.edu.in/", expLetter: "https://drive.google.com/file/d/15J8h-KHd-D_vZ8FEkdgwQNcVEaaCNLBa/view", period: "Mar 2025 – Jul 2025" },
      { title: "Design Summer School", link: "https://dss2025.iiitd.edu.in/", expLetter: "https://drive.google.com/file/d/1ZBmdpn35tOQ6O-hA4DlZQFGS6P-6t2TZ/view", period: "Mar 2025 – Apr 2025" },
      { title: "1Pixel Design Conf.", link: "https://1pxdesignconf.iiitd.edu.in/", expLetter: "https://drive.google.com/file/d/1ZBmdpn35tOQ6O-hA4DlZQFGS6P-6t2TZ/view", period: "Dec 2024 – Jan 2025" },
      { title: "PerSIsst Lab", link: "https://persisst.iiitd.edu.in/", expLetter: "https://drive.google.com/file/d/1uVUchMiUUwhLph9rYhSjSyHx-VntRaQw/view", period: "Aug 2024 – Dec 2024" },
      { title: "HCD Dept.", link: "https://hcd.iiitd.ac.in/", expLetter: "https://drive.google.com/file/d/1ZBmdpn35tOQ6O-hA4DlZQFGS6P-6t2TZ/view", period: "Apr 2024 – Jul 2024" },
    ],
    desc: "Led end-to-end architecture and cloud deployment of 5 production-grade platforms, designing reusable component systems and structured full-stack infrastructure for institutional deployments. Optimized performance and SEO using Lighthouse-driven improvements (90+ scores), dynamic routing, asset optimization, and responsive design for cross-device reliability. Executed hardened backend services and engineered shell-based deployment automation scripts to standardize server updates and reduce manual configuration errors.",
  },
  {
    period: "Nov 2024 – Jan 2025",
    title: "Web Developer",
    org: "C S Bhatiya & Associates",
    
    link: "https://www.csbhatiya.com",
    expLetter: "https://drive.google.com/file/d/1ERZEwunqZLcGdk9Fz-A9g0KW0qIyfU5l/view",
    location: "Pune, Maharashtra, Part-time",
    desc: "Led development and deployment of a high-performance, SEO-optimized website, achieving 90+ Lighthouse scores through performance optimization, DNS configuration, mail service integration and security patching.",
  },
];

const PROJECTS = [
  {
    title: "Osho's Ashtavakra Gita Project",
    desc: "A structured, AI-ready dataset of Ashtavakra Gita teachings based on the discourses of Osho. Features sentence-aware chunking, Hindi discourse processing, bilingual translation pipeline, and semantic search with RAG capabilities.",
    tags: ["Python", "NLP", "JSON", "Kaggle", "Semantic Search", "RAG"],
    link: "https://oshogita.sbali.tech",
    links: [
      { label: "Live", href: "https://oshogita.sbali.tech" },
      { label: "Kaggle Dataset", href: "https://www.kaggle.com/datasets/siddhantbaliwork/osho-ashtavakra-gita-nlp-dataset" },
      { label: "Source Code", href: "https://github.com/kintsugi-programmer/osho-ashtavakra-gita-db" },
    ],
  },
  {
    title: "TelemetryTradeAI",
    desc: "AI-powered crypto intelligence platform featuring a streaming RAG chatbot, real-time market data integration and OCR-based portfolio analysis.",
    tags: ["Bun", "Next.js", "TailwindCSS", "ShadCN", "Clerk", "Groq AI", "CoinGecko API", "Tesseract.js"],
    link: "https://telemetry.sbali.tech/",
    links: [
      { label: "Production", href: "https://telemetry.sbali.tech/" },
      { label: "Source Code", href: "https://github.com/kintsugi-programmer/TelemetryTrade" },
      { label: "Demo Video", href: "https://www.youtube.com/watch?v=Va5wmX31pqA" },
      { label: "Press Coverage", href: "https://www.youtube.com/watch?v=SA6GP3SVA-0" },
    ],
    recognition: ["IIITD", "IGDTUW", "Mercedes Benz"],
    award: "Top 100 Products in India under Delhi SYF 2026 · Awarded INR 1,00,000 by Hon'ble Chief Minister of Delhi",
  },
  {
    title: "LifeLore",
    desc: "Community-driven platform for user-generated posts, discussions, and tag-based content discovery with secure authentication and modular UI systems.",
    tags: ["Next.js", "MongoDB", "NextAuth", "TailwindCSS", "ShadCN"],
    link: "https://lifelore.sbali.tech/",
    links: [
      { label: "Production", href: "https://lifelore.sbali.tech/" },
      { label: "Source Code", href: "https://github.com/kintsugi-programmer/lifelore" },
      { label: "Demo Video", href: "https://www.youtube.com/watch?v=11zYdMHxLr8" },
    ],
  },
  {
    title: "कर्मOS — Distraction-Free LMS Platform",
    desc: "Learning Management System designed for focused, deep work and structured learning paths.",
    tags: ["Next.js", "Tailwind CSS", "LMS"],
    link: "https://karmos.vercel.app/",
  },
  {
    title: "DecoyNet — LoFi Honeypots for Web Security",
    desc: "Honeypot network with BreachBot — a system for logging and analyzing unauthorized intrusion attempts.",
    tags: ["Security", "Python", "Networking"],
    link: "https://github.com/kintsugi-programmer/DecoyNet",
  },
  {
    title: "QalaKriti — E-Commerce Platform",
    desc: "Full-stack e-commerce platform with MySQL advanced database management and relational schema design.",
    tags: ["MySQL", "Full Stack", "DBMS"],
    link: "https://github.com/kintsugi-programmer/Qalakriti-Ecommerce-DBMS",
  },
  {
    title: "Yarnsugi — Dev Utilities",
    desc: "Collection of developer scripts, Linux utilities, and shell automation tools.",
    tags: ["Bash", "Linux", "Scripting"],
    link: "https://github.com/kintsugi-programmer/Yarnsugi",
  },
];

const VIDEOS = [
  {
    title: "The \"Digital Ultron\" Story No One Confirmed | Claude Mythos & Glasswing | Unfiltered | English",
    src: "https://www.youtube.com/embed/oiAAvy0s5qs?si=4CUhUMRtx3k1Ks8",
  },
  {
    title: "How to Have Great Project Ideas as a Developer | Unfiltered | Hinglish",
    src: "https://www.youtube.com/embed/ynHBEfSPngo?feature=oembed",
  },
  {
    title: "Most Engineers Don’t Actually Love Coding | Unfiltered | Hinglish",
    src: "https://www.youtube.com/embed/NamdV-85tvw?feature=oembed",
  },
];

const WRITING = [
  { date: "May 3, 2026", title: "The \"Digital Ultron\" Story No One Confirmed", href: "https://www.linkedin.com/pulse/digital-ultron-story-one-confirmed-siddhant-bali-8vyqc/" },
  { date: "Mar 15, 2026", title: "How to Have Great Project Ideas as a Developer (Realistic Guide for 2026)", href: "https://www.linkedin.com/pulse/how-have-great-project-ideas-developer-realistic-guide-siddhant-bali-bv6vc/" },
  { date: "Mar 5, 2026", title: "Most Engineers Don't Actually Love Coding", href: "https://www.linkedin.com/pulse/why-most-engineers-dont-actually-love-coding-siddhant-bali-woipc/" },
  { date: "Jan 8, 2026", title: "CVE-2025-37164: A Critical Vulnerability That Should Never Exist", href: "https://codingismeditation.hashnode.dev/cve-2025-37164-a-critical-vulnerability-that-should-never-exist" },
  { date: "Jun 23, 2025", title: "Offline LLMs in Linux | Ollama on Linux | Easy Setup Guide", href: "https://codingismeditation.hashnode.dev/llm-ollama" },
  { date: "Sep 8, 2024", title: "Creating a Multi-Bootable USB Drive with Ventoy on Linux", href: "https://codingismeditation.hashnode.dev/ventoy" },
  { date: "Jul 29, 2024", title: "Building Low-Interaction Honeypots for Web Security", href: "https://codingismeditation.hashnode.dev/building-low-interaction-honeypots-for-web-security" },
  { date: "Jul 29, 2024", title: "Patterns", href: "https://codingismeditation.hashnode.dev/patterns" },
  { date: "May 22, 2024", title: "Compiling and Installing a Custom Kernel on Arch Linux", href: "https://www.linkedin.com/pulse/compiling-installing-custom-kernel-arch-linux-siddhant-bali-mkh5e/" },
  { date: "May 19, 2024", title: "The Ultimate PC Emergency Toolkit — MediCat USB Guide", href: "https://www.linkedin.com/pulse/ultimate-pc-emg-toolkit-kit-medicat-usb-siddhant-bali-efumc/" },
  { date: "May 18, 2024", title: "Comprehensive Guide to Booting Artix on a UEFI-Enabled Virtual Machine", href: "https://www.linkedin.com/pulse/comprehensive-guide-booting-artix-uefi-enabled-virtual-siddhant-bali-u8jcc/" },
  { date: "May 10, 2024", title: "Ani-CLI — A Command-Line Interface for Anime Enthusiasts", href: "https://www.linkedin.com/pulse/ani-cli-command-line-interface-anime-enthusiasts-siddhant-bali-13bzc/" },
  { date: "May 10, 2024", title: "TLDR — Say Goodbye to Confusing Man Pages", href: "https://www.linkedin.com/pulse/tldr-say-goodbye-confusing-man-pages-siddhant-bali-8wedc/" },
  { date: "May 10, 2024", title: "Let's Do Design Thinking — An Interactive Guide", href: "https://design-thinking-kds.my.canva.site/" },
  { date: "May 10, 2024", title: "Top Portfolio Picks — Researcher's Edition", href: "https://design-thinking-kds.my.canva.site/portfolio-researcher" },
];

const CLIENTS = [
  { name: "AIIMS Delhi & ICMR", href: "https://www.aiims.edu/" },
  { name: "MI Lab, IIIT Delhi", href: "https://iiitd.ac.in" },
  { name: "IIIT Delhi — HCD Dept.", href: "https://hcd.iiitd.ac.in/" },
  { name: "1Px Design Conference", href: "https://1pxdesignconf.iiitd.edu.in/" },
  { name: "PerSIsst Lab, IIITD", href: "https://persisst.iiitd.edu.in/" },
  { name: "IIC, IIIT Delhi", href: "https://ecell.iiitd.edu.in/" },
  { name: "C.S. Bhatiya & Associates", href: "https://csbhatiya.com/" },
  { name: "Design Summer School 2025", href: "https://dss2025.iiitd.edu.in/" },
];

const NAV = [
  { label: "About", href: "#about" },
  { label: "Articles", href: "#articles" },
  { label: "Videos", href: "#videos" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Newsletter", href: "#newsletter" },
  { label: "Connect", href: "#connect" },
];

/* ─────────────────────── COMPONENTS ────────────────────────────── */

function ExternalIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", marginLeft: 3 }}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function SectionWrapper({ id, children }: { id: string; children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <section id={id} ref={ref} className="section-fade" style={{ paddingTop: "4rem", paddingBottom: "2rem" }}>
      {children}
    </section>
  );
}

/* ──────────────────────── PAGE ─────────────────────────────────── */

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* ── Navbar ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          background: "rgba(250,250,247,0.92)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--border)",
          height: 52,
          display: "flex",
          alignItems: "center",
          padding: "0 1.25rem",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "1.0625rem",
              fontStyle: "italic",
              color: "var(--text-primary)",
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Siddhant Bali
          </a>

          {/* Desktop nav */}
          <div style={{ display: "flex", gap: "1.75rem", alignItems: "center" }} className="desktop-nav">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className="nav-link">{n.label}</a>
            ))}
          </div>

          {/* Hamburger */}
          <button
            id="hamburger-btn"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              color: "var(--text-primary)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen
                ? <><path d="M18 6 6 18"/><path d="m6 6 12 12"/></>
                : <><path d="M4 12h16"/><path d="M4 6h16"/><path d="M4 18h16"/></>
              }
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV.map((n) => (
          <a key={n.label} href={n.href} className="nav-link" onClick={() => setMenuOpen(false)}
            style={{ fontSize: "0.9375rem" }}>
            {n.label}
          </a>
        ))}
      </div>

      {/* ── Main ── */}
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "0 1.25rem", paddingTop: 52 }}>

        {/* ─── Hero ─── */}
        <section
          id="about"
          style={{
            paddingTop: "4.5rem",
            paddingBottom: "3rem",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.72rem",
                color: "var(--text-muted)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Chief Product Engineer @ Metagates Innovation · IIIT Delhi CSD'26 · Dean's List
            </p>

            <h1
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(2rem, 5vw, 2.75rem)",
                lineHeight: 1.15,
                color: "var(--text-primary)",
                marginBottom: "1rem",
                letterSpacing: "-0.02em",
              }}
            >
              Siddhant Bali
            </h1>

            <p
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontStyle: "italic",
                fontSize: "1.0625rem",
                color: "var(--accent-hover)",
                marginBottom: "1.25rem",
                lineHeight: 1.5,
              }}
            >
              chief product engineer · polymath developer · building HealthTech SaaS.
            </p>

            <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "0.9rem", maxWidth: 540 }}>
              Product Engineer with 3+ years building scalable systems.{" "}
              <strong>Chief Product Engineer at{" "}
              <a href="https://easeclaim.com" target="_blank" rel="noopener noreferrer" className="underline-hover">Metagates Innovation</a></strong>,
              architecting HealthTech SaaS platforms, ABDM API integrations, and clinical systems for enterprise deployment.
              Previously built production-grade platforms for{" "}
              <a href="https://www.aiims.edu/" target="_blank" rel="noopener noreferrer" className="underline-hover">AIIMS Delhi</a>,{" "}
              <a href="https://hcd.iiitd.ac.in/" target="_blank" rel="noopener noreferrer" className="underline-hover">IIIT Delhi</a> {" "}

               and research labs.  <a href="http://delhistartupyuvafestival.in" target="_blank" rel="noopener noreferrer" className="underline-hover">Top 100 Startups at DSYF 2026</a>.{" "}

              
            </p>

            <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.75rem", maxWidth: 540 }}>
              B.Tech in Computer Science & Design at IIIT Delhi (Class of 2026). 
              I enjoy building technology that becomes infrastructure, not just applications.
            </p>

            {/* Social buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  id={`social-${s.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Profile picture */}
          <div
            style={{
              width: 112,
              height: 112,
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid var(--border)",
              flexShrink: 0,
              marginTop: "1.5rem",
            }}
          >
            <Image
              src="/profile.webp"
              alt="Siddhant Bali"
              width={112}
              height={112}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </section>

        <hr />

        {/* ─── Articles ─── */}
        <SectionWrapper id="articles">
          <h2 className="section-heading">Articles</h2>
          <p className="section-sub">Thoughts on engineering, security, Linux, and the craft of building software.</p>
          <div>
            {[...WRITING].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((w, i) => (
              <a
                key={i}
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
                className="entry"
                style={{
                  display: "grid",
                  gridTemplateColumns: "5.5rem 1fr",
                  gap: "0.75rem",
                  padding: "0.65rem 0.75rem",
                  borderRadius: "4px",
                  textDecoration: "none",
                  transition: "background 0.2s, box-shadow 0.2s",
                  marginBottom: "1px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--surface)";
                  e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.68rem",
                    color: "var(--text-muted)",
                    paddingTop: "2px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {w.date}
                </span>
                <span
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--text-primary)",
                    lineHeight: 1.5,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--link)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-primary)"; }}
                >
                  {w.title}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", marginLeft: 4, opacity: 0.4, verticalAlign: "middle" }}>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </SectionWrapper>

        <hr />

        {/* ─── Videos ─── */}
        <SectionWrapper id="videos">
          <h2 className="section-heading">Videos</h2>
          <p className="section-sub">Unfiltered thoughts on software engineering and career.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {VIDEOS.map((v, i) => (
              <div key={i} className="video-card">
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                  <iframe src={v.src} title={v.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}></iframe>
                </div>
                <div style={{ padding: "1rem" }}>
                  <h3 style={{ fontSize: "0.9375rem", color: "var(--text-primary)", fontWeight: 500, lineHeight: 1.4 }}>{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <hr />

        {/* ─── Clients strip ─── */}
        <div style={{ padding: "1.5rem 0", display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginRight: "0.25rem" }}>Clients &amp; Labs</span>
          {CLIENTS.map((c) => (
            <a key={c.name} href={c.href} target="_blank" rel="noopener noreferrer" className="tag">{c.name}</a>
          ))}
        </div>

        <hr />

        {/* ─── Experience ─── */}
        <SectionWrapper id="experience">
          <h2 className="section-heading">Experience</h2>
          <p className="section-sub">Research labs, startups, and institutions I've worked with.</p>
          <div>
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="exp-row">
                <div className="exp-period">{exp.period}</div>
                <div className="exp-body">
                  <div className="exp-title">
                    {exp.title}
                    {exp.link && (
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.8rem", color: "var(--link)", marginLeft: "0.5rem" }}>
                        <ExternalIcon />
                      </a>
                    )}
                  </div>
                  <div className="exp-org">
                    {exp.org}
                    {exp.linkLabel && (
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="tag" style={{ marginLeft: "0.5rem", borderColor: "var(--accent)", color: "var(--accent)", background: "var(--accent-light)" }}>
                        {exp.linkLabel}
                      </a>
                    )}
                    {exp.expLetter && (
                      <a href={exp.expLetter} target="_blank" rel="noopener noreferrer" className="tag" style={{ marginLeft: "0.5rem", borderColor: "var(--accent)", color: "var(--accent)", background: "var(--accent-light)" }}>
                        Exp. Letter
                      </a>
                    )}
                    {exp.location && (
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}> · <span className="">{exp.location}</span></span>
                    )}
                  </div>
                  {exp.subItems && (
                    <div style={{ marginBottom: "0.5rem", marginTop: "0.25rem", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                      {exp.subItems.map((sub, j) => (
                        <div key={j} style={{ display: "flex", alignItems: "center", gap: "0.35rem", flexWrap: "wrap" }}>
                          <span style={{ color: "var(--text-primary)", fontSize: "0.8125rem" }}>{sub.title}</span>
                          {sub.link && (
                            <a href={sub.link} target="_blank" rel="noopener noreferrer" className="tag" style={{ borderColor: "var(--accent)", color: "var(--accent)", background: "var(--accent-light)" }}>
                              Production
                            </a>
                          )}
                          {sub.expLetter && (
                            <a href={sub.expLetter} target="_blank" rel="noopener noreferrer" className="tag" style={{ borderColor: "var(--accent)", color: "var(--accent)", background: "var(--accent-light)" }}>
                              Exp. Letter
                            </a>
                          )}
                          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "var(--text-muted)" }}>{sub.period}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="exp-desc">{exp.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <hr />

        {/* ─── Skills ─── */}
        <SectionWrapper id="skills">
          <h2 className="section-heading">Technical Skills</h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            <div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Languages</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginTop: "0.5rem" }}>
                {["Rust", "Python", "SQL", "C++", "Bash"].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
            <div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Frameworks</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginTop: "0.5rem" }}>
                {["Bun", "Next.js", "React", "Flask", "Material-UI", "FastAPI", "ShadCN", "TailwindCSS"].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
            <div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Developer Tools</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginTop: "0.5rem" }}>
                {["Git", "GitHub", "GitLab", "Linux", "Vercel", "Postman", "Google Cloud Platform", "Google AppSheet", "VS Code", "Visual Studio", "PyCharm", "IntelliJ", "Clerk", "MongoDB Atlas", "Supabase"].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </div>
        </SectionWrapper>

        <hr />

        {/* ─── Projects ─── */}
        <SectionWrapper id="projects">
          <h2 className="section-heading">Hobby Projects</h2>
          <p className="section-sub">Things I've built — shipped, open, and experimental.</p>
          <div>
            {PROJECTS.map((p, i) => (
              <div key={i} className="project-card">
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: 600, fontSize: "0.9375rem", color: "var(--text-primary)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--link)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  >
                    {p.title}
                    <ExternalIcon />
                  </a>
                </div>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "0.4rem" }}>{p.desc}</p>
                {p.links && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.4rem" }}>
                    {p.links.map((l) => (
                      <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.75rem", color: "var(--link)", textDecoration: "none" }}>
                        {l.label} <ExternalIcon />
                      </a>
                    ))}
                  </div>
                )}
                {p.recognition && (
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                    Recognized by: {p.recognition.join(" · ")}
                  </div>
                )}
                {p.award && (
                  <div style={{ fontSize: "0.75rem", color: "var(--accent)", fontWeight: 500, marginBottom: "0.4rem" }}>
                    {p.award}
                  </div>
                )}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "1.25rem" }}>
            <a href="https://github.com/kintsugi-programmer" target="_blank" rel="noopener noreferrer" className="social-btn" id="view-all-projects">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              All Projects on GitHub
            </a>
          </div>
        </SectionWrapper>

        <hr />

        {/* ─── Newsletter ─── */}
        <SectionWrapper id="newsletter">
          <h2 className="section-heading">Coding-Is-Meditation Newsletter</h2>
          <p className="section-sub" style={{ fontSize: "1rem", color: "var(--text-primary)", fontWeight: 500, marginBottom: "0.75rem" }}>
            Read by Thousands of Engineers
          </p>
          <p className="section-sub">
            Weekly essays on real-world system design, distributed systems, or a deep dive into some super-clever algorithm. A newsletter to help software engineers become better engineers and grow faster in their careers.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <a
              href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7435057733537722368"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              style={{ padding: "0.75rem 1.5rem", fontSize: "0.9375rem" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Subscribe to Newsletter
            </a>
          </div>
        </SectionWrapper>

        <hr />

        {/* ─── Connect ─── */}
        <SectionWrapper id="connect">
          <h2 className="section-heading">Connect</h2>
          <p className="section-sub">Find me across the internet, or reach out directly.</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
              <a href="mailto:siddhant.bali.work@gmail.com" className="underline-hover" style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                siddhant.bali.work@gmail.com
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href="tel:+918076218828" className="underline-hover" style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                +91 80762 18828
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <a href="https://sbali.tech" target="_blank" rel="noopener noreferrer" className="underline-hover" style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                sbali.tech
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>New Delhi, India</span>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {SOCIAL.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-btn"
                id={`connect-${s.label.toLowerCase().replace(/\s/g, "-")}`}>
                {s.icon}
                {s.label}
              </a>
            ))}
          </div>
        </SectionWrapper>

        {/* ─── Footer ─── */}
        <footer
          style={{
            borderTop: "1px solid var(--border)",
            padding: "2rem 0",
            marginTop: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "var(--text-muted)" }}>
            © 2026 Siddhant Bali{" "}
            <span style={{ margin: "0 0.4rem", opacity: 0.4 }}>·</span>
            <span style={{ fontStyle: "italic" }}>✱ kintsugi programmer</span>
          </span>
          <div style={{ display: "flex", gap: "1.25rem" }}>
            <a href="https://github.com/kintsugi-programmer" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
            <a href="https://www.linkedin.com/in/siddhantbali" target="_blank" rel="noopener noreferrer" className="nav-link">LinkedIn</a>
            <a href="https://sbali.tech" target="_blank" rel="noopener noreferrer" className="nav-link">sbali.tech</a>
          </div>
        </footer>
      </main>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 600px) {
          #hero-grid { grid-template-columns: 1fr !important; }
          #photo-monogram { display: none !important; }
          #hamburger-btn { display: block !important; }
          .desktop-nav { display: none !important; }
        }
        @media (min-width: 601px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </div>
  );
}
