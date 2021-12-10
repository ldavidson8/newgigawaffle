import React from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex justify-center items-end xl:items-center lg:justify-end md:bg-mapImage bg-no-repeat bg-[bottom_-14rem_right_-120rem] md:bg-center h-4/5 w-screen py-6">
      <div className="bg-white rounded-2xl h-min md:h-full w-full md:w-1/2 xl:w-1/3 font-bold text-gray-600 p-12 pb-24 relative">
        <form className="xl:space-y-10 w-3/4">
          <h1 className="text-black uppercase mb-2">Let's Talk</h1>
          <div className="relative my-4 border-b-2 focus-within:border-primary">
            <input
              id="name"
              name="name"
              type="text"
              placeholder=" "
              className="block w-full appearance-none focus:outline-none bg-transparent"
              required
            ></input>
            <label
              htmlFor="name"
              className="absolute top-0 duration-300 origin-0 cursor-text"
            >
              Name *
            </label>
          </div>
          <div className="relative my-4 border-b-2 focus-within:border-primary">
            <input
              id="email"
              name="email"
              type="email"
              placeholder=" "
              className="block w-full appearance-none focus:outline-none bg-transparent"
              required
            ></input>
            <label
              htmlFor="email"
              className="absolute top-0 duration-300 origin-0 cursor-text"
            >
              Email *
            </label>
          </div>
          <div className="relative my-4 border-b-2 focus-within:border-primary">
            <input
              id="tel"
              name="tel"
              type="tel"
              placeholder=" "
              className="block w-full appearance-none focus:outline-none bg-transparent"
            ></input>
            <label
              htmlFor="tel"
              className="absolute top-0 duration-300 origin-0 cursor-text"
            >
              Phone
            </label>
          </div>
          <div className="relative my-4 border-b-2 focus-within:border-primary">
            <input
              id="companyName"
              name="companyName"
              type="text"
              placeholder=" "
              className="block w-full appearance-none focus:outline-none bg-transparent"
            ></input>
            <label
              htmlFor="companyName"
              className="absolute top-0 duration-300 origin-0 cursor-text"
            >
              Company Name
            </label>
          </div>
          <div className="relative my-4 border-b-2 focus-within:border-primary">
            <input
              id="siteurl"
              name="siteurl"
              type="url"
              placeholder=" "
              className="block w-full appearance-none focus:outline-none bg-transparent"
            ></input>
            <label
              htmlFor="siteurl"
              className="absolute top-0 duration-300 origin-0 cursor-text"
            >
              Website URL
            </label>
          </div>
          <div className="relative my-4 border-b-2 focus-within:border-primary">
            <textarea
              id="message"
              name="message"
              placeholder=" "
              className="block w-full appearance-none focus:outline-none bg-transparent"
              required
            ></textarea>
            <label
              htmlFor="message"
              className="absolute top-0 duration-300 origin-0 cursor-text"
            >
              Message *
            </label>
          </div>
          <button
            type="submit"
            className="bg-dark-gray w-fit p-8 h-16 flex justify-center items-center rounded"
          >
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text font-bold text-sm md:text-base lg:text-2xl mr-4">
              Send Message
            </span>
            <img src="/arrow-right.svg"></img>
          </button>
        </form>
      </div>
    </div>
  );
}
