import Image from "next/image";
import Link from "next/link";
import ContactSection from "../../components/ContactSection";
import { Lines } from "../../components/HomeComponents/Lines";
import { ServicesHero } from "../../components/HomeComponents/ServicesHero";
import SiteLayout from "../../components/SiteLayout";

const ServicesPage = () => {
  return (
    <div>
      <ServicesHero />
      <div>
        <div className="grid gap-10 lg:grid-cols-9 grid-cols-3 max-w-section mx-auto bg-white my-20">
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
          <div className="col-span-1">
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
          <div className="col-span-1">
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

          <div className="col-span-1">
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
          <div className="col-span-1 ">
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
          <div className="col-span-1">
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

          <div className="col-span-1">
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
          <div className="col-span-1">
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
          <div className="col-span-1">
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
        <p
          className="text-center font-bold text-lg text-primary mb-10
        "
        >
          Click to find out more
        </p>
      </div>

      <ContactSection></ContactSection>
    </div>
  );
};

export default ServicesPage;

ServicesPage.getLayout = function getLayout(servicespage) {
  return <SiteLayout>{servicespage}</SiteLayout>;
};
