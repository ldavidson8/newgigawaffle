import SiteLayout from "../components/SiteLayout";

const About = () => {
  return <div className="h-full"></div>;
};

export default About;

About.getLayout = function getLayout(page) {
  return <SiteLayout>{page}</SiteLayout>;
};
