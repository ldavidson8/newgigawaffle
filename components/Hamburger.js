import React from "react";

export default function Hamburger({ isOpen }) {
  return (
    <>
      <div className="w-8 h-8 flex flex-col justify-around flex-nowrap absolute top-2 right-8 cursor-pointer z-max">
        <div
          className={`w-8 h-1 rounded-lg bg-white transition-all ease-linear duration-300 origin-1 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        ></div>
        <div
          className={`w-8 h-1 rounded-lg bg-white transition-all ease-linear duration-300 origin-1 ${
            isOpen ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
          }`}
        ></div>
        <div
          className={`w-8 h-1 rounded-lg bg-white transition-all ease-linear duration-300 origin-1 ${
            isOpen ? "-rotate-45" : "rotate-0"
          }`}
        ></div>
      </div>
    </>
  );
}
