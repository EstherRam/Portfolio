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

/* ---------------- Image Helper ---------------- */

const srcOf = (path) => {
  if (!path) return "";

  if (/^https?:\/\//i.test(path)) return path;

  const base = import.meta?.env?.BASE_URL || "/";
  const cleaned = String(path).replace(/^\/+/, "");

  return base + cleaned;
};

/* ---------------- Media Helpers ---------------- */

const getProblemImage = (proj) => {
  if (!proj?.details) return "";
  if (proj.details.noProblemImage || proj.details.purpose) return "";
  return proj.details.problemImage || proj.image || "";
};

const getSolutionImages = (proj) => {
  if (!proj?.details) return [];

  const imgs = [
    ...(proj.details.solutionImages || []),
    proj.details.solutionImage,
    proj.details.solutionImage2,
    proj.details.roadmapImage,
  ].filter(Boolean);

  const unique = [...new Set(imgs)];

  if (proj.id?.startsWith("sp-")) return unique;

  if (unique.length === 0 && proj.image) return [proj.image];

  return unique.slice(0, 2);
};

const getProcessImages = (proj) => {
  if (!proj?.details?.processImages) return [];

  const max = proj.id === "sp-documentary" ? 3 : 2;

  return proj.details.processImages.filter(Boolean).slice(0, max);
};

const RESUME_FILE = "/Portfolio/Esther_Ramcharan_Resume_2025.pdf";

/* ---------------- UI Components ---------------- */

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

/* ---------------- Internship Projects ---------------- */

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
    image: "/Portfolio/Audit.png",
    details: {
      overview:
        "The CMPA website is essential for community members but had accessibility and usability issues that made navigation and checkout difficult.",
      problem:
        "Low contrast, cluttered navigation, confusing checkout, inconsistent alt text, and lack of onboarding created friction.",
      problemImage: "Audit1.png",
      process: [
        "Defined scope: Homepage, Magazine, Library, Checkout",
        "WCAG 2.1 review with annotated screenshots",
        "Heuristic evaluation using Nielsen’s heuristics",
      ],
      solution: [
        "Increase contrast in navigation",
        "Simplify checkout flow",
        "Improve alt text and readability",
        "Create accessibility roadmap",
      ],
      solutionImages: ["Solution.png", "Roadmap.png"],
      impact: [
        "Roadmap toward WCAG 2.1 compliance",
        "Reduced friction in checkout",
        "Clear accessibility baseline",
      ],
      reflection:
        "Combining WCAG evaluation, heuristics, and visual annotation produced a practical roadmap.",
    },
  },
];

/* ---------------- School Projects ---------------- */

const schoolProjects = [
  {
    id: "aac-app",
    title: "AAC Communication App",
    role: "UX & Interaction Design",
    year: "2025",
    tags: ["Accessibility", "Inclusive Design"],
    image: "/Portfolio/AACHero.png",
    summary:
      "Accessible communication app designed for adults using augmentative communication.",
    details: {
      overview:
        "The app provides a high-contrast interface to help adult AAC users communicate effectively.",
      purpose:
        "Design an accessible AAC app that allows adults to communicate quickly and safely.",
      process: [
        "User research with AAC users",
        "Wireframing and prototyping",
        "Accessibility testing",
      ],
      processImages: ["AAC_Research.png", "AAC_Wireframes.png"],
      solution: [
        "High contrast interface",
        "Large communication buttons",
        "Emergency message shortcut",
      ],
      solutionImages: ["AAC_HighFi1.png", "AAC_Flow.png"],
    },
  },
];

/* ---------------- Main App ---------------- */

export default function App() {
  const [openId, setOpenId] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  const orderedIntern = [...projects].sort((a, b) => a.order - b.order);

  const openProject =
    orderedIntern.find((p) => p.id === openId) ||
    schoolProjects.find((p) => p.id === openId);

  const problemSrc = openProject ? srcOf(getProblemImage(openProject)) : "";

  const solutionSrcs = openProject
    ? getSolutionImages(openProject).map(srcOf)
    : [];

  const processSrcs = openProject
    ? getProcessImages(openProject).map(srcOf)
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      
      {/* Header */}

      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <span className="font-semibold">IXD Portfolio</span>

          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#work">Internship</a>
            <a href="#school">School</a>
            <button onClick={() => setResumeOpen(true)}>Resume</button>
          </nav>
        </div>
      </header>

      {/* Internship Section */}

      <section id="work" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle
          kicker="Selected Work"
          title="Internship Case Studies"
        />

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {orderedIntern.map((p) => (
            <article
              key={p.id}
              className="rounded-2xl border bg-white overflow-hidden"
            >
              <img
                src={srcOf(p.image)}
                alt={p.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-5">
                <h3 className="font-medium">{p.title}</h3>

                <button
                  onClick={() => setOpenId(p.id)}
                  className="mt-4 w-full rounded-xl bg-slate-900 text-white py-2 text-sm"
                >
                  View case study
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* School Section */}

      <section id="school" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle kicker="Coursework" title="School Projects" />

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {schoolProjects.map((p) => (
            <article
              key={p.id}
              className="rounded-2xl border bg-white overflow-hidden"
            >
              <img
                src={srcOf(p.image)}
                alt={p.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-5">
                <h3 className="font-medium">{p.title}</h3>

                <button
                  onClick={() => setOpenId(p.id)}
                  className="mt-4 w-full rounded-xl bg-slate-900 text-white py-2 text-sm"
                >
                  View project
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Modal */}

      {openProject && (
        <div
          className="fixed inset-0 bg-black/50 flex items-start justify-center p-6"
          onClick={() => setOpenId(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4"
              onClick={() => setOpenId(null)}
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold">{openProject.title}</h3>

            {problemSrc && (
              <img
                src={problemSrc}
                className="mt-4 rounded-lg border"
                alt="problem"
              />
            )}

            {/* Process Images */}

            {processSrcs.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                {processSrcs.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    className="rounded-lg border"
                    alt="process"
                  />
                ))}
              </div>
            )}

            {/* Solution Images */}

            <div className="grid grid-cols-1 gap-3 mt-4">
              {solutionSrcs.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="rounded-lg border"
                  alt="solution"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Resume Modal */}

      {resumeOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center"
          onClick={() => setResumeOpen(false)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-4xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={srcOf(RESUME_FILE)}
              className="w-full h-full"
              title="Resume"
            />
          </div>
        </div>
      )}
    </div>
  );
}



















