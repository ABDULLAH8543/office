export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(165deg,#eef5ff_0%,#f8fbff_52%,#fff4f4_100%)] text-slate-900">
      <section className="mx-auto grid w-[min(1120px,92vw)] gap-10 py-16 sm:py-20 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Contact Us
          </p>
          <h1 className="font-heading mt-3 text-4xl font-bold text-slate-950 sm:text-5xl">
            Let us shape your business strategy.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
            Share your details and our consultants will connect with a tailored
            roadmap for business consultancy, trainings, and IT support services.
          </p>
        </div>

        <form className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-950/10 sm:grid-cols-2">
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
            placeholder="Business Sector"
            aria-label="Business Sector"
            className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none ring-blue-200 transition focus:ring"
          />
          <button
            type="button"
            className="sm:col-span-2 rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Request Consultation
          </button>
        </form>
      </section>
    </main>
  );
}
