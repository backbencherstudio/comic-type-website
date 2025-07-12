"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const menuItems = [
  { label: "OUR MISSION", href: "#section1", type: "scroll" },
  { label: "LINK TO EXTERNAL", href: "https://example.com", type: "external" },
  { label: "FAQ", href: "#section2", type: "scroll" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const handleMenuItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    type: string
  ) => {
    setOpen(false);

    if (type === "scroll") {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <div className="px-2 pt-2 sticky top-0 z-50">
      <div className="bg-black p-[2px] ">
        <nav className="bg-[#555454] px-4 py-6 flex items-center justify-between relative nav-bar md:clip-navbar">
          <button
            className="md:hidden flex flex-col gap-1 z-20"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            <span className="w-7 h-1 bg-white rounded" />
            <span className="w-7 h-1 bg-white rounded" />
            <span className="w-7 h-1 bg-white rounded" />
          </button>

          <div className="flex items-center ml-4 md:ml-0">
            <div className=" bg-white text-xs flex items-center justify-center rounded shadow">
              <Image src="/logo.png" alt="logo" width={300} height={300} className="w-16 h-16" />
            </div>
          </div>

          <div className="hidden md:flex gap-8 mx-auto">
            {menuItems.map((item) =>
              item.type === "external" ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm xs:text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl bg-white px-6 py-2 shadow-[4px_4px_0_0_rgba(0,0,0,0.7)] skew-x-[-3deg] text-black font-semibold hover:bg-gray-200 transition"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleMenuItemClick(e, item.href, item.type)}
                  className="text-sm xs:text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl bg-white px-6 py-2 shadow-[4px_4px_0_0_rgba(0,0,0,0.7)] skew-x-[-3deg] text-black font-semibold hover:bg-gray-200 transition"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* Overlay for closing menu */}
          {open && (
            <div
              className="fixed inset-0 bg-black/30 z-0"
              onClick={() => setOpen(false)}
            />
          )}

          {/* Mobile Menu (now slides in from left) */}
          <div
            ref={menuRef}
            className={`fixed top-0 left-0 h-full w-64 bg-gray-800 shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
        flex flex-col pt-20 gap-6`}
          >
            {menuItems.map((item) =>
              item.type === "external" ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mx-6 bg-white px-6 py-2 shadow-[4px_4px_0_0_rgba(0,0,0,0.7)] skew-x-[-3deg] text-black font-semibold hover:bg-gray-200 transition"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleMenuItemClick(e, item.href, item.type)}
                  className="mx-6 bg-white px-6 py-2 shadow-[4px_4px_0_0_rgba(0,0,0,0.7)] skew-x-[-3deg] text-black font-semibold hover:bg-gray-200 transition"
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
