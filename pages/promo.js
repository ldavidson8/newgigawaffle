import Head from "next/head";
import { HeroPromo } from "../components/HomeComponents/HeroPromo";
import { SecondSection } from "../components/HomeComponents/SecondSection";
import { ThirdSection } from "../components/HomeComponents/ThirdSection";
import { FourthSection } from "../components/HomeComponents/FourthSection";
import { FifthSection } from "../components/HomeComponents/FifthSection";
import { SGrid } from "../components/SkewedGrid";
import ContactPromo from "../components/ContactPromo";
import PromoLayout from "../components/PromoLayout";
import NavBlue from "../components/NavBlue";
import Iframe from "react-iframe";
import Link from "next/link";
import Script from "next/script";
import { useForm } from "react-hook-form";

export default function Promo() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="marketing, agency, design, web design, business, content, digital, email, preston, product, portfolio, website, unique, trends, performance, lightweight, perfect, fast"
        />
        <meta
          name="description"
          content="Gigawaffle builds your online presence with unique and performative web services at an affordable range"
        />
      </Head>
      <img
        src="/promobg.jpg"
        width="100%"
        height="200%"
        className="absolute desktop:h-[250%] h-[306%] object-cover -z-10"
      ></img>
      <HeroPromo />
      <Link href="#claimPromo" passHref>
        <a>
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto z-10 mt-28 hover:bg-gray-700/10"
            id="claimPromo"
          >
            <path
              d="M12.8202 18.9131L12.4666 18.5595L11.7595 19.2666L12.1131 19.6202L12.8202 18.9131ZM17 23.8L16.6464 24.1535L17 24.5071L17.3535 24.1535L17 23.8ZM21.8868 19.6202L22.2404 19.2666L21.5333 18.5595L21.1797 18.9131L21.8868 19.6202ZM1.1333 17L0.633301 17L1.1333 17ZM17 1.1333L17 0.633301L17 1.1333ZM17 32.8666L17 32.3666L17 32.8666ZM32.8666 17L32.3666 17L32.8666 17ZM12.1131 19.6202L16.6464 24.1535L17.3535 23.4464L12.8202 18.9131L12.1131 19.6202ZM17.3535 24.1535L21.8868 19.6202L21.1797 18.9131L16.6464 23.4464L17.3535 24.1535ZM17.5 23.8L17.5 9.06663L16.5 9.06663L16.5 23.8L17.5 23.8ZM1.6333 17C1.6333 8.51319 8.51319 1.6333 17 1.6333L17 0.633301C7.9609 0.6333 0.633301 7.9609 0.633301 17L1.6333 17ZM17 32.3666C8.51319 32.3666 1.6333 25.4867 1.6333 17L0.633301 17C0.6333 26.039 7.9609 33.3666 17 33.3666L17 32.3666ZM32.3666 17C32.3666 25.4867 25.4867 32.3666 17 32.3666L17 33.3666C26.039 33.3666 33.3666 26.039 33.3666 17L32.3666 17ZM33.3666 17C33.3666 7.96091 26.039 0.633301 17 0.633301L17 1.6333C25.4867 1.6333 32.3666 8.51319 32.3666 17L33.3666 17Z"
              fill="#E14985"
            />
          </svg>
        </a>
      </Link>
      <div className="max-w-[900px] mx-auto mt-20 rounded-xl p-4">
        <div className="bg-white rounded-2xl w-full lg:w-full font-bold text-gray-600 p-4 md:p-12 shadow-xl">
          <form
            name="Contact Form"
            method="POST"
            autoComplete="off"
            action="/success"
            netlify-honeypot="bot-field"
            data-netlify="true"
            className="space-y-7 xl:space-y-10 w-full mx-auto"
          >
            <input type="hidden" name="form-name" value="inquiryForm" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <p className="hidden">
              <label
                aria-hidden="true"
                className="opacity-0 absolute top-0 left-0"
              >
                Enter your full name:
                <input
                  name="fullname"
                  aria-hidden="true"
                  className="opacity-0 absolute top-0 left-0"
                />
              </label>
            </p>
            <h1 className="text-black mb-4">Let's Talk</h1>
            {errors.name && <p className="text-red-600">This is required</p>}
            <div className="relative my-4 border-b-2 focus-within:border-primary">
              <input
                id="name"
                name="name"
                type="text"
                placeholder=" "
                className="block w-full appearance-none focus:outline-none bg-transparent"
                {...register("name", { required: true })}
                disabled={isSubmitting}
              ></input>
              <label
                htmlFor="name"
                className="absolute top-0 duration-300 origin-0 cursor-text"
              >
                Name *
              </label>
            </div>
            <div className="relative my-4 border-b-2 focus-within:border-primary">
              <input
                id="email"
                name="email"
                type="email"
                placeholder=" "
                className="block w-full appearance-none focus:outline-none bg-transparent"
                {...register("email", { required: true })}
                disabled={isSubmitting}
              ></input>
              <label
                htmlFor="email"
                className="absolute top-0 duration-300 origin-0 cursor-text"
              >
                Email *
              </label>
            </div>
            <div className="relative my-4 border-b-2 focus-within:border-primary">
              <input
                id="tel"
                name="tel"
                type="tel"
                placeholder=" "
                className="block w-full appearance-none focus:outline-none bg-transparent"
                {...register("tel")}
              ></input>
              <label
                htmlFor="tel"
                className="absolute top-0 duration-300 origin-0 cursor-text"
              >
                Phone
              </label>
            </div>
            <div className="relative my-4 border-b-2 focus-within:border-primary">
              <input
                id="company"
                name="company"
                type="text"
                placeholder=" "
                className="block w-full appearance-none focus:outline-none bg-transparent"
                {...register("company")}
              ></input>
              <label
                htmlFor="company"
                className="absolute top-0 duration-300 origin-0 cursor-text"
              >
                Company Name
              </label>
            </div>
            <div className="relative my-4 border-b-2 focus-within:border-primary">
              <input
                id="website"
                name="website"
                type="url"
                placeholder=" "
                className="block w-full appearance-none focus:outline-none bg-transparent"
                {...register("website")}
              ></input>
              <label
                htmlFor="website"
                className="absolute top-0 duration-300 origin-0 cursor-text"
              >
                Website URL
              </label>
            </div>
            <div className="relative my-4 border-b-2 focus-within:border-primary">
              <textarea
                id="message"
                name="message"
                placeholder=" "
                className="block w-full appearance-none focus:outline-none bg-transparent"
                {...register("message", { required: true })}
                disabled={isSubmitting}
              ></textarea>
              <label
                htmlFor="message"
                className="absolute top-0 duration-300 origin-0 cursor-text"
              >
                Message *
              </label>
            </div>
            <button
              type="submit"
              className="rounded-full w-full mx-auto flex justify-center items-center bg-primary p-4 text-white"
              disabled={isSubmitting || isSubmitSuccessful}
            >
              {isSubmitting && (
                <svg
                  className="animate-spin -ml-1 mr-3 h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              {!isSubmitting && !isSubmitSuccessful && <span>Submit</span>}
              {isSubmitSuccessful && <span>Message Sent!</span>}
            </button>
          </form>
        </div>
        {/* <Iframe
          src="https://www.cognitoforms.com/f/QBWrPI31BEaZ4E5T60v3ig/2"
          style="border:0;width:100%;position:relative;z-index:100"
          className="w-full pt-10 mobilelg:bg-gray-500/20 bg-gray-500/50 rounded-xl p-4"
        ></Iframe>
        <Script src="https://www.cognitoforms.com/f/iframe.js"></Script> */}
      </div>
    </>
  );
}

Promo.getLayout = function getLayout(page) {
  return <PromoLayout>{page}</PromoLayout>;
};
