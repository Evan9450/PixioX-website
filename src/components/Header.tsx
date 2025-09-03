"use client";

import React from "react";
import { Button } from "./ui/button";
import { Apple } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=pixiox"
            alt="PixioX Logo"
            className="h-8 w-8 rounded-full"
          />
          <span className="text-xl font-bold">PixioX</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#screenshots"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Screenshots
          </a>
          <a
            href="#faq"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            FAQ
          </a>
        </nav>

        <Button size="sm" className="gap-2">
          <Apple className="h-4 w-4" />
          Download
        </Button>
      </div>
    </header>
  );
}
