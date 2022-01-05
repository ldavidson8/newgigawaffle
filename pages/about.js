import SiteLayout from "../components/SiteLayout";

const About = () => {
  return <div></div>;
};

export default About;

About.getLayout = function getLayout(page) {
  return <SiteLayout>{page}</SiteLayout>;
};
