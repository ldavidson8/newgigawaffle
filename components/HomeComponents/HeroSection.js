export const HeroSection = () => {
  return (
    <div className="h-screen w-full bg-heroImage bg-no-repeat text-white skewB">
      <div className="flex justify-center items-center align-middle  h-full w-full">
        <div className="h-48">
          <h1 className="text-4xl md:text-6xl text-center font-semibold mb-3">
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
