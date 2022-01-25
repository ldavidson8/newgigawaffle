import { useForm } from "react-hook-form";
import SiteLayout from "../components/SiteLayout";
import Head from "next/head";

const Contact = () => {
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
    <>
      <Head>
        <title>Contact Us | Gigawaffle</title>
        <meta
          name="keywords"
          content="marketing, agency, design, web design, business, content, digital, email, preston, blog, portfolio, website, performance, lightweight, perfect, fast, article, tutorials, guides, ui design, ux design, user experience"
        />
        <meta
          name="description"
          content="Get in touch with our marketing and web design team to discuss how we can bring your ideas to fruition"
        />
      </Head>
      <div className="pt-96 bg-mapMobile lg:bg-mapDesktop min-h-screen bg-cover flex sm:justify-end pb-4 px-2 md:px-8">
        <div className="bg-white rounded-2xl w-full lg:w-1/2 font-bold text-gray-600 p-4 md:p-12 shadow-2xl">
          <form
            name="Contact Form"
            method="POST"
            onSubmit={handleSubmit(submitHandler)}
            autoComplete="off"
            className="space-y-7 xl:space-y-10 w-full mx-auto"
          >
            <p class="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
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
      </div>
    </>
  );
};

export default Contact;

Contact.getLayout = function getLayout(page) {
  return <SiteLayout>{page}</SiteLayout>;
};
