import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Desktop navigation //

const Underline = () => (
  <motion.div
    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"
    layoutId="underline"
    layout
  ></motion.div>
);

const MenuItemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      staggerChildren: 0.05,
    },
  },
};

const MenuItem = ({ text, children, link, hover, ...props }) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
    <Link href={link} passHref>
      <a>
        <motion.div
          className="px-10 relative"
          onHoverStart={() => setIsBeingHovered(true)}
          onHoverEnd={() => setIsBeingHovered(false)}
        >
          <button className="relative text-white font-bold cursor-default">
            {text}
            {isBeingHovered && <Underline />}
          </button>
          {isBeingHovered && (
            <div className="h-[1000px] w-full">
              <motion.div
                {...props}
                layoutId="menu"
                className="absolute top-12 shadow-xl bg-white rounded-lg min-w-max gap-4 justify-center p-4 z-max"
                variants={MenuItemVariants}
                initial="hidden"
                animate="visible"
              >
                {children}
              </motion.div>
            </div>
          )}
        </motion.div>
      </a>
    </Link>
  );
};

const EmptyMenuItem = ({ text, children, link, hover, ...props }) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
    <Link href={link} passHref>
      <a>
        <motion.div
          className="px-10 relative"
          onHoverStart={() => setIsBeingHovered(true)}
          onHoverEnd={() => setIsBeingHovered(false)}
        >
          <button className="relative text-white font-bold cursor-default">
            {text}
            {isBeingHovered && <Underline />}
          </button>
          {isBeingHovered && (
            <div className="h-[1000px] w-full">
              <motion.div
                {...props}
                layoutId="menu"
                className="absolute top-12 shadow-xl bg-white rounded-lg min-w-max gap-4 justify-center p-4 z-max"
                variants={MenuItemVariants}
                initial="hidden"
                animate="hidden"
              >
                {children}
              </motion.div>
            </div>
          )}
        </motion.div>
      </a>
    </Link>
  );
};

const SubItemVariants = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const SubItem = ({ title, text, icon, url, comingsoon }) => {
  return (
    <motion.div
      className="my-6 group cursor-pointer"
      layout
      variants={SubItemVariants}
    >
      <Link href={url}>
        <a>
          <div className="grid grid-cols-[50px_1fr] gap-0">
            <div>
              <Image src={icon} height="30" width="30"></Image>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-semibold text-gray-800 group-hover:text-secondary 0 text-md">
                {title}
              </p>
              <span
                className={`{font-semibold text-white bg-red-500 text-xs uppercase text-center h-4 mt-1 ${
                  comingsoon == "true" ? "block" : "hidden"
                }`}
              >
                Coming Soon
              </span>
            </div>
            <div className="col-start-2">
              <p className="text-gray-400 group-hover:text-blue-400 text-sm">
                {text}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </motion.div>
  );
};

