import React from "react";
import HeroComponent from "@/components/Hero";
import FeatureComponent from "@/components/Features";
import PricingComponent from "@/components/Pricing";
import NewsLetterComponent from "@/components/NewsLetter";

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <FeatureComponent />
      <PricingComponent />
      <NewsLetterComponent />
    </div>
  );
}
