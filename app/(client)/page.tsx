import Gallery from "@/components/home/Gallery";
import HeroVideo from "@/components/home/HeroVideo";
import OurMission from "@/components/home/OurMission";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <div  className="">
        <HeroVideo />
        <Gallery />
      </div>
      <div id="section1" className=""><OurMission /></div>
      <div id="section2" className="">faq page</div>
    </div>
  );
}
