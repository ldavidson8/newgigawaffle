import SiteLayout from "../../components/SiteLayout";
import { Lines } from "../../components/HomeComponents/Lines";
import ReactPlayer from "react-player";
import { StepsCard } from "../../components/HomeComponents/StepsCard";
import ContactSection from "../../components/ContactSection";
export default function DigitalMarketing() {
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
        <div className="flex col-span-2 pb-28 my-auto ">
          <div className="w-[2px] ml-0 bg-primary"></div>
          <div className="pl-4">
            <span className="text-base font-bold text-primary font-rubik">
              Results-driven
            </span>
            <h1 className="pb-2 text-5xl font-bold text-white font-rubik">
              Digital Marketing
            </h1>
            <p className="text-md text-white font-rubik">
              We love creating content that people will love and that will help
              push your business to the next level.
            </p>
          </div>
        </div>
        <div></div>
        <div className="pt-10">
          <img
            src="/grandvenue.gif"
            alt=""
            className="relative right-0 object-fill scale-125 p-2 w-full mx-auto mt-20 z-2"
          />
          <img
            src="/service-images/smoverlay.png"
            alt=""
            className="absolute right-6 top-10 translate-x-[6%] translate-y-1/3 z-100"
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
          <div className="relative h-[360px] mt-36">
            <div className="absolute right-0 h-[360px] w-px bg-dash bg-dashGap"></div>
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
            Digital Marketing
          </h3>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <img
                src="/mycabinbedstats.png"
                width="100%"
                height="100%"
                className="h-full w-full object-cover"
              />
            </div>
            <StepsCard
              number="01"
              title="Custom Strategy"
              description="Our team of creatives and strategists develop a social media strategy which suits your business specifically. We design content from the ground up and look to build a personal relationship between your business and its customers."
              direction={[
                true,
                false,
                false,
                false,
              ]} /*[Top-right,bottom-right,bottom-left,top-left]*/
            />
            <StepsCard
              number="02"
              title="Social Media Audit"
              description="We look into the history and the current status of your social media accounts and build a strategy that grows your businesses presence and creates relationships with your customers that last."
              direction={[
                false,
                false,
                false,
                true,
              ]} /*[Top-right,bottom-right,bottom-left,top-left]*/
            />
            <StepsCard
              number="03"
              title="Advertisements"
              description="Our experts can plan and create advertisements to showcase your products or services, bring traffic to your website, and/or to promote brand awareness, all with a targetted audience across Facebook & Instagram."
              direction={[
                false,
                false,
                true,
                false,
              ]} /*[Top-right,bottom-right,bottom-left,top-left]*/
            />
            <StepsCard
              number="04"
              title="Email Marketing"
              description="Promote your business directly to your customers using the power of email. Whether its for one-off promos or whether you want to provide a weekly newsletter, our team can create engaging email content to suit your business and what you have to offer."
              direction={[
                false,
                true,
                false,
                false,
              ]} /*[Top-right,bottom-right,bottom-left,top-left]*/
            />
            <StepsCard
              number="05"
              title="Content Marketing"
              description="We love content; we're consumers, engagers and producers of content and we like produce content that drives engagement and promotes products/services. Whether its photo, video, audio, long-form, short-form or something different that you're, we've got the expertise on hand."
              direction={[
                false,
                false,
                true,
                false,
              ]} /*[Top-right,bottom-right,bottom-left,top-left]*/
            />
            <StepsCard
              number="06"
              title="Management"
              description="We can take away the stress of social media, so you can focus on your business. We can deal with the content, strategy, enquiries, partnership and more, whilst keeping you in the loop."
              direction={[
                false,
                false,
                false,
                true,
              ]} /*[Top-right,bottom-right,bottom-left,top-left]*/
            />
            <img
              src="/grandvenuepromo.png"
              width="100%"
              height="100%"
              className="h-[375px] w-full object-cover object-bottom col-span-2"
              playing
            />
          </div>
        </div>
      </div>
      <ContactSection></ContactSection>
    </div>
  );
}

DigitalMarketing.getLayout = function getLayout(digitalmarketing) {
  return <SiteLayout>{digitalmarketing}</SiteLayout>;
};
