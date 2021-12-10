export const FifthSection = () => {
  return (
    <div className="w-full py-16 -skew-y-2 bg-navy-blue relative">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 skew-y-2 gap-2 px-5 sm:px-global">
        <div className="bg-gradient-to-br from-primary to-secondary p-1">
          <div className="bg-navy-blue h-full p-4 lg:p-8 ">
            <p className="mb-4 text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-light-blue font-medium text-shadow">
              01
            </p>
            <h2 className="my-4 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white font-medium">
              Web Design
            </h2>
            <p className="mt-4 text-md lg:text-xl xl:text-2xl text-white font-light ">
              We know it can be difficult to manage your business while also
              creating a website that effectively shows off your brand. We will
              build you a website from the ground up, following your design and
              your style.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-bl from-primary to-secondary p-1">
          <div className="bg-navy-blue h-full p-4 lg:p-8 ">
            <p className="mb-4 text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-light-blue font-medium text-shadow">
              02
            </p>
            <h2 className="my-4 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white font-medium">
              {"User Experience (UX)"}
            </h2>
            <p className="mt-4 text-md lg:text-xl xl:text-2xl text-white font-light ">
              When designing you need to understand how your users will interact
              with certain aspects of your website. We will take all this into
              account in our designs, creating a site that all your customers
              will love.
            </p>
          </div>
        </div>
        <div className="relative h-64 xl:h-full">
          <img
            src="grandOccasions.jpg"
            alt="Grand Occasions"
            className="w-full h-full object-cover absolute z-0"
          />
          <p className="text-white z-10 absolute bottom-24 ml-4 lg:ml-8 text-xl font-medium">
            Client :
          </p>
          <h2 className="text-white z-10 absolute bottom-12 xl:-2 ml-4 lg:ml-8 py-1 text-2xl sm:text-3xl font-medium">
            Grand Venue
          </h2>
          <h3 className="text-primary z-10 absolute bottom-4 ml-4 pt-6 lg:ml-8 text-xl font-medium">
            Read More
          </h3>
        </div>

        <div className="relative h-64 xl:h-full">
          <img
            src="playgroundBullysUK.jpeg"
            alt="PlaygroundBullys UK"
            className="w-full h-full object-cover absolute z-0"
          />
          <p className="text-white z-10 absolute bottom-24 ml-4 lg:ml-8 text-xl font-medium">
            Client :
          </p>
          <h2 className="text-white z-10 absolute bottom-12 ml-4 lg:ml-8 py-1 text-2xl sm:text-3xl font-medium">
            PlaygroundBullys UK
          </h2>
          <h3 className="text-primary z-10 absolute bottom-4 ml-4 pt-6 lg:ml-8 text-xl font-medium">
            Read More
          </h3>
        </div>
        <div className="bg-gradient-to-tl from-primary to-secondary p-1">
          <div className="bg-navy-blue h-full p-4 lg:p-8">
            <p className="mb-4 text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-light-blue font-medium text-shadow">
              03
            </p>
            <h2 className="my-4 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white font-medium">
              Content Creation
            </h2>
            <p className="mt-4 text-md lg:text-xl xl:text-2xl text-white font-light">
              Social Media upkeep requires a large time investment to see
              desired results. We offer social media management, audits,
              graphics, photography and video content to ensure your social
              feeds look great and catch the eye.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-tr from-primary to-secondary p-1">
          <div className="bg-navy-blue h-full p-4 lg:p-8">
            <p className="mb-4 text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-light-blue font-medium text-shadow">
              04
            </p>
            <h2 className="my-4 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white font-medium">
              {"Search Engine Optimisation (SEO)"}
            </h2>
            <p className="mt-4 text-md lg:text-xl xl:text-2xl text-white font-light">
              SEO is a challenging hurdle to conquer. At Gigawaffle, we’ll work
              with you after your website is complete to analyse your SEO
              rankings and adjust keywords to find your target demographics.
            </p>
          </div>
        </div>
      </div>
      <div className="py-8 skew-y-2 px-5 sm:px-global">
        <h2 className="text-xl lg:text-3xl pb-4 text-white font-medium">
          We pride ourselves on making it easy for you to turn your business
          into a brand. Whether you know exactly what you're after, or you have
          no clue where to begin, we'll make it a simple process.
        </h2>
        <p className="text-lg lg:text-2xl pt-4 text-white font-normal">
          Our enthusiastic and passionate team will always be on hand throughout
          the process, allowing you to see your image come to life.
        </p>
      </div>
    </div>
  );
};
