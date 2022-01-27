import Link from "next/link";
import { useForm } from "react-hook-form";

export const HeroPromo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const submitHandler = async (data) => {
    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };
  return (
    <div className="text-white">
      <div className="w-full h-[100%] md:min-h-[100%] min-h-[200%] bg-heroImage bg-center bg-cover bg-no-repeat text-white mb-6 origin-top-left absolute"></div>
      <div className="flex flex-col justify-center items-center h-full w-full relative px-4">
        <img
          src="/logo.png"
          width="200px"
          height="150px"
          className="mt-10"
        ></img>
        <Link href="https://gigawaffle.co.uk">
          <a className="mt-2 cursor-pointer underline">
            Visit gigawaffle.co.uk
          </a>
        </Link>
        <div className="md:mb-10 mb-4 mt-10 flex sm:gap-10 gap-4 justify-center">
          <div className="relative">
            <img
              className="z-10 -translate-y-5 sm:h-[250px] h-[300px] sm:w-[150px] w-[180px] object-contain
              "
              src="/monkeypromo.png"
              width="150px"
              height="250px"
            />
          </div>
          <div>
            <h1 className="text-5xl desktop:text-7xl text-right font-semibold mb-3 z-10">
              50% OFF
            </h1>
            <h2 className="text-3xl text-right">
              digital marketing,
              <br /> web design &<br />
              branding services
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 xl:px-40 lg:px-20 sn:px-10 px-4 gap-10">
          <p className="text-md text-left text-white max-w-screen-xl">
            We are gigawaffle; we aim to remove all the "waffle" from your
            business's marketing, branding and social media management.
            <br />
            <br />
            We offer solutions to your web design, branding and marketing needs.
            Currently, we're offering a 50%* discount on all of our services, so
            feel free to get in touch with us to find out more about this offer!
            Check out our socials for more of our work! @gigawaffleuk <br />{" "}
            <br />
            <span className="text-sm text-center text-white max-w-screen-xl">
              *50% offer runs from xx/xx/22 to xx/xx/22. Offer only applies to
              the first payment of a contract, or the initial agreement of the
              contract set out for any of our packages. If you no longer wish to
              receive these emails, please click here.
            </span>
          </p>
          <div>
            <div className="flex items-center h-full md:px-8 font-bold">
              <form
                name="Promo Form"
                method="POST"
                action="/pages/success"
                autoComplete="off"
                className="w-full mx-auto grid lg:grid-cols-2 grid-cols-1 gap-12"
                data-netlify="true"
              >
                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human:{" "}
                    <input name="bot-field" />
                  </label>
                </p>
                <div className="relative border-b-2 focus-within:border-primary">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder=" "
                    className={`block w-full bg-transparent appearance-none focus:outline-none ${
                      errors.name ? "ring-2 ring-red-500 rounded" : null
                    }`}
                    {...register("name", { required: true })}
                    disabled={isSubmitting}
                  ></input>
                  <label
                    htmlFor="name"
                    className={`absolute top-0 duration-300 origin-0 cursor-text ${
                      errors.name
                        ? "text-red-500 focus-within:text-red-500"
                        : null
                    }`}
                  >
                    Name *
                  </label>
                </div>
                <div className="relative border-b-2 focus-within:border-primary">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder=" "
                    className={`block w-full bg-transparent appearance-none focus:outline-none ${
                      errors.email ? "ring-2 ring-red-500 rounded" : null
                    }`}
                    {...register("email", { required: true })}
                    disabled={isSubmitting}
                  ></input>
                  <label
                    htmlFor="email"
                    className={`absolute top-0 duration-300 origin-0 cursor-text ${
                      errors.email
                        ? "text-red-500 focus-within:text-red-500"
                        : null
                    }`}
                  >
                    Email *
                  </label>
                </div>
                <div className="relative border-b-2 focus-within:border-primary">
                  <input
                    id="tel"
                    name="tel"
                    type="tel"
                    placeholder=" "
                    className="block w-full bg-transparent appearance-none focus:outline-none"
                    {...register("tel")}
                    disabled={isSubmitting}
                  ></input>
                  <label
                    htmlFor="tel"
                    className="absolute top-0 duration-300 origin-0 cursor-text"
                  >
                    Phone
                  </label>
                </div>
                <div className="relative border-b-2 focus-within:border-primary">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder=" "
                    className="block w-full bg-transparent appearance-none focus:outline-none"
                    {...register("company")}
                    disabled={isSubmitting}
                  ></input>
                  <label className="absolute top-0 duration-300 origin-0 cursor-text">
                    Company
                  </label>
                </div>
                <div className="relative border-b-2 focus-within:border-primary">
                  <input
                    id="website"
                    name="website"
                    type="url"
                    placeholder=" "
                    className="block w-full bg-transparent appearance-none focus:outline-none"
                    {...register("website")}
                    disabled={isSubmitting}
                  ></input>
                  <label
                    htmlFor="website"
                    className="absolute top-0 duration-300 origin-0 cursor-text"
                  >
                    Website
                  </label>
                </div>
                <div className="relative border-b-2 focus-within:border-primary">
                  <textarea
                    id="message"
                    name="message"
                    placeholder=" "
                    className={`block w-full bg-transparent appearance-none focus:outline-none ${
                      errors.message ? "ring-2 ring-red-500 rounded" : null
                    }`}
                    {...register("message", { required: true })}
                    disabled={isSubmitting}
                  ></textarea>
                  <label
                    htmlFor="message"
                    className={`absolute top-0 duration-300 origin-0 cursor-text ${
                      errors.message
                        ? "text-red-500 focus-within:text-red-500"
                        : null
                    }`}
                  >
                    Message *
                  </label>
                </div>
                <div className="col-span-full p-1 bg-gradient-to-br from-primary to-secondary rounded">
                  <button
                    type="submit"
                    className="flex items-center justify-center h-16 p-8 bg-white rounded w-full"
                    disabled={isSubmitting || isSubmitSuccessful}
                  >
                    {isSubmitting && (
                      <svg
                        className="animate-spin -ml-1 mr-3 h-6 w-6 text-pink-500"
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
                    {!isSubmitting && !isSubmitSuccessful && (
                      <span className="mr-4 font-bold text-transparent bg-gradient-to-br from-primary to-secondary bg-clip-text lg:text-2xl">
                        Send Message
                      </span>
                    )}
                    {isSubmitSuccessful && (
                      <span className="mr-4 font-bold text-primary lg:text-2xl">
                        Message Sent!
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
