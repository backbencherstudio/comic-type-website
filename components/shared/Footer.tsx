import Image from "next/image";
import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="px-2 fixed bottom-0 left-0 right-0 z-30 border-t-2 border-white">
      <div className="bg-[#555454] py-2 px-4 ">
        <div className="flex justify-center gap-3 text-white mb-2">
          <a href="" className="hover:text-gray-300 transition-colors">
            <FiInstagram className="text-lg" />
          </a>
          <a href="" className="hover:text-gray-300 transition-colors">
            <IoLogoTiktok className="text-lg" />
          </a>
          <a href="" className="hover:text-gray-300 transition-colors">
            <FaXTwitter className="text-lg" />
          </a>
          <a href="" className="hover:text-gray-300 transition-colors">
            <FaYoutube className="text-lg" />
          </a>
        </div>
        <div className="text-white text-center max-w-xl mx-auto">
          <h1 className="text-xs font-medium mb-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </h1>
          <p className="text-xs text-gray-300 leading-tight mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            debitis optio earum delectus, voluptatibus corporis nemo modi in
            sunt inventore rerum ipsa, ad consectetur repellat odio nobis rem
            totam aperiam doloremque numquam quae laborum ratione consequuntur.
            Impedit, nam culpa! Similique molestiae omnis aliquid sit laborum
            commodi inventore, voluptatibus hic ut.
          </p>
          <div className="flex justify-center items-center">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={300}
              height={300}
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
