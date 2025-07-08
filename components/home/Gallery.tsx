"use client";
import React, { useState } from "react";
import Image from "next/image";
import img1 from "@/public/images/tiger.jpg";

const Gallery = () => {
  const [playingVideos, setPlayingVideos] = useState<Set<number>>(new Set());

  const videos = [
    {
      id: 1,
      title: "YouTube video player 1",
      src: "https://www.youtube.com/embed/6CFYIOF89hc?si=PzhDOx-SXFzGw5Xy",
    },
    {
      id: 2,
      title: "YouTube video player 2",
      src: "https://www.youtube.com/embed/HQ1uzB0somI?si=mz_sbJofMHk5g13u",
    },
  ];

  const handlePlayClick = (videoId: number) => {
    setPlayingVideos((prev) => new Set(prev).add(videoId));

    // Add autoplay parameter to YouTube URL
    const iframe = document.querySelector(
      `iframe[data-video-id="${videoId}"]`
    ) as HTMLIFrameElement;
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
      <div className="bg-[#555454] px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {Array.from({ length: 15 }).map((_, index) => (
            <div key={index} className="border-[3px] border-[#000000]">
              <Image
                src={img1}
                alt="tiger"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {videos.map((video) => (
            <div key={video.id} className="relative min-h-[600px]">
              <iframe
                width="100%"
                height="100%"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                data-video-id={video.id}
              ></iframe>

              {/* Custom Play Button Overlay */}
              {!playingVideos.has(video.id) && (
                <div className="absolute inset-0 bg-black flex items-center justify-center cursor-pointer transition-all duration-300">
                  <button
                    onClick={() => handlePlayClick(video.id)}
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
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
