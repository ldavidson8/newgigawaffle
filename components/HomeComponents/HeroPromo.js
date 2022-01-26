import Link from "next/link";

export const HeroPromo = () => {
  return (
    <div className="h-screen text-white">
      <div className="w-full h-full bg-heroImage bg-center bg-cover bg-no-repeat text-white mb-6 origin-top-left absolute"></div>
      <div className="flex justify-center items-center h-full w-full relative px-4">
        <div>
          <h1 className="text-5xl desktop:text-7xl text-right font-semibold mb-3 z-10">
            50% OFF
          </h1>
          <h2 className="text-4xl ml-56 text-right">
            digital marketing,
            <br /> web design &<br />
            branding services
          </h2>
          <div className="">
            <img
              className="absolute -translate-y-[255px] z-10
              "
              src="/monkeypromo.png"
              width="150px"
              height="250px"
            />
            <Link href="/services">
              <a>
                <button className="-translate-y-[50px] text-2xl bg-primary ml-auto px-6 py-2 uppercase font-bold rounded-full items-center">
                  Get 50% off
                </button>
              </a>
            </Link>
          </div>
          <p className="text-xl ml-56 text-center text-white">
            MESSAGE TO GO HERE
          </p>
        </div>
      </div>
    </div>
  );
};
