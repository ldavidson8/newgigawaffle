import { Lines } from "./HomeComponents/Lines";

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
                        className="absolute z-5 right-6 top-12 translate-x-1/4 translate-y-1/3"
                    />
                </div>

            </div>
        </div>
        <div className="relative -mt-20 max-w-section sm:px-10 all:px-4 h-[400px] mx-auto">
            <Lines></Lines>
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
        </div>
    );
};