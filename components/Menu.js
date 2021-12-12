import React from "react";
import Link from "next/link";

const Menu = ({ isOpen }) => {
  return (
    <>
      <ul
        className={`flex flex-col justify-around items-center pt-8 w-full md:w-1/2 xl:w-1/3 text-white h-screen fixed z-max xl:absolute top-0 transition-transform ease-in-out duration-700 bg-black bg-opacity-50 ${
          isOpen ? "-translate-x-full" : "translate-x-full"
        }`}
      >
        <li>
          <Link href="/">
            <a className="text-3xl capitalize py-8 px-0 font-bold no-underline;">
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <a className="text-3xl capitalize py-8 px-0 font-bold no-underline;">
              Portfolio
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a className="text-3xl capitalize py-8 px-0 font-bold no-underline;">
              Services
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="text-3xl capitalize py-8 px-0 font-bold no-underline;">
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className="text-3xl capitalize py-8 px-0 font-bold no-underline;">
              Blog
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact-us">
            <a className="text-3xl capitalize py-8 px-0 font-bold no-underline;">
              Contact
            </a>
          </Link>
        </li>
        <p className="text-2xl">Drop us an email</p>
        {/* <form className="space-y-10 w-3/4">
          <div className="relative my-4 border-b-2 text-white focus-within:border-primary">
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
          <div className="relative my-4 border-b-2 text-white focus-within:border-primary">
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
          <div className="relative my-4 border-b-2 text-white focus-within:border-primary">
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
            className="bg-white w-full h-16 flex justify-center items-center"
          >
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text font-bold text-2xl mr-4">
              Send Message
            </span>
            <img src="/arrow-right.svg"></img>
          </button>
        </form> */}
      </ul>
    </>
  );
};

export default Menu;
