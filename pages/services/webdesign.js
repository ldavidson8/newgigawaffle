import { Services } from "../../components/ServicesPage";
import SiteLayout from "../../components/SiteLayout";

export default function WebDesign() {
  return (
    <Services
      bannerImage="/service-banners/webdesign.png"
      preTitle="Responsive"
      title="Web Design"
      description="We love playing about with the latest technologies, following the latest design trends and building websites that we’re sure you’ll love!"
      serviceImage="/service-images/mcbphone.png"
      serviceOverlay="/service-images/mcboverlay.png"
      caseStudy="My Cabin Bed"
      caseStudyLink="/"
    />
  );
}

WebDesign.getLayout = function getLayout(webdesign) {
  return <SiteLayout>{webdesign}</SiteLayout>;
};
