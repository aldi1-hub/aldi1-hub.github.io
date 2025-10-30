import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import burgerImg from "@/assets/category-burger.jpg";
import pizzaImg from "@/assets/category-pizza.jpg";
import saladImg from "@/assets/category-salad.jpg";

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Classic Burger", price: 12.99, quantity: 2, image: burgerImg },
    { id: 2, name: "Pepperoni Pizza", price: 16.99, quantity: 1, image: pizzaImg },
    { id: 3, name: "Caesar Salad", price: 9.99, quantity: 1, image: saladImg },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 3.99;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-4xl font-bold">Shopping Cart</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-16">
                  <p className="mb-4 text-lg text-muted-foreground">Your cart is empty</p>
                  <Link to="/menu">
                    <Button>Browse Menu</Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-24 w-24 rounded-lg object-cover"
                        />
                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-lg font-bold text-primary">${item.price}</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Button size="icon" variant="outline" className="h-8 w-8">
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center font-semibold">{item.quantity}</span>
                              <Button size="icon" variant="outline" className="h-8 w-8">
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            <Button size="icon" variant="ghost" className="text-destructive">
                              <Trash2 className="h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-bold">Order Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>
                <Link to="/checkout">
                  <Button className="mt-6 w-full" size="lg">
                    Proceed to Checkout
                  </Button>
                </Link>
                <Link to="/menu">
                  <Button className="mt-3 w-full" variant="outline">
                    Continue Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
