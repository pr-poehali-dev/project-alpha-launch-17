import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Этап 1 · 1–2 дня",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-4 leading-relaxed">
            Встреча с клиентом. Обсуждаем задачи предприятия, условия труда и требования к
            спецодежде, подбираем подходящие решения.
          </p>
        </div>
      ),
    },
    {
      title: "Этап 2 · 5–10 дней",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-4 leading-relaxed">
            Разработка и согласование. Создаём конструкцию модели, подбираем ткани и фурнитуру,
            готовим брендирование под фирменный стиль клиента.
          </p>
        </div>
      ),
    },
    {
      title: "Этап 3 · 7–14 дней",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-4 leading-relaxed">
            Пошив опытного образца и тестирование. Проверяем посадку, качество и защитные
            свойства, вносим правки до утверждения.
          </p>
        </div>
      ),
    },
    {
      title: "Этап 4 · до 40 дней",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-4 leading-relaxed">
            Запуск партии и контроль качества. Производим продукцию на 4 линиях пошива с проверкой
            на каждом шаге.
          </p>
        </div>
      ),
    },
    {
      title: "Этап 5 · по графику",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-4 leading-relaxed">
            Передача готовой партии. Удобная логистика и доставка заказчику в согласованные сроки.
          </p>
        </div>
      ),
    },
  ]

  return (
    <section id="stages" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-6">Этапы производства</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            От первой встречи с клиентом до передачи готовой партии — прозрачный процесс с
            понятными сроками на каждом этапе.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
