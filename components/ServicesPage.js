import { Lines } from "./HomeComponents/Lines";
import { StepsCard, StepsFeaturesCard } from "./HomeComponents/StepsCard";
import ContactSection from "./ContactSection";
import React from "react";
import ReactPlayer from "react-player";

export const Services = (props) => {
  function Properties(type, url, span, number, title, description, dir) {
    (this.type = type),
      (this.url = url),
      (this.span = span),
      (this.number = number),
      (this.title = title),
      (this.description = description),
      (this.direction = dir);
  }

  const TextCard = (Properties) => {
    const dirArray = Properties.direction.split(",");
    let dirBoolArray = [];
    for (let i = 0; i < dirArray.length; i++) {
      if (dirArray[i] == "true") {
        dirBoolArray[i] = true;
      } else {
        dirBoolArray[i] = false;
      }
    }

    console.log(dirArray);
    return (
      <StepsCard
        number={Properties.number}
        title={Properties.title}
        description={Properties.description}
        direction={
          dirBoolArray
        } /*[Top-right,bottom-right,bottom-left,top-left]*/
      ></StepsCard>
    );
  };

  const VideoCard = (Properties) => {
    let span1 = false;
    let span2 = false;
    let span3 = false;

    if (Properties.span === "1") {
      span1 = true;
    } else if (Properties.span === "2") {
      span2 = true;
    } else if (Properties.span === "3") {
      span3 = true;
    }

    console.log(span1);
    console.log(span2);
    console.log(span3);

    return (
      <ReactPlayer
        url={Properties.url}
        width="100%"
        height="100%"
        className={`h-full w-full overflow-clip object-left           
          ${
            span1
              ? "col-span-1"
              : span2
              ? "col-span-2"
              : span3
              ? "col-span-3"
              : ""
          }`}
        playing
        muted
      />
    );
  };

  const ImageCard = (Properties) => {
    let span1 = false;
    let span2 = false;
    let span3 = false;

    if (Properties.span === "1") {
      span1 = true;
    } else if (Properties.span === "2") {
      span2 = true;
    } else if (Properties.span === "3") {
      span3 = true;
    }

    console.log(span1);
    console.log(span2);
    console.log(span3);

    return (
      <img
        src={Properties.url}
        width="100%"
        height="100%"
        className={`h-full w-full object-cover 
          ${
            span1
              ? "col-span-1"
              : span2
              ? "col-span-2"
              : span3
              ? "col-span-3"
              : ""
          }`}
        alt=""
      />
    );
  };

  function GetCard(type, card) {
    console.log(card);

    switch (type) {
      case "Text":
        let textProps = new Properties(
          type,
          "",
          "",
          card.number,
          card.title,
          card.description,
          card.direction
        );
        return TextCard(textProps);
        break;
      case "Video":
        let vidProps = new Properties(
          type,
          card.url,
          card.span,
          "",
          "",
          "",
          ""
        );
        return VideoCard(vidProps);
        break;
      case "Image":
        let imageProps = new Properties(
          type,
          card.url,
          card.span,
          "",
          "",
          "",
          ""
        );
        return ImageCard(imageProps);
        break;
    }
  }

  return (
    <div>
      <div className="absolute w-full md:h-[650px] sm:h-[450px] h-[545px] skewB">
        <img
          src={props.bannerImage}
          alt={props.bannerAlt}
          className="absolute top-0 object-fill w-full h-full mx-auto"
        />
      </div>
      <div className="relative md:h-[650px] sm:h-[450px] h-[545px] flex sm:flex-row flex-col sm:justify-between max-w-section md:px-10 px-4 left-1/2 -translate-x-1/2 all:px-4">
        <div className="flex col-span-2 sm:my-auto mt-24 sm:w-[75%] w-full">
          <div className="w-[2px] ml-0 bg-primary"></div>
          <div className="pl-4">
            <span className="text-base font-bold text-primary font-rubik">
              {props.preTitle /*Responsive*/}
            </span>
            <h1 className="pb-2 sm:text-5xl text-4xl font-bold text-white font-rubik desktop:w-[66%] w-[90%]">
              {props.title /*Web Design*/}
            </h1>
            <p className="sm:text-md text-sm text-white font-rubik scxl:w-full desktop:w-[66%] w-[90%]">
              {props.description}
            </p>
          </div>
        </div>
        <div></div>
        <div className="sm:pt-10 relative">
          <img
            src={props.serviceImage}
            alt={props.serviceImgAlt}
            className="relative right-0 object-fill md:min-w-[375px] md:min-h-[90%] sm:min-h-[385px] md:mt-20 sm:min-w-[280px] max-h-[350px] sm:max-h-0 mx-auto mt-8 sm:pl-20 z-2"
          />
          <img
            src={props.serviceOverlay}
            alt={props.serviceOverlayAlt}
            className="absolute right-6 top-10 mt-10 md:min-w-[500px] sm:min-w-[350px] w-[350px] sm:-translate-x-[35%] sm:translate-y-[25%] md:-translate-x-[35%] md:translate-y-1/3 left-1/2 -translate-x-1/2 translate-y-[10%] z-100"
          />
        </div>
      </div>
      <div className="relative -mt-20 pt-10 max-w-section sm:px-10 all:px-4 desktop:h-[500px] sm:h-[650px] h-[750px] mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-section mx-auto sm:px-10 all:px-4 grid grid-cols-4 desktop:h-[500px] sm:h-[650px] h-[750px] w-screen -z-10">
          <div className="relative desktop:h-[420px] mt-20 overflow-hidden">
            <div className="absolute left-0 desktop:h-[420px] sm:h-[570px] h-[670px] w-px bg-gray-200"></div>
            <div className="absolute right-0 desktop:h-[420px] sm:h-[570px] h-[670px] w-px bg-dash bg-dashGap"></div>
          </div>
          <div className="relative desktop:h-[420px] sm:h-[570px] h-[670px] mt-20">
            <div className="absolute right-0 desktop:h-[420px] sm:h-[570px] h-[670px] w-px bg-dash bg-dashGap"></div>
          </div>
          <div className="relative desktop:h-[420px] sm:h-[570px] h-[670px] mt-20">
            <div className="absolute right-0 desktop:h-[420px] sm:h-[570px] h-[670px] w-px bg-dash bg-dashGap"></div>
          </div>
          <div className="relative desktop:h-[420px] sm:h-[570px] h-[670px] mt-20">
            <div className="absolute right-0 desktop:h-[420px] sm:h-[570px] h-[670px] w-px bg-gray-200"></div>
          </div>
        </div>
        <h3 className="relative pt-40 mx-auto text-3xl font-bold text-center text-black font-rubik">
          Who we've worked with
        </h3>
        <div className="grid desktop:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-10 max-w-section h-[100px] sm:px-10 all:px-4 mt-10">
          <img
            src="/client-logos/pgb.png"
            alt="Playground Bullys UK Logo"
            className="h-[100px] object-cover mx-auto"
          />
          <img
            src="/client-logos/mycabinbed.png"
            alt="My Cabin Bed Logo"
            className="h-[100px] object-cover mx-auto"
          />
          <img
            src="/client-logos/grandvenue.png"
            alt="Grand Venue Logo"
            className="h-[100px] object-cover mx-auto"
          />
          <img
            src="/client-logos/swapmyenergy.png"
            alt="Swap My Energy Logo"
            className="h-[100px] object-cover mx-auto"
          />
          <img
            src="/client-logos/unitecities.png"
            alt="Unite Cities Logo"
            className="h-[100px] object-cover mx-auto"
          />
          <img
            src="/client-logos/scs.png"
            alt="Specialist Coating Logo"
            className="h-[100px] object-cover mx-auto"
          />
        </div>
      </div>
      <div className="w-full h-full bg-light-navy skewT">
        <div className="pt-28 pb-20 mx-auto max-w-section sm:px-10 all:px-4">
          <h3 className="text-4xl font-bold font-rubik pb-10 text-white">
            {props.title}
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {props.cards.map((card) => GetCard(card.type, card))}
          </div>
        </div>
      </div>
      <ContactSection></ContactSection>
    </div>
  );
};
