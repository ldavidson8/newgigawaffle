import Link from "next/link";

const PortfolioCard = (props) => {
  return (
    <div class="m-2 relative transition-all duration-300 hover:scale-110 hover:z-10">
      <Link href={props.url} passHref>
        <a target="_blank" rel="noopener noreferrer">
          <div className="h-full w-80 relative text-white">
            <div className="absolute bottom-0 left-0 shadow-clientCard w-full h-full z-10"></div>

            <img
              className="h-full w-full rounded"
              src={props.src}
              alt={props.altText}
            ></img>
            <h3 className="absolute bottom-4 left-4 z-10 font-semibold text-lg">
              {props.title}
            </h3>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default PortfolioCard;
