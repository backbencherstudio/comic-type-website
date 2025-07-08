import Gallery from "@/components/home/Gallery";
import HeroVideo from "@/components/home/HeroVideo";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <div  className="min-h-screen bg-gray-100">
        <HeroVideo />
        <Gallery />
      </div>
      <div id="section1" className="min-h-screen bg-gray-100">why us</div>
      <div id="section2" className="min-h-screen bg-gray-100">faq page</div>
    </div>
  );
}
