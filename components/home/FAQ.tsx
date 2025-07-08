"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTiktok } from "react-icons/io5";

const faqs = [
  {
    question: "What is Comics?",
    answer:
      "Comics is a platform to explore, read, and share your favorite comics online.",
  },
  {
    question: "Is Comics free to use?",
    answer: "Yes, Comics is completely free for all users.",
  },
  {
    question: "How can I submit my own comic?",
    answer:
      "You can submit your comic by creating an account and using the upload feature in your dashboard.",
  },
  {
    question: "Which devices are supported?",
    answer:
      "Comics works on all modern devices including smartphones, tablets, and desktops.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-2 py-4 sm:px-4">
        <div className="flex justify-center items-center">
            <div className="relative w-fit -mt-8 -mb-8 z-20">
              <div className="bg-black border-2 border-black pb-2 clip">
                <h1 className="text-black text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase bg-white py-2 sm:py-4 px-3 sm:px-6 clip text-center">
                  Frequently Asked Questions
                </h1>
              </div>
            </div>
          </div>
      <div className="bg-black p-[2px] ">
        <section className="flex flex-col items-center justify-center bg-[#555454] pb-10 px-4 clip-bottom-left">
          
          <div className="w-full max-w-2xl sm:max-w-4xl md:max-w-7xl mx-auto pt-4 md:pt-10 ">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="text-white overflow-hidden  last:border-b-0"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className={`w-full py-4 px-2 sm:py-6 sm:px-6 text-center flex justify-center items-center transition-colors duration-200 ${
                    openIndex === idx ? "" : "underline"
                  } underline-offset-8 sm:underline-offset-[20px] focus:outline-none`}
                >
                  <h3 className="text-xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-center">
                    {faq.question}
                  </h3>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === idx
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-2 sm:px-6 pb-4 sm:pb-6 text-white text-base xs:text-lg sm:text-2xl text-center">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 text-white mt-2">
            <a href="">
              <FiInstagram className="text-[24px] lg:text-[48px]" />
            </a>
            <a href="">
              <IoLogoTiktok className="text-[24px] lg:text-[48px]" />
            </a>
            <a href="">
              <FaXTwitter className="text-[24px] lg:text-[48px]" />
            </a>
            <a href="">
              <FaYoutube className="text-[24px] lg:text-[48px]" />
            </a>
          </div>
          <div className="text-white text-center max-w-5xl mx-auto mt-10">
            <h1 className="lg:text-2xl sm:text-xl text-lg  mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </h1>
            <p className="md:text-base text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              debitis optio earum delectus, voluptatibus corporis nemo modi in
              sunt inventore rerum ipsa, ad consectetur repellat odio nobis rem
              totam aperiam doloremque numquam quae laborum ratione
              consequuntur. Impedit, nam culpa! Similique molestiae omnis
              aliquid sit laborum commodi inventore, voluptatibus hic ut.
            </p>
            <div className="flex justify-center items-center mt-10">
              <Image
                src="/logo.png"
                alt=""
                width={300}
                height={300}
                className="w-16 h-16"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
