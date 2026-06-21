import Icon from "@/components/ui/icon"

const standards = [
  "ТР ТС 019/2011",
  "ТР ТС 017/2011",
  "Стандарты серии EN ISO",
  "Заключения Минпромторга РФ о подтверждении производства в РФ",
]

export function TechnologySection() {
  return (
    <section
      id="production"
      className="relative py-32 px-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)), url('https://cdn.poehali.dev/projects/bee2f160-c208-46ef-a2ad-110a45c3724e/files/1da99e72-d163-4eb3-aa42-c9423479380c.jpg')",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-orbitron">
          Производство рабочей одежды GP58™
        </h2>
        <p className="text-lg text-gray-200 leading-relaxed mb-6">
          Мы производим рабочую одежду, которая помогает профессионалам чувствовать себя уверенно
          в сложных условиях. Каждая модель GP58™ проходит несколько этапов разработки и
          тестирования — мы хотим быть уверены, что одежда не подведёт на работе.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-10">
          Вся наша продукция соответствует требованиям международных и российских стандартов
          качества и безопасности:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {standards.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-left p-4 rounded-lg border border-red-500/30 bg-black/50 backdrop-blur-sm"
            >
              <Icon name="BadgeCheck" size={22} className="text-red-500 shrink-0" />
              <span className="text-white text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
