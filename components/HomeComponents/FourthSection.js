import React, { useRef } from "react";

export const FourthSection = () => {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div className="max-w-screen-xl min-w-full -skew-y-2 bg-white relative p-global">
      {/* <div className="bg-navy-blue w-32 md:w-56 xl:w-64 h-10 md:h-16 -skew-y-2 absolute bottom-0 xl:bottom-3 left-0"></div>
      <div className="bg-primary w-24 md:w-36 h-8 md:h-12 -skew-y-2 absolute -bottom-1 xl:bottom-2 left-12 md:left-24 xl:left-32"></div> */}
      <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-12 mx-8 skew-y-2">
        <div className="mt-8">
          <h3 className="m-4 text-primary font-bold text-lg lg:text-2xl">
            Passionate
          </h3>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl m-4 font-bold">
            Business Nurturement
          </h2>
          <div className="pb-1.5 bg-primary bg-no-repeat bg-left-bottom w-1/3 ml-4 "></div>
          <p className="m-4 text-lg lg:text-xl xl:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
            egestas egestas fringilla phasellus.
          </p>
          <a className="m-4 underline text-primary text-lg lg:text-2xl font-bold">
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
            src="https://assets8.lottiefiles.com/packages/lf20_nsuai6xu.json"
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
            src="https://assets10.lottiefiles.com/packages/lf20_ck0xlavd.json"
            style={{ width: "auto", height: "auto" }}
          ></lottie-player>
        </div>
        <div className="text-right md:order-2">
          <h3 className="text-primary font-bold text-lg lg:text-2xl mb-2">
            Quality
          </h3>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl m-4 font-bold">
            Creative Solutions
          </h2>
          <div className="pb-1.5 bg-primary bg-no-repeat bg-left-bottom w-1/3 ml-auto my-2"></div>
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
