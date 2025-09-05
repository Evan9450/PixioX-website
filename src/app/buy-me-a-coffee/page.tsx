"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Coffee, Heart, Star, Check } from "lucide-react";
import { useState } from "react";

export default function BuyMeACoffeePage() {
  const [selectedSize, setSelectedSize] = useState<'small' | 'medium' | 'large'>('medium');

  const coffeeSizes = [
    {
      id: 'small' as const,
      name: 'Small',
      price: '$3',
      icon: '☕',
      description: 'A small gesture of support'
    },
    {
      id: 'medium' as const,
      name: 'Medium',
      price: '$4',
      icon: '☕',
      description: 'Perfect for keeping us motivated'
    },
    {
      id: 'large' as const,
      name: 'Large',
      price: '$5',
      icon: '☕',
      description: 'Extra boost for development'
    }
  ];

  const handleBuyCoffee = () => {
    const stripeUrl = getStripeUrl();
    // Open Stripe payment in a popup window
    const popup = window.open(
      stripeUrl,
      'stripe-payment',
      'width=600,height=700,scrollbars=yes,resizable=yes,status=yes,location=yes,toolbar=no,menubar=no'
    );
    
    // Focus the popup window
    if (popup) {
      popup.focus();
    }
  };

  const getStripeUrl = () => {
    const size = coffeeSizes.find(s => s.id === selectedSize);
    // Switch Stripe payment link
    switch (size?.name.toLowerCase()) {
      case 'small':
        return 'https://buy.stripe.com/eVq4gzd3g4OEfYncGJg7e02';
      case 'medium':
        return 'https://buy.stripe.com/6oUdR90gu1CsfYn7mpg7e00';
      case 'large':
        return 'https://buy.stripe.com/00weVd8N02Gw27xcGJg7e01';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Hero Section */}
            <div className="mb-16">
              {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Coffee className="w-10 h-10 text-primary" />
              </div> */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Support PixioX Development
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Help us continue building amazing features and improving your photo management experience. 
                Every contribution makes a difference!
              </p>
            </div>

            {/* Coffee Size Selection */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="bg-card border rounded-xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 dark:bg-yellow-900/20 rounded-full mb-4">
                    <Coffee className="w-10 h-10 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Buy Me a Coffee</h3>
                  <p className="text-muted-foreground">
                    Choose your coffee size and show your support for PixioX development
                  </p>
                </div>

                {/* Coffee Size Options */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {coffeeSizes.map((size) => (
                    <div
                      key={size.id}
                      className={`relative p-6 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                        selectedSize === size.id
                          ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/10'
                          : 'border-gray-200 dark:border-gray-700 hover:border-yellow-300'
                      }`}
                      onClick={() => setSelectedSize(size.id)}
                    >
                      {selectedSize === size.id && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                      
                      <div className="text-center">
                        <div className="text-4xl mb-3">{size.icon}</div>
                        <h4 className="text-lg font-semibold mb-2">{size.name}</h4>
                        <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                          {size.price}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {size.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Buy Button */}
                <Button 
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white h-12 text-lg"
                  onClick={handleBuyCoffee}
                >
                  <Coffee className="w-5 h-5 mr-2" />
                  Buy {coffeeSizes.find(s => s.id === selectedSize)?.name} Coffee
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
