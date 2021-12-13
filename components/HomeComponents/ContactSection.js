import { useForm } from "react-hook-form";
import axios from "axios";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-full min-h-screen">
      <div className="grid md:grid-cols-2">
        <div className="bg-primary w-full text-white font-bold p-4 sm:p-8 lg:p-32">
          <h2 className="text-6xl lg:text-8xl">Let's Talk</h2>
          <div className="pb-3 bg-white bg-no-repeat bg-left-bottom w-1/3 mb-2"></div>
          <h3 className="text-4xl text-center mt-14">
            Find out what our experts can do
          </h3>
          <p className="text-center mt-14 text-lg">
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
        <div className="flex items-center font-bold p-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-3/4 mx-auto lg:grid grid-cols-2 gap-14 space-y-12 md:space-y-12 lg:space-y-0 lg:gap-24"
          >
            {errors.name && <p className="text-red-600">This is required</p>}
            <div className="relative border-b-2 focus-within:border-primary">
              <input
                id="name"
                name="name"
                type="text"
                placeholder=" "
                className="block w-full appearance-none focus:outline-none bg-transparent"
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
                className="block w-full appearance-none focus:outline-none bg-transparent"
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
            <div className="relative border-b-2 focus-within:border-primary">
              <input
                id="companyName"
                name="companyName"
                type="text"
                placeholder=" "
                className="block w-full appearance-none focus:outline-none bg-transparent"
                {...register("companyName")}
              ></input>
              <label
                htmlFor="companyName"
                className="absolute top-0 duration-300 origin-0 cursor-text"
              >
                Company Name
              </label>
            </div>
            <div className="relative border-b-2 focus-within:border-primary">
              <input
                id="siteurl"
                name="siteurl"
                type="url"
                placeholder=" "
                className="block w-full appearance-none focus:outline-none bg-transparent"
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
                className="block w-full appearance-none focus:outline-none bg-transparent"
                {...register("message", { required: true })}
              ></textarea>
              <label
                htmlFor="message"
                className="absolute top-0 duration-300 origin-0 cursor-text"
              >
                Message *
              </label>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary p-1 w-fit col-span-2">
              <button
                type="submit"
                className="bg-white w-fit p-8 h-16 flex justify-center items-center rounded"
              >
                <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text font-bold text-sm md:text-base lg:text-2xl mr-4">
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
