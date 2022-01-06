import React, { useRef } from "react";

export const ThirdSection = () => {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div className="relative w-full h-full skew">
      <div className="min-w-full relative p-global before:absolute before:h-full before:w-full before:-z-10 before:top-0 before:left-0 before:-skew-y-2 before:origin-top-right before:bg-gray-200">
        <div className="max-w-section mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 pb-16 justify-center">
          <div className="mt-8">
            <h3 className="text-primary font-bold text-lg lg:text-2xl mb-2">
              On Trend
            </h3>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
              Brand And Marketing strategies
            </h2>
            <div className="pb-1.5 bg-primary bg-no-repeat bg-left-bottom w-1/4 my-2"></div>
            <p className="text-md lg:text-lg xl:text-xl mb-2">
              The long term plan for your business needs to be clear and
              concise. With our marketing team we'll research and provide
              multiple tactics for increasing your potential reach and growth
              plans across various channels of the web.
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
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "300px",
                maxHeight: "300px",
              }}
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
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "300px",
                maxHeight: "300px",
              }}
            ></lottie-player>
          </div>
          <div className="text-right md:order-2">
            <h3 className="text-primary font-bold text-lg lg:text-2xl mb-2">
              Strategic
            </h3>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
              Idea Execution
            </h2>
            <div className="pb-1.5 bg-primary bg-no-repeat bg-right-bottom w-1/4 ml-auto my-2"></div>
            <p className="text-md lg:text-lg xl:text-xl mb-2">
              Ideas in the shower come and go, with Gigawaffle we'll ensure the
              idea can be executed effectively to reach your goals. We'll
              document a lengthy plan and multiple campaign strategies to grasp
              the local, nationwide and global audiences.
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
