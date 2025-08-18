/**
 * Interaction Design Portfolio
 * Built by Esther Ramcharan, 2025
 *
 * References:
 * - React Docs (component structure): https://react.dev/learn
 * - Modal pattern (React): https://react.dev/learn/managing-state
 * - JavaScript reference: https://developer.mozilla.org/en-US/
 */


import React, { useState } from "react";

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

const projects = [
  {
    id: "cmpa",
    title: "CMPA Website Accessibility Audit",
    role: "UX Research & Interaction Design",
    year: "2025",
    tags: ["WCAG 2.1", "Heuristic Eval", "Annotated Screens"],
    summary:
      "A thorough accessibility & usability audit of the CMPA site with prioritized fixes for contrast, navigation, and checkout.",
    heroColor: "from-sky-100 to-white",
    highlights: [
      "Mapped issues to WCAG 2.1 AA and Nielsen heuristics",
      "Annotated screenshots with concrete fix proposals",
      "Proposed simplified checkout and clearer nav (incl. ‘New Here’)",
    ],
    details: {
      overview:
        "As part of my internship, I conducted a full audit of the CMPA website to identify barriers to navigation, readability, and task completion.",
      problem:
        "Low contrast, confusing navigation, and a complex checkout created friction for members and first‑time visitors.",
      process: [
        "Applied WCAG 2.1 AA to key templates and flows",
        "Heuristic review across Nielsen’s 10 principles",
        "Documented issues with screenshots + standard references",
      ],
      solution: [
        "Color/contrast updates in a soft blue palette with improved ratios",
        "‘New Here’ entry point and simplified global nav",
        "Checkout flow re-sequenced; clearer labels & form feedback",
      ],
      impact: [
        "Created a prioritized roadmap for Phase 1 redesign",
        "Enabled dev-ready implementation via precise annotations",
      ],
      reflection:
        "Combine standards with quick user validation next—e.g., task-based tests with representative users.",
    },
  },
  // You can add more projects in the same format
];

export default function App() {
  const [openId, setOpenId] = useState(null);
  const openProject = projects.find((p) => p.id === openId);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-500" aria-hidden />
            <span className="font-semibold">Interaction Design Portfolio</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#work" className="hover:text-sky-700">Work</a>
            <a href="#about" className="hover:text-sky-700">About</a>
            <a href="#contact" className="hover:text-sky-700">Contact</a>
            <a
              href="#resume"
              className="rounded-xl border border-slate-300 px-3 py-1.5 hover:border-sky-400 hover:text-sky-700"
            >
              Resume
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-8 md:pt-16 md:pb-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Hi, I’m an <span className="text-sky-700">Interaction Design</span> student
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
              I design accessible, thoughtful experiences—balancing research, systems thinking,
              and clean UI. I enjoy turning ambiguous problems into shippable flows and annotated specs.
            </p>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <main id="main">
        <section id="work" className="mx-auto max-w-6xl px-4 pt-6 pb-16">
          <SectionTitle
            kicker="Selected Work"
            title="Case Studies"
            subtitle="Process over pixels. Each project shows how I framed the problem, explored options, and shipped an informed solution."
          />

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article
                key={p.id}
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition"
              >
                <div className={`h-32 bg-gradient-to-r ${p.heroColor}`} aria-hidden />
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{p.role}</span>
                    <time>{p.year}</time>
                  </div>
                  <h3 className="mt-2 text-lg font-medium text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-3">{p.summary}</p>
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
      </main>

      {/* Modal */}
      {openProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpenId(null)} />
          <div className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
              <h3 className="text-lg font-medium">{openProject.title}</h3>
              <button
                onClick={() => setOpenId(null)}
                className="rounded-lg border border-slate-300 px-3 py-1 text-sm hover:border-slate-400"
              >
                Close
              </button>
            </div>

            <div className="mt-4 text-sm text-slate-700">
              <p><strong>Overview:</strong> {openProject.details.overview}</p>
              <p className="mt-2"><strong>Problem:</strong> {openProject.details.problem}</p>
              <p className="mt-2"><strong>Process:</strong></p>
              <ul className="list-disc pl-5">
                {openProject.details.process.map((step, i) => <li key={i}>{step}</li>)}
              </ul>
              <p className="mt-2"><strong>Solution:</strong></p>
              <ul className="list-disc pl-5">
                {openProject.details.solution.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
              <p className="mt-2"><strong>Impact:</strong></p>
              <ul className="list-disc pl-5">
                {openProject.details.impact.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
              <p className="mt-2"><strong>Reflection:</strong> {openProject.details.reflection}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
