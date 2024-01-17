import Footer from "@/components/shared/footer";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Navbar from "../components/shared/Navbar";

const ContactPage = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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
    <div className="min-h-screen bg-bg-img bg-cover bg-no-repeat bg-blend-darken">
      <nav
        className={`fixed top-0 left-0 w-full ${navbarBg} transition duration-300 ease-in-out z-10`}
      >
        <div className="max-w-5xl w-full mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link
              href="/"
              className="text-black font-bold text-2xl cursor-pointer flex gap-2"
            >
              <Image src="/logo.png" width={40} height={40} /> IMLM
            </Link>
            <Navbar />
          </div>
        </div>
      </nav>
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="border border-black rounded-md px-20 p-1 bg-gray-400">
        <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl mt-20">
          Contact Us
        </h2>
        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-200"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  autoComplete="name"
                  {...register("name", { required: true })}
                  aria-invalid={errors?.name ? "true" : "false"}
                  className={`block w-full bg-black bg-opacity-50 text-white mt-1 p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                    errors?.name ? "border-red-500" : ""
                  }`}
                />
                {errors?.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  autoComplete="email"
                  {...register("email", { required: true })}
                  aria-invalid={errors?.email ? "true" : "false"}
                  className={`block w-full mt-1 bg-black bg-opacity-50 text-white p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                    errors?.email ? "border-red-500" : ""
                  }`}
                />
                {errors?.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>
            
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-200"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here"
                  rows="4"
                  {...register("message", { required: true })}
                  aria-invalid={errors?.message ? "true" : "false"}
                  className="shadow-sm bg-black bg-opacity-50 p-3 text-white focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                ></textarea>
                {errors?.message && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-center  bg-black bg-opacity-60 rounded-md aspect-square">
            <div className="text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg text-gray-100 font-medium">Address</p>
              <p className="mt-2 text-base text-white">
                Mysore Rd, RV Vidyaniketan, Post, Bengaluru, Karnataka 560059​
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center  bg-black bg-opacity-60 rounded-md aspect-square">
            <div className="text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"
                />
              </svg>
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg text-gray-100 font-medium">Email</p>
              <p className="mt-2 text-base text-white">vidya.n@rvce.edu.in</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center  bg-black bg-opacity-60 rounded-md aspect-square">
            <div className="text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"
                />
              </svg>
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg text-gray-100 font-medium">Phone</p>
              <p className="mt-2 text-base text-white">+919945465657</p>
            </div>
          </div>
        </div>
        <div className="mt-16 h-96">
          <iframe
            title="RV College of Engineering"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15556.879427275157!2d77.4969592!3d12.9240118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe6aa912a31762c97!2sRV%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1621251487110!5m2!1sen!2sin"
          />
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default ContactPage;
