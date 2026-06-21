import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Игорь Семёнов",
    role: "Начальник снабжения, строительный холдинг",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Заказываем спецодежду GP58™ третий год. Качество стабильное, швы крепкие, сроки соблюдают. Сотрудники довольны.",
  },
  {
    name: "Марина Власова",
    role: "Директор по закупкам, производственное предприятие",
    avatar: "/professional-woman-scientist.png",
    content:
      "Подкупает комплексный подход — закрыли всё от обуви до перчаток в одном месте. Менеджеры всегда на связи и помогают с подбором.",
  },
  {
    name: "Алексей Гордеев",
    role: "Руководитель цеха",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Одежда реально удобная в работе — крой продуман, ничего не сковывает. После стирок сохраняет вид. Берём повторно.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-orbitron">Нам доверяют предприятия</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят о спецодежде GP58™ наши клиенты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}