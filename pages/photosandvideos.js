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
      "Product Photography",
      "Got some products that you want showing off in the best light? Our expert photographers and our new studio are exactly what you need. Our team can edit your photos exactly to your liking, so your products look the best they can be.",
      "true,false,false,false"
    ),
    new TextCard(
      "Text",
      "02",
      "Promotional Videos",
      "We can create engaging video content to promote your products/services ready to put on your website and/or social media's. Our team can create content which shows off the best bits of your products/services.",
      "false,false,false,true"
    ),
    new ImageCard("Image", "/cookiephoto.png", "1"),
  ];

  return (
    <Services
      bannerImage="/service-banners/webdesign.png"
      bannerAlt=""
      preTitle="Eye-catching"
      title="Photos & Videos"
      description="Show off your products/services in the best light with our photography and videography services."
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
