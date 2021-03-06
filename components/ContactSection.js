import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

// const staggerText = {
//   hidden: { backgroundColor: "#E14985" },
//   visible: {
//     height: "100%",
//     width: "100%",
//     backgroundColor: "#E14985",
//     transition: {
//       staggerChildren: 0.8,
//     },
//   },
// };

// const popupHeader = {
//   hidden: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//     scale: 3,
//   },
// };

// const underline = {
//   hidden: {
//     width: 0,
//   },
//   visible: {
//     width: "33%",
//   },
// };

// const popupH3 = {
//   hidden: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//     scale: 1.2,
//   },
// };

// const fadeIn = {
//   hidden: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//   },
// };

const ContactSection = () => {
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

  const boxVariants = {
    hidden: {
      scale: 0,
      y: 20,
      transition: {
        type: "spring",
        delay: 0.2,
        mass: 1,
        damping: 10,
        stiffness: 80,
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
    visible: {
      scale: 1,
      y: 20,
      transition: {
        type: "spring",
        delay: 0.2,
        mass: 1,
        damping: 10,
        stiffness: 80,
        delayChildren: 0.5,
        staggerChildren: 1,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const secondaryTextVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <section className="overflow-hidden">
      {/* <div className="absolute h-full w-full overflow-visible"></div> */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 justify-center">
        <div className="bg-primary w-full h-full flex flex-col justify-center items-center text-center gap-8 px-6 py-24 text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={boxVariants}
          >
            <motion.h2 variants={textVariants} className="font-bold text-3xl">
              Let's Talk
            </motion.h2>
            <motion.h3
              variants={textVariants}
              className="font-semibold text-2xl my-8"
            >
              Find our what our experts can do
            </motion.h3>
            <motion.p variants={secondaryTextVariants} className="text-lg">
              Fill out the form, drop us a call or shoot us an email. We???ll be
              in contact soon.
            </motion.p>
          </motion.div>
        </div>
        <div className="flex items-center h-full py-12 px-8 font-bold bg-white">
          <form
            name="Contact Form"
            method="POST"
            onSubmit={handleSubmit(submitHandler)}
            autoComplete="off"
            className="w-full mx-auto grid grid-cols-2 gap-12"
          >
            <p className="hidden">
              <label>
                Don???t fill this out if you???re human: <input name="bot-field" />
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
                  errors.name ? "text-red-500 focus-within:text-red-500" : null
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
                  errors.email ? "text-red-500 focus-within:text-red-500" : null
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
    </section>
  );
};

export default ContactSection;
