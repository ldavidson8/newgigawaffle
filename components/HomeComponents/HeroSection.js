export const HeroSection = () => {
  return (
    <div className="h-screen text-white">
      <div className="w-full h-full bg-heroImage bg-no-repeat text-white -skew-y-2 mb-6 origin-top-left absolute"></div>
      <div className="flex justify-center items-center h-full w-full relative">
        <div>
          <h1 className="text-4xl desktop:text-5xl text-center font-semibold mb-3 z-10">
            Digital Marketing Services
          </h1>
          <h2 className="text-4xl text-center mb-6">without the waffle</h2>
          <div className="text-center">
            <button className="text-2xl bg-primary mx-auto px-6 py-2 uppercase font-bold rounded-full items-center">
              View Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
