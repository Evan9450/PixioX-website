"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
}

export default function HeroSection({
  title = "Rediscover Your Memories with PixioX",
  subtitle = "A powerful photo management app designed for iOS, offering a smarter way to organize, browse, and manage your photos and videos.",
  ctaText = "Download Now",
}: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[800px] bg-gradient-to-b from-background to-background/80 flex items-center justify-center px-4 md:px-6 lg:px-8 overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-10 pb-10">
        {/* Text content */}
        <div className="flex flex-col space-y-6 max-w-xl text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="gap-2 text-md">
              {ctaText}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="relative w-full max-w-md">
          <div className="relative z-20 mx-auto">
            <div className="relative w-[280px] h-[570px] mx-auto rounded-[3rem] border-8 border-gray-800 shadow-xl overflow-hidden">
              {/* Phone frame */}
              <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 z-10">
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-600 rounded-full"></div>
              </div>

              {/* App screenshot */}
              <div className="relative h-full w-full bg-gray-50">
                <Image
                  src="/mainPage.jpg"
                  alt="PixioX App Interface"
                  fill
                  className="object-cover"
                  priority
                />

                {/* App UI overlay elements */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
                  <div className="absolute bottom-8 left-4 right-4">
                    <h3 className="text-white text-lg font-medium mb-2">
                      Monthly Collections
                    </h3>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {["January", "February", "March"].map((month, i) => (
                        <div
                          key={month}
                          className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium text-white ${
                            [
                              "bg-blue-500/80",
                              "bg-green-500/80",
                              "bg-purple-500/80",
                            ][i]
                          }`}
                        >
                          {month}
                        </div>
                      ))}
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Floating feature highlight */}
            <div className="absolute -right-4 bottom-1/3 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200 dark:bg-gray-800/90 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Smart Organization</p>
                  <p className="text-xs text-muted-foreground">
                    Auto-sorted collections
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 top-1/4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200 dark:bg-gray-800/90 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/20 p-2 rounded-full">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Live Photo Support</p>
                  <p className="text-xs text-muted-foreground">
                    Native playback
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
