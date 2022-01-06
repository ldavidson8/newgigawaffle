import React, { useRef } from "react";
import { Lines } from "./Lines";

export const FourthSection = () => {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div className="max-w-screen-xl min-w-full skew relative p-global">
      <Lines />

      <div className="bg-navy-blue bg-opacity-90 w-32 md:w-48 xl:w-64 h-10 absolute -bottom-6 md:-bottom-9 lg:-bottom-10 xl:-bottom-16 left-0 -skew-y-2"></div>
      <div className="bg-primary bg-opacity-80 w-24 md:w-36 h-8 md:h-8 absolute -bottom-6 md:-bottom-9 lg:-bottom-11 xl:-bottom-16 left-0 -skew-y-2"></div>

      <div className="relative max-w-section mx-auto px-12 h-full grid grid-cols-1 md:grid-cols-2 pt-16 pb-16 md:gap-12 sm:gap-4 all:gap-4">
        <div className="mt-8">
          <h3 className="text-primary font-bold text-lg lg:text-2xl mb-2">
            Passionate
          </h3>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-2">
            Business Nurturement
          </h2>
          <div className="pb-1.5 bg-primary bg-no-repeat bg-left-bottom w-1/4 mb-2"></div>
          <p className="text-md lg:text-lg xl:text-xl mb-2">
            Customer retainment is our specialty. Discovering how to maintain an
            outreach suitable for your business and retaining loyal customers
            &amp; clients will require time and a mindset of said clientele.
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
          <p className="text-md lg:text-lg xl:text-xl mb-2">
            A business can't be a great one without eye-catching graphics and
            multimedia. Our designers can create whatever you can imagine for a
            fresh look and feeling whether you're a new or old business.
          </p>
          <a className="underline text-primary text-lg lg:text-xl font-bold">
            Find Out More
          </a>
        </div>
      </div>
    </div>
  );
};
