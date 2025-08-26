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

/* ---------- PATH HELPER (minimal addition) ---------- */
// Resolves images from /public for both local dev ("/") and GitHub Pages ("/<repo>/").
// Works with "Audit.png", "/Audit.png", and "/Portfolio/Audit.png".
const srcOf = (p) => {
  if (!p) return "";
  if (/^https?:\/\//i.test(p)) return p; // external URL

  const base = import.meta.env.BASE_URL || "/";     // "/" locally, "/Portfolio/" on GH Pages
  const seg  = base.replace(/^\/|\/$/g, "");        // e.g., "Portfolio" or ""

  // Clean leading slashes
  let cleaned = String(p).replace(/^\/+/, "");

  // If p already includes the current base segment, strip it (prevents double "/Portfolio/")
  if (seg && cleaned.toLowerCase().startsWith(seg.toLowerCase() + "/")) {
    cleaned = cleaned.slice(seg.length + 1);
  }

  // If running locally (seg === "") but the data hard-coded "Portfolio/", strip it
  if (!seg && cleaned.toLowerCase().startsWith("portfolio/")) {
    cleaned = cleaned.slice("portfolio/".length);
  }

  return base + cleaned;
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
      solutionImage: "Solution.png",
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
    image: "/Portfolio/Verify.png",
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
    summary: "Placeholder.",
    role: "UX/UI Design",
    year: "2025",
    tags: ["Player UI", "Wireframes", "Usability Fixes"],
    heroColor: "from-yellow-100 to-white",
    image: "https://placehold.co/800x480?text=Media+Player",
    details: {
      overview: "placeholder.",
      problem: "placeholder.",
      process: ["placeholder", "placeholder", "placeholder"],
      solution: ["placeholder", "placeholder", "placeholder"],
      impact: ["placeholder", "placeholder", "placeholder"],
      reflection: "placeholder",
    },
  },
  {
    id: "mobile-web",
    order: 6,
    title: "Placeholder",
    summary: "Placeholder",
    role: "Interaction Design",
    year: "2025",
    tags: ["placeholder", "placeholder", "placeholder"],
    heroColor: "from-purple-100 to-white",
    image: "https://placehold.co/800x480?text=Mobile+to+Web",
    details: {
      overview: "placeholder.",
      problem: "placeho


