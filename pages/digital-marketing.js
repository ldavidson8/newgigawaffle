import SiteLayout from "../components/SiteLayout";
import { Lines } from "../components/HomeComponents/Lines";
import ReactPlayer from "react-player";
import { StepsCard } from "../components/HomeComponents/StepsCard";
import ContactSection from "../components/ContactSection";
import { useState } from "react";
import { ClientCard } from "../components/ClientCard";
import { Services } from "../components/ServicesPage";

export default function DigitalMarketing() {
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
    new ImageCard("Image", "/mycabinbedstats.png", "1"),
    new TextCard(
      "Text",
      "01",
      "Custom Strategy",
      "Our team of creatives and strategists develop a social media strategy which suits your business specifically. We design content from the ground up and look to build a personal relationship between your business and its customers.",
      "true,false,false,false"
    ),
    new TextCard(
      "Text",
      "02",
      "Social Media Audit",
      "We look into the history and the current status of your social media accounts and build a strategy that grows your businesses presence and creates relationships with your customers that last.",
      "false,false,false,true"
    ),
    new TextCard(
      "Text",
      "03",
      "Advertisements",
      "Our experts can plan and create advertisements to showcase your products or services, bring traffic to your website, and/or to promote brand awareness, all with a targetted audience across Facebook & Instagram.",
      "false,false,true,false"
    ),
    new TextCard(
      "Text",
      "04",
      "Email Marketing",
      "Promote your business directly to your customers using the power of email. Whether its for one-off promos or whether you want to provide a weekly newsletter, our team can create engaging email content to suit your business and what you have to offer.",
      "false,true,false,false"
    ),
    new TextCard(
      "Text",
      "05",
      "Content Marketing",
      "We love content; we're consumers, engagers and producers of content and we like produce content that drives engagement and promotes products/services. Whether its photo, video, audio, long-form, short-form or something different that you're, we've got the expertise on hand.",
      "false,false,true,false"
    ),
    new TextCard(
      "Text",
      "06",
      "Management",
      "We can take away the stress of social media, so you can focus on your business. We can deal with the content, strategy, enquiries, partnership and more, whilst keeping you in the loop.",
      "false,false,false,true"
    ),
    new ImageCard("Image", "/grandvenuepromo.png", "2"),
  ];

  return (
    <Services
      bannerImage="/service-banners/webdesign.png"
      bannerAlt=""
      preTitle="Results-driven"
      title="Digital Marketing"
      description="We love creating content that people will love and that will help
      push your business to the next level."
      serviceImage="/grandvenue.gif"
      serviceImgAlt=""
      serviceOverlay="/service-images/smoverlay.png"
      serviceOverlayAlt=""
      cards={cards}
    />
  );
}

DigitalMarketing.getLayout = function getLayout(digitalmarketing) {
  return <SiteLayout>{digitalmarketing}</SiteLayout>;
};
