import React, { useRef } from "react";

export const ThirdSection = () => {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div className="relative w-full h-full skew">
      <div className="min-w-full bg-gray-200 relative p-global">
        <div className="max-w-section mx-auto sm:px-10 all:px-4 grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 pb-16 justify-center">
          <div className="mt-8">
            <h3 className="text-primary font-bold text-lg lg:text-2xl mb-2">
              On Trend
            </h3>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
              Brand And Marketing strategies
            </h2>
            <div className="pb-1.5 bg-primary bg-no-repeat bg-left-bottom w-1/4 my-2"></div>
            <p className="text-md lg:text-lg xl:text-xl mb-2">
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
              src="https://assets9.lottiefiles.com/packages/lf20_cwo7ql12.json"
              style={{ width: "auto", height: "auto", maxWidth: "300px", maxHeight: "300px" }}
            ></lottie-player>
          </div>
          <div className="order-1 mx-auto">
            <lottie-player
              id="firstLottie"
              ref={ref}
              autoplay
              loop
              mode="normal"
              src="https://assets2.lottiefiles.com/packages/lf20_q6uvw3fy.json"
              style={{ width: "auto", height: "auto", maxWidth: "300px", maxHeight: "300px" }}
            ></lottie-player>
          </div>
          <div className="text-right md:order-2">
            <h3 className=" text-primary font-bold text-lg lg:text-2xl mb-2">
              Strategic
            </h3>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
              Idea Execution
            </h2>
            <div className="pb-1.5 bg-primary bg-no-repeat bg-right-bottom w-1/4 ml-auto my-2"></div>
            <p className="text-md lg:text-lg xl:text-xl mb-2">
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
    </div>
  );
};
