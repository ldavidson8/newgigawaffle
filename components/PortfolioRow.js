import PortfolioCard from "./PortfolioCard";

const PortfolioRow = () => {
  return (
    <div className="flex overflow-x-auto mt-4 p-4">
      <PortfolioCard
        title="MyCabinBed"
        src="client-card-banner/mycabinbed.jpg"
        url="https://mycabinbed.com/"
        altText="My Cabin Bed"
      />
      <PortfolioCard
        title="Grand Venue"
        src="client-card-banner/grandvenue.jpg"
        url="https://grandvenue.co/"
        altText="Grand Venue"
      />
      <PortfolioCard
        title="Unite Cities"
        src="client-card-banner/unitecities.jpg"
        url="https://unitecities.com/"
        altText="Unite Cities"
      />
      <PortfolioCard
        title="SwapMyEnergy"
        src="client-card-banner/sme.png"
        url="https://swapmyenergy.co.uk/"
        altText="Swap My Energy"
      />
    </div>
  );
};

export default PortfolioRow;
