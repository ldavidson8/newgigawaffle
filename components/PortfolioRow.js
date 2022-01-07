import PortfolioCard from "./PortfolioCard";

const PortfolioRow = () => {
  return (
    <div className="flex overflow-x-auto mt-4 p-4 scroll">
      <PortfolioCard
        title="MyCabinBed"
        src="client-card-banner/mycabinbed.jpg"
        altText="My Cabin Bed"
      />
      <PortfolioCard
        title="Grand Venue"
        src="client-card-banner/grandvenue.jpg"
        altText="Grand Venue"
      />
      <PortfolioCard
        title="Unite Cities"
        src="client-card-banner/unitecities.jpg"
        altText="Unite Cities"
      />
      <PortfolioCard
        title="SwapMyEnergy"
        src="client-card-banner/sme.png"
        altText="Swap My Energy"
      />
    </div>
  );
};

export default PortfolioRow;
