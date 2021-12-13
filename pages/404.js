import Link from "next/link";
import { useEffect } from "react";
import Router, { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      //router.go(1)
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <Head>
        <title>Oops, page not found!</title>
      </Head>
      <div className="flex items-center justify-center bg-dark-gray w-screen h-screen">
        <div className="px-4 lg:py-12">
          <div className="lg:gap-4 lg:flex">
            <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
              <h1 className="font-bold text-primary text-9xl">404</h1>
              <p className="mb-2 text-2xl font-bold text-center text-white md:text-3xl">
                <span className="text-secondary">Oops!</span> Page not found
              </p>
              <p className="mb-8 text-center text-gray-400 md:text-lg">
                The page you’re looking for doesn’t exist.
              </p>
              <Link href="/">
                <a className="px-6 py-2 text-sm font-semibold rounded-full text-white bg-primary">
                  Go home
                </a>
              </Link>
            </div>
            <div className="mt-4">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/22/23/13/black-dog-1851106__340.jpg"
                alt="img"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
