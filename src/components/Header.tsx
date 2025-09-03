"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Apple, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src="/appstore1024.png"
            alt="PixioX Logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
          <span className="text-xl font-bold">PixioX</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="/#features"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="/#download"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Download
          </a>
          <a
            href="/#faq"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            FAQ
          </a>
          <a
            href="/buy-me-a-coffee"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Buy me a coffee
          </a>
        </nav>
        <div></div>

        {/* Desktop Download Button */}
        {/* <Button size="sm" className="gap-2 hidden md:flex">
          <Apple className="h-4 w-4" />
          Download
        </Button> */}

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed top-16 left-0 right-0 bottom-0 bg-black/50 z-[60] md:hidden"
            onClick={closeMenu}
          />
          
          {/* Sidebar */}
          <div className="fixed top-16 right-0 w-80 h-[calc(100vh-4rem)] bg-background border-l shadow-xl z-[70] md:hidden overflow-y-auto">
            <div className="p-6">
              <nav className="space-y-4">
                <a
                  href="/#features"
                  className="block text-lg font-medium hover:text-primary transition-colors py-2"
                  onClick={closeMenu}
                >
                  Features
                </a>
                <a
                  href="/#download"
                  className="block text-lg font-medium hover:text-primary transition-colors py-2"
                  onClick={closeMenu}
                >
                  Download
                </a>
                <a
                  href="/#faq"
                  className="block text-lg font-medium hover:text-primary transition-colors py-2"
                  onClick={closeMenu}
                >
                  FAQ
                </a>
                <a
                  href="/buy-me-a-coffee"
                  className="block text-lg font-medium hover:text-primary transition-colors py-2"
                  onClick={closeMenu}
                >
                  Buy me a coffee
                </a>
              </nav>
              
              {/* <div className="mt-8 pt-6 border-t">
                <Button size="lg" className="w-full gap-2">
                  <Apple className="h-4 w-4" />
                  Download
                </Button>
              </div> */}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
