export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(165deg,#eef5ff_0%,#f8fbff_52%,#fff4f4_100%)] text-slate-900">
      <header className="relative overflow-x-clip border-b border-slate-200/70">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -left-24 -top-32 h-96 w-96 rounded-full bg-blue-400/30 blur-3xl" />
          <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-red-400/30 blur-3xl" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_39px,rgba(148,163,184,0.08)_40px)]" />
        </div>

        <nav className="sticky top-0 z-50 mx-auto mt-3 flex w-[min(1120px,92vw)] items-center justify-between rounded-2xl border border-white/25 bg-gradient-to-r from-rose-600 via-fuchsia-600 to-indigo-700 px-4 py-4 text-white shadow-xl shadow-fuchsia-900/25 backdrop-blur animate-fade-up sm:px-6">
          <div>
            <p className="font-heading text-xl font-bold tracking-tight text-white">
              GlobalBridge Visa Consult
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-white/80">
              Immigration Advisory
            </p>
          </div>
          <a
            href="#consultation"
            className="rounded-full border border-white/35 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/25"
          >
            Book Consultation
          </a>
        </nav>

        <div className="relative mx-auto grid w-[min(1120px,92vw)] gap-10 pb-20 pt-10 md:grid-cols-[1.15fr_0.85fr] md:items-end md:pb-24">
          <div className="animate-fade-up [animation-delay:120ms] [animation-fill-mode:both]">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-red-500">
              Trusted Global Visa Guidance
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Professional visa consultancy for students, professionals, and
              families.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              From profile assessment to final submission, our consultants build
              a clear, compliant, and approval-focused roadmap for each client.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#consultation"
                className="rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(29,78,216,0.28)] transition hover:-translate-y-0.5 hover:bg-blue-800"
              >
                Start Your Case
              </a>
              <a
                href="#services"
                className="rounded-full border border-red-300 bg-red-50 px-6 py-3 text-sm font-semibold text-red-700 transition hover:-translate-y-0.5 hover:bg-red-100"
              >
                Explore Services
              </a>
            </div>
          </div>

          <aside className="animate-fade-up rounded-2xl border border-slate-200 bg-white/85 p-6 shadow-xl shadow-blue-950/10 backdrop-blur [animation-delay:260ms] [animation-fill-mode:both]">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Why Clients Choose Us
            </p>
            <ul className="mt-4 space-y-4 text-sm text-slate-700">
              <li className="rounded-xl border border-slate-200 bg-white p-3">
                Country-specific documentation review and compliance checks.
              </li>
              <li className="rounded-xl border border-slate-200 bg-white p-3">
                Interview simulation and refusal-risk minimization.
              </li>
              <li className="rounded-xl border border-slate-200 bg-white p-3">
                Transparent timelines with dedicated case manager support.
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
                Core Services
              </p>
              <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
                Comprehensive Visa Solutions
              </h2>
            </div>
            <p className="hidden max-w-md text-sm leading-7 text-slate-600 lg:block">
              Designed with the same structured advisory approach used by top
              professional consulting firms.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Study Visa Advisory",
              "Work Permit & Skilled Migration",
              "Visitor & Family Sponsorship",
              "Business & Investor Visa",
            ].map((service, idx) => (
              <article
                key={service}
                className="animate-fade-up rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 [animation-fill-mode:both]"
                style={{ animationDelay: `${140 + idx * 90}ms` }}
              >
                <div className="mb-4 h-1.5 w-14 rounded-full bg-gradient-to-r from-blue-600 to-red-500" />
                <h3 className="font-heading text-lg font-semibold text-blue-900">
                  {service}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  End-to-end support including eligibility checks, documentation,
                  application filing, and post-submission updates.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[linear-gradient(100deg,#0f3ca5,#cd3b3b)] py-14 text-white sm:py-16">
          <div className="mx-auto grid w-[min(1120px,92vw)] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["2,500+", "Applications Filed"],
              ["96%", "Approval-Oriented Success"],
              ["11+", "Years in Consultancy"],
              ["20+", "Destination Programs"],
            ].map(([value, label], idx) => (
              <div
                key={label}
                className="animate-fade-up rounded-2xl border border-white/25 bg-white/10 p-5 backdrop-blur [animation-fill-mode:both]"
                style={{ animationDelay: `${100 + idx * 80}ms` }}
              >
                <p className="font-heading text-3xl font-bold">{value}</p>
                <p className="mt-2 text-sm text-white/90">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid w-[min(1120px,92vw)] gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
              Process
            </p>
            <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Structured Consulting Workflow
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-8 text-slate-600 sm:text-base">
              We follow a disciplined advisory model: evaluate, prepare,
              present, and monitor. This process ensures clarity, compliance,
              and confidence at every stage.
            </p>
          </div>

          <ol className="space-y-3">
            {[
              "Profile review and destination shortlisting",
              "Document strategy and quality assurance",
              "Application submission and tracking",
              "Interview coaching and decision support",
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

        <section id="consultation" className="pb-20">
          <div className="mx-auto w-[min(1120px,92vw)] rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl shadow-blue-950/10 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                  Contact Our Team
                </p>
                <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
                  Ready to Begin Your Visa Journey?
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Schedule a confidential consultation and receive a personalized
                  roadmap from our immigration specialists.
                </p>
              </div>

              <form className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  aria-label="Full Name"
                  className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none ring-blue-200 transition focus:ring"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none ring-blue-200 transition focus:ring"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none ring-blue-200 transition focus:ring"
                />
                <input
                  type="text"
                  placeholder="Preferred Country"
                  aria-label="Preferred Country"
                  className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none ring-blue-200 transition focus:ring"
                />
                <button
                  type="button"
                  className="sm:col-span-2 rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  Request Callback
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
