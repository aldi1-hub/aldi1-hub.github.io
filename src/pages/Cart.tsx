import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart, getCartTotal } = useCart();

  const subtotal = getCartTotal();
  const deliveryFee = cartItems.length > 0 ? 3.99 : 0;
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
                  <ShoppingBag className="mb-4 h-16 w-16 text-muted-foreground" />
                  <p className="mb-2 text-xl font-semibold">Your cart is empty</p>
                  <p className="mb-4 text-muted-foreground">Add some delicious items from our menu!</p>
                  <Link to="/menu">
                    <Button data-testid="button-browse-menu">Browse Menu</Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} data-testid={`cart-item-${item.id}`}>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-24 w-24 rounded-lg object-cover"
                        />
                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <h3 className="font-semibold" data-testid={`text-cart-item-name-${item.id}`}>{item.name}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-1">{item.desc}</p>
                            <p className="text-lg font-bold text-primary" data-testid={`text-cart-item-price-${item.id}`}>${item.price.toFixed(2)}</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Button 
                                size="icon" 
                                variant="outline" 
                                className="h-8 w-8"
                                onClick={() => decrementQuantity(item.id)}
                                data-testid={`button-decrease-${item.id}`}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center font-semibold" data-testid={`text-quantity-${item.id}`}>{item.quantity}</span>
                              <Button 
                                size="icon" 
                                variant="outline" 
                                className="h-8 w-8"
                                onClick={() => incrementQuantity(item.id)}
                                data-testid={`button-increase-${item.id}`}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            <Button 
                              size="icon" 
                              variant="ghost" 
                              className="text-destructive"
                              onClick={() => removeFromCart(item.id)}
                              data-testid={`button-remove-${item.id}`}
                            >
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
                    <span data-testid="text-subtotal">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Delivery Fee</span>
                    <span data-testid="text-delivery-fee">${deliveryFee.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary" data-testid="text-total">${total.toFixed(2)}</span>
                  </div>
                </div>
                <Link to="/checkout">
                  <Button className="mt-6 w-full" size="lg" disabled={cartItems.length === 0} data-testid="button-checkout">
                    Proceed to Checkout
                  </Button>
                </Link>
                <Link to="/menu">
                  <Button className="mt-3 w-full" variant="outline" data-testid="button-continue-shopping">
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
