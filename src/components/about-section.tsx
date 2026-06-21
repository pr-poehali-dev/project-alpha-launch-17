const facts = [
  { number: "34", unit: "года", text: "производим спецодежду в Великом Новгороде" },
  { number: "1200", unit: "м²", text: "площадь нашего производства" },
  { number: "500+", unit: "ед.", text: "продукции выпускаем ежемесячно" },
  { number: "20+", unit: "моделей", text: "спецодежды в постоянном ассортименте" },
  { number: "150+", unit: "видов", text: "тканей и материалов используем для пошива" },
  { number: "80+", unit: "машин", text: "швейного оборудования задействовано" },
  { number: "70+", unit: "человек", text: "работают над качественной спецодеждой" },
  { number: "4", unit: "линии", text: "пошива для гибкого масштабирования" },
  { number: "40", unit: "дней", text: "средний срок разработки новой модели" },
  { number: "95", unit: "%", text: "уровень выполнения производственного плана" },
]

export function AboutSection() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">
            Факты о производстве GP58™
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Цифры, которые говорят о наших производственных мощностях
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl border border-red-500/20 bg-gradient-to-b from-red-500/5 to-transparent slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-baseline justify-center gap-1 mb-3">
                <span className="text-4xl md:text-5xl font-extrabold text-red-500 font-orbitron">
                  {fact.number}
                </span>
                <span className="text-lg text-red-400 font-bold">{fact.unit}</span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">{fact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
