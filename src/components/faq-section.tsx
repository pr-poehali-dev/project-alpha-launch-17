import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Можно ли заказать спецодежду под наши требования?",
      answer:
        "Да, мы разрабатываем модели под задачи конкретного предприятия — подбираем ткани, фурнитуру, крой и брендирование под ваш фирменный стиль.",
    },
    {
      question: "Каким стандартам соответствует продукция?",
      answer:
        "Вся продукция соответствует ТР ТС 019/2011, ТР ТС 017/2011, стандартам серии EN ISO и подтверждена заключениями Минпромторга РФ о производстве в России.",
    },
    {
      question: "Какой минимальный объём заказа?",
      answer:
        "Условия гибкие — обсуждаем объём индивидуально под потребности вашего предприятия. Оставьте заявку, и мы подготовим персональное предложение.",
    },
    {
      question: "Сколько занимает разработка новой модели?",
      answer:
        "Средний срок разработки и запуска новой модели — 40 дней. Точные сроки зависят от сложности изделия и согласуются на этапе договора.",
    },
    {
      question: "Доставляете ли вы в другие регионы?",
      answer:
        "Да, мы организуем удобную логистику и доставку готовой партии заказчику в согласованные сроки по всей России.",
    },
    {
      question: "Можно ли заказать только обувь или перчатки?",
      answer:
        "Конечно. Мы предлагаем комплексное оснащение, но вы можете заказать отдельные категории — защитную обувь, средства защиты рук или расходные материалы.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о спецодежде GP58™, производстве и условиях заказа.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}