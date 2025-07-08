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
            <h1 className="text-black text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase bg-white py-2 sm:py-4 px-3 sm:px-6 clip text-center">
              Our Mission Images
            </h1>
          </div>
        </div>
        <div className="-mt-8 flex gap-4 h-[514px]">
          {images.map((img, idx) => {
            let width = "20%"; 
            
            if (expandedImage !== null) {
              if (expandedImage === img.id) {
                width = "60%"; 
              } else {
                width = "10%";
              }
            }

            return (
              <div
                key={img.id}
                className={`border border-black bg-gray-400 flex items-center justify-center cursor-pointer hover:opacity-90 overflow-hidden transition-all duration-1000 ease-in-out ${
                  show ? "opacity-100" : "opacity-0"
                }`}
                style={{ 
                  width: width,
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurMissionImageView;