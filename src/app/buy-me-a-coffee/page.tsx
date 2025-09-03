import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Coffee, Heart, Star } from "lucide-react";

export default function BuyMeACoffeePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Hero Section */}
            <div className="mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Coffee className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Support PixioX Development
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Help us continue building amazing features and improving your photo management experience. 
                Every contribution makes a difference!
              </p>
            </div>

            {/* Support Options */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Buy Me a Coffee */}
              <div className="bg-card border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 dark:bg-yellow-900/20 rounded-full mb-4">
                  <Coffee className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Buy Me a Coffee</h3>
                <p className="text-muted-foreground mb-6">
                  Show your appreciation with a coffee. Perfect for quick support!
                </p>
                <Button 
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white"
                //   onClick={() => window.open('https://buymeacoffee.com/pixiox', '_blank')}
                >
                  <Coffee className="w-4 h-4 mr-2" />
                  Buy Coffee
                </Button>
              </div>

              {/* GitHub Sponsors */}
              <div className="bg-card border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full mb-4">
                  <Heart className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">GitHub Sponsors</h3>
                <p className="text-muted-foreground mb-6">
                  Become a monthly sponsor and get exclusive updates and early access.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                //   onClick={() => window.open('https://github.com/sponsors/pixiox', '_blank')}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Sponsor on GitHub
                </Button>
              </div>

              {/* App Store Rating */}
              <div className="bg-card border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full mb-4">
                  <Star className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Rate & Review</h3>
                <p className="text-muted-foreground mb-6">
                  Leave a 5-star rating on the App Store. It helps others discover PixioX!
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                //   onClick={() => window.open('https://apps.apple.com/app/pixiox/id123456789', '_blank')}
                >
                  <Star className="w-4 h-4 mr-2" />
                  Rate on App Store
                </Button>
              </div>
            </div>

            {/* Thank You Message */}
            <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Thank You! 🙏</h2>
              <p className="text-muted-foreground">
                Your support means the world to us. It allows us to continue developing PixioX, 
                adding new features, fixing bugs, and making your photo management experience even better. 
                Every contribution, no matter how small, helps us grow and improve.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
