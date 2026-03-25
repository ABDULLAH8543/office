export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(165deg,#eef5ff_0%,#f8fbff_52%,#fff4f4_100%)] text-slate-900">
      <section className="mx-auto w-[min(1120px,92vw)] py-16 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">
          About Brightex
        </p>
        <h1 className="font-heading mt-3 text-4xl font-bold text-slate-950 sm:text-5xl">
          Strategic business consultancy for local and international growth.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          From evolving customer expectations to launching new businesses in
          Pakistan or overseas, organizations face constant change. Brightex
          helps you adapt with practical strategy, trusted market insight, and
          execution support that keeps you competitive.
        </p>
      </section>

      <section className="mx-auto grid w-[min(1120px,92vw)] gap-4 pb-20 md:grid-cols-3">
        {[
          [
            "Business",
            "Consulting support for business setup, market entry, events, and sector opportunities.",
          ],
          [
            "Trainings",
            "Corporate training programs that build practical skills for future business challenges.",
          ],
          [
            "IT Support",
            "Microsoft certification pathways, call centre support, social media support, and lead support.",
          ],
        ].map(([title, body]) => (
          <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-900/5">
            <h2 className="font-heading text-xl font-semibold text-blue-900">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
