import Link from "next/link";
import { useForm } from "react-hook-form";

export const HeroPromo = () => {
  return (
    <div className="text-white">
      <div className="w-full h-[100%] md:min-h-[100%] min-h-[200%] bg-center bg-cover bg-no-repeat text-white mb-6 origin-top-left absolute -z-10"></div>
      <div className="flex flex-row justify-end items-center h-full w-full relative mobilesm:pr-10 pr-4 mobilemd:pb-4 pb-10">
        <div className="flex flex-col justify-end">
          <img
            src="/logo.png"
            width="200px"
            height="100px"
            className="mobilesm:mt-10 mt-4 mobilesm:w-[200px] mobilesm:h-[45px] w-[150px] h-[33.75px]"
          ></img>
          <Link href="https://gigawaffle.co.uk">
            <a className="mt-2 text-xs text-right mobilesm:text-md cursor-pointer underline text-black w-full hover:no-underline">
              Visit gigawaffle.co.uk
            </a>
          </Link>
        </div>
      </div>
      <div className="md:mb-10 mb-4 mt-10 flex sm:gap-10 gap-4 justify-center">
        <img
          className="absolute top-0 left-0 z-10 -translate-y-8 -translate-x-2 mobilelg:h-[375px] mobilesm:h-[360px] mobilelg:w-[300px] mobilesm:w-[280px] mobilexs:w-[200px] mobilexs:h-[270px] w-[170px] h-[250px] object-contain
            "
          src="/ringmonkey.png"
          width="250px"
          height="350px"
        />
      </div>
      <div className="flex desktop:flex-row flex-col desktop:gap-10 max-w-[1250px] -translate-y-[17.5%] desktop:-translate-y-0 mx-auto px-4">
        <div className="relative desktop:max-w-[50%] max-w-[60%] ml-auto">
          <img src="/50promo.png" width="100%" height="100%"></img>
        </div>
        <div className="relative desktop:max-w-[50%] my-auto text-black desktop:mx-0 mobilesm:text-lg text-md mx-auto">
          <p>
            We are gigawaffle; we aim to remove all the "waffle" from your
            business's marketing, branding and social media management. We offer
            solutions to your web design, branding and marketing needs.
            Currently, we're offering a 50%* discount on all of our services, so
            feel free to get in touch with us to find out more about this offer!
            Check out our socials for more of our work! @gigawaffleuk
            <br />
            <br />
            <span className="text-sm">
              *50% offer runs from 07/02/22 to 28/02/22. Offer only applies to
              the first payment of a contract, or the initial agreement of the
              contract set out for any of our packages. If you no longer wish to
              receive these emails, please click here.
            </span>
          </p>
          <Link href="#claimPromo" passHref>
            <a>
              <button className="bg-gradient-to-r from-[#09D2FE] to-[#F1B1FF] py-4 px-16 rounded-full text-black mx-auto mt-10 shadow-xl hover:shadow-none">
                Claim 50% Off
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
