import { User, MapPin, CreditCard, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-4xl font-bold">My Profile</h1>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Profile Overview */}
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                <User className="h-12 w-12 text-primary" />
              </div>
              <h2 className="mb-1 text-xl font-bold">John Doe</h2>
              <p className="mb-4 text-sm text-muted-foreground">john.doe@example.com</p>
              <Button className="w-full">Edit Profile</Button>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>

            {/* Saved Addresses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Saved Addresses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-semibold">Home</h3>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    123 Main Street, Apt 4B<br />
                    New York, NY 10001
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-semibold">Work</h3>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    456 Office Plaza, Suite 200<br />
                    New York, NY 10002
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  Add New Address
                </Button>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Methods
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-16 items-center justify-center rounded bg-primary/10">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">•••• 4242</p>
                        <p className="text-sm text-muted-foreground">Expires 12/25</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Remove
                    </Button>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Add New Card
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
