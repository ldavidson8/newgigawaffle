import Image from "next/image";
import Link from "next/link";
import ContactSection from "../../components/ContactSection";
import { Lines } from "../../components/HomeComponents/Lines";
import SiteLayout from "../../components/SiteLayout";

const ServicesPage = () => {
  return (
    <div>
      <div>
        <div className="w-screen h-screen bg-light-navy pt-10">
          <div className="w-full h-full max-w-section mx-auto bg-light-navy p-8">
            <div className="pt-16 flex">
              <div className="">
                <h2 className="md:mt-24 text-base sm:text-2xl lg:text-6xl mb-4 font-bold text-white">
                  Services that make your mouth water
                </h2>
                <div
                  className="my-2 
             pb-2 bg-primary bg-no-repeat bg-left-bottom w-1/3 mb-2 "
                ></div>
                <p className="my-4 text-sm sm:text-lg md:text-xl leading-relaxed text-white font-bold">
                  {
                    "You can 'Pick n Mix' from our wide range of design, development, media & marketing services, allowing you to create a tailored package perfect for your business."
                  }
                </p>
                <p className="text-sm sm:text-lg md:text-xl leading-relaxed text-white font-normal pb-4">
                  Not sure what services you want or want a waffle-free
                  approach? Don't worry, we can help. Just click "Help Me
                  Decide" below and fill in the form.
                </p>
                <Link href="/contact-us">
                  <a>
                    <button
                      className="   
                      text-xs     
                      xl:text-xl
                      w-1/2
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
                      font-bold
                      uppercase"
                    >
                      Contact Us
                    </button>
                  </a>
                </Link>
              </div>

              <div className="col-span-1 mx-auto my-auto pl-10 pt-10">
                <Image
                  src="/services-illustration.png"
                  layout="intrinsic"
                  height="700px"
                  width="700px"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-screen py-10 bg-grey-200">
          <div className="mx-auto w-60 bg-grey-200">
            <h2 className="text-3xl lg:text-4xl text-center mb-4 font-bold text-primary">
              Our Services
            </h2>
            <h3 className="text-xl lg:text-xl text-center mb-8">
              What We Offer
            </h3>
          </div>
          <div className="grid gap-x-4 lg:grid-cols-9 grid-cols-3 max-w-section mx-auto bg-white pb-10">
            <div className="col-span-1">
              <div className="mx-auto w-12">
                <Image
                  src="/nav-icons/speakerphone.svg"
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
                  src="/nav-icons/view_quilt.svg"
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
                  src="/nav-icons/photo_camera.svg"
                  layout="intrinsic"
                  height="50"
                  width="50"
                />
              </div>
              <h3 className="text-center">Photos & Videos</h3>
            </div>

            <div className="col-span-1 h-1">
              <div className="mx-auto w-12">
                <Image
                  src="/nav-icons/search.svg"
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
                  src="/nav-icons/smile.svg"
                  layout="intrinsic"
                  height="50"
                  width="50"
                />
              </div>
              <h3 className="text-center">UX Design</h3>
            </div>
            <div className="col-span-1 h-1">
              <div className="mx-auto w-12">
                <Image
                  src="/nav-icons/adobephotoshop.svg"
                  layout="intrinsic"
                  height="50"
                  width="50"
                />
              </div>
              <h3 className="text-center">Graphics</h3>
            </div>

            <div className="col-span-1 h-1">
              <div className="mx-auto w-12">
                <Image
                  src="/nav-icons/mountains_black.svg"
                  layout="intrinsic"
                  height="50"
                  width="50"
                />
              </div>
              <h3 className="text-center">Logo Design</h3>
            </div>
            <div className="col-span-1 h-1">
              <div className="mx-auto w-12">
                <Image
                  src="/nav-icons/code.svg"
                  layout="intrinsic"
                  height="50"
                  width="50"
                />
              </div>
              <h3 className="text-center">Web Dev</h3>
            </div>
            <div className="col-span-1 h-1">
              <div className="mx-auto w-12">
                <Image
                  src="/nav-icons/pencil.svg"
                  layout="intrinsic"
                  height="50"
                  width="50"
                />
              </div>
              <h3 className="text-center">Illustrations</h3>
            </div>
          </div>
        </div>
      </div>

      <ContactSection></ContactSection>
    </div>
  );
};

export default ServicesPage;

ServicesPage.getLayout = function getLayout(servicespage) {
  return <SiteLayout>{servicespage}</SiteLayout>;
};
