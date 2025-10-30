import { Package, Truck, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Orders = () => {
  const orders = [
    {
      id: "ORD-001",
      date: "2024-03-20",
      status: "delivered",
      items: ["Classic Burger × 2", "Pepperoni Pizza × 1"],
      total: 42.97,
    },
    {
      id: "ORD-002",
      date: "2024-03-19",
      status: "in-transit",
      items: ["Caesar Salad × 2", "Sushi Platter × 1"],
      total: 44.97,
    },
    {
      id: "ORD-003",
      date: "2024-03-18",
      status: "preparing",
      items: ["Margherita Pizza × 1"],
      total: 14.99,
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-5 w-5" />;
      case "in-transit":
        return <Truck className="h-5 w-5" />;
      case "preparing":
        return <Clock className="h-5 w-5" />;
      default:
        return <Package className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-secondary text-secondary-foreground";
      case "in-transit":
        return "bg-primary text-primary-foreground";
      case "preparing":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold">My Orders</h1>
          <p className="text-muted-foreground">Track your order history and status</p>
        </div>

        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardContent className="p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-lg font-semibold">{order.id}</h3>
                      <Badge className={getStatusColor(order.status)}>
                        <span className="flex items-center gap-1">
                          {getStatusIcon(order.status)}
                          {order.status}
                        </span>
                      </Badge>
                    </div>
                    <p className="mb-2 text-sm text-muted-foreground">
                      Ordered on {new Date(order.date).toLocaleDateString()}
                    </p>
                    <div className="space-y-1">
                      {order.items.map((item, index) => (
                        <p key={index} className="text-sm">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3 md:items-end">
                    <p className="text-2xl font-bold text-primary">${order.total.toFixed(2)}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      {order.status === "delivered" && (
                        <Button size="sm">Reorder</Button>
                      )}
                      {order.status === "in-transit" && (
                        <Button size="sm">Track Order</Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {orders.length === 0 && (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16">
              <Package className="mb-4 h-16 w-16 text-muted-foreground" />
              <p className="mb-2 text-lg font-semibold">No orders yet</p>
              <p className="text-muted-foreground">Start ordering delicious food!</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Orders;
