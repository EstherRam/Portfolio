/**
 * Interaction Design Portfolio
 * Author: Esther Ramcharan, 2025
 *
 * References:
 * - React Docs (components/state): https://react.dev/learn
 * - Managing UI state patterns: https://react.dev/learn/managing-state
 * - MDN (JS/HTML/CSS): https://developer.mozilla.org/en-US/
 */

import React, { useState } from "react";

const srcOf = (p) => {
  if (!p) return "";
  if (/^https?:\/\//i.test(p)) return p; // external URL
  const base = import.meta.env.BASE_URL || "/"; // "/" locally, "/<repo>/" on GH Pages
  const seg = base.replace(/^\/|\/$/g, "");     // "repo" or ""
  let cleaned = String(p).replace(/^\/+/, "");  // drop leading "/"
  if (seg && cleaned.toLowerCase().startsWith(seg.toLowerCase() + "/")) {
    cleaned = cleaned.slice(seg.length + 1);    // avoid double /repo/
  }
  if (!seg && cleaned.toLowerCase().startsWith("portfolio/")) {
    cleaned = cleaned.slice("portfolio/".length); // tolerate "/Portfolio/..."
  }
  return base + cleaned;
};

const getProblemImage = (proj) => {
  const d = proj?.details || {};
  // If the project explicitly opts out of problem image (e.g., to show Purpose instead), return empty
  if (d.noProblemImage || d.purpose) return "";
  return d.problemImage || d.problemImg || proj?.image || "";
};

const getSolutionImages = (proj) => {
  const d = proj?.details || {};
  const out = [];

  if (Array.isArray(d.solutionImages)) out.push(...d.solutionImages);
  if (d.solutionImage) out.push(d.solutionImage);
  if (d.solutionImage2) out.push(d.solutionImage2);
  if (d.roadmapImage) out.push(d.roadmapImage);

  const uniq = [...new Set(out.filter(Boolean))];

  // ❗ School projects (ids start with "sp-") should NOT be padded to two images.
  if (String(proj?.id || "").startsWith("sp-")) {
    return uniq.slice(0, 2);
  }

  // Fallbacks ensure there are always two (only for internship projects)
  const fallback = proj?.image ? [proj.image, proj.image] : [];
  const two = [...uniq, ...fallback].slice(0, 2);
  return two;
};

const getProcessImages = (proj) => {
  const d = proj?.details || {};
  const arr = Array.isArray(d.processImages) ? d.processImages.filter(Boolean) : [];
  const cap = proj?.id === "sp-documentary" ? 3 : 2; // keep up to 3 for Mindful Strides
  return arr.slice(0, cap);
};

const RESUME_FILE = "Esther_Ramcharan_Resume_2025.pdf";

const Tag = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium text-slate-700 border-slate-200 bg-white/70">
    {children}
  </span>
);

const SectionTitle = ({ kicker, title, subtitle }) => (
  <div className="max-w-3xl">
    {kicker && (
      <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">
        {kicker}
      </p>
    )}
    <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-2 text-slate-600 leading-relaxed">{subtitle}</p>
    )}
  </div>
);

