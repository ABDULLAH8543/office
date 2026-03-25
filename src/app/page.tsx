import AnimatedCounter from "@/components/AnimatedCounter";
import CoreOfferingsGrid from "@/components/CoreOfferingsGrid";
import SectionDoorReveal from "@/components/SectionDoorReveal";

export default function Home() {
  return (
    <div
      id="home"
      className="min-h-screen bg-[linear-gradient(165deg,#eef5ff_0%,#f8fbff_52%,#fff4f4_100%)] text-slate-900"
    >
      <header className="relative overflow-x-clip border-b border-slate-200/70">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -left-24 -top-32 h-96 w-96 rounded-full bg-blue-400/30 blur-3xl" />
          <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-red-400/30 blur-3xl" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_39px,rgba(148,163,184,0.08)_40px)]" />
        </div>

        <div className="relative mx-auto grid w-[min(1120px,92vw)] gap-10 pb-20 pt-10 md:grid-cols-[1.15fr_0.85fr] md:items-end md:pb-24">
          <div className="animate-fade-up [animation-delay:120ms] [animation-fill-mode:both]">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-red-500">
              Business Growth and Expansion Support
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Business consultancy, trainings, and IT support for modern
              organizations.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              From market entry strategy to operational support, Brightex helps
              businesses in Pakistan and overseas navigate complexity, improve
              performance, and unlock new opportunities.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(29,78,216,0.28)] transition hover:-translate-y-0.5 hover:bg-blue-800"
              >
                Schedule Consultation
              </a>
              <a
                href="#services"
                className="rounded-full border border-red-300 bg-red-50 px-6 py-3 text-sm font-semibold text-red-700 transition hover:-translate-y-0.5 hover:bg-red-100"
              >
                View Solutions
              </a>
            </div>
          </div>

          <aside className="animate-fade-up rounded-2xl border border-slate-200 bg-white/85 p-6 shadow-xl shadow-blue-950/10 backdrop-blur [animation-delay:260ms] [animation-fill-mode:both]">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Why Brightex
            </p>
            <ul className="mt-4 space-y-4 text-sm text-slate-700">
              <li className="rounded-xl border border-slate-200 bg-white p-3">
                Business consultancy across strategy, compliance, and market intelligence.
              </li>
              <li className="rounded-xl border border-slate-200 bg-white p-3">
                Corporate trainings designed for enterprise and student growth goals.
              </li>
              <li className="rounded-xl border border-slate-200 bg-white p-3">
                IT support services including call centre, social media, and business leads.
              </li>
            </ul>
          </aside>
        </div>
      </header>

      <main>
        <section id="services" className="mx-auto w-[min(1120px,92vw)] py-16 sm:py-20">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Core Offerings
              </p>
              <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
                Business Consultancy and Advisory Services
              </h2>
            </div>
            <p className="hidden max-w-md text-sm leading-7 text-slate-600 lg:block">
              Practical, high-impact support tailored for companies, entrepreneurs,
              and organizations entering new markets.
            </p>
          </div>

          <CoreOfferingsGrid />
        </section>

        <SectionDoorReveal>
          <section className="bg-[linear-gradient(100deg,#0f3ca5,#cd3b3b)] py-14 text-white sm:py-16">
            <div className="mx-auto grid w-[min(1120px,92vw)] gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { target: 100, suffix: "+", label: "Business Engagements" },
                { target: 40, suffix: "+", label: "Training Programs Delivered" },
                { target: 20, suffix: "+", label: "Sectors Supported" },
                { target: 24, suffix: "/7", label: "Ongoing Client Support" },
              ].map((item, idx) => (
                <div
                  key={item.label}
                  className="animate-fade-up rounded-2xl border border-white/25 bg-white/10 p-5 backdrop-blur [animation-fill-mode:both]"
                  style={{ animationDelay: `${100 + idx * 80}ms` }}
                >
                  <p className="font-heading text-3xl font-bold">
                    <AnimatedCounter target={item.target} suffix={item.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-white/90">{item.label}</p>
                </div>
              ))}
            </div>
          </section>
        </SectionDoorReveal>

        <section id="about" className="mx-auto grid w-[min(1120px,92vw)] gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
              BUSINESS
            </p>
            <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Consultancy for evolving market expectations
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-8 text-slate-600 sm:text-base">
              From evolving customer expectations to starting new business in
              Pakistan or Overseas, you may be experiencing challenges or need
              a new business strategy to reflect your envisioned future, we are
              here to help Our expert business consultants can help you adapt
              to today&apos;s market dynamics and continue to compete.
            </p>
          </div>

          <ol className="space-y-3">
            {[
              "Strategic business review and market positioning",
              "Opportunity mapping and market entry roadmap",
              "Implementation support with sector-focused advisory",
              "Continuous optimization using market intelligence",
            ].map((step, idx) => (
              <li
                key={step}
                className="animate-fade-up grid grid-cols-[3rem_1fr] items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-md shadow-slate-900/5 [animation-fill-mode:both]"
                style={{ animationDelay: `${100 + idx * 85}ms` }}
              >
                <span className="font-heading grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-blue-700 to-red-500 text-base font-bold text-white">
                  {idx + 1}
                </span>
                <p className="pt-2 text-sm leading-7 text-slate-700">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto grid w-[min(1120px,92vw)] gap-10 pb-20 sm:pb-24 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-950/10 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              TRAININGS
            </p>
            <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Corporate trainings that prepare teams for future challenges
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Our corporate trainings aimed to impart recognized best corporate
              training solutions to the enterprise workforce to help develop
              skills needed to prepare for future business challenges and help
              drive better business outcomes. We offer a wide range of training
              programs that can help corporate sector organizations and students
              to achieve their respective goals.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-950/10 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              IT Support Services
            </p>
            <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Technology and support capabilities for business operations
            </h2>
            <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-700 sm:grid-cols-2">
              {[
                "Microsoft Certification",
                "Call Centre",
                "Support",
                "Social media",
                "Business Leads",
              ].map((item) => (
                <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}
