import React, { useRef } from "react";

export const ThirdSection = () => {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div className="max-w-screen-xl min-w-full -skew-y-2 bg-gray-200 relative p-global">
      <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-12 mx-8 skew-y-2 justify-center">
        <div className="mt-8">
          <h3 className="text-primary font-bold text-lg lg:text-2xl mb-2">
            On Trend
          </h3>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
            Brand And Marketing strategies
          </h2>
          <div className="pb-1.5 bg-primary bg-no-repeat bg-left-bottom w-1/3 my-2"></div>
          <p className="text-lg lg:text-xl xl:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
            egestas egestas fringilla phasellus.
          </p>
          <a className="underline text-primary text-lg lg:text-2xl font-bold">
            Find Out More
          </a>
        </div>
        <div className="">
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="https://assets9.lottiefiles.com/packages/lf20_cwo7ql12.json"
            style={{ width: "auto", height: "auto", maxWidth: "400px" }}
          ></lottie-player>
        </div>
        <div className="order-1">
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="https://assets2.lottiefiles.com/packages/lf20_q6uvw3fy.json"
            style={{ width: "auto", height: "auto", maxWidth: "400px" }}
          ></lottie-player>
        </div>
        <div className="text-right md:order-2">
          <h3 className="m-4 text-primary font-bold text-lg lg:text-2xl mb-2">
            Strategic
          </h3>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl m-4 font-bold">
            Idea Execution
          </h2>
          <div className="pb-1.5 bg-primary bg-no-repeat bg-right-bottom w-1/3 ml-auto my-2"></div>
          <p className="text-lg lg:text-xl xl:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
            egestas egestas fringilla phasellus.
          </p>
          <a className="m-4 underline text-primary text-lg lg:text-2xl font-bold">
            Find Out More
          </a>
        </div>
      </div>
    </div>
  );
};