/* ---------- Internship case studies (4) ---------- */
const projects = [
  {
    id: "cmpa-audit",
    order: 1,
    title: "CMPA Website Accessibility Audit",
    summary:
      "Full WCAG + heuristic audit with annotated screenshots, wireframed solutions, and a prioritized roadmap for CMPA’s site.",
    role: "UX Research & Interaction Design",
    year: "2025",
    tags: ["WCAG 2.1", "Heuristics", "Annotated Screens", "Wireframes", "Report"],
    heroColor: "from-sky-100 to-white",
    image: "/Portfolio/Audit.png",
    details: {
      overview:
        "The CMPA website is essential for community members but had accessibility and usability issues that made navigation and checkout difficult, especially for older users.",
      problem:
        "Low contrast, cluttered navigation, confusing checkout, inconsistent alt text, and lack of onboarding and overall friction for first-time users.",
      problemImage: "Audit1.png",
      process: [
        "Defined scope: Homepage, Magazine, Library, Checkout",
        "WCAG 2.1 review with annotated screenshots",
        "Heuristic evaluation (Nielsen’s 10) with severity ratings",
      ],
      solution: [
        "Increase contrast in nav and banners",
        "Simplify checkout steps and labels",
        "Repair/add alt text, improve layout for readability",
      ],
      solutionImages: ["Solution.png", "Roadmap.png"],
      impact: [
        "Actionable Phase-1 roadmap toward WCAG 2.1 Compliance",
        "Reduced friction in checkout",
        "Clear baseline for future redesign",
      ],
      reflection:
        "Combining WCAG + heuristics with visual annotations and wireframes solutions allowed for a realistic guide for how to improve the accessibility of main website.",
    },
  },
  {
    id: "renew-verification",
    order: 2,
    title: "Renew App — User Verification Proposal",
    summary:
      "Hybrid verification model balancing inclusivity, security, and scalability for the Renew community.",
    role: "Interaction Design",
    year: "2025",
    tags: ["Onboarding", "Security vs UX", "Flows", "Wireframes"],
    heroColor: "from-indigo-100 to-white",
    image: "/Portfolio/Renew.png",
    details: {
      overview:
        "Designed a verification approach that protects content while keeping onboarding welcoming.",
      problem:
        "Invite-only too restrictive; loose verification risks misuse and licensing issues.",
      process: [
        "Compared models; created evaluation matrix",
        "Designed flows/wireframes for each method",
        "Drafted proposal with recommendation",
      ],
      solution: [
        "Primary: referral link",
        "Fallback: hymn book challenge",
        "Exception: manual email verification",
        "Delete path to ensure app abides by Apple and Google Play Guidlines",
      ],
      solutionImages: ["Verify.png", "Delete.png"],
      impact: [
        "Resolved debates on strict vs open",
        "Scalable, low-overhead model",
        "Aligned with licensing requirements",
      ],
      reflection:
        "Treating trust as a UX flow (not just a gate) improved inclusivity and control.",
    },
  },
  {
    id: "browse-search",
    order: 3,
    title: "Browse & Search Redesign",
    summary:
      "Dual-mode toggle for discovery with persistent filters, faster search, and streamlined browsing.",
    role: "UX Design",
    year: "2025",
    tags: ["Wireframes", "Interaction Design", "Filtering"],
    heroColor: "from-green-100 to-white",
    image: "/Portfolio/S:B.png",
    details: {
      overview:
        "Discovery felt disconnected and was incomplete; browse and search lived in separate patterns.",
      problem:
        "No smooth transition between modes, filters reset, unclear active state, and disatisfied stakeholder.",
      process: [
        "Assessments of pain points and outline doc of expectations provided by stakeholders",
        "Dual-mode concept sketches",
        "Mid-fi wireframes + annotations",
      ],
      solution: [
        "Top-level toggle: Browse ↔ Search",
        "Persistent filters per mode",
        "Always-visible search in Search mode",
      ],
      problemImage: "Search.png",
      solutionImages: ["1.png", "2.png"],
      impact: [
        "Faster, clearer discovery",
        "Consistent filter mental model",
        "Adopted as a core feature",
      ],
      reflection:
        "Mode persistence prevents users feeling they ‘start over and a small toggle design change simplifies discovery’.",
    },
  },
  {
    id: "ticket-system",
    order: 4,
    title: "Service Ticket System UX",
    summary:
      "Created/maintained 30+ tickets with visuals and steps-to-reproduce; merged duplicates and clarified scope.",
    role: "UX Documentation",
    year: "2025",
    tags: ["Tickets", "Annotations", "Dev Handoff"],
    heroColor: "from-red-100 to-white",
    image: "/Portfolio/Tickets.png",
    details: {
      overview:
        "Tickets bridged UX findings and implementation with evidence and clarity.",
      problem:
        "Vague/duplicated tickets without visuals slowed dev progress.",
      process: [
        "Systematic testing + captures",
        "Structured issues with labels/platform notes",
        "Linked/merged related items",
      ],
      solution: [
        "Issue template enforcing clarity",
        "Visual evidence + expected behaviors",
        "Consolidated backlog",
      ],
      problemImage: "Doc.png",
      solutionImages: ["Git.png", "Ticket.png"],
      impact: [
        "Reduced ambiguity and duplication",
        "Faster fixes with traceability",
        "Cleaner backlog for planning",
      ],
      reflection:
        "Good documentation is a UX artifact that moves teams.",
    },
  },
];

