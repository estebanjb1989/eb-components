import { MessageCircle, Star, Settings } from "lucide-react";

export default function BusinessValues() {
  const left = [
    {
      icon: <MessageCircle className="text-purple-700 w-6 h-6" />,
      text: "Tenemos soluciones que aumentan la eficiencia del negocio.",
    },
    {
      icon: <Star className="text-purple-700 w-6 h-6" />,
      text: "Partner estratégico en IA y automatización.",
    },
    {
      icon: <Settings className="text-purple-700 w-6 h-6" />,
      text: "Comprensión profunda del negocio antes de aplicar tecnología.",
    },
  ];

  const right = [
    { text: "Costos flexibles y adaptados a la realidad de las empresas." },
    { text: "Proyectos modulares que escalan con tu negocio, listos en 3 a 5 meses." },
    { text: "No vendemos tecnología, entregamos soluciones." },
  ];

  const renderItem = (item, withIcon = false) => (
    <div key={item.text} className="flex items-start gap-3 mb-6">
      {withIcon && <div className="mt-1">{item.icon}</div>}
      <div className="flex-1">
        <p className="text-gray-700 font-light">{item.text}</p>
        <div className="h-[2px] bg-purple-500 mt-2 w-full" />
      </div>
    </div>
  );

  return (
    <section className="bg-[#F9F0D9] py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          {left.map((item) => renderItem(item, true))}
        </div>
        <div>
          {right.map((item) => renderItem(item))}
        </div>
      </div>
    </section>
  );
}
