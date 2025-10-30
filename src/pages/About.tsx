import { Award, Heart, Truck, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Quality First",
      description: "We partner with the best restaurants to bring you the finest meals.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Your food arrives fresh and hot, guaranteed within 30 minutes.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our top priority. We're here 24/7 for you.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Award-winning service that sets the standard in food delivery.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold">About Pisgoba</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We're on a mission to deliver happiness, one meal at a time. 
            Since 2020, we've been connecting food lovers with their favorite restaurants.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Pisgoba was born from a simple idea: everyone deserves access to 
                delicious, quality food without the hassle. What started as a small 
                operation in New York City has grown into a nationwide service.
              </p>
              <p>
                Today, we work with over 10,000 restaurants and have delivered more 
                than 5 million meals to happy customers across the country. But our 
                mission remains the same – to make great food accessible to everyone.
              </p>
              <p>
                We believe in supporting local restaurants, providing fair wages to 
                our delivery partners, and creating a sustainable food delivery ecosystem 
                that benefits everyone involved.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-6 text-center">
                <p className="mb-2 text-4xl font-bold text-primary">10k+</p>
                <p className="text-sm text-muted-foreground">Partner Restaurants</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <p className="mb-2 text-4xl font-bold text-primary">5M+</p>
                <p className="text-sm text-muted-foreground">Meals Delivered</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <p className="mb-2 text-4xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Cities Served</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <p className="mb-2 text-4xl font-bold text-primary">4.8★</p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Values</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center text-3xl font-bold">Join Our Team</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          We're always looking for passionate people to join our mission. 
          Whether you're a driver, developer, or food enthusiast, there's a place for you at Pisgoba.
        </p>
        <div className="text-center">
          <a href="/contact">
            <button className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
              View Open Positions
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
