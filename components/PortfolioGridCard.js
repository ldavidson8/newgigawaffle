import Link from "next/link";

const PortfolioGridCard = (props) => {
  return (
    <div className="group relative transition-all duration-300 min-h-[240px] mb-10">
      <Link href={props.url}>
        <a target="_blank" rel="noopener noreferrer">
          <div className="h-full w-full relative text-white">
            <div className="absolute bottom-0 left-0 shadow-clientCard w-full h-full z-10"></div>
            <img
              src={props.gif}
              alt={props.gifAlt}
              className="h-full w-full absolute top-0 left-0 hidden group-hover:block"
            ></img>
            <img
              className="h-full w-full block group-hover:hidden"
              src={props.src}
              alt={props.altText}
            ></img>
            <h3 className="absolute bottom-4 left-4 z-10 font-semibold text-lg">
              {props.title}
            </h3>
            <div className="absolute top-4 left-4 rounded-full p-3 bg-white group-hover:hidden block">
              <img
                className="h-[50px] w-[50px] bg-white"
                src={props.logo}
                alt=""
              ></img>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default PortfolioGridCard;
