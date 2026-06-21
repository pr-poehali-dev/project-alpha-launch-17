import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const advantages = [
  { title: "Экономия времени", icon: "Clock" },
  { title: "Контроль качества", icon: "ShieldCheck" },
  { title: "Гибкие условия", icon: "Handshake" },
  { title: "Удобство логистики", icon: "Truck" },
  { title: "Поддержка и консультации", icon: "Headset" },
]

const catalog = [
  {
    title: "Защитная обувь",
    description: "Надёжная защита ног для любых условий труда — от производства до строительства.",
    image: "https://cdn.poehali.dev/projects/bee2f160-c208-46ef-a2ad-110a45c3724e/files/1d0af087-6cc1-4428-91d8-8330d1c471be.jpg",
  },
  {
    title: "Средства защиты рук",
    description: "Перчатки и защитная экипировка с подтверждёнными защитными свойствами.",
    image: "https://cdn.poehali.dev/projects/bee2f160-c208-46ef-a2ad-110a45c3724e/files/afbd2517-189c-4a2f-9bf4-de031fb0a9c3.jpg",
  },
  {
    title: "Хозяйственные и расходные материалы",
    description: "Мелочи, которые делают работу комфортнее и безопаснее каждый день.",
    image: "https://cdn.poehali.dev/projects/bee2f160-c208-46ef-a2ad-110a45c3724e/files/f88f78d6-b5a0-4a9a-9aac-0704a72704a4.jpg",
  },
]

export function FeaturesSection() {
  return (
    <section id="catalog" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-orbitron">Комплексный подход</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Предлагаем комплексный подход к оснащению предприятий — от спецодежды до мелочей,
            которые делают работу комфортнее и безопаснее.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-xl border border-red-500/20 bg-card slide-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                <Icon name={item.icon} size={24} className="text-red-500" />
              </div>
              <span className="text-sm font-semibold text-card-foreground">{item.title}</span>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4 font-orbitron">Каталог товаров</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Подобрали ключевые категории для оснащения вашего предприятия
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {catalog.map((item, index) => (
            <Card
              key={index}
              className="glow-border overflow-hidden hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-card-foreground mb-2 font-orbitron">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-2xl border border-red-500/30 bg-gradient-to-r from-red-500/10 via-red-500/5 to-red-500/10 p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-orbitron">
            Оставьте заявку прямо сейчас
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Мы подготовим персональное предложение для вашего предприятия.
          </p>
          <Button
            size="lg"
            className="bg-red-500 hover:bg-red-600 text-white text-lg px-8 py-4 pulse-button border-0"
          >
            Получить предложение
          </Button>
        </div>
      </div>
    </section>
  )
}
