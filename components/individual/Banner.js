import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../shared/Navbar";
import Introduction from "./Introduction";
import "../../public/resized_image2.jpg"
const Banner = () => {
  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setNavbarBg("bg-gray-800");
      } else {
        setNavbarBg("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-cover top-50" style={{ backgroundImage: 'url(/resized_image2.jpg)' }}>
      <nav
        className={`fixed top-0 left-0 w-full ${navbarBg} transition duration-300 ease-in-out z-10`}
      >
        <div className="max-w-5xl w-full mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link
              href="/"
              className="text-white font-bold text-2xl cursor-pointer flex gap-2"
            >
              <Image src="/logo.png" width={40} height={40} /> IMLM
            </Link>

            <Navbar />
          </div>
        </div>
      </nav>

      <div className="max-w-5xl w-full mx-auto px-4">
        <h1 className="text-center font-bold mb-5 text-5xl">Indian Mulberry Linkage mapping Database</h1>
        <Introduction />
      </div>
    </div>
  );
};

export default Banner;
