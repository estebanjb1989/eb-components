export default function ServiceSteps() {
  const steps = [
    {
      number: "1",
      title: "AUTOMATIZACIÓN E INTEGRACIÓN:",
      desc: "Optimización de ERP, CRM y APIs.",
    },
    {
      number: "2",
      title: "AGENTES DE IA GENERATIVA:",
      desc: "Asistentes inteligentes para clientes y procesos internos.",
    },
    {
      number: "3",
      title: "DESARROLLO DE APLICACIONES:",
      desc: "Soluciones web y móviles personalizadas.",
    },
  ];

  return (
    <section className="bg-[#F9F0D9] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#d76b39]/40 text-center">
        {steps.map((s) => (
          <div key={s.number} className="px-6 py-10 flex flex-col items-center">
            <h2 className="text-6xl font-semibold text-[#d76b39] mb-3">{s.number}</h2>
            <h3 className="text-[#d76b39] font-bold uppercase tracking-wide text-sm mb-2">
              {s.title}
            </h3>
            <p className="text-gray-700 max-w-[240px] leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
