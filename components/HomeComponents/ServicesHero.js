import Link from "next/link";
import Image from "next/image";

export const ServicesHero = () => {
  return (
    <div className="h-screen text-white">
      <div className="w-full h-full bg-heroImage bg-center bg-cover bg-no-repeat text-white -skew-y-2 mb-6 origin-top-left absolute"></div>
      <div className="flex justify-center items-center h-full w-full relative">
        <div className="w-full h-full max-w-section mx-auto p-8">
          <div className="pt-16 flex my-auto">
            <div className="">
              <h2 className="mt-48 text-2xl sm:text-3xl lg:text-4xl mb-4 font-bold text-white">
                Services that make your mouth water
              </h2>
              <div
                className="my-2 
             pb-2 bg-primary bg-no-repeat bg-left-bottom w-1/3 mb-2 "
              ></div>
              <p className="my-4 text-md sm:text-lg md:text-xl leading-relaxed text-white font-bold">
                {
                  "You can 'Pick n Mix' from our wide range of design, development, media & marketing services, allowing you to create a tailored package perfect for your business."
                }
              </p>
              <p className="text-md sm:text-lg md:text-lg leading-relaxed text-white font-normal pb-4">
                Not sure what services you want or want a waffle-free approach?
                Don't worry, we can help. Just click "Help Me Decide" below and
                fill in the form.
              </p>
              <Link href="/contact-us">
                <a>
                  <button
                    className="   
                      text-xs     
                      xl:text-xl
                      w-1/2
                      sm:w-2/5
                      text-primary
                      bg-white
                      border-primary
                      border-2      
                      rounded-full
                      items-center
                      px-4            
                      py-3
                      md:px-4
                      font-bold
                      uppercase"
                  >
                    Contact Us
                  </button>
                </a>
              </Link>
            </div>

            <div className="desktop:block hidden col-span-1 mx-auto my-auto pl-10 pt-48">
              <Image
                src="/services-illustration.png"
                layout="intrinsic"
                height="700px"
                width="700px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
