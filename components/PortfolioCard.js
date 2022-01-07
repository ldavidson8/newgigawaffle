const PortfolioCard = (props) => {
  return (
    <div className="m-2 w-80 relative text-white transition-all duration-200 hover:scale-110">
      <div className="absolute bottom-0 left-0 shadow-clientCard w-full h-full z-10"></div>

      <img
        className="h-full w-full object-cover rounded"
        src={props.src}
        alt={props.altText}
      ></img>
      <h3 className="absolute bottom-4 left-4 z-10 font-semibold text-lg">
        {props.title}
      </h3>
    </div>
  );
};

export default PortfolioCard;
