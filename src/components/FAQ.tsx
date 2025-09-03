"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const faqItems: FAQItem[] = [
    {
      question: "What devices are compatible with PixioX?",
      answer:
        "PixioX is compatible with iOS 14.0 and later, optimized for both iPhone and iPad. The app works seamlessly across all modern iOS devices.",
    },
    {
      question: "Does PixioX support iCloud synchronization?",
      answer:
        "Yes! PixioX fully supports iCloud sync, ensuring your photo organization and collections are automatically synchronized across all your Apple devices.",
    },
    {
      question: "How does the gesture-based deletion work?",
      answer:
        "PixioX features intuitive gesture controls including swipe-to-delete, pinch-to-zoom, and natural hand-follow gestures for seamless photo management without complex menus.",
    },
    {
      question: "Can I organize photos into custom collections?",
      answer:
        "Absolutely! PixioX automatically creates smart monthly collections with color coding, and you can also create custom albums and add tags to organize your photos exactly how you want.",
    },
    {
      question: "Does PixioX work with Live Photos?",
      answer:
        "Yes, PixioX has full native Live Photo support with smooth playback and intuitive indicators, preserving the dynamic nature of your Live Photos.",
    },
    {
      question: "Is there a subscription fee for PixioX?",
      answer:
        "PixioX offers a one-time purchase with free updates for life. No recurring subscriptions or hidden fees - just a powerful photo management experience.",
    },
  ];

  return (
    <section id="faq" className="w-full py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about PixioX and photo management.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
