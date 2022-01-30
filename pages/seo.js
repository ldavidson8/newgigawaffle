import SiteLayout from "../components/SiteLayout";
import { Lines } from "../components/HomeComponents/Lines";
import ReactPlayer from "react-player";
import { StepsCard } from "../components/HomeComponents/StepsCard";
import ContactSection from "../components/ContactSection";
import { useState } from "react";
import { ClientCard } from "../components/ClientCard";
import { Services } from "../components/ServicesPage";

export default function SEO() {
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
      "SEO Audit",
      "We take an in-depth look at your website and its content and regularly make SEO tweaks and SEO-focused content to help maximise your websites potential online.",
      "true,false,false,false"
    ),
    new TextCard(
      "Text",
      "02",
      "Blogging",
      "Got a blog on your website? We can create relevant, SEO-focused blog posts to promote your products/services.",
      "false,false,false,true"
    ),
    new TextCard(
      "Text",
      "03",
      "Google My Business",
      "Just as Google's search engine is an incredible way to promote your business, Google Maps is becoming increasingly important for getting your business found. We can get your business setup with Google My Business to ensure that Google Map searchers can find your business.",
      "true,false,false,false"
    ),
  ];

  return (
    <Services
      bannerImage="/service-banners/webdesign.png"
      bannerAlt=""
      preTitle="Result-focused"
      title="SEO"
      description="Push your business up the search rankings with result-focused
      search engine optimisation tweaks and content."
      serviceImage="/service-images/pgbmaps.png"
      serviceImgAlt=""
      serviceOverlay="/service-images/pgboverlay.png"
      serviceOverlayAlt=""
      cards={cards}
    />
  );
}

SEO.getLayout = function getLayout(seo) {
  return <SiteLayout>{seo}</SiteLayout>;
};
