import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [cart, setCart] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "Пионы",
      category: "Цветущие",
      price: 1200,
      image: "https://cdn.poehali.dev/projects/4dd26662-1e36-4f20-b4a0-b4e3889b1b0e/files/a1779349-427c-46ac-8a8a-3432e33d33e7.jpg",
      description: "Нежные махровые пионы с тонким ароматом",
      care: "Средняя сложность",
    },
    {
      id: 2,
      name: "Суккуленты микс",
      category: "Комнатные",
      price: 650,
      image: "https://cdn.poehali.dev/projects/4dd26662-1e36-4f20-b4a0-b4e3889b1b0e/files/91dc793d-d301-4c35-bc27-a6b9f31b44a2.jpg",
      description: "Набор неприхотливых суккулентов в глиняных горшках",
      care: "Легко",
    },
    {
      id: 3,
      name: "Садовая коллекция",
      category: "Садовые",
      price: 2400,
      image: "https://cdn.poehali.dev/projects/4dd26662-1e36-4f20-b4a0-b4e3889b1b0e/files/71b129a9-f0d5-46ac-9b6e-8b99cfa51b32.jpg",
      description: "Ассорти из роз, тюльпанов и садовых цветов",
      care: "Требует внимания",
    },
  ];

  const addToCart = (id: number) => {
    setCart([...cart, id]);
  };

  const cartCount = cart.length;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
              <Icon name="Flower2" size={32} className="text-accent" />
              <span>Клумба</span>
            </a>
            <div className="flex items-center gap-6">
              <a href="/" className="text-primary font-medium">
                Главная
              </a>
              <a href="/delivery" className="text-foreground hover:text-primary transition-colors">
                Доставка
              </a>
              <Button variant="outline" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-accent">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <section className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/4dd26662-1e36-4f20-b4a0-b4e3889b1b0e/files/71b129a9-f0d5-46ac-9b6e-8b99cfa51b32.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/60" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-6xl font-bold text-foreground mb-4">
              Цветы и растения для вашего сада
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Природная красота в каждом горшке. Доставка по городу за 2-4 часа
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Sprout" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Truck" size={20} className="mr-2" />
                Условия доставки
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Популярные растения</h2>
          <p className="text-lg text-muted-foreground">
            Выращены с любовью в экологичных условиях
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 animate-scale-in group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4 bg-card/90 text-foreground border border-border">
                  {product.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center justify-between">
                  {product.name}
                  <span className="text-primary">{product.price}₽</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">{product.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Leaf" size={16} className="text-primary" />
                  <span className="text-muted-foreground">Уход: {product.care}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => addToCart(product.id)}
                >
                  <Icon name="ShoppingBag" size={18} className="mr-2" />
                  Добавить в корзину
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <section className="bg-accent/10 rounded-3xl p-12 mb-16 border-2 border-accent/20">
          <div className="max-w-3xl mx-auto text-center">
            <Icon name="Sparkles" size={48} className="text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Почему выбирают нас?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="space-y-3">
                <Icon name="Shield" size={32} className="text-primary mx-auto" />
                <h3 className="font-semibold text-lg">Гарантия качества</h3>
                <p className="text-muted-foreground text-sm">
                  Все растения проходят проверку перед отправкой
                </p>
              </div>
              <div className="space-y-3">
                <Icon name="Truck" size={32} className="text-primary mx-auto" />
                <h3 className="font-semibold text-lg">Быстрая доставка</h3>
                <p className="text-muted-foreground text-sm">
                  Доставим за 2-4 часа в центр города
                </p>
              </div>
              <div className="space-y-3">
                <Icon name="Heart" size={32} className="text-primary mx-auto" />
                <h3 className="font-semibold text-lg">С заботой о природе</h3>
                <p className="text-muted-foreground text-sm">
                  Экологичная упаковка и органическое выращивание
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 bg-card/30">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Клумба. Маркетплейс цветов и растений</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
