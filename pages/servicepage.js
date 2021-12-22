import Image from "next/image";
import SiteLayout from "../components/SiteLayout";

const ServicesPage = () => {
  return (
    <div>
      <div>
        <div className="w-screen h-screen pb-8">
          <div className="w-full h-full bg-light-navy p-8">
            <div className="pt-16 gap-4 grid  grid-cols-2 sm:grid-cols-3 grid-flow-row-dense">
              <div className="col-span-2">
                <h2 className="md:mt-24 text-base sm:text-2xl lg:text-7xl mb-4 font-bold text-primary">
                  Services that make your mouth water
                </h2>
                <div
                  className="my-2 
             pb-2 bg-primary bg-no-repeat bg-left-bottom w-1/3 mb-2"
                ></div>
                <p className="my-4 text-sm sm:text-lg md:text-2xl leading-relaxed text-white font-medium">
                  {
                    "You can 'Pick n Mix' from our wide range of design, development, media & marketing services, allowing you to create a tailored package perfect for your business."
                  }
                </p>
                <p className="text-sm sm:text-lg md:text-2xl leading-relaxed text-white font-normal">
                  Not sure what services you want or want a waffle-free
                  approach? Don't worry, we can help. Just click "Help Me
                  Decide" below and fill in the form.
                </p>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <div className="flex flex-col sm:flex-row pt-4 md:mt-2 xl:mt-20 sm:justify-between">
                  <button
                    className="
              text-xs      
              
              w-full
              sm:w-2/5
              bg-primary
              text-white        
              rounded-full
              items-center
              px-4
              py-1
              sm:py-3
              mb-1
              md:px-4
                     
                         
              font-bold
              uppercase
              "
                  >
                    About Gigawaffle
                  </button>
                  <button
                    className="   
              text-xs     
              xl:text-xl
              w-full
              sm:w-2/5
              text-primary
              bg-white
              border-primary
              border-2      
              rounded-full
              items-center
              px-4            
              py-3
              md:px-4
              
              
              
              
              md:ml-6
              font-bold
              uppercase
              "
                  >
                    Contact Us
                  </button>
                </div>
              </div>

              <div className="col-span-1 mx-auto my-auto">
                <Image
                  src="/services-illustration.png"
                  layout="intrinsic"
                  height="200"
                  width="200"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-screen h-screen">
          <div className="mx-auto w-60">
            <h2 className="text-3xl lg:text-4xl text-center mb-4 font-bold text-primary">
              Our Services
            </h2>
            <h3 className="text-2xl lg:text-3xl text-center mb-8">
              what we offer
            </h3>
          </div>
          <div className="grid gap-x-4 grid-cols-3 px-4 sm:px-12 md:px-24 lg:px-44 xl:px-60 w-full h-full bg-white">
            <div className="col-span-1 h-1">
              <div className="mx-auto w-12">
                <Image
                  src="/brand-design.svg"
                  layout="intrinsic"
                  height="50"
                  width="50"
                />
              </div>
              <h3 className="text-center">Brand Design</h3>
            </div>
            <div className="col-span-1 h-1">
              <div className="mx-auto w-12">
                <Image
                  src="/web-development.svg"
                  layout="intrinsic"
                  height="50"
                  width="50"
                />
              </div>
              <h3 className="text-center">Web Development</h3>
            </div>
            <div className="col-span-1 h-1">
              <div className="mx-auto w-12">
                <Image
                  src="/ui-design.svg"
                  layout="intrinsic"
                  height="50"
                  width="50"
                />
              </div>
              <h3 className="text-center">UI Design</h3>
            </div>

            <div className="col-span-1 h-1">
              <div className="mx-auto w-12">
                <Image
                  src="/graphic-design.svg"
                  layout="intrinsic"
                  height="50"
                  width="50"
                />
              </div>
              <h3 className="text-center">Graphic Design</h3>
            </div>
            <div className="col-span-1 h-1">
              <div className="mx-auto w-12">
                <Image
                  src="/Packaging-design.svg"
                  layout="intrinsic"
                  height="50"
                  width="50"
                />
              </div>
              <h3 className="text-center">Packaging Design</h3>
            </div>
            <div className="col-span-1 h-1">
              <div className="mx-auto w-12">
                <Image
                  src="/Staff-systems.svg"
                  layout="intrinsic"
                  height="50"
                  width="50"
                />
              </div>
              <h3 className="text-center">Staff Systems</h3>
            </div>

            <div className="col-span-1 h-1">
              <div className="mx-auto w-12">
                <Image
                  src="/seo.svg"
                  layout="intrinsic"
                  height="50"
                  width="50"
                />
              </div>
              <h3 className="text-center">SEO</h3>
            </div>
            <div className="col-span-1 h-1">
              <div className="mx-auto w-12">
                <Image
                  src="/copywriting.svg"
                  layout="intrinsic"
                  height="50"
                  width="50"
                />
              </div>
              <h3 className="text-center">Copywriting</h3>
            </div>
            <div className="col-span-1 h-1">
              <div className="mx-auto w-12">
                <Image
                  src="/Digital-marketing.svg"
                  layout="intrinsic"
                  height="50"
                  width="50"
                />
              </div>
              <h3 className="text-center">Digital Marketing</h3>
            </div>

            <div className="col-span-1 h-1">
              <div className="mx-auto w-12">
                <Image
                  src="/content-marketing.svg"
                  layout="intrinsic"
                  height="50"
                  width="50"
                />
              </div>
              <h3 className="text-center">Content Marketing</h3>
            </div>
            <div className="col-span-1 h-1">
              <div className="mx-auto w-12">
                <Image
                  src="/affiliate-marketing.svg"
                  layout="intrinsic"
                  height="50"
                  width="50"
                />
              </div>
              <h3 className="text-center">Affiliate Marketing</h3>
            </div>
            <div className="col-span-1 h-1">
              <div className="mx-auto w-12">
                <Image
                  src="/email-marketing.svg"
                  layout="intrinsic"
                  height="50"
                  width="50"
                />
              </div>
              <h3 className="text-center">Email Marketing</h3>
            </div>

            <div className="col-span-1 h-1 mb-16">
              <div className="mx-auto w-12">
                <Image
                  src="/video-content.svg"
                  layout="intrinsic"
                  height="50"
                  width="50"
                />
              </div>
              <h3 className="text-center">Video Content</h3>
            </div>
            <div className="col-span-1 h-1 mb-16">
              <div className="mx-auto w-12">
                <Image
                  src="/audio-content.svg"
                  layout="intrinsic"
                  height="50"
                  width="50"
                />
              </div>
              <h3 className="text-center">Audio Content</h3>
            </div>
            <div className="col-span-1 h-1 mb-16">
              <div className="mx-auto w-12">
                <Image
                  src="/social-content.svg"
                  layout="intrinsic"
                  height="50"
                  width="50"
                />
              </div>
              <h3 className="text-center">Social Content</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

ServicesPage.getLayout = function getLayout(servicespage) {
  return <SiteLayout>{servicespage}</SiteLayout>;
};
