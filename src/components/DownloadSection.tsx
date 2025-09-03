"use client";

import React from "react";
import { Button } from "./ui/button";
import { Apple, Check } from "lucide-react";

interface DownloadSectionProps {
  title?: string;
  description?: string;
  appStoreLink?: string;
  compatibilityInfo?: string[];
}

export default function DownloadSection({
  title = "Get PixioX Today",
  description = "Start organizing your photos smarter, not harder. Download PixioX and rediscover your memories with ease.",
  appStoreLink = "https://apps.apple.com/app/pixiox",
  compatibilityInfo = [
    "Compatible with iOS 14.0 and later",
    "Optimized for iPhone and iPad",
    "iCloud sync supported",
    "Free updates for life",
  ],
}: DownloadSectionProps) {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-8">{description}</p>

          <div className="mb-10">
            <Button
              size="lg"
              className="h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open(appStoreLink, "_blank")}
            >
              <Apple className="mr-2 h-5 w-5" />
              Download on App Store
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            {compatibilityInfo.map((info, index) => (
              <div key={index} className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm">{info}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 flex items-center justify-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-primary/10 animate-pulse"></div>
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=pixiox"
                alt="PixioX Logo"
                className="h-16 w-16 rounded-full border-2 border-primary"
              />
              <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-primary/10 animate-pulse delay-300"></div>
            </div>
            <div className="ml-4 text-left">
              <p className="font-medium">PixioX Team</p>
              <p className="text-sm text-muted-foreground">
                Helping you rediscover your memories
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