/* ---------- School projects (3 + final) ---------- */
const schoolProjects = [
  {
    id: "sp-visualize-experience",
    title: "Visualize an Experience — Leg Day Journey",
    role: "Coursework — Information/Interaction Design",
    year: "2023",
    tags: ["Information Visualization", "Diary Study", "Emotional Journey", "Iteration"],
    heroColor: "from-violet-100 to-white",
    image: "/Portfolio/DP.png",
    summary:
      "A visual narrative of a leg-day gym routine, mapping events → thoughts → feelings → outcomes from wake-up through the workday. Raw notes were structured into a Thought Log, then iteratively designed into a clear visualization, with heirarchy.",
    details: {
      overview:
        "Captured a real routine (alarm → gym → work) and transformed it into a visual story that conveys mental, emotional, and physical states over time, using structured logs and iterative design to clarify hierarchy and flow.",
      problem:
        "Raw, moment-to-moment thoughts were noisy and hard to compare. Early layouts struggled with hierarchy, contrast, and a clear connective thread between events, inner dialogue, and emotions.",
      process: [
        "Field notes on Samsung Notes during the journey (events, thoughts, feelings, outcomes)",
        "Transcribed into a structured Thought Log (framework inspired by TherapistAid) for deeper analysis",
        "Used Kevin Lynches method of paths, edges, districts, and notes across the timeline",
        "Applied roadmapping (how and why) and timelining (what, when, and where)",
        "Multiple iterations to improve hierarchy, legibility, and connective lines showing the ‘train of thought’"
      ],
      solution: [
        "Single timeline from alarm to work, with clear typographic hierarchy and sectioning",
        "Event • Thought • Feeling • Result groupings linked by subtle graph lines/footprints to show the journey",
        "Refined iconography and restrained colour so meaning reads first, style second"
      ],
      problemImage: "No.png",
      solutionImages: ["Visual.png"], // ← only one solution image; no fallback now for school projects
      impact: [
        "Cleaner hierarchy makes it easy to scan how thoughts and feelings evolve across the routine",
        "Connective visual devices (lines/footprints) make causal links more apparent at a glance"
      ],
      reflection:
        "Constraining colour and emphasizing structure clarified the emotional arc without visual noise."
    }
  },

  /* ====== #2: VIMEO DATA TRANSPARENCY ====== */
  {
    id: "sp-vimeo-transparency",
    title: "Vimeo Data Transparency Prototype",
    role: "Coursework — Service/UX",
    year: "2024",
    tags: ["Data Transparency", "Dark Patterns", "Privacy UX", "Prototype"],
    heroColor: "from-cyan-100 to-white",
    image: "Data.png",
    summary:
      "Vimeo was selected after finding a data-transparency dark pattern: privacy details are hard to discover—tucked under a low-contrast footer Legal tab—unlike clearer patterns on other services. The project proposes a more user-friendly way to see and control what’s collected and how it’s used.",
    details: {
      overview:
        "Prototype to replace hidden information with easily seen plain-language disclosures and a focused preference flow for data collection/sharing.",
      problem:
        "Key privacy info is not obvious—hidden under a footer ‘Legal’ tab with subdued styling—creating a transparency dark pattern.",
      process: [
        "POEMS analysis of Vimeo’s data touchpoints and messaging",
        "Five Human Factors framing (physical/cognitive/social/cultural/emotional)",
        "Competitive/heuristic pass on transparency patterns",
        "Low→mid→high fidelity wireframes; feedback-driven revisions"
      ],
      solution: [
        "Show a Data Collection Preferences dialog after login/sign-up is submitted, with a clear notice describing defaults if no choice is made.",
        "Use plain-language ‘we collect’ / ‘we share’ summaries with learn-more links.",
        "Improve discoverability of privacy controls from main settings and footer."
      ],
      problemImage: "Missing.png",
      solutionImages: ["Pop.png", "Data.png"],   // ensures two images for this project if provided
      impact: [
        "Reduces effort to discover and adjust data preferences",
        "Clearer access and labeling increase perceived transparency",
        "Avoids on-entry interruption in favor of task-aligned timing"
      ],
      reflection:
        "Positioning consent where users already commit (post-login) respects flow while still highlighting control."
    }
  },

 {
  id: "aac-app",
  title: "AAC Communication App",
  role: "UX & Interaction Design — Internship Project",
  year: "2025",
  tags: ["Accessibility", "Inclusive Design", "User Research", "Prototyping"],
  heroColor: "from-blue-100 to-white",
  image: "/Portfolio/AACHero.png",
  summary:
    "An accessible communication app designed for adults using augmentative and alternative communication (AAC), prioritizing clarity, speed, and emergency access.",
  details: {
    overview:
      "The app provides a high-contrast, easy-to-navigate interface to help adult AAC users communicate effectively, including quick-access emergency messaging.",
    purpose:
      "Design an accessible AAC app that allows adults to communicate efficiently, confidently, and safely in everyday and urgent situations.",
    noProblemImage: false,
    problem:
      "Adult AAC users often face challenges with small buttons, low-contrast interfaces, and slow access to urgent messages, limiting their ability to communicate quickly and safely.",
    process: [
      "User research: interviews with adult AAC users and accessibility benchmarking.",
      "Mapped core user flows: creating messages, navigating boards, and emergency access.",
      "Wireframing and low-fidelity prototyping to optimize button sizes, contrast, and layout.",
      "Iterative testing to validate clarity, speed, and usability of emergency functions."
    ],
    processImages: ["AAC_Research.png", "AAC_Wireframes.png", "AAC_Flow.png"],
    solution: [
      "High-contrast design for readability and visual clarity.",
      "Simplified interface with large buttons optimized for adult users.",
      "Direct emergency access with preset messages for rapid communication."
    ],
    solutionImages: ["AAC_HighFi1.png"]
  }
}

];

