import React from "react";
import Link from "next/link";
import Image from "next/image";

export const SGrid = () => {
  return (
    <div className="bg-navy-blue w-screen h-screen overflow-hidden">
      <div className="absolute top-0 bg-navy-blue w-screen h-screen opacity-80 z-10"></div>
      <div className="grid grid-cols-10 grid-rows-5 gap-4 w-screen h-screen bg-navy-blue -skew-x-12 skew-y-6 scale-150 z-0">
        <div className="bg-[url('/client-site-previews/pgb-home.png')] col-span-2 bg-cover"></div>
        <div className="bg-[url('/client-site-previews/unitecities-home-mb.png')] col-span-1 row-span-2 bg-cover bg-center bg-no-repeat"></div>
        <div className="bg-[url('/client-site-previews/mycabinbed-home.png')] col-span-2 bg-cover"></div>
        <div className="bg-[url('/client-site-previews/grandvenue-home.png')] col-span-2 bg-cover"></div>
        <div className="bg-[url('/client-site-previews/swapmyenergy-home-mb.png')] col-span-2 row-span-4 bg-cover bg-center bg-no-repeat"></div>
        <div className="bg-[url('/client-site-previews/bangbang-home-mb.png')] col-span-1 row-span-2 bg-cover bg-center bg-no-repeat"></div>
        <div className="bg-[url('/client-site-previews/bangbang-home.png')] col-span-2 bg-cover"></div>
        <div className="bg-[url('/client-site-previews/unitecities-home.png')] col-span-4 row-span-2 bg-cover"></div>
        <div className="bg-[url('/client-site-previews/pgb-home-mb.png')] col-span-1 row-span-2 bg-cover bg-center bg-no-repeat"></div>
        <div className="bg-[url('/client-site-previews/swapmyenergy-business.png')] col-span-2 bg-cover"></div>
        <div className="bg-[url('/client-site-previews/unitecities-home-mb.png')] col-span-1 row-span-2 bg-cover bg-center bg-no-repeat"></div>
        <div className="bg-[url('/client-site-previews/swapmyenergy-home.png')] col-span-2 bg-cover"></div>
        <div className="bg-[url('/client-site-previews/mycabinbed-home.png')] col-span-2 bg-cover"></div>
        <div className="bg-[url('/client-site-previews/swapmyenergy-business-mb.png')] col-span-1 row-span-2 bg-cover bg-center bg-no-repeat"></div>
        <div className="bg-[url('/client-site-previews/pgb-home-mb.png')] col-span-1 row-span-2 bg-cover bg-center bg-no-repeat"></div>
        <div className="bg-[url('/client-site-previews/mycabinbed-home.png')] col-span-3 bg-cover"></div>
        <div className="bg-[url('/client-site-previews/swapmyenergy-business.png')] col-span-2 bg-cover"></div>
        <div className="bg-[url('/client-site-previews/bangbang-home-mb.png')] col-span-1 row-span-1 bg-cover bg-center bg-no-repeat"></div>
        <div className="bg-[url('/client-site-previews/grandvenue-home.png')] col-span-2 bg-cover"></div>
      </div>
    </div>
  );
};
