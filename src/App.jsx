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
      "Full WCAG + heuristic audit with annotated screenshots and a prioritized roadmap for CMPA’s site.",
    role: "UX Research & Interaction Design",
    year: "2025",
    tags: ["WCAG 2.1", "Heuristics", "Annotated Screens", "Report"],
    heroColor: "from-sky-100 to-white",
    image: "Audit.png",
    details: {
      overview:
        "CMPA is a hub for magazine, books, and digital resources. The audit ensured the site is welcoming and usable for all visitors.",
      problem:
        "Low contrast, cluttered navigation, confusing checkout, inconsistent alt text, and friction for first-time users.",
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
      impact: [
        "Actionable Phase-1 roadmap toward WCAG 2.1 AA",
        "Reduced friction in checkout",
        "Clear baseline for future redesign",
      ],
      reflection:
        "Combining WCAG + heuristics with visual annotations accelerated decisions.",
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
    image: "https://placehold.co/800x480?text=User+Verification+Flows",
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
    id: "renew-subscription",
    order: 3,
    title: "Renew — Subscription Flow",
    summary:
      "Audit & redesign of subscription journeys to improve clarity and reduce friction in sign-up and tier management.",
    role: "Product Design",
    year: "2025",
    tags: ["User Journeys", "Content Design", "Wireframes"],
    heroColor: "from-pink-100 to-white",
    image: "https://placehold.co/800x480?text=Subscription+Flow",
    details: {
      overview:
        "Mapped current journeys and simplified language, steps, and feedback states.",
      problem:
        "Ambiguous steps and labels increased drop-off in sign-up and tier changes.",
      process: [
        "Journey mapping + copy audit",
        "Competitor patterns review",
        "Mid-fi wireframes and states",
      ],
      solution: [
        "Clearer plan naming + benefits",
        "Reduced steps; inline validation",
        "Status confirmation and next steps",
      ],
      impact: [
        "Lower cognitive load",
        "Higher completion likelihood",
        "Fewer support questions",
      ],
      reflection:
        "Microcopy and fewer choices often outperform big UI shifts.",
    },
  },
  {
    id: "browse-search",
    order: 4,
    title: "Browse & Search Redesign",
    summary:
      "Dual-mode toggle for discovery with persistent filters, faster search, and streamlined browsing.",
    role: "UX Design",
    year: "2025",
    tags: ["Wireframes", "Interaction Design", "Filtering"],
    heroColor: "from-green-100 to-white",
    image: "https://placehold.co/800x480?text=Browse+%26+Search",
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
    id: "media-player",
    order: 5,
    title: "Placeholder",
    summary:
      "Placeholder.",
    role: "UX/UI Design",
    year: "2025",
    tags: ["Player UI", "Wireframes", "Usability Fixes"],
    heroColor: "from-yellow-100 to-white",
    image: "https://placehold.co/800x480?text=Media+Player",
    details: {
       overview:
        "placeholder.",
      problem:
        "placeholder.",
      process: [
        "placeholder",
        "placeholder",
        "placeholder",
      ],
      solution: [
        "placeholder",
        "placeholder",
        "placeholder",
      ],
      impact: [
        "placeholder",
        "placeholder",
        "placeholder",
      ],
      reflection:
        "placeholder",
    },
  },
  {
    id: "mobile-web",
    order: 6,
    title: "Placeholder",
    summary:
      "Placeholder",
    role: "Interaction Design",
    year: "2025",
    tags: ["placeholder", "placeholder", "placeholder"],
    heroColor: "from-purple-100 to-white",
    image: "https://placehold.co/800x480?text=Mobile+to+Web",
    details: {
      overview:
        "placeholder.",
      problem:
        "placeholder.",
      process: [
        "placeholder",
        "placeholder",
        "placeholder",
      ],
      solution: [
        "placeholder",
        "placeholder",
        "placeholder",
      ],
      impact: [
        "placeholder",
        "placeholder",
        "placeholder",
      ],
      reflection:
        "placeholder",
    },
  },
  {
    id: "ticket-system",
    order: 7,
    title: "Service Ticket System UX",
    summary:
      "Created/maintained 30+ tickets with visuals and steps-to-reproduce; merged duplicates and clarified scope.",
    role: "UX Documentation",
    year: "2025",
    tags: ["Tickets", "Annotations", "Dev Handoff"],
    heroColor: "from-red-100 to-white",
    image: "https://placehold.co/800x480?text=Tickets+%26+Annotations",
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
const schoolProjects = [
  {
    id: "sp-wayfinding",
    title: "Wayfinding App Concept",
    role: "Coursework — Interaction Design",
    year: "2024",
    tags: ["Mobile", "Mapping", "Usability Testing"],
    summary:
      "Campus wayfinding with landmark-based steps and accessible routing to reduce decision friction.",
    heroColor: "from-violet-100 to-white",
    image: "https://placehold.co/800x480?text=Wayfinding+App",
    details: {
      overview:
        "Studio brief: navigation tool for new students emphasizing clarity and low cognitive load.",
      problem:
        "Precise maps aren’t always friendly for on-foot, first-week navigation.",
      process: [
        "Intercept interviews + journey mapping",
        "Paper → mid-fi wireframes; 2 usability rounds",
        "IA tuned for single-path clarity",
      ],
      solution: [
        "‘Next Landmark’ guidance vs dense map labels",
        "Accessible routes toggle + contrast checks",
        "Context chips (restrooms, elevators, help desks)",
      ],
      impact: ["Task success +27%", "Time-on-task −18%"],
      reflection:
        "Chunking information and anxiety-aware copy improved confidence.",
    },
  },
  {
    id: "sp-mealplanner",
    title: "Campus Meal Planner",
    role: "Coursework — Service/UX",
    year: "2024",
    tags: ["Flows", "Content Design", "Prototyping"],
    summary:
      "Weekly planner balancing cost, nutrition, and cafeteria stock to cut waste and choice fatigue.",
    heroColor: "from-lime-100 to-white",
    image: "https://placehold.co/800x480?text=Meal+Planner",
    details: {
      overview:
        "Helps students plan affordable meals using real cafeteria menus and stock.",
      problem:
        "Over-spend + repetitive choices; staff struggled with forecasting.",
      process: [
        "1-week diary study on constraints",
        "‘Plan in 2 minutes’ flow",
        "Mid-fi prototype with copy-first content",
      ],
      solution: [
        "One-tap weekly template + smart swaps",
        "Budget/nutrition badges at list level",
        "Out-of-stock warnings from staff inputs",
      ],
      impact: ["84% planned in <3 min", "Predicted 6–10% waste reduction"],
      reflection:
        "Defaults + badges often shift behavior more than heavy analytics.",
    },
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
        "Story-first browse prototype",
      ],
      solution: [
        "44px min touch targets",
        "Persistent ‘Back to Exhibit’ affordance",
        "Narrative browse (People • Places • Objects)",
      ],
      impact: ["Error taps −41%", "Clearer exits; dwell time ↑"],
      reflection:
        "Accessibility basics + narrative framing = friendlier public UX.",
    },
  },
];

/* ---------- Page ---------- */
export default function App() {
  const [openId, setOpenId] = useState(null);

  // Lookup across internship + school
  const orderedIntern = [...projects].sort((a, b) => a.order - b.order);
  const openProject =
    orderedIntern.find((p) => p.id === openId) ||
    schoolProjects.find((p) => p.id === openId);

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
                  src={p.image}
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
                  src={p.image}
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
                  src={openProject.image}
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
              I’m Esther Ramcharan, an Interaction Design student at Sheridan.
              My internship focused on accessibility audits, ticket workflows,
              and app UX improvements for Renew and CMPA. I balance research,
              documentation, and visual design to create accessible, thoughtful experiences.
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

