"use client";

import { useMemo, useState } from "react";

type Offering = {
  title: string;
  description: string;
};

const offerings: Offering[] = [
  {
    title: "Business Consultancy",
    description:
      "Strategic consulting to improve growth, operations, positioning, and long-term competitiveness. We assess your current model, identify gaps, and build practical action plans that align with your business goals. From process improvement to expansion readiness, our consultants support decision-making with clear priorities and measurable outcomes.",
  },
  {
    title: "HRM-Recruitment",
    description:
      "Workforce planning and recruitment support aligned with business goals and organizational structure. We help define role requirements, streamline hiring pipelines, and improve candidate quality to reduce turnover risk. Our approach ensures your team structure supports both current operations and future growth plans.",
  },
  {
    title: "Market Entry Support",
    description:
      "Go-to-market planning, local insights, and execution guidance for new geographies and segments. We assist with market assessment, competitive positioning, entry strategy, and launch sequencing. This helps organizations enter confidently while minimizing risk and improving speed to market.",
  },
  {
    title: "International Event",
    description:
      "Planning and execution support for international business events, delegations, and partnerships. We coordinate event strategy, stakeholder engagement, and operational planning to maximize impact. Our team helps ensure each event creates meaningful business opportunities and long-term value.",
  },
  {
    title: "Company Background Checks",
    description:
      "Structured due diligence and background analysis to reduce risk before strategic decisions. We verify key business information, review market reputation signals, and provide concise risk summaries. This enables more secure partnerships, better negotiations, and informed expansion decisions.",
  },
  {
    title: "Lobbying and advocacy",
    description:
      "Stakeholder engagement and advocacy support to represent business interests effectively. We help organizations communicate priorities, prepare positioning documents, and build stronger institutional relationships. The goal is to strengthen influence while maintaining professionalism and compliance.",
  },
  {
    title: "Business Sector Support",
    description:
      "Sector-specific advisory and operational support tailored to your business domain requirements. We analyze sector trends, identify challenges unique to your industry, and shape targeted support strategies. This allows businesses to respond faster to market shifts and maintain competitive strength.",
  },
  {
    title: "Business Event",
    description:
      "End-to-end support for business conferences, networking programs, and corporate showcases. From concept planning to execution management, we focus on high-quality attendee experience and clear business outcomes. Our team helps convert events into lead generation, partnerships, and brand credibility.",
  },
  {
    title: "Business Opportunities",
    description:
      "Opportunity mapping and partnership exploration to identify high-value growth channels. We evaluate potential collaborations, market gaps, and expansion avenues relevant to your business model. This helps leadership prioritize initiatives with stronger returns and lower strategic uncertainty.",
  },
  {
    title: "Market Intelligence",
    description:
      "Data-backed market intelligence for better planning, positioning, and faster decision making. We provide insight-driven analysis of customer behavior, competitor movement, and sector direction. With stronger intelligence, your teams can plan proactively and execute with greater confidence.",
  },
];

export default function CoreOfferingsGrid() {
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  const activeOffering = useMemo(
    () => offerings.find((item) => item.title === activeTitle) ?? null,
    [activeTitle]
  );

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {offerings.map((item, idx) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActiveTitle(item.title)}
            className="group relative animate-fade-up overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-lg shadow-slate-900/5 transition duration-300 [animation-fill-mode:both] hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl hover:shadow-rose-700/20"
            style={{ animationDelay: `${140 + idx * 90}ms` }}
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-2 bg-gradient-to-b from-rose-500 to-red-600 transition duration-300 group-hover:brightness-110"
            />
            <div className="mb-4 h-1.5 w-14 rounded-full bg-gradient-to-r from-blue-600 to-red-500 transition duration-300 group-hover:scale-x-110" />
            <h3 className="font-heading text-lg font-semibold text-blue-900">
              {item.title}
            </h3>
          </button>
        ))}
      </div>

      {activeOffering ? (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/60 p-4 backdrop-blur-sm"
          onClick={() => setActiveTitle(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeOffering.title}
        >
          <article
            className="w-full max-w-2xl rounded-2xl border border-white/40 bg-white p-6 shadow-2xl shadow-slate-900/30 sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-blue-600 to-red-500" />
            <h3 className="font-heading text-2xl font-bold text-blue-900 sm:text-3xl">
              {activeOffering.title}
            </h3>
            <p className="mt-4 text-sm leading-8 text-slate-700 sm:text-base">
              {activeOffering.description}
            </p>
            <button
              type="button"
              onClick={() => setActiveTitle(null)}
              className="mt-6 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Close
            </button>
          </article>
        </div>
      ) : null}
    </>
  );
}
