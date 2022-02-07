import SiteLayout from "../components/SiteLayout";
import { Lines } from "../components/HomeComponents/Lines";
import ReactPlayer from "react-player";
import { StepsCard } from "../components/HomeComponents/StepsCard";
import ContactSection from "../components/ContactSection";
import { useState } from "react";
import { ClientCard } from "../components/ClientCard";
import { Services } from "../components/ServicesPage";
import { HeroSection } from "../components/HomeComponents/HeroSection";
import Link from "next/link";

export default function PodcastCreation() {
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <div className="w-full h-full bg-studio bg-top bg-cover bg-no-repeat text-white mb-6 origin-top-left absolute -z-10"></div>
        <div className="bg-primary text-white font-bold w-full h-[50px] text-center justify-center my-auto leading-[50px] text-2xl">
          COMING SOON
        </div>
      </div>
    </>
  );
}

PodcastCreation.getLayout = function getLayout(podcastcreation) {
  return <SiteLayout>{podcastcreation}</SiteLayout>;
};