const SubItemMob = ({ title, text, icon, url }) => {
  return (
    <div
      className="my-6 group cursor-pointer"
      layout
      variants={SubItemVariants}
    >
      <Link href={url}>
        <a>
          <div className="grid grid-cols-[50px_1fr] gap-0">
            <div>
              <Image src={icon} height="30" width="30"></Image>
            </div>
            <div>
              <p className="font-semibold text-gray-800 group-hover:text-secondary 0 text-md">
                {title}
              </p>
            </div>
            <div className="col-start-2">
              <p className="text-gray-400 group-hover:text-blue-400 text-sm">
                {text}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

const NavBlue = () => {
  // Mobile Navigation //
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full pt-4 bg-gradient-to-b from-dark-gray to-transparent absolute top-0 left-0 max-h-16 z-max">
      <div className="max-w-screen-lg max-h-fit flex mx-auto justify-between items-center px-4">
        <div className="desktop:top-10 desktop:absolute">
          {/* Requires absolute or hover menus increase height and push logo down */}
          <Link href="/">
            <a>
              <Image src="/logo.png" width="150" height="35"></Image>
            </a>
          </Link>
        </div>
        <button
          onClick={handleClick}
          className="desktop:top-4 desktop:right-4 desktop:absolute p-3 rounded-2xl bg-white bg-opacity-20 desktop:hidden"
        >
          <a>
            <svg width="30" height="15" viewBox="0 0 16 10">
              <title>Open mobile navigation</title>
              <g fill="#fff">
                <rect y="8" width="16" height="2" rx="1"></rect>
                <rect y="4" width="16" height="2" rx="1"></rect>
                <rect width="16" height="2" rx="1"></rect>
              </g>
            </svg>
          </a>
        </button>
        <div
          className={`p-4 absolute top-0 left-0 w-full desktop:hidden transition-all duration-300 origin-top-right ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className="bg-white relative rounded-lg min-w-full overflow-hidden shadow-2xl z-max">
            <section className="relative">
              <div className="p-4 sm:p-6">
                <section>
                  <h1 className="font-semibold uppercase text-gray-400 text-sm mb-4">
                    Services
                  </h1>
                  <ul className="grid grid-cols-2 sm:grid-cols-3">
                    <li className="p-2">
                      <Link href="/digital-marketing">
                        <a className="inline-flex">
                          <span className="mr-3 mt-1">
                            <Image
                              src="/nav-icons/speakerphone.svg"
                              height="15"
                              width="15"
                              layout="fixed"
                            ></Image>
                          </span>
                          <span className="font-semibold text-gray-800 group-hover:text-secondary 0 text-sm">
                            Digital Marketing
                          </span>
                        </a>
                      </Link>
                    </li>
                    {/* <li className="p-2">
                      <Link href="/">
                        <a className="inline-flex">
                          <span className="mr-3 mt-1">
                            <Image
                              src="/nav-icons/forward_to_inbox.svg"
                              height="15"
                              width="15"
                              layout="fixed"
                            ></Image>
                          </span>
                          <span className="font-semibold text-gray-800 group-hover:text-secondary 0 text-sm">
                            Email Marketing
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link href="/">
                        <a className="inline-flex">
                          <span className="mr-3 mt-1">
                            <Image
                              src="/nav-icons/user-group.svg"
                              height="15"
                              width="15"
                              layout="fixed"
                            ></Image>
                          </span>
                          <span className="font-semibold text-gray-800 group-hover:text-secondary 0 text-sm">
                            Affiliate Marketing
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link href="/">
                        <a className="inline-flex">
                          <span className="mr-3 mt-1">
                            <Image
                              src="/nav-icons/phone_iphone.svg"
                              height="15"
                              width="15"
                              layout="fixed"
                            ></Image>
                          </span>
                          <span className="font-semibold text-gray-800 group-hover:text-secondary 0 text-sm">
                            Content Marketing
                          </span>
                        </a>
                      </Link>
                    </li> */}
                    <li className="p-2">
                      <Link href="/seo">
                        <a className="inline-flex">
                          <span className="mr-3 mt-1">
                            <Image
                              src="/nav-icons/search.svg"
                              height="15"
                              width="15"
                              layout="fixed"
                            ></Image>
                          </span>
                          <span className="font-semibold text-gray-800 group-hover:text-secondary 0 text-sm">
                            SEO
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link href="/brand-design">
                        <a className="inline-flex">
                          <span className="mr-3 mt-1">
                            <Image
                              src="/nav-icons/mountains_black.svg"
                              height="15"
                              width="15"
                              layout="fixed"
                            ></Image>
                          </span>
                          <span className="font-semibold text-gray-800 group-hover:text-secondary 0 text-sm">
                            Brand Design
                          </span>
                        </a>
                      </Link>
                    </li>
                    {/* <li className="p-2">
                      <Link href="/">
                        <a className="inline-flex">
                          <span className="mr-3 mt-1">
                            <Image
                              src="/nav-icons/cube.svg"
                              height="15"
                              width="15"
                              layout="fixed"
                            ></Image>
                          </span>
                          <span className="font-semibold text-gray-800 group-hover:text-secondary 0 text-sm">
                            Packaging
                          </span>
                        </a>
                      </Link>
                    </li> */}
                    {/* <li className="p-2">
                      <Link href="/services">
                        <a className="inline-flex">
                          <span className="mr-3 mt-1">
                            <Image
                              src="/nav-icons/view_quilt.svg"
                              height="15"
                              width="15"
                              layout="fixed"
                            ></Image>
                          </span>
                          <span className="font-semibold text-gray-800 group-hover:text-secondary 0 text-sm">
                            UI Design
                          </span>
                        </a>
                      </Link>
                    </li> */}
                    {/*
                    <li className="p-2">
                      <Link href="/services">
                        <a className="inline-flex">
                          <span className="mr-3 mt-1">
                            <Image
                              src="/nav-icons/smile.svg"
                              height="15"
                              width="15"
                              layout="fixed"
                            ></Image>
                          </span>
                          <span className="font-semibold text-gray-800 group-hover:text-secondary 0 text-sm">
                            UX Design
                          </span>
                        </a>
                      </Link>
                    </li> */}
                    <li className="p-2">
                      <Link href="/web-design">
                        <a className="inline-flex">
                          <span className="mr-3 mt-1">
                            <Image
                              src="/nav-icons/code.svg"
                              height="15"
                              width="15"
                              layout="fixed"
                            ></Image>
                          </span>
                          <span className="font-semibold text-gray-800 group-hover:text-secondary 0 text-sm">
                            Web Design
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link href="/ecommerce-design">
                        <a className="inline-flex">
                          <span className="mr-3 mt-1">
                            <Image
                              src="/service-icons/shopping-cart-solid.svg"
                              height="15"
                              width="15"
                              layout="fixed"
                            ></Image>
                          </span>
                          <span className="font-semibold text-gray-800 group-hover:text-secondary 0 text-sm">
                            E-Commerce Design
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link href="/photosandvideos">
                        <a className="inline-flex">
                          <span className="mr-3 mt-1">
                            <Image
                              src="/nav-icons/photo_camera.svg"
                              height="15"
                              width="15"
                              layout="fixed"
                            ></Image>
                          </span>
                          <span className="font-semibold text-gray-800 group-hover:text-secondary 0 text-sm">
                            Photos &amp; Videos
                          </span>
                        </a>
                      </Link>
                    </li>
                    {/* <li className="p-2">
                      <Link href="/">
                        <a className="inline-flex">
                          <span className="mr-3 mt-1">
                            <Image
                              src="/nav-icons/play_circle.svg"
                              height="15"
                              width="15"
                              layout="fixed"
                            ></Image>
                          </span>
                          <span className="font-semibold text-gray-800 group-hover:text-secondary 0 text-sm">
                            Videography
                          </span>
                        </a>
                      </Link>
                    </li> */}
                    {/* 
                    <li className="p-2">
                      <Link href="/services">
                        <a className="inline-flex">
                          <span className="mr-3 mt-1">
                            <Image
                              src="/nav-icons/adobephotoshop.svg"
                              height="15"
                              width="15"
                              layout="fixed"
                            ></Image>
                          </span>
                          <span className="font-semibold text-gray-800 group-hover:text-secondary 0 text-sm">
                            Graphics
                          </span>
                        </a>
                      </Link>
                    </li> */}
                    {/* <li className="p-2">
                      <Link href="/">
                        <a className="inline-flex">
                          <span className="mr-3 mt-1">
                            <Image
                              src="/nav-icons/equalizer.svg"
                              height="15"
                              width="15"
                              layout="fixed"
                            ></Image>
                          </span>
                          <span className="font-semibold text-gray-800 group-hover:text-secondary 0 text-sm">
                            Audio
                          </span>
                        </a>
                      </Link>
                    </li> */}
                    <li className="p-2">
                      <Link href="/illustration">
                        <a className="inline-flex">
                          <span className="mr-3 mt-1">
                            <Image
                              src="/nav-icons/pencil.svg"
                              height="15"
                              width="15"
                              layout="fixed"
                            ></Image>
                          </span>
                          <span className="font-semibold text-gray-800 group-hover:text-secondary 0 text-sm">
                            Illustrations
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="p-2">
                      <div className="inline-flex">
                        <span className="mr-3 mt-1">
                          <Image
                            src="/fadedmic.svg"
                            height="15"
                            width="15"
                            layout="fixed"
                          ></Image>
                        </span>
                        <div className="flex flex-col ">
                          <span className="font-semibold text-white bg-red-500 text-xs uppercase text-center">
                            Coming Soon
                          </span>
                          <span className="font-semibold text-gray-800 group-hover:text-secondary 0 text-sm">
                            Podcast Creation
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </section>
                <section className="relative">
                  <h1 className="font-semibold uppercase text-gray-400 text-sm mb-4">
                    Portfolio
                  </h1>
                  <div className="">
                    <ul>
                      <li>
                        <SubItemMob
                          title="PlaygroundBullys UK"
                          text="Dog Breeder"
                          icon="/client-logos/pgb-favicon.png"
                          url="/portfolio"
                        />
                      </li>
                      <li>
                        <SubItemMob
                          title="Grand Venue"
                          text="Wedding Planner"
                          icon="/client-logos/crown.png"
                          url="/portfolio"
                        />
                      </li>
                      <li>
                        <SubItemMob
                          title="Unite Cities"
                          text="Logistics &amp; Storage"
                          icon="/client-logos/unitecities-favicon.png"
                          url="/portfolio"
                        />
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="relative">
                  <h1 className="font-semibold uppercase text-gray-400 text-sm mb-4">
                    Contact
                  </h1>
                  <div className="sm:p-2">
                    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <li>
                        <Link href="mailto:hello@gigawaffle.co.uk">
                          <a className="inline-flex">
                            <span className="mr-3">
                              <Image
                                src="/nav-icons/email.svg"
                                height="20"
                                width="20"
                                layout="fixed"
                              ></Image>
                            </span>
                            <span className="font-semibold text-gray-800 group-hover:text-secondary text-sm sm:text-base">
                              Email - hello@gigawaffle.co.uk
                            </span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="tel:01772 376748">
                          <a className="inline-flex">
                            <span className="mr-3">
                              <Image
                                src="/nav-icons/phone.svg"
                                height="20"
                                width="20"
                                layout="fixed"
                              ></Image>
                            </span>
                            <span className="font-semibold text-gray-800 group-hover:text-secondary text-sm sm:text-base">
                              Call - 01772 376748
                            </span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.facebook.com/gigawaffleuk">
                          <a className="inline-flex">
                            {" "}
                            <span className="mr-3">
                              <Image
                                src="/facebook.svg"
                                height="20"
                                width="20"
                                layout="fixed"
                              ></Image>
                            </span>
                            <span className="font-semibold text-gray-800 group-hover:text-secondary text-sm sm:text-base">
                              Facebook
                            </span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.linkedin.com/company/gigawaffle/">
                          <a className="inline-flex">
                            <span className="mr-3">
                              <Image
                                src="/linkedin.svg"
                                height="20"
                                width="20"
                                layout="fixed"
                              ></Image>
                            </span>
                            <span className="font-semibold text-gray-800 group-hover:text-secondary text-sm sm:text-base">
                              LinkedIn
                            </span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </section>
            <button onClick={handleClick} className="absolute top-2 right-2">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <title>Close mobile navigation</title>
                <path
                  d="M25.6 14.3a1 1 0 0 1 0 1.4l-4.24 4.25 4.25 4.24a1 1 0 1 1-1.42 1.42l-4.24-4.25-4.24 4.25a1 1 0 0 1-1.42-1.42l4.25-4.24-4.25-4.24a1 1 0 0 1 1.42-1.42l4.24 4.25 4.24-4.25a1 1 0 0 1 1.42 0z"
                  fill="#8898AA"
                ></path>
              </svg>
            </button>
          </div>
          {/* End of Mobile Navigation */}

          {/* Desktop Navigation */}
        </div>
        <motion.div className="p-6 justify-center w-full hidden desktop:flex">
          <MenuItem text={"Portfolio"} link={"/portfolio"}>
            <div>
              <ul>
                <li>
                  <SubItem
                    title="PlaygroundBullys UK"
                    text="Dog Breeder"
                    icon="/client-logos/pgb-favicon.png"
                    url="/portfolio"
                    comingsoon="false"
                  />
                </li>
                <li>
                  <SubItem
                    title="Grand Venue"
                    text="Wedding Planner"
                    icon="/client-logos/crown.png"
                    url="/portfolio"
                    comingsoon="false"
                  />
                </li>
                <li>
                  <SubItem
                    title="Unite Cities"
                    text="Logistics &amp; Storage"
                    icon="/client-logos/unitecities-favicon.png"
                    url="/portfolio"
                    comingsoon="false"
                  />
                </li>
              </ul>
            </div>
          </MenuItem>
          <MenuItem text={"Services"} link={"/services"}>
            <div className="grid grid-cols-3 gap-16 p-4">
              <section>
                <h2 className="uppercase text-gray-500 font-bold">Marketing</h2>
                <ul>
                  <li>
                    <SubItem
                      title="Digital Marketing"
                      text="Start promoting your business"
                      icon="/nav-icons/speakerphone.svg"
                      url="/digital-marketing"
                      comingsoon="false"
                    />
                  </li>
                  {/* <li>
                    <SubItem
                      title="Email Marketing"
                      text="Get to know us better"
                      icon="/nav-icons/forward_to_inbox.svg"
                      url="/servicepage"
                    />
                  </li>
                  <li>
                    <SubItem
                      title="Affiliate Marketing"
                      text="Get to know us better"
                      icon="/nav-icons/user-group.svg"
                      url="/servicepage"
                    />
                  </li>
                  <li>
                    <SubItem
                      title="Content Marketing"
                      text="Get to know us better"
                      icon="/nav-icons/phone_iphone.svg"
                      url="/servicepage"
                    />
                  </li> */}
                  <li>
                    <SubItem
                      title="SEO"
                      text="Get found on Google"
                      icon="/nav-icons/search.svg"
                      url="/seo"
                      comingsoon="false"
                    />
                  </li>
                  <li>
                    <SubItem
                      title="Brand Design"
                      text="Logos, colours, fonts and more"
                      icon="/nav-icons/mountains_black.svg"
                      url="/brand-design"
                      comingsoon="false"
                    />
                  </li>
                  {/* <li>
                    <SubItem
                      title="Packaging Design"
                      text="Get to know us better"
                      icon="/nav-icons/cube.svg"
                      url="/servicepage"
                    />
                  </li> */}
                </ul>
              </section>
              <section>
                <h2 className="uppercase text-gray-500 font-bold">Web</h2>
                <ul>
                  <li>
                    <SubItem
                      title="Web Design"
                      text="Get found online"
                      icon="/nav-icons/code.svg"
                      url="/web-design"
                      comingsoon="false"
                    />
                  </li>
                  <li>
                    <SubItem
                      title="E-Commerce Design"
                      text="Sell products online"
                      icon="/service-icons/shopping-cart-solid.svg"
                      url="/ecommerce-design"
                      comingsoon="false"
                    />
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="uppercase text-gray-500 font-bold">Content</h2>
                <ul>
                  <li>
                    <SubItem
                      title="Photos &amp; Videos"
                      text="Engaging photos and videos"
                      icon="/nav-icons/photo_camera.svg"
                      url="/photosandvideos"
                      comingsoon="false"
                    />
                  </li>
                  {/* <li>
                    <SubItem
                      title="Videography"
                      text="Get to know us better"
                      icon="/nav-icons/play_circle.svg"
                      url="/servicepage"
                    />
                  </li> */}
                  {/* 
                  <li>
                    <SubItem
                      title="Graphics Design"
                      text="Get to know us better"
                      icon="/nav-icons/adobephotoshop.svg"
                      url="/services"
                    />
                  </li>
                   */}
                  {/* <li>
                    <SubItem
                      title="Audio Content"
                      text="Get to know us better"
                      icon="/nav-icons/equalizer.svg"
                      url="/servicepage"
                    />
                  </li> */}
                  <li>
                    <SubItem
                      title="Illustrations"
                      text="Beautifully hand-drawn images"
                      icon="/nav-icons/pencil.svg"
                      url="/illustration"
                      comingsoon="false"
                    />
                  </li>
                  <li>
                    <SubItem
                      title="Podcast Creation"
                      text="Engaging & Informative Content"
                      icon="/fadedmic.svg"
                      url="/podcast-creation"
                      comingsoon="true"
                    />
                  </li>
                </ul>
              </section>
            </div>
          </MenuItem>
          {/* <MenuItem text={"About"}></MenuItem>*/}
          {/*<EmptyMenuItem text={"Blog"} link="/blog"></EmptyMenuItem>*/}
          <MenuItem text={"Contact"} link={"/contact-us"}>
            <div className="grid grid-cols-2 gap-12 p-2">
              <section>
                <SubItem
                  title="Email"
                  text="hello@gigawaffle.co.uk"
                  icon="/nav-icons/email.svg"
                  url="mailto:hello@gigawaffle.co.uk"
                />
              </section>
              <section>
                <SubItem
                  title="Phone"
                  text="01772 376748"
                  icon="/nav-icons/phone.svg"
                  url="tel:01772 376748"
                />
              </section>
              <section>
                <SubItem
                  title="Facebook"
                  text="Check us out on Facebook"
                  icon="/facebook.svg"
                  url="https://www.facebook.com/gigawaffleuk"
                />
              </section>
              <section>
                <SubItem
                  title="LinkedIn"
                  text="Connect with us on LinkedIn"
                  icon="/linkedin.svg"
                  url="https://www.linkedin.com/company/gigawaffle/"
                />
              </section>
            </div>
          </MenuItem>
        </motion.div>
        {/* End of Desktop Navigation */}
      </div>
    </div>
  );
};

export default NavBlue;
