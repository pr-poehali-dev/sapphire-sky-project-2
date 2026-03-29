import { Calendar, MapPin, Star, Users, Bell, Heart, Plus, Minus, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Кто может добавить своё мероприятие в календарь?",
      answer:
        "Любая организация, учреждение культуры, городское сообщество или частный организатор из Липецка и Липецкой области может подать заявку на включение своего мероприятия. Заявки проходят модерацию для обеспечения качества и актуальности информации.",
    },
    {
      question: "Как часто обновляется календарь?",
      answer:
        "Календарь обновляется в режиме реального времени — сразу после проверки новых заявок. Организаторы могут редактировать информацию о своём мероприятии в любое время, а изменения отражаются немедленно.",
    },
    {
      question: "Какие мероприятия попадают в календарь?",
      answer:
        "В календарь включаются местные праздники, городские фестивали, культурные события, народные гуляния, ярмарки, концерты под открытым небом, исторические и спортивные мероприятия. Мы охватываем все районы Липецкой области.",
    },
    {
      question: "Можно ли получать уведомления о новых событиях?",
      answer:
        "Да! Подпишитесь на рассылку и выберите интересующие вас категории событий и районы. Мы будем присылать подборку ближайших мероприятий раз в неделю, а также срочные анонсы крупных праздников.",
    },
  ]

  const events = [
    {
      month: "Май",
      name: "День города Липецка",
      date: "25 мая",
      place: "Центральный парк",
      category: "Городской праздник",
    },
    {
      month: "Июнь",
      name: "Фестиваль «Липецкое лето»",
      date: "15–16 июня",
      place: "набережная р. Воронеж",
      category: "Фестиваль",
    },
    {
      month: "Июль",
      name: "Фольклорный фестиваль «Раздолье»",
      date: "12 июля",
      place: "с. Тербуны",
      category: "Народная культура",
    },
    {
      month: "Август",
      name: "Ярмарка мёда и ремёсел",
      date: "10–11 августа",
      place: "пл. Победы, Липецк",
      category: "Ярмарка",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://cdn.poehali.dev/projects/fd60ae5f-c832-450d-8a88-f62dae934b42/files/bedcb6ac-4d77-4cd6-a61b-6a903bef0820.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Calendar" size={20} />
            <span className="font-medium text-balance">Праздники Липецка</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Календарь", "О проекте", "Районы", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
            >
              Войти
            </a>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Добавить событие</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Единый реестр событий Липецкой области</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">
            Все праздники — в одном месте.
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Единый календарь местных праздников, фестивалей и культурных событий Липецка и Липецкой области. Не
            пропустите ни одного яркого момента в вашем регионе.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Смотреть календарь
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Добавить событие
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="MapPin" size={16} />
            <span className="text-sm font-medium">Липецк и все районы Липецкой области</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* All Events */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Calendar" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Все события региона</h3>
              <p className="text-white/80 leading-relaxed">
                Праздники, фестивали и мероприятия всех 20 районов области в одном месте.
              </p>
            </div>

            {/* Free Access */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Star" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Бесплатный доступ</h3>
              <p className="text-white/80 leading-relaxed">Просматривайте и добавляйте события без оплаты.</p>
            </div>

            {/* For Everyone */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Users" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Для всей семьи</h3>
              <p className="text-white/80 leading-relaxed">
                Детские, молодёжные, культурные и спортивные события для любого возраста.
              </p>
            </div>

            {/* Notifications */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Bell" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Напоминания</h3>
              <p className="text-white/80 leading-relaxed">
                Подписка на события по категориям и районам — ничего не пропустите.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Ближайшие события</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Крупнейшие праздники и фестивали Липецкой области этого сезона.
              </p>
            </div>

            {/* Events Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {events.map((event, i) => (
                <div key={i} className="rounded-2xl bg-black/30 ring-1 ring-white/10 p-6 flex flex-col gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-medium w-fit">
                    <Icon name="Tag" size={12} />
                    {event.category}
                  </div>
                  <div className="text-3xl font-bold text-white/30">{event.month}</div>
                  <h3 className="text-lg font-semibold leading-tight">{event.name}</h3>
                  <div className="flex items-center gap-1 text-white/60 text-sm">
                    <Icon name="Calendar" size={14} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white/60 text-sm">
                    <Icon name="MapPin" size={14} />
                    <span>{event.place}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-10 py-4 text-lg font-medium"
              >
                Открыть полный календарь
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-white/10 ring-1 ring-white/20 rounded-full text-sm">
                <Icon name="Heart" size={16} />
                О проекте
              </div>
              <h2 className="text-5xl font-bold tracking-tight mb-6 text-balance">
                Сохраняем культуру региона вместе
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Проект создан для жителей и гостей Липецкой области. Мы собираем информацию обо всех значимых событиях —
                от крупных городских праздников до камерных районных фестивалей — и делаем её доступной каждому.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { num: "20+", label: "районов области" },
                  { num: "200+", label: "событий в год" },
                  { num: "15 000+", label: "жителей следят" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold mb-1">{stat.num}</div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Music", title: "Фестивали", desc: "Народные, джазовые, классические" },
                { icon: "Star", title: "Городские праздники", desc: "Дни города, районные торжества" },
                { icon: "ShoppingBag", title: "Ярмарки", desc: "Народные промыслы и ремёсла" },
                { icon: "Trophy", title: "Спортивные события", desc: "Соревнования и марафоны" },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 mb-4">
                    <Icon name={item.icon} size={20} />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Частые вопросы</h2>
            <p className="text-xl text-white/80 text-pretty">Всё, что нужно знать о проекте</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium pr-4">{faq.question}</span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    {openFaq === index ? <Icon name="Minus" size={16} /> : <Icon name="Plus" size={16} />}
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold tracking-tight mb-4 text-balance">Добавьте ваше событие</h2>
              <p className="text-xl text-white/80 text-pretty">
                Организуете мероприятие в Липецкой области? Расскажите нам — мы добавим его в общий календарь
                бесплатно.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Название события</label>
                <input
                  type="text"
                  placeholder="Фестиваль «Липецкое лето»"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 ring-1 ring-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-white/40 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Организатор</label>
                <input
                  type="text"
                  placeholder="Название организации"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 ring-1 ring-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-white/40 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Дата проведения</label>
                <input
                  type="text"
                  placeholder="15–16 июня 2025"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 ring-1 ring-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-white/40 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Место проведения</label>
                <input
                  type="text"
                  placeholder="Адрес или район"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 ring-1 ring-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-white/40 transition-all"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-white/70 mb-2">Описание события</label>
                <textarea
                  rows={4}
                  placeholder="Расскажите подробнее о вашем мероприятии..."
                  className="w-full px-4 py-3 rounded-xl bg-white/10 ring-1 ring-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-white/40 transition-all resize-none"
                />
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-10 py-4 text-lg font-medium"
              >
                Отправить заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Left */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Calendar" size={20} />
                <span className="font-semibold text-lg">Праздники Липецка</span>
              </div>
              <p className="text-white/60 leading-relaxed max-w-sm">
                Единый календарь местных праздников и фестивалей Липецка и Липецкой области. Открытый проект для всех
                жителей региона.
              </p>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold text-lg mb-2">Подписка на события</h4>
              <p className="text-white/60 mb-4">Получайте анонсы ближайших праздников на почту каждую неделю.</p>
              <div className="flex gap-3">
                <div className="flex items-center gap-2 flex-1 px-4 py-3 rounded-full bg-white/10 ring-1 ring-white/20">
                  <Icon name="Mail" size={16} className="text-white/40 flex-shrink-0" />
                  <input
                    type="email"
                    placeholder="Ваш email"
                    className="bg-transparent text-white placeholder-white/40 focus:outline-none w-full"
                  />
                </div>
                <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6 flex-shrink-0">
                  Подписаться
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm">© 2025 Праздники Липецка. Открытый проект для жителей региона.</p>
            <div className="flex items-center gap-6 text-white/40 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
