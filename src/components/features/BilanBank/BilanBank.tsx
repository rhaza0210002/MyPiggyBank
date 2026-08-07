const categories = [
  { label: "Épargne", value: "42%", tone: "bg-[#f8d5cb] text-[#c86445]" },
  { label: "Budget mensuel", value: "78%", tone: "bg-[#e7f4e4] text-[#4d7a4d]" },
  { label: "Objectifs", value: "3/5", tone: "bg-[#f3ebdf] text-[#8d6b42]" },
];

export default function BilanBank() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-[#e5c4b4] bg-[#fff8f2] p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c86445]">
          Bilan 2026
        </p>
        <h1 className="mt-2 text-3xl font-bold text-[#5a4d41]">
          Une vision claire de tes finances.
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-[#7b655a]">
          Les indicateurs principaux montrent où tu avances bien et où un peu d’attention peut aider.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {categories.map((item) => (
          <article key={item.label} className="rounded-[1.5rem] border border-[#ead7ca] bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-[#7b655a]">{item.label}</p>
            <p className="mt-3 text-3xl font-bold text-[#5a4d41]">{item.value}</p>
            <span className={`mt-4 inline-flex rounded-full px-3 py-1 text-sm font-semibold ${item.tone}`}>
              En progression
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
