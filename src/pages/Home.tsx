import { Link } from "react-router-dom";
import { ArrowRight, Clock, Star, TrendingUp, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-food.jpg";
import burgerImg from "@/assets/category-burger.jpg";
import pizzaImg from "@/assets/category-pizza.jpg";
import saladImg from "@/assets/category-salad.jpg";
import sushiImg from "@/assets/category-sushi.jpg";

const Home = () => {
  const categories = [
    { name: "Burgers", image: burgerImg, count: "45+ Items" },
    { name: "Pizza", image: pizzaImg, count: "38+ Items" },
    { name: "Salads", image: saladImg, count: "26+ Items" },
    { name: "Sushi", image: sushiImg, count: "32+ Items" },
  ];

  const features = [
    { icon: Truck, title: "Fast Delivery", desc: "Get your food in 30 minutes" },
    { icon: Star, title: "Top Quality", desc: "Fresh ingredients guaranteed" },
    { icon: Clock, title: "24/7 Service", desc: "Order anytime, anywhere" },
  ];

  const popularDishes = [
    { name: "Classic Burger", price: "$12.99", rating: 4.8, image: burgerImg },
    { name: "Pepperoni Pizza", price: "$16.99", rating: 4.9, image: pizzaImg },
    { name: "Caesar Salad", price: "$9.99", rating: 4.7, image: saladImg },
    { name: "Sushi Platter", price: "$24.99", rating: 4.9, image: sushiImg },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Delicious food"
            className="h-full w-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 container mx-auto flex h-full items-center px-4">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              Delicious Food <br />
              <span className="text-primary">Delivered Fast</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Order from your favorite restaurants and get fresh, hot meals delivered
              right to your door in 30 minutes or less.
            </p>
            <div className="flex gap-4">
              <Link to="/menu">
                <Button size="lg" className="gap-2">
                  Order Now <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Popular Categories</h2>
          <Link to="/menu">
            <Button variant="ghost" className="gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.name} to="/menu">
              <Card className="group overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-1 text-lg font-semibold">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Popular Dishes</h2>
            <Link to="/menu">
              <Button variant="ghost" className="gap-2">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {popularDishes.map((dish) => (
              <Card key={dish.name} className="group overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-background/90 px-2 py-1 text-sm font-semibold">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    {dish.rating}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-2 text-lg font-semibold">{dish.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{dish.price}</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold">Download Our App</h2>
          <p className="mb-8 text-lg opacity-90">
            Get exclusive deals and faster ordering on our mobile app
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary">
              Download on iOS
            </Button>
            <Button size="lg" variant="secondary">
              Download on Android
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
