import SiteLayout from "../components/SiteLayout";
import { Lines } from "../components/HomeComponents/Lines";
import ReactPlayer from "react-player";
import { StepsCard } from "../components/HomeComponents/StepsCard";
import ContactSection from "../components/ContactSection";
import { useState } from "react";
import { ClientCard } from "../components/ClientCard";
import { Services } from "../components/ServicesPage";

export default function ECommerceDesign() {
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
      "Easy Order Management",
      "We understand that running your business is stressful and that managing your orders should be an easy task. Our e-commerce websites allow you to sell easily, whilst providing an experience that your customers will love.",
      "true,false,false,false"
    ),
    new TextCard(
      "Text",
      "02",
      "Product Setup",
      "If you need it, we can get all of your products set up in house. Our team can take product photos, edit them, create products and any variants, which makes the process simpler for you.",
      "false,false,false,true"
    ),
    new VideoCard("Video", "/mcb.mp4", "1"),
    new TextCard(
      "Text",
      "03",
      "Marketplaces",
      "We can help you get your products up on Facebook and Instagram shopping, which can be linked back to your online store. This allows you to direct your customers straight to where your products can be bought from your social media accounts.",
      "true,false,false,false"
    ),
    new ImageCard("Image", "/gooeys.png", "2"),
  ];

  return (
    <Services
      bannerImage="/service-banners/webdesign.png"
      bannerAlt=""
      preTitle="Engaging"
      title="E-Commerce Design"
      description="Start selling your products online with ease with your own e-commerce website."
      serviceImage="/service-images/gcweb.png"
      serviceImgAlt=""
      serviceOverlay="/service-images/gcoverlay.png"
      serviceOverlayAlt=""
      cards={cards}
    />
  );
}

ECommerceDesign.getLayout = function getLayout(ecommercedesign) {
  return <SiteLayout>{ecommercedesign}</SiteLayout>;
};
