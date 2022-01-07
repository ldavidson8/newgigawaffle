import SiteLayout from "../components/SiteLayout";
import PortfolioRow from "../components/PortfolioRow";
import Link from "next/link";

const Portfolio = () => {
  return (
    <>
      <div className="h-full">
        <section>
          <div className="h-75% text-white relative">
            <img
              className="object-cover h-full w-full"
              src="/client-card-banner/pgbullys.jpeg"
            ></img>
            <h2 className="absolute top-1/2 left-14 font-bold text-5xl">
              PlaygroundBullys UK
            </h2>
            <div className="absolute top-2/3 left-14 flex">
              <button className="rounded-full bg-primary py-2 px-4 border-white border-2 mr-6">
                Read More
              </button>
              <button className="rounded-full bg-secondary py-2 px-4 border-white border-2 flex gap-2">
                View Site
                <span>
                  <img
                    height="20"
                    width="20"
                    src="/external-link-alt.svg"
                  ></img>
                </span>
              </button>
            </div>
          </div>
          <PortfolioRow />
        </section>
      </div>
    </>
  );
};

export default Portfolio;

Portfolio.getLayout = function getLayout(page) {
  return <SiteLayout>{page}</SiteLayout>;
};
