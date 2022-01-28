import SiteLayout from "../../components/SiteLayout";
import { Lines } from "../../components/HomeComponents/Lines";
import ReactPlayer from "react-player";
import { StepsCard } from "../../components/HomeComponents/StepsCard";
import ContactSection from "../../components/ContactSection";
export default function SEO() {
  return (
    <div>
      <div className="relative w-full h-[650px] skewB">
        <Lines />
        <img
          src="/service-banners/webdesign.png"
          alt=""
          className="object-fill w-full h-full mx-auto"
        />
      </div>
      <div className="absolute top-[56px] grid h-[550px] grid-cols-4 -translate-x-1/2 left-1/2 min-w-section -pt-[56px] sm:px-10 all:px-4">
        <div className="flex col-span-2 pb-18 my-auto">
          <div className="w-[2px] ml-0 bg-primary"></div>
          <div className="pl-4">
            <span className="text-base font-bold text-primary font-rubik">
              Result-focused
            </span>
            <h1 className="pb-2 text-5xl font-bold text-white font-rubik">
              SEO
            </h1>
            <p className="text-md text-white font-rubik">
              Push your business up the search rankings with result-focused
              search engine optimisation tweaks and content.
            </p>
          </div>
        </div>
        <div></div>
        <div className="pt-10">
          <img
            src="/service-images/smoverlay.png"
            alt=""
            className="absolute right-6 top-10 translate-x-[6%] z-100"
          />
        </div>
      </div>
      <div className="relative -mt-20 pt-10 max-w-section sm:px-10 all:px-4 h-[500px] mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-section mx-auto sm:px-10 all:px-4 grid grid-cols-4 h-[500px] w-screen">
          <div className="relative h-[420px] mt-20 overflow-hidden">
            <div className="absolute left-0 h-[420px] w-px bg-gray-200"></div>
            <div className="absolute right-0 h-[420px] w-px bg-dash bg-dashGap"></div>
          </div>
          <div className="relative h-[420px] mt-20">
            <div className="absolute right-0 h-[420px] w-px bg-dash bg-dashGap"></div>
          </div>
          <div className="relative h-[420px] mt-20">
            <div className="absolute right-0 h-[420px] w-px bg-dash bg-dashGap"></div>
          </div>
          <div className="relative h-[420px] mt-20">
            <div className="absolute right-0 h-[420px] w-px bg-gray-200"></div>
          </div>
        </div>
        <h3 className="relative pt-40 mx-auto text-3xl font-bold text-center text-black font-rubik">
          Who we've worked with
        </h3>
        <div className="grid grid-cols-6 max-w-section h-[100px] sm:px-10 all:px-4 mt-10">
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
          <h3 className="text-4xl font-bold font-rubik mb-10 text-white border-solid border-l-8 pl-2 border-primary ">
            Search Engine Optimisation
          </h3>
          <div className="grid grid-cols-3 gap-2">
            <StepsCard
              number="01"
              title="SEO Audit"
              description="We take an in-depth look at your website and its content and regularly make SEO tweaks and SEO-focused content to help maximise your websites potential online. "
              direction={[
                true,
                false,
                false,
                false,
              ]} /*[Top-right,bottom-right,bottom-left,top-left]*/
            />
            <StepsCard
              number="02"
              title="Blogging"
              description="Got a blog on your website? We can create relevant, SEO-focused blog posts to promote your products/services."
              direction={[
                false,
                false,
                false,
                true,
              ]} /*[Top-right,bottom-right,bottom-left,top-left]*/
            />
            <StepsCard
              number="03"
              title="Google My Business"
              description="Just as Google's search engine is an incredible way to promote your business, Google Maps is becoming increasingly important for getting your business found. We can get your business setup with Google My Business to ensure that Google Map searchers can find your business."
              direction={[
                false,
                false,
                true,
                false,
              ]} /*[Top-right,bottom-right,bottom-left,top-left]*/
            />
          </div>
        </div>
      </div>
      <ContactSection></ContactSection>
    </div>
  );
}

SEO.getLayout = function getLayout(seo) {
  return <SiteLayout>{seo}</SiteLayout>;
};
