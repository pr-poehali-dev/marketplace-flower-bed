import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Delivery = () => {
  const deliveryZones = [
    { name: "Центр города", time: "2-4 часа", price: "Бесплатно" },
    { name: "Спальные районы", time: "4-6 часов", price: "300₽" },
    { name: "Пригород", time: "1-2 дня", price: "500₽" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
              <Icon name="Flower2" size={32} className="text-accent" />
              <span>Клумба</span>
            </a>
            <div className="flex gap-6">
              <a href="/" className="text-foreground hover:text-primary transition-colors">
                Главная
              </a>
              <a href="/delivery" className="text-primary font-medium">
                Доставка
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Доставка цветов
          </h1>
          <p className="text-lg text-muted-foreground mb-12 animate-fade-in">
            Мы доставим ваши растения бережно и в срок
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {deliveryZones.map((zone, index) => (
              <Card 
                key={zone.name} 
                className="hover:shadow-lg transition-shadow animate-scale-in border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    {zone.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Clock" size={18} />
                    <span>{zone.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-semibold text-lg">
                    <Icon name="Banknote" size={18} />
                    <span>{zone.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-8 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="Package" size={28} className="text-accent" />
                Условия доставки
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Бережная упаковка</h3>
                  <p className="text-muted-foreground">
                    Каждое растение упаковывается индивидуально с использованием экологичных материалов
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Контроль температуры</h3>
                  <p className="text-muted-foreground">
                    Специальные автомобили с климат-контролем для сохранения свежести
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Гарантия качества</h3>
                  <p className="text-muted-foreground">
                    Если растение пришло поврежденным, мы заменим его бесплатно в течение 24 часов
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Отслеживание заказа</h3>
                  <p className="text-muted-foreground">
                    Следите за доставкой в режиме реального времени через мобильное приложение
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-accent/10 border-accent/30">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="Phone" size={28} className="text-accent" />
                Остались вопросы?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Свяжитесь с нами любым удобным способом
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={18} className="text-primary" />
                  <span className="font-medium">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={18} className="text-primary" />
                  <span className="font-medium">info@klumba.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MessageCircle" size={18} className="text-primary" />
                  <span className="font-medium">Онлайн-чат на сайте</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="border-t border-border mt-16 py-8 bg-card/30">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Клумба. Маркетплейс цветов и растений</p>
        </div>
      </footer>
    </div>
  );
};

export default Delivery;
