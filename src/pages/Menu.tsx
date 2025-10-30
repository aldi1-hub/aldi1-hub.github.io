import { useState } from "react";
import { Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import burgerImg from "@/assets/category-burger.jpg";
import pizzaImg from "@/assets/category-pizza.jpg";
import saladImg from "@/assets/category-salad.jpg";
import sushiImg from "@/assets/category-sushi.jpg";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const menuItems = [
    { id: 1, name: "Classic Burger", category: "burgers", price: 12.99, rating: 4.8, image: burgerImg, desc: "Juicy beef patty with fresh vegetables" },
    { id: 2, name: "Cheese Burger", category: "burgers", price: 14.99, rating: 4.7, image: burgerImg, desc: "Double cheese with premium beef" },
    { id: 3, name: "Pepperoni Pizza", category: "pizza", price: 16.99, rating: 4.9, image: pizzaImg, desc: "Classic pepperoni with mozzarella" },
    { id: 4, name: "Margherita Pizza", category: "pizza", price: 14.99, rating: 4.8, image: pizzaImg, desc: "Fresh tomato and basil" },
    { id: 5, name: "Caesar Salad", category: "salads", price: 9.99, rating: 4.7, image: saladImg, desc: "Romaine lettuce with Caesar dressing" },
    { id: 6, name: "Greek Salad", category: "salads", price: 10.99, rating: 4.6, image: saladImg, desc: "Fresh vegetables with feta cheese" },
    { id: 7, name: "Sushi Platter", category: "sushi", price: 24.99, rating: 4.9, image: sushiImg, desc: "Assorted fresh sushi rolls" },
    { id: 8, name: "Salmon Sashimi", category: "sushi", price: 18.99, rating: 4.8, image: sushiImg, desc: "Premium fresh salmon" },
  ];

  const categories = [
    { id: "all", name: "All Items" },
    { id: "burgers", name: "Burgers" },
    { id: "pizza", name: "Pizza" },
    { id: "salads", name: "Salads" },
    { id: "sushi", name: "Sushi" },
  ];

  const filteredItems = selectedCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold">Our Menu</h1>
          <p className="text-muted-foreground">Discover our delicious selection of meals</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Input
            placeholder="Search dishes..."
            className="max-w-md"
          />
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full md:w-auto">
            <TabsList className="grid w-full grid-cols-5">
              {categories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id}>
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Menu Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-background/90 px-2 py-1 text-sm font-semibold">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  {item.rating}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="mb-1 text-lg font-semibold">{item.name}</h3>
                <p className="mb-3 text-sm text-muted-foreground">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">${item.price}</span>
                  <Button size="sm" className="gap-1">
                    <Plus className="h-4 w-4" /> Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
