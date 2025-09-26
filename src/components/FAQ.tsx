"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const faqItems: FAQItem[] = [
    {
      question: "What devices are compatible with PixioX?",
      answer:
        "PixioX is compatible with iOS 17.0 and later, optimized for both iPhone and iPad. The app works seamlessly across all modern iOS devices.",
    },
    // {
    //   question: "Does PixioX support iCloud synchronization?",
    //   answer:
    //     "Yes! PixioX fully supports iCloud sync, ensuring your photo organization and collections are automatically synchronized across all your Apple devices.",
    // },
    {
      question: "What gesture controls does PixioX support?",
      answer:
        "PixioX makes photo browsing effortless with intuitive gestures: swipe left or right to navigate between photos, swipe up to send a photo to trash, tap the Favorites button to favorite or unfavorite, and tap Share to quickly share your photo. These natural interactions remove the need for complex menus.",
    },
    {
      question: "Does PixioX support Live Photos?",
      answer:
        "Yes! PixioX fully supports Live Photos with native playback. A Live Photo badge helps you identify them, and playback controls let you relive your moments with motion and sound.",
    },
    {
      question: "How does monthly photo organization work?",
      answer:
        "PixioX automatically organizes your photos by month and displays them in color-coded cards. Each card includes previews and statistics, making it easy to explore and manage your memories month by month.",
    },
    {
      question: "Can I restore photos after deleting them?",
      answer:
        "Yes. PixioX includes a confirmation step and a restore option for deleted photos, giving you control and peace of mind when managing your library.",
    },

    // {
    //   question: "Is there a subscription fee for PixioX?",
    //   answer:
    //     "PixioX offers a one-time purchase with free updates for life. No recurring subscriptions or hidden fees - just a powerful photo management experience.",
    // },
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
