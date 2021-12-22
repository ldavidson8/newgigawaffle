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

const MenuItem = ({ text, children, ...props }) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
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

const SubItem = ({ title, text, icon, url }) => {
  return (
    <motion.div
      className="my-6 group cursor-pointer"
      layout
      variants={SubItemVariants}
    >
      <Link href={url} passHref>
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
    </motion.div>
  );
};

// Mobile Navigation //
// const [menuOpen, setMenuOpen] = useState(false);

const NavTransparent = () => {
  return (
    <div className="w-full absolute top-0 left-0 z-max">
      <div className="max-w-screen-lg max-h-fit flex mx-auto justify-between items-center px-4">
        <div className="absolute top-8">
          {/* Requires absolute or hover menus increase height and push logo down */}
          <Link href="/" passHref>
            <a>
              <Image src="/logo.png" width="150" height="35"></Image>
            </a>
          </Link>
        </div>
        <button className="absolute top-8 right-4 p-3 rounded-2xl bg-white bg-opacity-20 desktop:hidden">
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
        <motion.div className="p-10 justify-end w-full hidden desktop:flex">
          <MenuItem text={"Portfolio"}>
            <div>
              <ul>
                <li>
                  <SubItem
                    title="PlaygroundBullys UK"
                    text="Dog Breeder"
                    icon="/client-logos/pgb-favicon.png"
                    url="#"
                  />
                </li>
                <li>
                  <SubItem
                    title="Grand Venue"
                    text="Wedding Planner"
                    icon="/client-logos/crown.png"
                    url="#"
                  />
                </li>
                <li>
                  <SubItem
                    title="Unite Cities"
                    text="Logistics &amp; Storage"
                    icon="/client-logos/unitecities-favicon.png"
                    url="#"
                  />
                </li>
              </ul>
            </div>
          </MenuItem>
          <MenuItem text={"Services"}>
            <div className="grid grid-cols-3 gap-16 p-4">
              <section>
                <h2 className="uppercase text-gray-500 font-bold">Marketing</h2>
                <ul>
                  <li>
                    <SubItem
                      title="Digital Marketing"
                      text="Get to know us better"
                      icon="/nav-icons/speakerphone.svg"
                      url="#"
                    />
                  </li>
                  <li>
                    <SubItem
                      title="Email Marketing"
                      text="Get to know us better"
                      icon="/nav-icons/forward_to_inbox.svg"
                      url="#"
                    />
                  </li>
                  <li>
                    <SubItem
                      title="Affiliate Marketing"
                      text="Get to know us better"
                      icon="/nav-icons/user-group.svg"
                      url="#"
                    />
                  </li>
                  <li>
                    <SubItem
                      title="Content Marketing"
                      text="Get to know us better"
                      icon="/nav-icons/phone_iphone.svg"
                      url="#"
                    />
                  </li>
                  <li>
                    <SubItem
                      title="SEO"
                      text="Get to know us better"
                      icon="/nav-icons/search.svg"
                      url="#"
                    />
                  </li>
                  <li>
                    <SubItem
                      title="Logo Design"
                      text="Get to know us better"
                      icon="/nav-icons/mountains_black.svg"
                      url="#"
                    />
                  </li>
                  <li>
                    <SubItem
                      title="Packaging Design"
                      text="Get to know us better"
                      icon="/nav-icons/cube.svg"
                      url="#"
                    />
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="uppercase text-gray-500 font-bold">Web</h2>
                <ul>
                  <li>
                    <SubItem
                      title="UI Design"
                      text="Get to know us better"
                      icon="/nav-icons/view_quilt.svg"
                      url="#"
                    />
                  </li>
                  <li>
                    <SubItem
                      title="UX Design"
                      text="Get to know us better"
                      icon="/nav-icons/smile.svg"
                      url="#"
                    />
                  </li>
                  <li>
                    <SubItem
                      title="Web Development"
                      text="Get to know us better"
                      icon="/nav-icons/code.svg"
                      url="#"
                    />
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="uppercase text-gray-500 font-bold">Content</h2>
                <ul>
                  <li>
                    <SubItem
                      title="Photography"
                      text="Get to know us better"
                      icon="/nav-icons/photo_camera.svg"
                      url="#"
                    />
                  </li>
                  <li>
                    <SubItem
                      title="Videography"
                      text="Get to know us better"
                      icon="/nav-icons/play_circle.svg"
                      url="#"
                    />
                  </li>
                  <li>
                    <SubItem
                      title="Graphics Design"
                      text="Get to know us better"
                      icon="/nav-icons/adobephotoshop.svg"
                      url="#"
                    />
                  </li>
                  <li>
                    <SubItem
                      title="Audio Content"
                      text="Get to know us better"
                      icon="/nav-icons/equalizer.svg"
                      url="#"
                    />
                  </li>
                  <li>
                    <SubItem
                      title="Illustrations"
                      text="Get to know us better"
                      icon="/nav-icons/pencil.svg"
                      url="#"
                    />
                  </li>
                </ul>
              </section>
            </div>
          </MenuItem>
          <MenuItem text={"About"}></MenuItem>
          <MenuItem text={"Blog"}></MenuItem>
          <MenuItem text={"Contact"}>
            <div className="grid grid-cols-2 gap-12 p-2">
              <section>
                <SubItem
                  title="Email"
                  text="hello@gigawaffle.co.uk"
                  icon="/nav-icons/email.svg"
                  url="#"
                />
              </section>
              <section>
                <SubItem
                  title="Phone"
                  text="01772 376748"
                  icon="/nav-icons/phone.svg"
                  url="#"
                />
              </section>
              <section>
                <SubItem
                  title="Facebook"
                  text="Check us out on Facebook"
                  icon="/facebook.svg"
                  url="#"
                />
              </section>
              <section>
                <SubItem
                  title="LinkedIn"
                  text="Connect with us on LinkedIn"
                  icon="/linkedin.svg"
                  url="#"
                />
              </section>
            </div>
          </MenuItem>
        </motion.div>
      </div>
    </div>
  );
};

export default NavTransparent;
