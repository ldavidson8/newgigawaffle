import { Lines } from "./HomeComponents/Lines";
import { StepsCard, StepsFeaturesCard } from "./HomeComponents/StepsCard";

export const Services = (props) => {
    return (
        <div>
        <div className="relative w-full h-[550px]">
            <Lines/>
            <img
                src={props.bannerImage}
                alt={props.bannerAlt}
                className="mx-auto w-full h-full object-fill"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-4 min-w-section sm:px-10 all:px-4 h-full">
                <div className="flex col-span-2 my-auto pb-16">
                    <div className="w-[2px] ml-0 bg-primary"></div>
                    <div className="pl-4">
                        <span className="text-base text-primary font-rubik font-bold">{props.preTitle/*Responsive*/}</span>
                        <h1 className="text-5xl text-white font-rubik font-bold pb-2">{props.title/*Web Design*/}</h1>
                        <p className="text-base text-white font-rubik">{props.description}</p>
                    </div>
                </div>
                <div className="relative text-right h-full w-full">
                    <p className="absolute right-2 bottom-0 mb-52 rotate-90 pl-2 origin-top-right font-rubik border-l-[2px] border-primary border-solid text-white text-sm font-bold z-10"><a href={props.caseStudyLink}>CASE STUDY:<br/>{props.caseStudy}</a></p>
                </div>
                <div>                
                    <img
                        src={props.serviceImage}
                        alt={props.serviceImgAlt}
                        className="relative mx-auto w-full mt-16 object-fill right-0 z-2"
                    />
                    <img
                        src={props.serviceOverlay}
                        alt={props.serviceOverlayAlt}
                        className="absolute right-6 top-12 translate-x-1/4 translate-y-1/3 z-100"
                    />
                </div>
            </div>
        </div>
        <div className="relative -mt-20 max-w-section sm:px-10 all:px-4 h-[500px] mx-auto">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-section mx-auto sm:px-10 all:px-4 grid grid-cols-4 h-[500px] w-screen">
            <div className="relative h-[500px]">
                <div className="absolute left-0 h-[500px] w-px bg-gray-200"></div>
                <div className="absolute right-0 h-[500px] w-px bg-dash bg-dashGap"></div>
            </div>
            <div className="relative h-[500px]">
                <div className="absolute right-0 h-[500px] w-px bg-dash bg-dashGap"></div>
            </div>
            <div className="relative h-[300px] pt-24">
                <div className="absolute right-0 h-[300px] w-px bg-dash bg-dashGap"></div>
            </div>
            <div className="relative h-[500px]">
            <div className="absolute right-0 h-[500px] w-px bg-gray-200"></div>
            </div>
            </div>
            <h3 className="relative text-center pt-40 text-black font-rubik font-bold text-2xl mx-auto">Who we've worked with</h3>
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
        <div className="bg-gray-200 h-screen w-full -skew-y-2">
            <div className="max-w-section skew-y-2 mx-auto sm:px-10 all:px-4 pt-20">
                <h3 className="font-bold font-rubik text-2xl">{props.title}</h3>
                <div className="grid grid-cols-3 gap-2 h-[580px]">   >
                    <StepsCard
                        number="01"
                        title="Scope Definition"
                        description="We collaborate with the client to decide what objectives the new website must achieve. i.e., what is its purpose? We can determine the scope of the project once we know what the site's purpose is. I.e., what web pages and features the site will need to achieve the goal, as well as the timeframe for implementing them."                       
                    />
                    <StepsCard
                        number="02"
                        title="Wireframe Creation"
                        description="Wireframes allow us to plan out how each page will be structured and how people will interact with the website."                       
                    />
                    <StepsCard
                        number="04"
                        title="Content Creation"  
                        description="Now that we have a clearer picture of the site, we can begin creating content for individual pages, keeping in mind search engine optimization (SEO) to keep pages focused on a single topic."                     
                    />
                    <StepsCard
                        number="05"
                        title="Visual Elements"
                        description="We begin working on the client's brand after we have the site architecture and some content in place. This allows us to define the visual aspect of the website."                       
                    />
                    <StepsCard
                        number="06"
                        title="Testing"                       
                    />
                </div>
            </div>
        </div>
        </div>
    );
};