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

  const getImageWidth = (imgId: number) => {
    if (expandedImage !== null) {
      if (expandedImage === imgId) {
        return "w-full sm:w-[70%] md:w-[60%]"; 
      } else {
        return "w-0 sm:w-[7.5%] md:w-[10%]"; 
      }
    } else {
      return "w-[20%]"; 
    }
  };

  return (
    <div>
      <div className="bg-[#555454] px-2 sm:px-4 py-2 sm:py-4">
        <div className="relative w-fit -mt-8 sm:-mt-12 md:-mt-16 z-20">
          <div className="bg-black border-2 border-black pb-1 sm:pb-2 clip">
            <h1 className="text-black text-sm xs:text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase bg-white py-1 sm:py-2 md:py-3 lg:py-4 px-2 sm:px-3 md:px-4 lg:px-6 clip text-center">
              Our Mission Images
            </h1>
          </div>
        </div>
        <div className="-mt-4 sm:-mt-6 md:-mt-8 flex gap-1 sm:gap-2 md:gap-4 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[514px]">
          {images.map((img, idx) => (
            <div
              key={img.id}
              className={`border md:border-2 border-black bg-gray-400 flex items-center justify-center cursor-pointer hover:opacity-90 overflow-hidden transition-all duration-1000 ease-in-out ${
                show ? "opacity-100" : "opacity-0"
              } ${getImageWidth(img.id)}`}
              style={{ 
                transitionDelay: `${idx * 120}ms`,
                transitionProperty: 'width, opacity, transform',
              }}
              onClick={() => handleImageClick(img.id)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="object-cover w-full h-full transition-all duration-1000 ease-in-out" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMissionImageView;