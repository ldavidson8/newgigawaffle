import SiteLayout from "../components/SiteLayout";
import PortfolioRow from "../components/PortfolioRow";
import NetflixHero from "../components/NetflixHero";

const Portfolio = () => {
  return (
    <>
      <section className="h-full">
        <NetflixHero
          src="/client-card-banner/pgbullys.jpeg"
          title="PlaygroundBullys UK"
          lbuttonlink="/portfolio/clients/playgroundbullys"
          lbutton="Read More"
          clienturl="https://playgroundbullysuk.com/"
        />
      </section>
      <section>
        <PortfolioRow />
      </section>
    </>
  );
};

export default Portfolio;

Portfolio.getLayout = function getLayout(page) {
  return <SiteLayout>{page}</SiteLayout>;
};
