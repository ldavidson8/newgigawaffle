import React, { useRef } from "react";
import { Lines } from "./Lines";

export const FourthSection = () => {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div className="max-w-screen-xl min-w-full -skew-y-2 relative p-global">
      <Lines/>

      <div className="bg-navy-blue w-32 md:w-56 xl:w-64 h-10 md:h-16 -skew-y-1 absolute -bottom-2 left-0"></div>
      <div className="bg-primary w-24 md:w-36 h-8 md:h-12 -skew-y-1 absolute left-12 md:left-24 -bottom-1 xl:left-32"></div>

      <div className="relative max-w-section mx-auto sm:px-10 all:px-4 h-full grid grid-cols-1 md:grid-cols-2 pt-10 pb-20 md:gap-12 sm:gap-4 all:gap-4 skew-y-2">
        <div className="mt-8">
          <h3 className="text-primary font-bold text-lg lg:text-2xl mb-2">
            Passionate
          </h3>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-2">
            Business Nurturement
          </h2>
          <div className="pb-1.5 bg-primary bg-no-repeat bg-left-bottom w-1/4 mb-2"></div>
          <p className="text-lg lg:text-xl xl:text-2xl mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
            egestas egestas fringilla phasellus.
          </p>
          <a className="underline text-primary text-lg lg:text-xl font-bold">
            Find Out More
          </a>
        </div>
        <div className="mx-auto">
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="https://assets8.lottiefiles.com/packages/lf20_nsuai6xu.json"
            style={{ width: "auto", maxHeight: "300px" }}
          ></lottie-player>
        </div>
        <div className="order-1 mx-auto">
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="https://assets10.lottiefiles.com/packages/lf20_ck0xlavd.json"
            style={{ width: "auto", maxHeight: "300px" }}
          ></lottie-player>
        </div>
        <div className="text-right md:order-2">
          <h3 className="text-primary font-bold text-lg lg:text-2xl mb-2">
            Quality
          </h3>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-2">
            Creative Solutions
          </h2>
          <div className="pb-1.5 bg-primary bg-no-repeat bg-left-bottom w-1/4 ml-auto my-2"></div>
          <p className="text-lg lg:text-xl xl:text-2xl mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
            egestas egestas fringilla phasellus.
          </p>
          <a className="underline text-primary text-lg lg:text-xl font-bold">
            Find Out More
          </a>
        </div>
      </div>
    </div>
  );
};
