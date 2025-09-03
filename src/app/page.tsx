"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureHighlights from "@/components/FeatureHighlights";
import AppScreenshotGallery from "@/components/AppScreenshotGallery";
import DownloadSection from "@/components/DownloadSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeatureHighlights />
      {/* <div >
        <AppScreenshotGallery />
      </div> */}
      <DownloadSection />
      <FAQ />
      <Footer />
    </div>
  );
}
