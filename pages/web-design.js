import SiteLayout from "../components/SiteLayout";
import { Lines } from "../components/HomeComponents/Lines";
import ReactPlayer from "react-player";
import { StepsCard } from "../components/HomeComponents/StepsCard";
import ContactSection from "../components/ContactSection";
import { useState } from "react";
import { ClientCard } from "../components/ClientCard";
import { Services } from "../components/ServicesPage";

export default function WebDesign() {
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
    new ImageCard("Image", "/pgbweb.png", "1"),
    new TextCard(
      "Text",
      "01",
      "Scope Definition",
      "We collaborate with the client to decide what objectives the new website must achieve. i.e., what is its purpose? We can determine the scope of the project once we know what the site's purpose is. I.e., what web pages and features the site will need to achieve the goal, as well as the timeframe for implementing them.",
      "true,false,false,false"
    ),
    new TextCard(
      "Text",
      "02",
      "Wireframe Creation",
      "Wireframes allow us to plan out how each page will be structured and how people will interact with the website. Planning out the interaction from a wide range of potential users, allows us to consider differing ease of use for different users, maintaining good User Experience (UX).",
      "false,false,false,true"
    ),
    new TextCard(
      "Text",
      "03",
      "Content Creation",
      "Now that we have a clearer picture of the site, we can begin creating content for individual pages, keeping in mind search engine optimization (SEO) to keep pages focused on a single topic.",
      "false,false,true,false"
    ),
    new TextCard(
      "Text",
      "04",
      "Visual Elements",
      "We begin working on the client's branding after we have the site architecture and some content in place. This allows us to work out the visual aspect of the website and what design elements work well, e.g. navbar, buttons, inputs, etc.",
      "false,true,false,false"
    ),
    new TextCard(
      "Text",
      "05",
      "Testing",
      "Next, we check that everything is working as it should. Our QA team check for issues around visuals, user experience, functionality, performance, responsiveness and more, to ensure that your website is in the best state that it can be in.",
      "false,false,true,false"
    ),
    new TextCard(
      "Text",
      "06",
      "Launch",
      "Once the website is ready to launch, we finalise everything with the client and agree when to launch the clients shiny new website. Once the website is live, you should be able to find it both here and on our social media (@gigawaffleuk).",
      "false,false,false,true"
    ),
    new VideoCard("Video", "/mcb.mp4", "2"),
  ];

  return (
    <Services
      bannerImage="/service-banners/webdesign.png"
      bannerAlt=""
      preTitle="Responsive"
      title="Web Design"
      description="We love playing about with the latest technologies, following the
        latest design trends and building websites that we’re sure you’ll
        love!"
      serviceImage="/service-images/mcbphone.png"
      serviceImgAlt=""
      serviceOverlay="/service-images/mcboverlay.png"
      serviceOverlayAlt=""
      cards={cards}
    />
  );
}

WebDesign.getLayout = function getLayout(webdesign) {
  return <SiteLayout>{webdesign}</SiteLayout>;
};
