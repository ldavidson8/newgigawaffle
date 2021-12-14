import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const ContactSection = () => {
  const { register, handleSubmit } = useForm();
  async function onSubmit(e) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    fetch("api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    });
    console.log(formData);
  }
  return (
    <div className="w-full">
      <div className="grid items-center h-full md:grid-cols-2">
        <div className="w-full h-full p-4 font-bold text-white bg-primary sm:p-8 xl:p-32">
          <h2 className="text-5xl md:text-7xl">Let's Talk</h2>
          <div className="w-1/3 pb-1.5 mb-2 bg-white bg-left-bottom bg-no-repeat"></div>
          <h3 className="text-4xl text-center mt-14">
            Find out what our experts can do
          </h3>
          <p className="text-lg text-center mt-14">
            Fill out the form, drop us a call or shoot us an email. We’ll be in
            contact soon.
          </p>
          <img
            src="/placeholder.png"
            height="400"
            width="600"
            className="mx-auto"
          ></img>
        </div>
        <div className="flex items-center p-8 font-bold">
          <form
            method="post"
            onSubmit={onSubmit}
            className="w-full grid-cols-2 mx-auto space-y-12 md:w-3/4 lg:grid gap-14 md:space-y-12 lg:space-y-0 lg:gap-24"
          >
            {/* {errors.name && <p className="text-red-600">This is required</p>} */}
            <div className="relative border-b-2 focus-within:border-primary">
              <input
                id="name"
                name="name"
                type="text"
                placeholder=" "
                className="block w-full bg-transparent appearance-none focus:outline-none"
                {...register("name", { required: true })}
              ></input>
              <label
                htmlFor="name"
                className="absolute top-0 duration-300 origin-0 cursor-text"
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
                className="block w-full bg-transparent appearance-none focus:outline-none"
                {...register("email", { required: true })}
              ></input>
              <label
                htmlFor="email"
                className="absolute top-0 duration-300 origin-0 cursor-text"
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
                className="block w-full bg-transparent appearance-none focus:outline-none"
                {...register("message", { required: true })}
              ></textarea>
              <label
                htmlFor="message"
                className="absolute top-0 duration-300 origin-0 cursor-text"
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
