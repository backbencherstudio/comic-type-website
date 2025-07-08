"use client";
import React, { useState } from "react";

const HeroVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // Add autoplay parameter to YouTube URL
    const iframe = document.querySelector("iframe");
    if (iframe) {
      const currentSrc = iframe.getAttribute("src");
      if (currentSrc && !currentSrc.includes("autoplay=1")) {
        const newSrc = currentSrc.includes("?")
          ? `${currentSrc}&autoplay=1`
          : `${currentSrc}?autoplay=1`;
        iframe.setAttribute("src", newSrc);
      }
    }
  };

  return (
    <div className="p-2">
      <div className="min-h-[88vh] relative border-6 border-[#4E394B] stroke-2 stroke-amber-300">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/MgY01n03QLU?si=YWsdPU56Qq_Zl5qf"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-all duration-300 hover:bg-opacity-30">
            <button
              onClick={handlePlayClick}
              className="group relative w-20 h-20 md:w-24 md:h-24 bg-white bg-opacity-90 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-opacity-100 hover:scale-110 shadow-2xl"
            >
              {/* Play icon */}
              <div className="w-0 h-0 border-l-[20px] md:border-l-[24px] border-l-black border-t-[12px] md:border-t-[14px] border-t-transparent border-b-[12px] md:border-b-[14px] border-b-transparent ml-1 md:ml-1.5 transition-transform duration-300 group-hover:scale-110" />

              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-full border-2 border-white opacity-60 animate-ping" />
              <div
                className="absolute inset-0 rounded-full border-2 border-white opacity-40 animate-ping"
                style={{ animationDelay: "0.5s" }}
              />
            </button>

            {/* Optional: Add text below the play button */}
            {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="text-lg md:text-xl font-semibold mb-2">
                Watch Our Story
              </p>
              <p className="text-sm md:text-base opacity-80">Click to play</p>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroVideo;
