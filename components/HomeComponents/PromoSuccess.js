import Link from "next/link";
import { useForm } from "react-hook-form";

export const PromoSuccess = () => {
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
        <div className="grid md:grid-cols-1 grid-cols-1 xl:px-40 lg:px-20 sn:px-10 px-4 gap-10">
          <p className="text-md text-left text-white max-w-screen-xl">
            Thank you for submitting the form. One of our team will be back in
            touch to begin your Gigawaffle journey.
          </p>
          <div>
            <div className="flex items-center h-full md:px-8 font-bold"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
