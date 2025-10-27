export default function CoreValues() {
  const items = [
    {
      bold: "Startup independiente",
      text: "con respaldo de grupo.",
    },
    {
      bold: "IA aplicada a negocio,",
      text: "no a moda.",
    },
    {
      bold: "Velocidad, escalabilidad y resultados",
      text: "medibles.",
    },
    {
      bold: "Entendemos tanto de tecnología",
      text: "como de comunicación.",
    },
  ];

  return (
    <section className="bg-[#F9F0D9] py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#d76b39]/40 text-center">
        {items.map((item, i) => (
          <div key={i} className="px-6 py-6">
            <p className="text-gray-800 font-semibold mb-1">{item.bold}</p>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
