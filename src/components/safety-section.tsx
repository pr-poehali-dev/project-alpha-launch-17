import Icon from "@/components/ui/icon"

const advantages = [
  { title: "Надёжная защита", text: "Используем материалы с подтверждёнными защитными свойствами.", icon: "ShieldCheck" },
  { title: "Долговечность", text: "Усиленные швы, прочные ткани и фурнитура помогают одежде служить дольше.", icon: "Anvil" },
  { title: "Удобство движений", text: "Благодаря продуманному крою в одежде легко работать.", icon: "MoveDiagonal" },
  { title: "Практичные детали", text: "Функциональные карманы, регулируемые элементы, продуманная вентиляция.", icon: "Settings2" },
  { title: "Простота ухода", text: "Материалы легко очищаются и сохраняют форму после стирки.", icon: "Sparkles" },
]

export function SafetySection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden border border-red-500/20">
            <img
              src="https://cdn.poehali.dev/projects/bee2f160-c208-46ef-a2ad-110a45c3724e/files/5aa6fa8e-036e-47f9-8543-f1924933c3f0.jpg"
              alt="Заключение договора с клиентом GP58"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-foreground mb-8 font-orbitron">
              Что отличает нашу рабочую одежду
            </h2>
            <div className="space-y-5">
              {advantages.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-11 h-11 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                    <Icon name={item.icon} size={22} className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Наша цель — дать профессионалам удобную и надёжную одежду, которой можно доверять.
            Одежду, которая защищает по международным и российским стандартам, долго сохраняет вид
            и свойства и повышает эффективность труда.
          </p>
        </div>
      </div>
    </section>
  )
}
