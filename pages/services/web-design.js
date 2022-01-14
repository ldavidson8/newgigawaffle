import SiteLayout from "../../components/SiteLayout";
import { Lines } from "../../components/HomeComponents/Lines";
import ReactPlayer from "react-player";
import { StepsCard } from "../../components/HomeComponents/StepsCard";
import ContactSection from "../../components/ContactSection";
export default function WebDesign() {
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
              Responsive
            </span>
            <h1 className="pb-2 text-5xl font-bold text-white font-rubik">
              Web Design
            </h1>
            <p className="text-md text-white font-rubik">
              We love playing about with the latest technologies, following the
              latest design trends and building websites that we’re sure you’ll
              love!
            </p>
          </div>
        </div>
        <div></div>
        <div className="pt-10">
          <img
            src="/service-images/mcbphone.png"
            alt=""
            className="relative right-0 object-fill w-full mx-auto mt-8 z-2"
          />
          <img
            src="/service-images/mcboverlay.png"
            alt=""
            className="absolute right-6 top-10 translate-x-1/4 translate-y-1/3 z-100"
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
          <div className="relative h-[370px] mt-32">
            <div className="absolute right-0 h-[370px] w-px bg-gray-200"></div>
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
            Web Design
          </h3>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <ReactPlayer
                url="/pgb.mp4"
                width="100%"
                height="100%"
                className="h-full w-full overflow-clip"
                playing
              />
            </div>
            <StepsCard
              number="01"
              title="Scope Definition"
              description="We collaborate with the client to decide what objectives the new website must achieve. i.e., what is its purpose? We can determine the scope of the project once we know what the site's purpose is. I.e., what web pages and features the site will need to achieve the goal, as well as the timeframe for implementing them."
              direction={[
                true,
                false,
                false,
                false,
              ]} /*[Top-right,bottom-right,bottom-left,top-left]*/
            />
            <StepsCard
              number="02"
              title="Wireframe Creation"
              description="Wireframes allow us to plan out how each page will be structured and how people will interact with the website. Planning out the interaction from a wide range of potential users, allows us to consider differing ease of use for different users, maintaining good User Experience (UX)."
              direction={[
                false,
                false,
                false,
                true,
              ]} /*[Top-right,bottom-right,bottom-left,top-left]*/
            />
            <StepsCard
              number="03"
              title="Content Creation"
              description="Now that we have a clearer picture of the site, we can begin creating content for individual pages, keeping in mind search engine optimization (SEO) to keep pages focused on a single topic."
              direction={[
                false,
                false,
                true,
                false,
              ]} /*[Top-right,bottom-right,bottom-left,top-left]*/
            />
            <StepsCard
              number="04"
              title="Visual Elements"
              description="We begin working on the client's branding after we have the site architecture and some content in place. This allows us to work out the visual aspect of the website and what design elements work well, e.g. navbar, buttons, inputs, etc."
              direction={[
                false,
                true,
                false,
                false,
              ]} /*[Top-right,bottom-right,bottom-left,top-left]*/
            />
            <StepsCard
              number="05"
              title="Testing"
              description="Next, we check that everything is working as it should. Our QA team check for issues around visuals, user experience, functionality, performance, responsiveness and more, to ensure that your website is in the best state that it can be in."
              direction={[
                false,
                false,
                true,
                false,
              ]} /*[Top-right,bottom-right,bottom-left,top-left]*/
            />
            <StepsCard
              number="06"
              title="Launch"
              description="Once the website is ready to launch, we finalise everything with the client and agree when to launch the clients shiny new website. Once the website is live, you should be able to find it both here and on our social media (@gigawaffleuk)."
              direction={[
                false,
                false,
                false,
                true,
              ]} /*[Top-right,bottom-right,bottom-left,top-left]*/
            />
            <ReactPlayer
              url="/mcb.mp4"
              width="100%"
              height="100%"
              className="h-full w-full overflow-clip col-span-2"
              playing
            />
          </div>
        </div>
      </div>
      <ContactSection></ContactSection>
    </div>
  );
}

WebDesign.getLayout = function getLayout(webdesign) {
  return <SiteLayout>{webdesign}</SiteLayout>;
};
