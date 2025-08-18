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

/* ---------- Internship case studies (ordered 1–7) ---------- */
const projects = [
  {
    order: 1,
    id: "cmpa-audit",
    title: "CMPA Accessibility Audit",
    role: "UX Research & Interaction Design (Intern)",
    year: "2025",
    tags: ["WCAG 2.1", "Heuristics", "Annotated Screens", "Report"],
    summary:
      "Full WCAG + heuristic audit with annotated screenshots and a prioritized roadmap for CMPA’s site.",
    heroColor: "from-sky-100 to-white",
    details: {
      overview:
        "CMPA is a key hub for magazine, books, and digital resources. The audit ensured the site is welcoming and usable for all visitors, including those with disabilities.",
      problem:
        "Low contrast, cluttered/keyboard-incomplete navigation, confusing checkout, inconsistent alt text, and friction for first-time users.",
      process: [
        "Defined scope: Homepage, Magazine, Digital Library, Checkout",
        "WCAG 2.1 review with annotated screenshots (e.g., SC 1.4.3 contrast)",
        "Heuristic evaluation (Nielsen’s 10) with severity ratings",
        "Linked each issue to standards; compiled report + deck for stakeholders",
      ],
      solution: [
        "Increase contrast in global nav and banners",
        "Simplify checkout into fewer, clearer steps",
        "Repair/author alt text; adjust layout for readability",
      ],
      impact: [
        "Actionable Phase-1 roadmap toward WCAG 2.1 AA",
        "Reduced friction in high-value flows (e.g., checkout)",
        "Clear, professional baseline for future redesign",
      ],
      reflection:
        "Pairing WCAG with heuristics, plus visual communication (annotations), made decisions faster and clearer.",
    },
  },
  {
    order: 2,
    id: "renew-phase1",
    title: "Renew App — Phase 1 Feedback Deliverables",
    role: "UX / Accessibility (Intern)",
    year: "2025",
    tags: ["Mobile UX", "Wireframes", "Flows", "Contrast"],
    summary:
      "Usability + accessibility evaluation for Renew with annotated screenshots, wireframes, and a Phase-1 report.",
    heroColor: "from-indigo-100 to-white",
    details: {
      overview:
        "Renew brings Christadelphian music, podcasts, and audiobooks into one app. Phase 1 focused on surfacing UX gaps before new features.",
      problem:
        "Inconsistent nav, contrast failures, unclear flows (Bible nav, What’s On, Faith Alive), and uneven playback visibility.",
      process: [
        "Heuristic evaluation across navigation, playback, discovery",
        "WCAG 2.1 checks (contrast, keyboard, resizing)",
        "User-flow mapping for Bible nav / What’s On / filters",
        "Wireframes: Search/Browse toggle, simplified Bible flow, mini player",
        "Phase-1 audit report + presentation deck",
      ],
      solution: [
        "Dual-mode discovery (Search/Browse) with clear active states",
        "Contrast and scaling guidance for readability",
        "Player visibility patterns across content types",
      ],
      impact: [
        "Dev-ready documentation reduced ambiguity",
        "Search/Browse toggle adopted as a core feature",
        "Smoother flows and stronger accessibility baseline",
      ],
      reflection:
        "Turning findings into developer-friendly artifacts (flows/wireframes) is what moves teams quickly.",
    },
  },
  {
    order: 3,
    id: "tickets",
    title: "Ticket Creation & Management",
    role: "UX Documentation (Intern)",
    year: "2025",
    tags: ["GitHub Issues", "Annotations", "Wireframes", "Process"],
    summary:
      "Created/maintained 30+ structured tickets with visuals and steps-to-reproduce to bridge design ↔ dev.",
    heroColor: "from-emerald-100 to-white",
    details: {
      overview:
        "Tickets were the bridge between UX findings and implementation for Renew’s active development.",
      problem:
        "Early issues were vague/duplicative and lacked visuals or platform specificity.",
      process: [
        "Systematic app testing; captured screenshots/recordings",
        "Structured GitHub issues with labels, platform notes, STR",
        "Annotated screenshots and wireframes where design changes were needed",
        "Linked/merged related tickets; tracked status and dependencies",
      ],
      solution: [
        "Issue template that enforced clarity and scope",
        "Visual evidence + dev notes on expected behaviors",
        "Merging duplicates (e.g., ‘Up Next’ vs ‘Continue’)",
      ],
      impact: [
        "Reduced ambiguity and duplication",
        "Higher dev velocity via precise specs",
        "Cleaner backlog with traceable decisions",
      ],
      reflection:
        "Precision and visuals turn tickets into mini design specs the whole team can act on.",
    },
  },
  {
    order: 4,
    id: "verification-proposal",
    title: "Verification Proposal (Appendix 2)",
    role: "UX Strategy & Flows (Intern)",
    year: "2025",
    tags: ["Onboarding", "Security vs UX", "Flows", "Wireframes"],
    summary:
      "Proposed a hybrid verification model balancing inclusivity, security, and scalability for the Renew community.",
    heroColor: "from-amber-100 to-white",
    details: {
      overview:
        "Ensured only genuine community members access Renew while keeping onboarding welcoming and scalable.",
      problem:
        "Invite-only too restrictive; loose verification risked misuse and licensing issues.",
      process: [
        "Researched comparable apps and community models",
        "Defined evaluation matrix (inclusivity, security, ease, scale)",
        "Designed flows + wireframes for each method",
        "Drafted proposal recommending a hybrid approach",
      ],
      solution: [
        "Primary: referral link",
        "Fallback: hymn book challenge (knowledge-based)",
        "Exception: manual email verification",
      ],
      impact: [
        "Clear direction resolving ‘too strict vs too open’ debates",
        "Scalable model with minimal admin overhead",
        "Trustworthy access aligned with content licensing",
      ],
      reflection:
        "Balancing user dignity with security is a design problem; flows + matrix helped move the decision forward.",
    },
  },
  {
    order: 5,
    id: "browse-search-79",
    title: "Browse/Search Solution (Ticket #79)",
    role: "Interaction Design (Intern)",
    year: "2025",
    tags: ["Discovery", "Toggle", "Filters", "Wireframes"],
    summary:
      "Unified discovery with a dual-mode toggle so users can browse or search without losing context or filters.",
    heroColor: "from-rose-100 to-white",
    details: {
      overview:
        "Discovery felt disconnected; browse and search lived in separate patterns with inconsistent filters.",
      problem:
        "No smooth transition between modes, filters reset, and active state was unclear.",
      process: [
        "Synthesized pain points from testing + feedback",
        "Sketched dual-mode concept; designed mid-fi wireframes",
        "Annotated behaviors (filter persistence, active states)",
        "Drafted detailed Ticket #79 and linked related issues",
      ],
      solution: [
        "Top-level toggle: Browse ↔ Search",
        "Persistent filters per mode; clear active state",
        "Search bar always visible in Search mode",
      ],
      impact: [
        "Faster, clearer discovery with lower user friction",
        "Consistent filters and mental model",
        "Adopted into the app as a core feature",
      ],
      reflection:
        "Mode persistence matters—users shouldn’t feel they start over when switching context.",
    },
  },
  {
    order: 6,
    id: "ux-playbook",
    title: "Renew UX Playbook",
    role: "Self-Directed UX Strategy (Intern)",
    year: "2025",
    tags: ["Playbook", "Heuristics", "WCAG", "Roadmap"],
    summary:
      "Created a living UX Playbook consolidating standards, issues, and priorities to maintain momentum during dev pauses.",
    heroColor: "from-fuchsia-100 to-white",
    details: {
      overview:
        "Kept UX moving by centralizing scattered findings (tickets, Discord, audits) into one actionable document.",
      problem:
        "Work was fragmented; priorities could be lost across tickets and threads during slowdowns.",
      process: [
        "Gathered inputs (tickets, audits, stakeholder notes)",
        "Organized into Navigation, Playback, Accessibility",
        "Mapped items to WCAG and heuristics",
        "Added visuals and ‘quick wins vs longer-term’ guidance",
      ],
      solution: [
        "Single reference document for UX evolution",
        "Standards-anchored recommendations",
        "Category-based structure for planning",
      ],
      impact: [
        "Continuity and clarity for Phase-2 planning",
        "Fewer repeated discussions; better prioritization",
        "Demonstrated initiative beyond assigned tasks",
      ],
      reflection:
        "A living playbook turns scattered knowledge into team leverage.",
    },
  },
  {
    order: 7,
    id: "backlog-audit",
    title: "Backlog Audit Compilation",
    role: "Ops & PM Support (Intern)",
    year: "2025",
    tags: ["Backlog Grooming", "Prioritization", "Docs"],
    summary:
      "Audited the GitHub backlog, removed duplicates, verified status in the live app, and organized priorities for Phase-2.",
    heroColor: "from-teal-100 to-white",
    details: {
      overview:
        "Prepared for Phase-2 by cleaning and structuring the issue backlog against the live build.",
      problem:
        "Redundant/outdated tickets obscured real priorities and wasted dev time.",
      process: [
        "Exported and reviewed all tickets",
        "Cross-checked against the latest app build",
        "Grouped untouched items by priority (High/Med/Low/None)",
        "Identified duplicates and gaps; compiled a single doc",
      ],
      solution: [
        "Consolidated, annotated backlog document",
        "Priority chart + recommendations",
        "Notes on merges and missing tickets",
      ],
      impact: [
        "Clear roadmap for sprint planning",
        "Less noise; higher signal for developers",
        "Time saved by avoiding duplicate work",
      ],
      reflection:
        "Good UX ops clears the path—organization is a product skill, too.",
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
      "A campus wayfinding app that reduces decision friction with step-by-step landmarks and accessible routing.",
    heroColor: "from-violet-100 to-white",
    details: {
      overview:
        "Studio brief: design a navigation tool for new students. Focus on clarity, accessibility, and low-cognitive-load decisions.",
      problem:
        "New students felt overwhelmed; map apps were precise but not friendly for on-foot, landmark-based navigation.",
      process: [
        "Intercept interviews + quick journey mapping",
        "Paper -> mid-fi wireframes; 2 rounds of usability testing",
        "Information architecture tuned for single-path clarity",
      ],
      solution: [
        "'Next Landmark' guidance instead of dense map labels",
        "Accessible routes toggle and step contrast checks",
        "Context chips (restrooms, elevators, help desks)",
      ],
      impact: [
        "Task success +27% vs baseline map app",
        "Time-on-task down 18% in final test",
      ],
      reflection:
        "Chunking information and designing for anxiety reduction matters as much as raw accuracy.",
    },
  },
  {
    id: "sp-mealplanner",
    title: "Campus Meal Planner",
    role: "Coursework — Service/UX",
    year: "2024",
    tags: ["Flows", "Content Design", "Prototyping"],
    summary:
      "A weekly meal planner that balances cost, nutrition, and cafeteria inventory to cut waste and choice fatigue.",
    heroColor: "from-lime-100 to-white",
    details: {
      overview:
        "Brief: help students plan affordable meals using real cafeteria menus and stock.",
      problem:
        "Students over-spent or defaulted to the same meals; staff struggled with forecasting.",
      process: [
        "Diary study (1 week) on choices + constraints",
        "Flow design for 'Plan in 2 minutes' path",
        "Mid-fi prototype with copy-first content design",
      ],
      solution: [
        "One-tap weekly template + swap suggestions",
        "Budget + nutrition badges at list level",
        "Out-of-stock warnings from staff inputs",
      ],
      impact: [
        "Prototype study: 84% completed a weekly plan in < 3 min",
        "Staff pilots predicted 6–10% waste reduction",
      ],
      reflection:
        "Small content cues (badges, defaults) drive behavior more than heavy analytics.",
    },
  },
  {
    id: "sp-museumkiosk",
    title: "Museum Kiosk Redesign",
    role: "Coursework — Interaction Design",
    year: "2023",
    tags: ["Kiosk", "Accessibility", "Microcopy"],
    summary:
      "Touch kiosk for a small museum with better reach targets, contrast, and story-led navigation.",
    heroColor: "from-orange-100 to-white",
    details: {
      overview:
        "Course project to redesign a kiosk for mixed-age visitors with varying tech familiarity.",
      problem:
        "Original kiosk hid key actions, had small touch targets, and unclear 'back to exhibit' paths.",
      process: [
        "Heuristic audit + field observations",
        "Tap-target sizing study; color/contrast tests",
        "Proto with story-first entry points",
      ],
      solution: [
        "Large targets with 44px min touch area",
        "Persistent 'Back to Exhibit' affordance",
        "Narrative browse (People • Places • Objects)",
      ],
      impact: [
        "Error taps reduced in testing by 41%",
        "Dwell time increased while exits became clearer",
      ],
      reflection:
        "Narrative framing plus accessibility basics creates a friendlier public-display UX.",
    },
  },
];

/* ---------- Page ---------- */
export default function App() {
  const [openId, setOpenId] = useState(null);
  const ordered = [...projects].sort((a, b) => a.order - b.order);
  const openProject = [...ordered, ...schoolProjects].find((p) => p.id === openId);
  const isSingle = ordered.length === 1;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-500" aria-hidden />
            <span className="font-semibold">Internship Portfolio — Esther Ramcharan</span>
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
              Below is my internship work (ordered 1–7) plus three selected school projects.
            </p>
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <main id="main">
        <section id="work" className="mx-auto max-w-6xl px-4 pt-6 pb-16">
          <SectionTitle
            kicker="Internship Work"
            title={isSingle ? "Internship Case Study" : "Internship Case Studies"}
            subtitle={
              isSingle
                ? "Process over pixels: one detailed case study from my internship."
                : "Each study shows process, artifacts, and impact from my 2025 internship — ordered 1 to 7."
            }
          />

          {/* Project Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ordered.map((project) => (
              <div
                key={project.id}
                onClick={() => setOpenId(project.id)}
                className={`group rounded-2xl border border-slate-200 bg-gradient-to-br ${project.heroColor} p-5 hover:shadow-md transition cursor-pointer`}
              >
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-sky-700">
                  {project.order}. {project.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {project.role} · {project.year}
                </p>
                <p className="mt-3 text-sm text-slate-600">{project.summary}</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {project.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* School Projects */}
        <section id="school" className="mx-auto max-w-6xl px-4 pt-2 pb-16">
          <SectionTitle
            kicker="Coursework"
            title="School Projects"
            subtitle="Three selected class projects showing research, flows, prototyping, and accessibility in practice."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {schoolProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => setOpenId(p.id)}
                className={`group rounded-2xl border border-slate-200 bg-gradient-to-br ${p.heroColor} p-5 hover:shadow-md transition cursor-pointer`}
              >
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-sky-700">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {p.role} · {p.year}
                </p>
                <p className="mt-3 text-sm text-slate-600">{p.summary}</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Modal (works for both internship & school) */}
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
            <h3 className="text-xl font-semibold text-slate-900">
              {openProject.order ? `${openProject.order}. ` : ""}{openProject.title}
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              {openProject.role} · {openProject.year}
            </p>

            <div className="mt-5 space-y-6 text-sm text-slate-700">
              <div>
                <h4 className="font-medium text-slate-900">Overview</h4>
                <p>{openProject.details.overview}</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-900">Problem</h4>
                <p>{openProject.details.problem}</p>
              </div>
              {openProject.details.process?.length > 0 && (
                <div>
                  <h4 className="font-medium text-slate-900">Process</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {openProject.details.process.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>
              )}
              {openProject.details.solution?.length > 0 && (
                <div>
                  <h4 className="font-medium text-slate-900">Solution</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {openProject.details.solution.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}
              {openProject.details.impact?.length > 0 && (
                <div>
                  <h4 className="font-medium text-slate-900">Impact</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {openProject.details.impact.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}
              {openProject.details.reflection && (
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
              process documentation, and visual design to create accessible,
              thoughtful experiences.
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

