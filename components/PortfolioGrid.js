import PortfolioCard from "./PortfolioCard";
import PortfolioGridCard from "./PortfolioGridCard";

const PortfolioGrid = () => {
  return (
    <div className="grid grid-cols-4 mb:grid-cols-2 max-w-section mx-auto">
      <PortfolioGridCard
        title="MyCabinBed"
        src="client-card-banner/mycabinbed.jpg"
        url="https://mycabinbed.com/"
        altText="My Cabin Bed"
        gif="video/mcb.gif"
        gifAlt="My Cabin Bed"
        logo="client-logos/mycabinbed.png"
      />
      <PortfolioGridCard
        title="Grand Venue"
        src="client-card-banner/grandvenue.jpg"
        url="https://grandvenue.co/"
        altText="Grand Venue"
        gif="video/gv.gif"
        gifAlt="Grand Venue"
        logo="client-logos/grandvenue.png"
      />
      <PortfolioGridCard
        title="Deltic Business Solutions"
        src="client-card-banner/dbs.jpg"
        url="https://delticbusinesssolutions.co.uk/"
        altText="Deltic Business Solutions"
        gif="video/dbs.gif"
        gifAlt="Deltic Business Solutions"
        logo="client-logos/dbs.png"
      />
      <PortfolioGridCard
        title="SwapMyEnergy"
        src="client-card-banner/sme.png"
        url="https://swapmyenergy.co.uk/"
        altText="Swap My Energy"
        gif="video/sme.gif"
        gifAlt="Unite Cities"
        logo="client-logos/swapmyenergy.png"
      />
    </div>
  );
};

export default PortfolioGrid;
