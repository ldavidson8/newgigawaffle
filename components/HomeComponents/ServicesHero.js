import Link from "next/link";
import Image from "next/image";
import { Lines } from "./Lines";

export const ServicesHero = () => {
  return (
    <div className=" text-white ">
      <div className="w-full mb:h-[160%] h-[110%] opacity-30 bg-heroImage bg-center bg-cover bg-no-repeat text-white -skew-y-2 mb-6 origin-top-left absolute -z-10"></div>
      <div className="flex sclg:flex-row flex-col justify-center items-center sclg:h-full max-w-section mx-auto relative pt-20">
        <div className="p-10 mb:p-4 sclg:w-[40%] sclg:mt-0 mt-16 my-auto">
          <div className="flex my-auto">
            <div className="">
              <div className="w-full flex flex-row -translate-x-[13px]">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 font-bold text-black pl-4">
                  Services to take your business to the next level
                </h2>
              </div>
              <p className="my-4 text-md sm:text-lg md:text-xl leading-relaxed text-black font-bold">
                We have a wide range of services across web design, branding and
                digital marketing, providing you with all the tools you need for
                your business to succeed, with none of the waffle.
              </p>
              <p className="text-md sm:text-lg md:text-lg leading-relaxed text-black font-normal pb-4">
                Want to start your Gigawaffle journey? Or have some questions
                about our services? Click contact us and fill out the form.
              </p>
              <Link href="/contact-us">
                <a>
                  <button
                    className="   
                      text-xs     
                      xl:text-xl
                      w-[250px]
                      text-primary
                      bg-white
                      border-primary
                      border-2      
                      rounded-full
                      items-center
                      px-4            
                      py-2
                      md:px-4
                      font-bold
                      uppercase hover:bg-primary hover:text-white"
                  >
                    Contact Us
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid mb:grid-cols-2 grid-cols-4 gap-4 sclg:mr-8 mx-10 mb:mx-4">
          <Link href="/digital-marketing" passHref>
            <a>
              <div className="group flex flex-col cursor-pointer justify-between bg-white border-2 border-black w-[165px] h-[230px] p-4 hover:bg-fadedSpeakerphone hover:shadow-xl hover:shadow-primary overflow-clip">
                <img
                  src="/fadedspeakerphone.svg"
                  width="150px"
                  height="150px"
                  className="group-hover:opacity-50 opacity-10 h-[100px] w-[100px] -translate-x-8"
                ></img>
                <div>
                  <p className="text-sm text-primary font-bold group-hover:text-white">
                    Results-driven
                  </p>
                  <p className="text-md text-black group-hover:text-white">
                    Digital <br />
                    Marketing
                  </p>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/seo" passHref>
            <a>
              <div className="group flex flex-col cursor-pointer justify-between bg-white border-2 border-black w-[165px] h-[230px] p-4 hover:bg-fadedSEO hover:shadow-xl hover:shadow-primary overflow-clip">
                <img
                  src="/fadedseo.svg"
                  width="150px"
                  height="150px"
                  className="group-hover:opacity-50 opacity-10 h-[100px] w-[100px] -translate-x-8"
                ></img>
                <div>
                  <p className="text-sm text-primary font-bold group-hover:text-white">
                    Result-focused
                  </p>
                  <p className="text-md text-black group-hover:text-white">
                    Search Engine <br />
                    Optimisation
                  </p>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/brand-design" passHref>
            <a>
              <div className="group flex flex-col cursor-pointer justify-between bg-white border-2 border-black w-[165px] h-[230px] p-4 hover:bg-fadedBrand hover:shadow-xl hover:shadow-primary overflow-clip">
                <img
                  src="/fadedlogo.svg"
                  width="150px"
                  height="150px"
                  className="group-hover:opacity-50 opacity-10 h-[100px] w-[100px] -translate-x-8"
                ></img>
                <div>
                  <p className="text-sm text-primary font-bold group-hover:text-white">
                    Bold & Exciting
                  </p>
                  <p className="text-md text-black group-hover:text-white">
                    Brand <br />
                    Design
                  </p>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/web-design" passHref>
            <a>
              <div className="group flex flex-col cursor-pointer justify-between bg-white border-2 border-black w-[165px] h-[230px] p-4 hover:bg-fadedWebDesign hover:shadow-xl hover:shadow-primary overflow-clip">
                <img
                  src="/fadedcode.svg"
                  width="150px"
                  height="150px"
                  className="group-hover:opacity-50 opacity-10 h-[100px] w-[100px] -translate-x-8"
                ></img>
                <div>
                  <p className="text-sm text-primary font-bold group-hover:text-white">
                    Responsive
                  </p>
                  <p className="text-md text-black group-hover:text-white">
                    Web <br />
                    Design
                  </p>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/ecommerce-design" passHref>
            <a>
              <div className="group flex flex-col cursor-pointer justify-between bg-white border-2 border-black w-[165px] h-[230px] p-4 hover:bg-fadedECom hover:shadow-xl hover:shadow-primary overflow-clip">
                <img
                  src="/fadedshop.svg"
                  width="150px"
                  height="150px"
                  className="group-hover:opacity-50 opacity-10 h-[100px] w-[100px] -translate-x-8"
                ></img>
                <div>
                  <p className="text-sm text-primary font-bold group-hover:text-white">
                    Engaging
                  </p>
                  <p className="text-md text-black group-hover:text-white">
                    E-Commerce <br />
                    Design
                  </p>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/photosandvideos" passHref>
            <a>
              <div className="group flex flex-col cursor-pointer justify-between bg-white border-2 border-black w-[165px] h-[230px] p-4 hover:bg-fadedPhoto hover:shadow-xl hover:shadow-primary overflow-clip">
                <img
                  src="/fadedphoto.svg"
                  width="150px"
                  height="150px"
                  className="group-hover:opacity-50 opacity-10 h-[100px] w-[100px] -translate-x-8"
                ></img>
                <div>
                  <p className="text-sm text-primary font-bold group-hover:text-white">
                    Eye-catching
                  </p>
                  <p className="text-md text-black group-hover:text-white">
                    Photos & <br />
                    Videos
                  </p>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/illustration" passHref>
            <a>
              <div className="group flex flex-col cursor-pointer justify-between bg-white border-2 border-black w-[165px] h-[230px] p-4 hover:bg-fadedIllustration hover:shadow-xl hover:shadow-primary overflow-clip">
                <img
                  src="/fadedpen.svg"
                  width="150px"
                  height="150px"
                  className="group-hover:opacity-50 opacity-10 h-[100px] w-[100px] -translate-x-8"
                ></img>
                <div>
                  <p className="text-sm text-primary font-bold group-hover:text-white">
                    Creative
                  </p>
                  <p className="text-md text-black group-hover:text-white">
                    Drawings & <br />
                    Illustrations
                  </p>
                </div>
              </div>
            </a>
          </Link>
          <div className="group relative flex flex-col justify-between bg-white border-2 border-black w-[165px] h-[230px] p-4 hover:bg-fadedPodcast hover:shadow-xl hover:shadow-primary overflow-clip">
            <div className="absolute top-2 right-0 translate-x-5 bg-red-500 text-center rotate-45 px-5 font-bold hidden">
              NEW
            </div>
            <div className="absolute top-2 left-0 right-0 w-full bg-red-500 text-center text-sm px-5 font-bold z-10">
              COMING SOON
            </div>
            <img
              src="/fadedmic.svg"
              width="150px"
              height="150px"
              className="group-hover:opacity-50 opacity-10 h-[100px] w-[100px] -translate-x-8"
            ></img>
            <div>
              <p className="text-sm text-primary font-bold group-hover:text-white">
                Entertaining
              </p>
              <p className="text-md text-black group-hover:text-white">
                Podcast <br />
                Creation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
