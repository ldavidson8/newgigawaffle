import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Image from "next/image";

const animatedSquare = {
  hidden: { height: 0, width: 0, backgroundColor: "#fff" },
  visible: {
    height: "100%",
    width: "100%",
    backgroundColor: "#E14985",
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const popupHeader = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    scale: 4,
  },
};

const underline = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "33%",
  },
};

const popupH3 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    scale: 2,
  },
};

const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("api/mail", {
      method: "post",
      body: JSON.stringify(data),
    });
    console.log(data);
  };

  // async function onSubmit(e) {
  //   e.preventDefault();
  //   const formData = {};
  //   Array.from(e.currentTarget.elements).forEach((field) => {
  //     if (!field.name) return;
  //     formData[field.name] = field.value;
  //   });
  //   fetch("api/mail", {
  //     method: "post",
  //     body: JSON.stringify(formData),
  //   });
  //   console.log(formData);
  // }

  return (
    <div className="w-full h-screen skewT">
      <div className="grid h-full md:grid-cols-2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animatedSquare}
          className="w-full flex flex-col gap-10 justify-center items-center font-bold text-white bg-primary"
        >
          <motion.h2 variants={popupHeader} className="text-sm md:text-2xl">
            Let's Talk
          </motion.h2>
          <motion.div
            variants={underline}
            className="pb-1.5 mb-2 bg-white bg-left-bottom bg-no-repeat"
          ></motion.div>
          <motion.h3 variants={popupH3} className="text-sm text-center">
            Find out what our experts can do
          </motion.h3>
          <motion.p variants={fadeIn} className="text-lg text-center">
            Fill out the form, drop us a call or shoot us an email. We’ll be in
            contact soon.
          </motion.p>
        </motion.div>
        <div className="flex items-center h-full py-12 px-8 font-bold bg-white">
          <form
            method="post"
            onSubmit={handleSubmit(onSubmit)}
            className="w-full mx-auto grid grid-cols-2 gap-12"
            autoComplete="off"
          >
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
                id="companyName"
                name="companyName"
                type="text"
                placeholder=" "
                className="block w-full bg-transparent appearance-none focus:outline-none"
                {...register("companyName")}
              ></input>
              <label
                htmlFor="companyName"
                className="absolute top-0 duration-300 origin-0 cursor-text"
              >
                Company
              </label>
            </div>
            <div className="relative border-b-2 focus-within:border-primary">
              <input
                id="siteurl"
                name="siteurl"
                type="url"
                placeholder=" "
                className="block w-full bg-transparent appearance-none focus:outline-none"
                {...register("siteurl")}
              ></input>
              <label
                htmlFor="siteurl"
                className="absolute top-0 duration-300 origin-0 cursor-text"
              >
                Website URL
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
            <div className="col-span-2 p-1 bg-gradient-to-br from-primary to-secondary w-fit">
              <button
                type="submit"
                className="flex items-center justify-center h-16 p-8 bg-white rounded w-fit"
              >
                <span className="mr-4 text-sm font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text md:text-base lg:text-2xl">
                  Send Message
                </span>
                <img src="/arrow-right.svg"></img>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
