"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-8 bg-black text-white rounded-full p-4 hover:bg-black/80 transition-all duration-300 z-50 cursor-pointer border-2 border-white"
      >
        <FaArrowUp className="lg:text-5xl text-2xl" />
      </button>
    )
  );
};

export default BackToTopButton;
