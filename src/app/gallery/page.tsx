const galleryCards = [
  "Business Consultancy Sessions",
  "HRM-Recruitment Workshops",
  "Market Entry Strategy Meetings",
  "International Business Events",
  "Corporate Training Programs",
  "IT Support Delivery Highlights",
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(165deg,#eef5ff_0%,#f8fbff_52%,#fff4f4_100%)] text-slate-900">
      <section className="mx-auto w-[min(1120px,92vw)] py-16 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          Gallery
        </p>
        <h1 className="font-heading mt-3 text-4xl font-bold text-slate-950 sm:text-5xl">
          A look into Brightex business and training moments.
        </h1>
      </section>

      <section className="mx-auto grid w-[min(1120px,92vw)] gap-4 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        {galleryCards.map((title, idx) => (
          <article
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-900/5"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(29,78,216,0.08),rgba(225,29,72,0.12))] opacity-0 transition group-hover:opacity-100" />
            <p className="relative text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              Photo {idx + 1}
            </p>
            <h2 className="font-heading relative mt-3 text-xl font-semibold text-slate-900">
              {title}
            </h2>
            <p className="relative mt-3 text-sm leading-7 text-slate-600">
              Highlights from consultancy engagements, market intelligence work,
              business events, and enterprise training delivery.
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
