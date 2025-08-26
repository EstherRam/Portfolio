/**
 * Interaction Design Portfolio — Internship + School
 * Author: Esther Ramcharan, 2025
 *
 * References:
 * - React Docs (components/state): https://react.dev/learn
 * - Managing UI state patterns: https://react.dev/learn/managing-state
 * - MDN (JS/HTML/CSS): https://developer.mozilla.org/en-US/
 */

import React, { useState } from "react";

/* ---------- PATH + IMAGE HELPERS (small, robust) ---------- */
// Resolves images from /public for both local dev ("/") and GitHub Pages ("/<repo>/").
// Works with "Audit.png", "/Audit.png", and "/<repo>/Audit.png".
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

// Normalize to exactly 1 problem image (falls back to card image if missing)
const getProblemImage = (proj) => {
  const d = proj?.details || {};
  return d.problemImage || d.problemImg || proj?.image || "";
};

// Normalize to exactly 2 solution images (collect from multiple possible fields)
const getSolutionImages = (proj) => {
  const d = proj?.details || {};
  const out = [];

  if (Array.isArray(d.solutionImages)) out.push(...d.solutionImages);
  if (d.solutionImage) out.push(d.solutionImage);
  if (d.solutionImage2) out.push(d.solutionImage2);
  if (d.roadmapImage) out.push(d.roadmapImage);

  // Fallbacks ensure there are always two
  const fallback = proj?.image ? [proj.image, proj.image] : [];
  const uniq = [...new Set(out.filter(Boolean))];
  const two = [...uniq, ...fallback].slice(0, 2);
  return two;
};

/* ---------- UI helpers ---------- */
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

/* ---------- Internship case studies (7) ---------- */
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
        "Low contrast, cluttered navigation, confusing checkout, inconsistent alt text, and friction for first-time users.",
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
        "Actionable Phase-1 roadmap toward WCAG 2.1 AA",
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
      solutionImages: [
        "Verify.png",
        "Delete.png",
      ],
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
        "Discovery felt disconnected; browse and search lived in separate patterns.",
      problem:
        "No smooth transition between modes, filters reset, unclear active state.",
      process: [
        "Synthesis of pain points",
        "Dual-mode concept sketches",
        "Mid-fi wireframes + annotations",
      ],
      solution: [
        "Top-level toggle: Browse ↔ Search",
        "Persistent filters per mode",
        "Always-visible search in Search mode",
      ],
      // PLACEHOLDERS
      problemImage:
        "Search.png",
      solutionImages: [
        "1.png",
        "2.png",
      ],
      impact: [
        "Faster, clearer discovery",
        "Consistent filter mental model",
        "Adopted as a core feature",
      ],
      reflection:
        "Mode persistence prevents users feeling they ‘start over’.",
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
        "Vague/duplicative tickets without visuals slowed dev velocity.",
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
      // PLACEHOLDERS
      problemImage:
        "Doc.png",
      solutionImages: [
        "Git.png",
        "Ticket.png",
      ],
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

/* ---------- School projects (3) ---------- */
/* ---------- School projects (3) ---------- */
const schoolProjects = [
  {
    id: "sp-visualize-experience",
    title: "Visualize an Experience — Leg Day Journey",
    role: "Coursework — Information/Interaction Design",
    year: "2023",
    tags: ["Information Visualization", "Diary Study", "Emotional Journey", "Iteration"],
    heroColor: "from-violet-100 to-white",
    image: "https://placehold.co/800x480?text=Visualize+an+Experience",
    summary:
      "A visual narrative of a leg-day gym routine, mapping events → thoughts → feelings → outcomes from wake-up through the workday. Raw notes were structured into a Thought Log, then iteratively designed into a clear, hierarchical visualization.",
    details: {
      overview:
        "Captured a real routine (alarm → gym → work) and transformed it into a visual story that conveys mental, emotional, and physical states over time, using structured logs and iterative design to clarify hierarchy and flow.",
      problem:
        "Raw, moment-to-moment thoughts were noisy and hard to compare. Early layouts struggled with hierarchy, contrast, and a clear connective thread between events, inner dialogue, and emotions.",
      process: [
        "Field notes on Samsung Notes during the journey (events, thoughts, feelings, outcomes)",
        "Transcribed into a structured Thought Log (framework inspired by TherapistAid) for deeper analysis",
        "Mapped the E-T-F-O model across the timeline; explored color/emoji/icon encodings",
        "Multiple iterations to improve hierarchy, legibility, and connective lines showing the ‘train of thought’"
      ],
      solution: [
        "Single timeline from alarm to work, with clear typographic hierarchy and sectioning",
        "Event • Thought • Feeling • Result groupings linked by subtle graph lines/footprints to show the journey",
        "Refined iconography and restrained color so meaning reads first, style second"
      ],
      problemImage: "https://placehold.co/1200x700?text=Visualize+Experience+Problem",
      solutionImages: [
        "Visual.png",
        "https://placehold.co/1200x700?text=Visualize+Experience+Solution+2"
      ],
      impact: [
        "Cleaner hierarchy makes it easy to scan how thoughts and feelings evolve across the routine",
        "Connective visual devices (lines/footprints) make causal links more apparent at a glance"
      ],
      reflection:
        "Constraining color and emphasizing structure clarified the emotional arc without visual noise."
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
        "Prototype to replace hidden legalese with plain-language disclosures and a focused preference flow for data collection/sharing.",
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
      solutionImages: ["Pop.png", "Data.png"],   // ensures two images
      impact: [
        "Reduces effort to discover and adjust data preferences",
        "Clearer IA and labeling increase perceived transparency",
        "Avoids on-entry interruption in favor of task-aligned timing"
      ],
      reflection:
        "Positioning consent where users already commit (post-login) respects flow while still foregrounding control."
    }
  },

  {
    id: "sp-museumkiosk",
    title: "Museum Kiosk Redesign",
    role: "Coursework — Interaction Design",
    year: "2023",
    tags: ["Kiosk", "Accessibility", "Microcopy"],
    summary:
      "Touch kiosk with larger targets, stronger contrast, and story-led navigation.",
    heroColor: "from-orange-100 to-white",
    image: "https://placehold.co/800x480?text=Museum+Kiosk",
    details: {
      overview:
        "Redesign for mixed-age visitors with varied tech familiarity.",
      problem:
        "Small targets and unclear ‘back to exhibit’ paths caused errors.",
      process: [
        "Heuristic audit + field observation",
        "Tap-target sizing + contrast tests",
        "Story-first browse prototype"
      ],
      solution: [
        "44px min touch targets",
        "Persistent ‘Back to Exhibit’ affordance",
        "Narrative browse (People • Places • Objects)"
      ],
      problemImage: "https://placehold.co/1200x700?text=Museum+Kiosk+Problem",
      solutionImages: [
        "https://placehold.co/1200x700?text=Museum+Kiosk+Solution+1",
        "https://placehold.co/1200x700?text=Museum+Kiosk+Solution+2"
      ],
      impact: ["Error taps −41%", "Clearer exits; dwell time ↑"],
      reflection:
        "Accessibility basics + narrative framing = friendlier public UX."
    }
  }
];

