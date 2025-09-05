"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, HandMetal, FolderTree, RefreshCw } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description = "" }: FeatureCardProps) => {
  return (
    <Card className="bg-white dark:bg-gray-800 border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
        <div className="p-3 rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default function FeatureHighlights() {
  const features = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Live Photo Support",
      description:
        "Experience your memories with full Live Photo playback and intuitive indicators.",
    },
    {
      icon: <HandMetal className="h-8 w-8" />,
      title: "Gesture-Based Controls",
      description:
        "Intuitively manage your photos with natural swipe, and follow-hand deletion gestures.",
    },
    {
      icon: <FolderTree className="h-8 w-8" />,
      title: "Smart Organization",
      description:
        "Auto-sorted monthly collections with color coding make finding photos effortless.",
    },
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: "Real-Time Synchronization",
      description:
        "Enjoy seamless updates across all views with dynamic UI synchronization.",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            PixioX delivers a clean, modern, and powerful photo management
            experience — helping you rediscover your memories with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
