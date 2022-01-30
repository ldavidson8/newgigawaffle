import SiteLayout from "../components/SiteLayout";
import { Lines } from "../components/HomeComponents/Lines";
import ReactPlayer from "react-player";
import { StepsCard } from "../components/HomeComponents/StepsCard";
import ContactSection from "../components/ContactSection";
import { useState } from "react";
import { ClientCard } from "../components/ClientCard";
import { Services } from "../components/ServicesPage";

export default function BrandDesign() {
  const [currentClient, setCurrentClient] = useState(0);
  const [showCurrent, setShowCurrent] = useState(false);

  const toggleCurrent = () => {
    if (!showCurrent) {
      setShowCurrent(true);
      return;
    }
  };

  const setCurrent = (index) => {
    setCurrentClient(index);
    toggleCurrent();
  };

  function ImageCard(type, url, span) {
    (this.type = type), (this.url = url), (this.span = span);
  }

  function VideoCard(type, url, span) {
    (this.type = type), (this.url = url), (this.span = span);
  }

  function TextCard(type, number, title, description, dir) {
    (this.type = type),
      (this.number = number),
      (this.title = title),
      (this.description = description),
      (this.direction = dir);
  }

  const cards = [
    new TextCard(
      "Text",
      "01",
      "Logo Design",
      "Be noticed physically and across the Internet with a brand new logo. Our logo team are experts at creating bold and exciting logos to show off your business in the best way.",
      "true,false,false,false"
    ),
    new TextCard(
      "Text",
      "02",
      "Brand Guidelines",
      "Consistency when it comes to how your business looks from the outside is massively important. We can create guidelines that allow your employees to design with consistency and represent your business in the right way.",
      "false,false,false,true"
    ),
    new TextCard(
      "Text",
      "03",
      "Stationary",
      "We can design all the stationary your business needs, from business cards, to leaflets, brochures and more. Our team is on hand to design and print any stationary you could need.",
      "true,false,false,false"
    ),
    new ImageCard("Image", "/scslogo.png", "3"),
  ];

  return (
    <Services
      bannerImage="/service-banners/webdesign.png"
      bannerAlt=""
      preTitle="Bold & Exciting"
      title="Brand Design"
      description="Be noticed physically and across the Internet with a consistent and bold brand."
      serviceImage="/service-images/pgbmaps.png"
      serviceImgAlt=""
      serviceOverlay="/service-images/pgboverlay.png"
      serviceOverlayAlt=""
      cards={cards}
    />
  );
}

BrandDesign.getLayout = function getLayout(branddesign) {
  return <SiteLayout>{branddesign}</SiteLayout>;
};
