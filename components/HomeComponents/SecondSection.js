export const SecondSection = () => {
  return (
    <div className="relative pb-12">
      <div className="bg-navy-blue w-32 md:w-56 xl:w-64 h-12 md:h-16 -skew-y-2 absolute bottom-0 xl:bottom-3 right-0"></div>
      <div className="bg-primary w-24 md:w-36 h-8 md:h-12 -skew-y-2 absolute bottom-0 xl:bottom-4 right-12 md:right-24 xl:right-32"></div>
      <div className="min-h-screen grid auto-rows-min grid-cols-1 lg:grid-cols-2 gap-24 px-8 md:px-global py-16 md:py-24">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 w-auto">
            <div className="bg-gray-50 shadow-card rounded-xl py-8 lg:p-4 text-center lg:text-left flex flex-col lg:flex-row items-center">
              <div>
                <img
                  src="/service-icons/mountains.svg"
                  alt=""
                  className="p-4 mx-auto w-24 lg:w-44 2xl:w-32"
                />
              </div>
              <div>
                <h2 className="p-2 font-bold text-xl md:text-3xl">
                  Brand Design
                </h2>
                <p className="p-2 text-md md:text-xl">
                  Make your brand stand out with our brilliant designers.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 shadow-card rounded-xl py-8 lg:p-4 text-center lg:text-left flex flex-col lg:flex-row items-center">
              <div>
                <img
                  src="/service-icons/edit-alt.svg"
                  alt=""
                  className="p-4 mx-auto w-24 lg:w-44 2xl:w-32"
                />
              </div>
              <div>
                <h2 className="p-2 font-bold text-xl md:text-3xl">
                  Web Design
                </h2>
                <p className="p-2 text-md md:text-xl">
                  Display yourself on the web with a design worth bragging
                  about.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 shadow-card rounded-xl py-8 lg:p-4 text-center lg:text-left flex flex-col lg:flex-row items-center">
              <div>
                <img
                  src="/service-icons/share-alt.svg"
                  alt=""
                  className="p-4 mx-auto w-24 lg:w-44 2xl:w-32"
                />
              </div>
              <div>
                <h2 className="p-2 font-bold text-xl md:text-3xl">
                  Digital Marketing
                </h2>
                <p className="p-2 text-md md:text-xl">
                  Make your business the talk of the town, with care from our
                  social media team
                </p>
              </div>
            </div>

            <div className="bg-gray-50 shadow-card rounded-xl py-8 lg:p-4 text-center lg:text-left flex flex-col lg:flex-row items-center">
              <div>
                <img
                  src="/service-icons/film.svg"
                  alt=""
                  className="p-4 mx-auto w-20 lg:w-40 2xl:w-28"
                />
              </div>
              <div>
                <h2 className="p-2 font-bold text-xl md:text-3xl">Media</h2>
                <p className="p-2 text-md md:text-xl">
                  Content creation that lets you grab attention on every
                  platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl lg:text-6xl mb-4 font-bold text-navy-blue">
            Digital Services to Take Your Business To The Next Level
          </h2>
          <div className="pb-2 bg-primary bg-no-repeat bg-left-bottom w-1/3 mb-6"></div>
          <p className="text-lg md:text-2xl leading-relaxed text-navy-blue">
            We're gigawaffle; we’re passionate about turning businesses into
            brands. With plenty of options of services across branding, web
            design, digital marketing and media, you're truly in control when it
            comes to your business. Based in the heart of Preston’s city centre,
            we’re an agency that is determined to make your digital journey as
            simple as it should be.
          </p>
          <div className="flex flex-col sm:flex-row pt-4 md:mt-2 xl:mt-20">
            <button
              className="
                text-md      
                xl:text-xl
                xl:w-1/2
                bg-primary
                text-white        
                rounded-full
                items-center
                px-4
                md:px-4
                py-2
                mr-2
                mb-4
                sm:mb-0
                font-bold
                uppercase
                "
            >
              About Gigawaffle
            </button>
            <button
              className="   
                text-md      
                xl:text-xl
                xl:w-1/2
                text-primary
                bg-white
                border-primary
                border-2      
                rounded-full
                items-center
                px-4
                md:px-4
                py-2
                mr-2
                md:ml-6
                font-bold
                uppercase
                "
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
