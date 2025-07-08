"use client";
import React, { useState, useEffect } from "react";

const images = [
  { id: 1, src: "/images/placeholder.jpg", alt: "Image 1" },
  { id: 2, src: "/images/placeholder2.jpg", alt: "Image 2" },
  { id: 3, src: "/images/placeholder.jpg", alt: "Image 3" },
  { id: 4, src: "/images/placeholder2.jpg", alt: "Image 4" },
  { id: 5, src: "/images/placeholder.jpg", alt: "Image 5" },
];

const OurMissionImageView = () => {
  const [show, setShow] = useState(false);
  const [expandedImage, setExpandedImage] = useState<number | null>(1);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const handleImageClick = (id: number) => {
    if (expandedImage === id) {
      setExpandedImage(null); 
    } else {
      setExpandedImage(id);
    }
  };

  return (
    <div>
      <div className="bg-[#555454] px-4 py-4">
        <div className="relative w-fit -mt-16 z-20">
          <div className="bg-black border-2 border-black pb-2 clip">
            <h1 className="text-black text-[24px] md:text-[32px] font-bold uppercase bg-white p-2 clip">
              Our Mission Images
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-8 gap-4 -mt-8">
          {images.map((img, idx) => {
            let gridClasses = "";
            
            if (expandedImage === null) {
              gridClasses = "col-span-1";
            } else {
              if (expandedImage === img.id) {
                gridClasses = "col-span-4"; 
              } else {
                gridClasses = "col-span-1"; 
              }
            }

            return (
              <div
                key={img.id}
                className={`border border-black bg-gray-400 flex items-center justify-center transition-all duration-700 cursor-pointer hover:opacity-90 ${
                  show ? "opacity-100 scale-100" : "opacity-0 scale-90"
                } ${gridClasses}`}
                style={{ transitionDelay: `${idx * 120}ms` }}
                onClick={() => handleImageClick(img.id)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="object-cover w-full h-[514px]" 
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurMissionImageView;