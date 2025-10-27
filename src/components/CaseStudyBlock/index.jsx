export default function CaseStudyBlock() {
  const data = {
    solucion: {
      tag: "SOLUCIÓN",
      desc: "agente conversacional integrado con Kommo CRM.",
      stats: [
        { value: "93%", text: "de consultas resueltas sin intervención humana" },
        { value: "57.000", text: "conversaciones en 8 meses" },
      ],
    },
    desafio: {
      tag: "DESAFÍO",
      desc: "mejorar atención al cliente y embudo comercial.",
      stats: [
        { value: "39", text: "segundos\nTiempo medio de respuesta" },
        { value: "10", text: "Leads multiplicados por", bold: true },
      ],
    },
  };

  const renderStat = (s) => (
    <div key={s.value}>
      <p className="text-[#5a2fc2] font-bold text-3xl">{s.value}</p>
      <p className="text-[#5a2fc2] whitespace-pre-line leading-snug font-light">
        {s.text}
      </p>
    </div>
  );

  return (
    <section className="bg-[#F9F0D9] py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-start">
        {/* SOLUCIÓN */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-[#e36f3d] text-white font-bold px-4 py-1 rounded">
              {data.solucion.tag}
            </span>
            <p className="text-gray-600">{data.solucion.desc}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {data.solucion.stats.map(renderStat)}
          </div>
        </div>

        {/* DESAFÍO */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-[#e36f3d] text-white font-bold px-4 py-1 rounded">
              {data.desafio.tag}
            </span>
            <p className="text-gray-600">{data.desafio.desc}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {data.desafio.stats.map((s) => (
              <div key={s.value}>
                <p className="text-[#5a2fc2] font-bold text-3xl">{s.value}</p>
                <p className="text-[#5a2fc2] whitespace-pre-line leading-snug font-light">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
