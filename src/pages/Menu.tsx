import { useState } from "react";
import { Star, Plus, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import ProductDetailModal from "@/components/ProductDetailModal";
import burgerImg from "@/assets/category-burger.jpg";
import pizzaImg from "@/assets/category-pizza.jpg";
import saladImg from "@/assets/category-salad.jpg";
import sushiImg from "@/assets/category-sushi.jpg";
import gourmetBurgerImg from "@/assets/stock_images/gourmet_cheeseburger_f548de58.jpg";
import baconBurgerImg from "@/assets/stock_images/bacon_burger_with_cr_052b32a9.jpg";
import veggieBurgerImg from "@/assets/stock_images/veggie_burger_health_457ed7db.jpg";
import hawaiianPizzaImg from "@/assets/stock_images/hawaiian_pizza_with__4e9cff14.jpg";
import cheesePizzaImg from "@/assets/stock_images/quattro_formaggi_fou_2f7db3c8.jpg";
import veggiePizzaImg from "@/assets/stock_images/vegetarian_pizza_fre_c832c03a.jpg";
import gardenSaladImg from "@/assets/stock_images/fresh_green_salad_mi_3e96c446.jpg";
import capreseSaladImg from "@/assets/stock_images/caprese_salad_tomato_c1dcc48a.jpg";
import quinoaSaladImg from "@/assets/stock_images/quinoa_salad_healthy_6e381e9a.jpg";
import californiaRollImg from "@/assets/stock_images/california_sushi_rol_68193d4f.jpg";
import tunaNigiriImg from "@/assets/stock_images/tuna_sushi_nigiri_fr_87945d63.jpg";
import dragonRollImg from "@/assets/stock_images/dragon_roll_sushi_te_02c27de7.jpg";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<typeof menuItems[0] | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleQuickAdd = (item: typeof menuItems[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      desc: item.desc,
    });
    toast({
      title: "Added to cart!",
      description: `${item.name} added to your cart.`,
    });
  };

  const handleViewDetails = (item: typeof menuItems[0]) => {
    setSelectedProduct(item);
    setIsDetailModalOpen(true);
  };

  const menuItems = [
    { id: 1, name: "Classic Burger", category: "burgers", price: 12.99, rating: 4.8, image: burgerImg, desc: "Juicy beef patty with fresh vegetables" },
    { id: 2, name: "Cheese Burger", category: "burgers", price: 14.99, rating: 4.7, image: burgerImg, desc: "Double cheese with premium beef" },
    { id: 3, name: "Gourmet Cheeseburger", category: "burgers", price: 15.99, rating: 4.9, image: gourmetBurgerImg, desc: "Premium beef with gourmet cheese blend" },
    { id: 4, name: "Bacon Burger", category: "burgers", price: 16.49, rating: 4.8, image: baconBurgerImg, desc: "Crispy bacon with melted cheese" },
    { id: 5, name: "Veggie Burger", category: "burgers", price: 13.99, rating: 4.6, image: veggieBurgerImg, desc: "Plant-based patty with fresh veggies" },
    
    { id: 6, name: "Pepperoni Pizza", category: "pizza", price: 16.99, rating: 4.9, image: pizzaImg, desc: "Classic pepperoni with mozzarella" },
    { id: 7, name: "Margherita Pizza", category: "pizza", price: 14.99, rating: 4.8, image: pizzaImg, desc: "Fresh tomato and basil" },
    { id: 8, name: "Hawaiian Pizza", category: "pizza", price: 17.99, rating: 4.7, image: hawaiianPizzaImg, desc: "Ham and pineapple delight" },
    { id: 9, name: "Quattro Formaggi", category: "pizza", price: 18.99, rating: 4.9, image: cheesePizzaImg, desc: "Four cheese blend perfection" },
    { id: 10, name: "Vegetarian Pizza", category: "pizza", price: 15.99, rating: 4.8, image: veggiePizzaImg, desc: "Fresh vegetables and herbs" },
    
    { id: 11, name: "Caesar Salad", category: "salads", price: 9.99, rating: 4.7, image: saladImg, desc: "Romaine lettuce with Caesar dressing" },
    { id: 12, name: "Greek Salad", category: "salads", price: 10.99, rating: 4.6, image: saladImg, desc: "Fresh vegetables with feta cheese" },
    { id: 13, name: "Fresh Garden Salad", category: "salads", price: 8.99, rating: 4.5, image: gardenSaladImg, desc: "Mixed greens and seasonal vegetables" },
    { id: 14, name: "Caprese Salad", category: "salads", price: 11.99, rating: 4.8, image: capreseSaladImg, desc: "Tomato, mozzarella, and basil" },
    { id: 15, name: "Quinoa Power Bowl", category: "salads", price: 12.99, rating: 4.9, image: quinoaSaladImg, desc: "Protein-packed quinoa with fresh veggies" },
    
    { id: 16, name: "Sushi Platter", category: "sushi", price: 24.99, rating: 4.9, image: sushiImg, desc: "Assorted fresh sushi rolls" },
    { id: 17, name: "Salmon Sashimi", category: "sushi", price: 18.99, rating: 4.8, image: sushiImg, desc: "Premium fresh salmon" },
    { id: 18, name: "California Roll", category: "sushi", price: 14.99, rating: 4.7, image: californiaRollImg, desc: "Crab, avocado, and cucumber roll" },
    { id: 19, name: "Tuna Nigiri", category: "sushi", price: 16.99, rating: 4.8, image: tunaNigiriImg, desc: "Fresh tuna on seasoned rice" },
    { id: 20, name: "Dragon Roll", category: "sushi", price: 22.99, rating: 4.9, image: dragonRollImg, desc: "Eel and avocado with special sauce" },
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
            <Card key={item.id} className="group overflow-hidden transition-all hover:shadow-lg" data-testid={`card-product-${item.id}`}>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  data-testid={`img-product-${item.id}`}
                />
                <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-background/90 px-2 py-1 text-sm font-semibold">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  {item.rating}
                </div>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute left-2 top-2 h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
                  onClick={() => handleViewDetails(item)}
                  data-testid={`button-view-details-${item.id}`}
                >
                  <Info className="h-4 w-4" />
                </Button>
              </div>
              <CardContent className="p-4">
                <h3 className="mb-1 text-lg font-semibold" data-testid={`text-product-name-${item.id}`}>{item.name}</h3>
                <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary" data-testid={`text-price-${item.id}`}>${item.price}</span>
                  <Button 
                    size="sm" 
                    className="gap-1"
                    onClick={() => handleQuickAdd(item)}
                    data-testid={`button-add-${item.id}`}
                  >
                    <Plus className="h-4 w-4" /> Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <ProductDetailModal
          open={isDetailModalOpen}
          onOpenChange={setIsDetailModalOpen}
          product={selectedProduct}
        />
      </div>
    </div>
  );
};

export default Menu;
