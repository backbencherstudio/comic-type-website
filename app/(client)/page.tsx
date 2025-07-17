import FAQ from "@/components/home/FAQ";
import Gallery from "@/components/home/Gallery";
import HeroVideo from "@/components/home/HeroVideo";
import OurMission from "@/components/home/OurMission";
import CustomToast from "@/components/shared/CustomToast";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <div  className="">
        <HeroVideo />
        <Gallery />
      </div>
      <div id="section1" className=""><OurMission /></div>
      <div id="section2" className="">
        <FAQ />
      </div>
      
      {/* Custom Toast Component */}
      <CustomToast 
        message="Welcome to our comics website! 🎉"
        type="success"
        duration={5000}
      />
    </div>
  );
}
