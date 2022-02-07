import PortfolioCard from "./PortfolioCard";

const PortfolioRow = () => {
  return (
    <div className="flex overflow-x-auto mt-4 p-4">
      <PortfolioCard
        title="MyCabinBed"
        src="client-card-banner/mycabinbed.jpg"
        url="https://mycabinbed.com/"
        altText="My Cabin Bed"
        gif="video/mcb.gif"
        gifAlt="My Cabin Bed"
      />
      <PortfolioCard
        title="Grand Venue"
        src="client-card-banner/grandvenue.jpg"
        url="https://grandvenue.co/"
        altText="Grand Venue"
        gif="video/gv.gif"
        gifAlt="Grand Venue"
      />
      <PortfolioCard
        title="Unite Cities"
        src="client-card-banner/unitecities.jpg"
        url="https://unitecities.com/"
        altText="Unite Cities"
        gif="video/uc.gif"
        gifAlt="Unite Cities"
      />
      <PortfolioCard
        title="Swap My Energy"
        src="client-card-banner/sme.png"
        url="https://swapmyenergy.co.uk/"
        altText="Swap My Energy"
        gif="video/sme.gif"
        gifAlt="Unite Cities"
      />
      <PortfolioCard
        title="Deltic Business Solutions"
        src="client-card-banner/dbs.jpg"
        url="https://delticbusinesssolutions.co.uk/"
        altText="Deltic Business Solutions"
        gif="video/dbs.gif"
        gifAlt="Deltic Business Solutions"
      />
    </div>
  );
};

export default PortfolioRow;
