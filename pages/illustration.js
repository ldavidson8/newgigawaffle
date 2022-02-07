import SiteLayout from "../components/SiteLayout";
import { Lines } from "../components/HomeComponents/Lines";
import ReactPlayer from "react-player";
import { StepsCard } from "../components/HomeComponents/StepsCard";
import ContactSection from "../components/ContactSection";
import { useState } from "react";
import { ClientCard } from "../components/ClientCard";
import { Services } from "../components/ServicesPage";

export default function Illustration() {
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
      "Custom Illustrations",
      "Hire one of our talented illustrators for your next project. Our digital drawing experts create our amazing mascot Waffles and could create your businesses new mascot.",
      "true,false,false,false"
    ),
    new TextCard(
      "Text",
      "02",
      "Hand-drawing Logos",
      "Make your business stand out from the crowd with a totally custom hand-drawn logo. Our team can create logos that truly have that personal touch.",
      "false,false,false,true"
    ),
    new TextCard(
      "Text",
      "03",
      "Social Media Graphics",
      "Want social media graphics with a personality? Our illustration team can build your social media presence around a hand-drawn graphics/scenes or around characters, just like we've done with Waffles 🙈",
      "true,false,false,false"
    ),
    new ImageCard("Image", "/gwxmas.jpg", "3"),
  ];

  return (
    <Services
      bannerImage="/service-banners/webdesign.png"
      bannerAlt=""
      preTitle="Creative"
      title="Illustrations"
      description="Make your business stand out from the crowd with our illustration services."
      serviceImage="/service-images/pgbmaps.png"
      serviceImgAlt=""
      serviceOverlay="/service-images/pgboverlay.png"
      serviceOverlayAlt=""
      cards={cards}
    />
  );
}

Illustration.getLayout = function getLayout(illustration) {
  return <SiteLayout>{illustration}</SiteLayout>;
};
