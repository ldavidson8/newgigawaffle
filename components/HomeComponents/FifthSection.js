import { StepsCard } from "./StepsCard";

export const FifthSection = () => {
  return (
    <div className="w-full py-16 -skew-y-2 bg-light-navy relative">
      <div className="grid max-w-section mx-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 skew-y-2 gap-2 sm:px-10 all:px-4 pt-10">
        <StepsCard
          number="01"
          title="Web Design"
          description="We know it can be difficult to manage your business while also
          creating a website that effectively shows off your brand. We will
          build you a website from the ground up, following your design and
          your style."
          direction={[true,false,false,false]}
        />
        <StepsCard
          number="02"
          title="User Experience (UX)"
          description="When designing you need to understand how your users will interact
          with certain aspects of your website. We will take all this into
          account in our designs, creating a site that all your customers
          will love."
          direction={[false,false,false,true]}
        />
        <div className="relative h-64 xl:h-full">
          <img
            src=""
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
            src=""
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
        <StepsCard
          number="03"
          title="Content Creation"
          description="Social Media upkeep requires a large time investment to see
          desired results. We offer social media management, audits,
          graphics, photography and video content to ensure your social
          feeds look great and catch the eye."
          direction={[false,false,true,false]}
        />
        <StepsCard
          number="04"
          title="Search Engine Optimisation (SEO)"
          description="SEO is a challenging hurdle to conquer. At Gigawaffle, we’ll work
          with you after your website is complete to analyse your SEO
          rankings and adjust keywords to find your target demographics."
          direction={[false,true,false,false]}
        />
        <div className="max-w-section mx-auto py-8">
          <h2 className="text-xl lg:text-2xl pb-4 text-white font-medium">
            We pride ourselves on making it easy for you to turn your business
            into a brand. Whether you know exactly what you're after, or you
            have no clue where to begin, we'll make it a simple process.
          </h2>
          <p className="text-lg lg:text-xl pt-4 text-white font-normal">
            Our enthusiastic and passionate team will always be on hand
            throughout the process, allowing you to see your image come to life.
          </p>
        </div>
      </div>
    </div>
  );
};