/* ---------- Page ---------- */
export default function App() {
  const [openId, setOpenId] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Lookup across internship + school
  const orderedIntern = [...projects].sort((a, b) => a.order - b.order);
  const openProject =
    orderedIntern.find((p) => p.id === openId) ||
    schoolProjects.find((p) => p.id === openId);

  // Compute normalized image/video sources for the modal
  const problemSrc = srcOf(getProblemImage(openProject));
  const solutionSrcs = getSolutionImages(openProject).map(srcOf);
  const processSrcs = getProcessImages(openProject).map(srcOf);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-semibold">IXD Portfolio</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#work" className="hover:text-sky-700">Internship</a>
            <a href="#school" className="hover:text-sky-700">School</a>
            <a href="#about" className="hover:text-sky-700">About</a>
            <a href="#contact" className="hover:text-sky-700">Contact</a>
            {/* Resume trigger */}
            <button
              onClick={() => setResumeOpen(true)}
              className="hover:text-sky-700"
            >
              Resume
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-8 md:pt-16 md:pb-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Hi, I’m Esther Ramcharan — <span className="text-sky-700">a Juniour Interaction Designer</span>
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Who’s obsessed with making digital experiences feel natural, inclusive, and just… human. I love digging into accessibility, thinking about how people of all abilities actually use technology, and designing with empathy at every step.
            </p>
          </div>
        </div>
      </section>

      <main id="main">
        {/* Internship Section (cards with images) */}
        <section id="work" className="mx-auto max-w-6xl px-4 pt-6 pb-16">
          <SectionTitle
            kicker="Selected Work"
            title="Internship Case Studies"
            subtitle="Each study shows problem framing, artifacts, and impact from my 2025 internship."
          />
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {orderedIntern.map((p) => (
              <article
                key={p.id}
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition"
              >
                <img
                  src={srcOf(p.image)}
                  alt={p.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{p.role}</span>
                    <time>{p.year}</time>
                  </div>
                  <h3 className="mt-2 text-lg font-medium text-slate-900">
                    {p.order}. {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                    {p.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                  <button
                    onClick={() => setOpenId(p.id)}
                    className="mt-4 w-full rounded-xl bg-slate-900 text-white py-2 text-sm hover:bg-slate-800"
                  >
                    View case study
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* School Projects */}
        <section id="school" className="mx-auto max-w-6xl px-4 pt-0 pb-16">
          <SectionTitle
            kicker="Coursework"
            title="School Projects"
            subtitle="Class projects showing research, flows, prototyping, and accessibility in practice."
          />
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {schoolProjects.map((p) => (
              <article
                key={p.id}
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition cursor-pointer"
              >
                <img
                  src={srcOf(p.image)}
                  alt={p.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{p.role}</span>
                    <time>{p.year}</time>
                  </div>
                  <h3 className="mt-2 text-lg font-medium text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                    {p.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                  <button
                    onClick={() => setOpenId(p.id)}
                    className="mt-4 w-full rounded-xl bg-slate-900 text-white py-2 text-sm hover:bg-slate-800"
                  >
                    View project
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Modal (for both internship & school) */}
      {openProject && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-6"
          onClick={() => setOpenId(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenId(null)}
              className="absolute top-3 right-3 rounded-full p-2 hover:bg-slate-100"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Header */}
            <div className="flex items-start gap-4">
              {openProject.image && (
                <img
                  src={srcOf(openProject.image)}
                  alt={openProject.title}
                  className="w-28 h-20 object-cover rounded-lg border border-slate-200"
                />
              )}
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {"order" in openProject && openProject.order
                    ? `${openProject.order}. `
                    : ""}
                  {openProject.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {openProject.role} · {openProject.year}
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="mt-6 space-y-6 text-sm text-slate-700">
              {openProject.details?.overview && (
                <div>
                  <h4 className="font-medium text-slate-900">Overview</h4>
                  <p>{openProject.details.overview}</p>
                </div>
              )}

              {openProject.details?.problem && (
                <div>
                  <h4 className="font-medium text-slate-900">Problem</h4>
                  <p>{openProject.details.problem}</p>
                </div>
              )}

              {/* Optional Purpose (shown for projects that define it) */}
              {openProject.details?.purpose && (
                <div>
                  <h4 className="font-medium text-slate-900">Purpose</h4>
                  <p>{openProject.details.purpose}</p>
                </div>
              )}

              {/* Problem image (1) — only if provided */}
              {problemSrc && (
                <div>
                  <img
                    src={problemSrc}
                    alt="Problem illustration"
                    className="w-full rounded-lg border border-slate-200"
                  />
                </div>
              )}

              {Array.isArray(openProject.details?.process) &&
                openProject.details.process.length > 0 && (
                  <div>
                    <h4 className="font-medium text-slate-900">Process</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {openProject.details.process.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>

                    {/* Optional Process images (up to 2; 3 for final project) */}
                    {processSrcs.length > 0 && (
                      <div
                        className={`grid grid-cols-1 md:grid-cols-2 gap-3 mt-3`}
                      >
                        {processSrcs.map((src, i) => (
                          <img
                            key={i}
                            src={src}
                            alt={`Process illustration ${i + 1}`}
                            className="w-full h-64 object-cover rounded-lg border border-slate-200"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}

              {Array.isArray(openProject.details?.solution) &&
                openProject.details.solution.length > 0 && (
                  <div>
                    <h4 className="font-medium text-slate-900">Solution</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {openProject.details.solution.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Solution media (image(s) or video) — vertical stack; video full-width 16:9 */}
              <div className="grid grid-cols-1 gap-3">
                {(() => {
                  const items = solutionSrcs; // already through srcOf
                  const first = items[0] || "";
                  const isMp4 = /\.mp4(\?.*)?$/i.test(first);
                  const yt = first.match(
                    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/))([A-Za-z0-9_-]{11})/
                  );
                  const vimeo = first.match(/vimeo\.com\/(?:video\/)?(\d+)/);
                  const drive = first.match(/drive\.google\.com\/file\/d\/([^/]+)/);

                  // If the first entry is a video link, render ONLY that video — full width, 16:9
                  if (yt) {
                    const id = yt[1];
                    return (
                      <iframe
                        className="w-full rounded-lg border border-slate-200"
                        style={{ aspectRatio: "16 / 9" }}
                        src={`https://www.youtube-nocookie.com/embed/${id}`}
                        title="Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    );
                  }
                  if (vimeo) {
                    const id = vimeo[1];
                    return (
                      <iframe
                        className="w-full rounded-lg border border-slate-200"
                        style={{ aspectRatio: "16 / 9" }}
                        src={`https://player.vimeo.com/video/${id}`}
                        title="Vimeo video"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      />
                    );
                  }
                  if (drive) {
                    const id = drive[1];
                    return (
                      <iframe
                        className="w-full rounded-lg border border-slate-200"
                        style={{ aspectRatio: "16 / 9" }}
                        src={`https://drive.google.com/file/d/${id}/preview`}
                        title="Drive video"
                        allow="autoplay"
                      />
                    );
                  }
                  if (isMp4) {
                    return (
                      <video
                        controls
                        className="w-full rounded-lg border border-slate-200"
                        style={{ aspectRatio: "16 / 9" }}
                      >
                        <source src={first} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    );
                  }

                  // Otherwise, render up to 2 images — stacked vertically (no fixed height)
                  return items.slice(0, 2).map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Solution illustration ${i + 1}`}
                      className="w-full rounded-lg border border-slate-200"
                    />
                  ));
                })()}
              </div>

              {Array.isArray(openProject.details?.impact) &&
                openProject.details.impact.length > 0 && (
                  <div>
                    <h4 className="font-medium text-slate-900">Impact</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {openProject.details.impact.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                )}

              {openProject.details?.reflection && (
                <div>
                  <h4 className="font-medium text-slate-900">Reflection</h4>
                  <p>{openProject.details.reflection}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Resume Modal */}
      {resumeOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-6"
          onClick={() => setResumeOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-4xl w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setResumeOpen(false)}
              className="absolute top-3 right-3 rounded-full p-2 hover:bg-slate-100"
              aria-label="Close resume viewer"
            >
              ✕
            </button>

            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900">Resume</h3>
              <div className="flex items-center gap-2">
                <a
                  href={srcOf(RESUME_FILE)}
                  target="_blank"
                  rel="noopener"
                  className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm hover:bg-slate-50"
                >
                  Open in new tab
                </a>
                <a
                  href={srcOf(RESUME_FILE)}
                  download
                  className="rounded-lg bg-slate-900 text-white px-3 py-1.5 text-sm hover:bg-slate-800"
                >
                  Download PDF
                </a>
              </div>
            </div>

            <div className="w-full h-[80vh] rounded-lg border border-slate-200 overflow-hidden">
              <object
                data={srcOf(RESUME_FILE)}
                type="application/pdf"
                className="w-full h-full"
              >
                {/* Fallback for browsers that don't preview PDFs inline */}
                <iframe
                  src={srcOf(RESUME_FILE)}
                  title="Resume PDF"
                  className="w-full h-full"
                />
              </object>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="about" className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">About</h3>
            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
              I’m an Interaction Designer who loves turning real-world challenges into thoughtful, human-centered experiences. Users are always at the heart of my work, and I’m passionate about crafting digital experiences that are intuitive, accessible, and even a little delightful. I rely on research, wireframes, and prototypes to guide my designs, but I’ve learned that collaboration, curiosity, and empathy are just as important as any tool. For me, design isn’t just about screens, it’s about making experiences that work for everyone.
            </p>
          </div>
          <div id="contact">
            <h3 className="text-lg font-semibold text-slate-900">Contact</h3>
            <p className="mt-3 text-slate-600 text-sm">
              Email:{" "}
              <a
                href="mailto:ramchaes@sheridancollege.ca"
                className="text-sky-700 hover:underline"
              >
                ramchaes@sheridancollege.ca
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}









