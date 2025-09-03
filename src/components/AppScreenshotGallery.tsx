"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Screenshot {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

export default function AppScreenshotGallery() {
  const screenshots: Screenshot[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
      alt: "Monthly view with color-coded collections",
      caption: "Smart monthly organization with color-coded collections",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
      alt: "Fullscreen photo browsing interface",
      caption: "Intuitive fullscreen browsing with gesture controls",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&q=80",
      alt: "Statistics dashboard",
      caption: "Comprehensive photo statistics dashboard",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1611162618479-ee4d1e0e3156?w=800&q=80",
      alt: "Live Photo playback",
      caption: "Native Live Photo support with smooth playback",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Experience PixioX
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how PixioX transforms your photo management experience with its
            intuitive interface and powerful features.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {screenshots.map((screenshot) => (
                <CarouselItem key={screenshot.id}>
                  <div className="p-1">
                    <Card className="border-0 shadow-lg overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img
                            src={screenshot.src}
                            alt={screenshot.alt}
                            className="w-full h-[500px] object-cover rounded-lg"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white">
                            <p className="text-lg font-medium">
                              {screenshot.caption}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-6" />
            <CarouselNext className="-right-4 md:-right-6" />
          </Carousel>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {screenshots.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`w-3 h-3 p-0 rounded-full ${currentIndex === index ? "bg-primary" : "bg-muted"}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