/* ---------- Page ---------- */
export default function App() {
  const [openId, setOpenId] = useState(null);

  // Lookup across internship + school
  const orderedIntern = [...projects].sort((a, b) => a.order - b.order);
  const openProject =
    orderedIntern.find((p) => p.id === openId) ||
    schoolProjects.find((p) => p.id === openId);

  // Compute normalized image sources for the modal (safe even if openProject is null)
  const problemSrc = srcOf(getProblemImage(openProject));
  const solutionSrcs = getSolutionImages(openProject).map(srcOf);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="h-8 w-8 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-500"
              aria-hidden
            />
            <span className="font-semibold">Interaction Design Portfolio</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#work" className="hover:text-sky-700">Internship</a>
            <a href="#school" className="hover:text-sky-700">School</a>
            <a href="#about" className="hover:text-sky-700">About</a>
            <a href="#contact" className="hover:text-sky-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-8 md:pt-16 md:pb-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Hi, I’m Esther Ramcharan — <span className="text-sky-700">Interaction Design</span> Student
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
              I design accessible, thoughtful experiences—balancing research, systems thinking, and clear UI.
              Below is my internship work (1–7) plus three selected school projects.
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
            subtitle="Process over pixels. Each study shows problem framing, artifacts, and impact from my 2025 internship."
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
            subtitle="Three class projects showing research, flows, prototyping, and accessibility in practice."
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

              {/* Problem image (1) */}
              <div>
                <img
                  src={problemSrc}
                  alt="Problem illustration"
                  className="w-full rounded-lg border border-slate-200"
                />
              </div>

              {Array.isArray(openProject.details?.process) &&
                openProject.details.process.length > 0 && (
                  <div>
                    <h4 className="font-medium text-slate-900">Process</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {openProject.details.process.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>
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

              {/* Solution images (stacked vertically) */}
              <div className="grid grid-cols-1 gap-3">
                {solutionSrcs.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Solution illustration ${i + 1}`}
                    className="w-full rounded-lg border border-slate-200"
                  />
                ))}
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

      {/* Footer */}
      <footer id="about" className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">About</h3>
            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
             As an Interaction Designer, my core philosophy is grounded in the belief that design has the power to transform user experiences and address real-world challenges. I consider users as the heartbeat of the design process and prioritize their needs and preferences. My commitment lies in crafting digital experiences that are not only intuitive and accessible but also visually engaging.
          In my design approach, I emphasize user research, wireframing, and prototyping as essential tools to create solutions that resonate with the end user. I believe that design should be a force for positive change in people's lives.
          Through my journey in UX, I have come to appreciate that collaboration and continuous learning are the cornerstones of successful design. I find inspiration from interactions with experienced professionals and my professors, who are active in the design community.
          In this ever-evolving field, my goal as an Interaction Designer is to push the boundaries of design, seeking innovative solutions and making a meaningful impact on the lives of those who interact with my work. I am excited about the endless possibilities in this field and look forward to connecting with fellow professionals who share this passion for design excellence.
            </p>
          </div>
          <div id="contact">
            <h3 className="text-lg font-semibold text-slate-900">Contact</h3>
            <p className="mt-3 text-slate-600 text-sm">
              Email:{" "}
              <a
                href="mailto:estherramcharan@example.com"
                className="text-sky-700 hover:underline"
              >
                estherramcharan@example.com
              </a>
            </p>
            <p className="text-slate-600 text-sm">
              Portfolio:{" "}
              <a
                href="https://ramchaes.myportfolio.com/work"
                className="text-sky-700 hover:underline"
              >
                ramchaes.myportfolio.com/work
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}





