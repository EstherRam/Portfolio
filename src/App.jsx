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
  if (/^https?:\/\//i.test(p)) return p;
  const base = import.meta.env.BASE_URL || "/";
  const seg = base.replace(/^\/|\/$/g, "");
  let cleaned = String(p).replace(/^\/+/, "");

  if (seg && cleaned.toLowerCase().startsWith(seg.toLowerCase() + "/")) {
    cleaned = cleaned.slice(seg.length + 1);
  }

  if (!seg && cleaned.toLowerCase().startsWith("portfolio/")) {
    cleaned = cleaned.slice("portfolio/".length);
  }

  return base + cleaned;
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

/* ---------- Internship Case Studies ---------- */

const projects = [

{
id:"ticket-system",
order:4,
title:"Service Ticket System UX",
role:"UX Intern",
year:"2025",
tags:["Accessibility","GitHub","Documentation"],
image:"/Portfolio/Tickets.png",

summary:
"Restructured GitHub service tickets to improve clarity, reduce duplication, and better connect accessibility findings with development work.",

details:{

overview:
"During my internship with the CMPA, I supported development of a multi-page web app by managing and restructuring GitHub service tickets. As usability and accessibility feedback accumulated, I focused on improving clarity, reducing duplication, and aligning design intent with development work.",

problem:
"Feedback existed, but it wasn’t structured. Accessibility and usability concerns came from users, trustees, internal stakeholders, and informal notes. Issues were scattered across documents, sometimes duplicated, missing visual context, and difficult to verify or reproduce. This made it harder for developers to clearly understand, prioritize, and resolve problems.",

approach:
"Turning feedback into implementation-ready tickets meant stepping back and looking at the system as a whole rather than treating each issue individually.",

approachSteps:[
"Audited existing GitHub tickets",
"Compared tickets to current product behavior",
"Merged overlapping or duplicated issues",
"Rewrote unclear issues",
"Added annotated screenshots and screen recordings"
],

solutionText:
"Instead of treating tickets as static logs, documentation became part of the design process.",

solution:[
"Structured issues with consistent formatting",
"Added visual evidence",
"Included platform-specific notes",
"Consolidated the backlog",
"Continued revisiting tickets as the product evolved"
],

impact:[
"Reduced ambiguity and duplication",
"Made issues easier to reproduce",
"Improved alignment between design and development",
"Helped prevent recurring accessibility concerns"
],

lessons:
"Good documentation supports accessibility. Clear structure reduces cognitive load not only for users but for teams. Treating documentation as part of the UX process strengthens collaboration and preserves design intent."
}
},

{
id:"browse-search",
order:3,
title:"Browse & Search Redesign",
role:"UX Intern",
year:"2025",
tags:["Discovery Flow","Interaction Design","Filtering"],
image:"/Portfolio/S:B.png",

summary:
"Reframed browse and search as two expressions of the same discovery system.",

details:{

overview:
"Browse and Search both worked individually, but together they created friction. Every time users switched between them, it felt like the interface forgot what they were doing.",

problem:
"The biggest issue wasn’t functionality, it was continuity. Filters reset, active states were unclear, and it wasn’t obvious which mode users were in.",

approach:
"I stepped back and mapped how people actually moved through the flow — not how it was designed, but how it was used.",

approachSteps:[
"Mapped where context was lost",
"Sketched a dual-mode discovery model",
"Built mid-fidelity wireframes",
"Tested mode clarity and filter persistence"
],

solutionText:
"Instead of redesigning screens, I adjusted the structure underneath.",

solution:[
"Persistent dual-mode toggle",
"Predictable filter behavior",
"Clear active states",
"Smoother transitions between modes"
],

impact:[
"Less frustration when switching modes",
"Filtering felt consistent and predictable",
"Improved discoverability",
"Discovery structure adopted in product"
],

lessons:
"Frustration often comes from broken continuity rather than broken features. When interfaces preserve context, users feel understood."
}
},

{
id:"renew-verification",
order:2,
title:"User Verification Proposal",
role:"UX Intern",
year:"2025",
tags:["Onboarding","Trust Systems","Accessibility"],
image:"/Portfolio/Renew.png",

summary:
"Designed a layered verification model balancing accessibility, security, and licensing requirements.",

details:{

overview:
"Renew required verification because the app contains licensed content.",

problem:
"Two options dominated the discussion: invite-only access or fully open access. One prioritized protection while the other prioritized accessibility.",

approach:
"I compared verification models in a structured way so stakeholders could clearly see the trade-offs.",

approachSteps:[
"Compared models across security, friction, scalability, and inclusivity",
"Mapped onboarding flows",
"Created wireframes for each option"
],

solutionText:
"Instead of choosing one strict entry method, I proposed a layered approach.",

solution:[
"Primary: referral link",
"Fallback: hymn-book challenge",
"Exception: manual email verification",
"Account deletion aligned with Apple & Google guidelines"
],

impact:[
"Balanced accessibility with licensing protection",
"Reduced administrative overhead",
"Helped move internal discussion toward a practical solution"
],

lessons:
"Structure shapes perception. The requirement didn’t change — users still needed verification — but how it was organized made a big difference in how it would be experienced."
}
}

];

/* ---------- Page ---------- */

export default function App() {

const [openId,setOpenId]=useState(null)

const openProject=projects.find(p=>p.id===openId)

return(

<div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">

<main className="mx-auto max-w-6xl px-4 pt-10 pb-16">

<SectionTitle
kicker="Selected Work"
title="Internship Case Studies"
/>

<div className="grid md:grid-cols-3 gap-6 mt-8">

{projects.map(p=>(

<article key={p.id} className="border rounded-2xl bg-white overflow-hidden">

<img src={srcOf(p.image)} className="w-full h-40 object-cover"/>

<div className="p-5">

<h3 className="font-medium">{p.title}</h3>

<p className="text-sm text-slate-600 mt-2">{p.summary}</p>

<div className="flex flex-wrap gap-2 mt-3">
{p.tags.map(t=><Tag key={t}>{t}</Tag>)}
</div>

<button
onClick={()=>setOpenId(p.id)}
className="mt-4 w-full bg-slate-900 text-white rounded-xl py-2 text-sm"
>
View case study
</button>

</div>
</article>

))}

</div>
</main>

{openProject && (

<div className="fixed inset-0 bg-black/50 flex justify-center p-6">

<div className="bg-white max-w-3xl w-full p-8 rounded-2xl space-y-6">

<h3 className="text-xl font-semibold">{openProject.title}</h3>

<div>
<h4 className="font-medium">Overview</h4>
<p>{openProject.details.overview}</p>
</div>

<div>
<h4 className="font-medium">Problem</h4>
<p>{openProject.details.problem}</p>
</div>

<div>
<h4 className="font-medium">My Approach</h4>
<p>{openProject.details.approach}</p>

{openProject.details.approachSteps &&(
<ul className="list-disc list-inside mt-2">
{openProject.details.approachSteps.map((s,i)=>
<li key={i}>{s}</li>)}
</ul>
)}
</div>

<div>
<h4 className="font-medium">The Solution</h4>
<p>{openProject.details.solutionText}</p>

<ul className="list-disc list-inside mt-2">
{openProject.details.solution.map((s,i)=>
<li key={i}>{s}</li>)}
</ul>
</div>

<div>
<h4 className="font-medium">Impact</h4>
<ul className="list-disc list-inside">
{openProject.details.impact.map((s,i)=>
<li key={i}>{s}</li>)}
</ul>
</div>

<div>
<h4 className="font-medium">What I Learned</h4>
<p>{openProject.details.lessons}</p>
</div>

<button onClick={()=>setOpenId(null)}>Close</button>

</div>
</div>

)}

</div>

)
}








