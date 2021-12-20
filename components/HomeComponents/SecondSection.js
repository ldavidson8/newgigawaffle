import { ServiceCard } from "./ServiceCard";
import { Lines } from "./Lines";

export const SecondSection = () => {
  return (
    <div className="relative w-full skew">
      <Lines />

      <div className="bg-navy-blue w-32 md:w-56 xl:w-64 h-12 md:h-16 absolute bottom-0 xl:bottom-4 right-0 -skew-y-1"></div>
      <div className="bg-primary w-24 md:w-36 h-8 md:h-12 absolute bottom-0 xl:bottom-5 right-0 -skew-y-1"></div>

      <div className="relative max-w-section mx-auto sm:px-10 all:px-4 top-1/3 grid all:grid-cols-1 md:grid-cols-4 sm:grid-cols-1 w-screen lg:py-32 md:py-20 sm:pt-10 sm:pb-16 all:pt-10 all:pb-16">
        <div className="md:col-span-2 sm:col-span-1">
          <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 lg:grid-cols-1 gap-3 w-auto">
            <ServiceCard
              title="Brand Design"
              description="Make your brand stand out with our brilliant designers."
              imageSrc="/service-icons/mountains-gradient.svg"
            />

            <ServiceCard
              title="Web Design"
              description="Display yourself on the web with a design worth bragging about."
              imageSrc="/service-icons/edit-alt.svg"
            />

            <ServiceCard
              title="Digital Marketing"
              description="Make your business the talk of the town, with care from our social media team."
              imageSrc="/service-icons/share-alt.svg"
            />

            <ServiceCard
              title="Media"
              description="Content creation that lets you grab attention on every platform."
              imageSrc="/service-icons/film.svg"
            />
          </div>
        </div>
        <div className="col-span-2 flex flex-col sm:ml-4 sm:mr-4 all:ml-0 all:mr-0">
          <div>
            <h2 className="text-4xl mb-4 pt-2 font-bold text-navy-blue">
              Digital Services to Take Your Business To The Next Level
            </h2>
            <div className="h-[8px] bg-primary bg-no-repeat bg-left-bottom w-1/3 mb-6"></div>
          </div>
          <p className="text-lg leading-relaxed text-navy-blue row-span-1">
            We're gigawaffle; we’re passionate about turning businesses into
            brands. With plenty of options of services across branding, web
            design, digital marketing and media, you're truly in control when it
            comes to your business. Based in the heart of Preston’s city centre,
            we’re an agency that is determined to make your digital journey as
            simple as it should be.
          </p>
          <div className="flex flex-col lg:flex-row mt-2 gap-2">
            <button
              className="
              text-sm   
              min-w-[180px]   
              min-h-[40px]
              bg-primary
              text-white        
              rounded-full
              items-center
              px-4
              md:px-4
              py-2
              mr-2
              mb-4
              sm:mb-0
              font-bold
              uppercase
              "
            >
              About Gigawaffle
            </button>
            <button
              className="   
              text-sm   
              min-w-[180px]    
              min-h-[40px]
              text-primary
              bg-white
              border-primary
              border-2      
              rounded-full
              items-center
              px-4
              py-2
              mr-2
              font-bold
              uppercase
              "
            >
              Contact Us
            </button>
          </div>
          <div className="lg:block md:hidden"></div>
        </div>
      </div>
    </div>
  );
};
