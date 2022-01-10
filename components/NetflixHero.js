import Link from "next/link";

const NetflixHero = (props) => {
  return (
    <section className="h-75% text-white relative">
      <img className="object-cover h-full w-full" src={props.src}></img>
      <h2 className="absolute top-1/2 left-4 md:left-14 font-bold text-3xl md:text-5xl">
        {props.title}
      </h2>
      <div className="absolute top-2/3 left-14 flex">
        <Link href={props.clienturl} passHref>
          <a>
            <button className="rounded-full bg-secondary py-2 px-4 border-white border-2 flex gap-2">
              Visit Site
              <span>
                <img height="20" width="20" src="/external-link-alt.svg"></img>
              </span>
            </button>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default NetflixHero;
