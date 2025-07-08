import React from "react";
import Image from "next/image";
import placeholder from "@/public/images/placeholder2.jpg";
import image1 from "@/public/button.png";
import OurMissionVideos from "./OurMissionVideos";
import OurMissionImageView from "./OurMissionImageView";
const OurMission = () => {
  return (
    <div className="px-2 py-2">
      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 bg-[#9e9e9e] px-4 py-4 mb-4">
        <div className="mb-4 w-full lg:w-1/4 h-auto">
          <div className="relative flex justify-center items-center">
            <Image src={image1} alt="image1" width={549} height={100} />
            <h1 className="text-[24px] md:text-[32px] font-bold mb-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              OUR MISSION
            </h1>
          </div>
          <p className="text-lg font-medium mt-6 text-center bg-[#342a33] p-6  text-white border-2 border-black">
            Our mission is to provide the best possible care for our patients.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            sequi nesciunt ex! Quia quod magni est quo laudantium neque
            blanditiis animi corrupti deleniti harum tempora explicabo similique
            placeat reprehenderit, perspiciatis voluptatibus dolorum dolor
            expedita voluptas delectus provident nihil temporibus accusantium
            error. Laboriosam dolorum vel architecto quod soluta excepturi nihil
            provident. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odio fugiat est repudiandae fuga corporis. Deleniti aliquid
            voluptates quia molestiae a porro totam animi id, exercitationem nam
            ad dolorum ullam dicta voluptatum, vitae impedit temporibus
            perspiciatis ducimus qu dfdfdffsfdsf sdf sdf sdfdsf ds
          </p>
        </div>
        <div className="flex flex-row gap-4 w-full md:w-3/4">
          {/* Left Large Image */}
          <div className="flex-[2] border border-black">
            <Image
              src={placeholder}
              alt="placeholder"
              width={1000}
              height={1000}
              className="w-full h-full object-cover "
            />
          </div>
          {/* Right Column with Two Images */}
          <div className="flex flex-col flex-[1] gap-4">
            <div className="flex-1 border border-black">
              <Image
                src={placeholder}
                alt="placeholder"
                width={500}
                height={250}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 border border-black">
              <Image
                src={placeholder}
                alt="placeholder"
                width={500}
                height={250}
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </div>
      <OurMissionVideos />
      <OurMissionImageView />
    </div>
  );
};

export default OurMission;
