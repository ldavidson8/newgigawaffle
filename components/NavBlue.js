import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Underline = () => (
  <motion.div
    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"
    layoutId="underline"
    layout
  ></motion.div>
);

const NavBlue = () => {
  return (
    <div className="w-screen p-4 flex items-center justify-center z-10 bg-navy-blue">
      <div className="absolute top-2 left-2">
        <Link href="/" passHref>
          <a>
            <Image src="/logo.png" width="150" height="35"></Image>
          </a>
        </Link>
      </div>
      <motion.div className="px-10 flex justify-center">
        <MenuItem text={"Portfolio"}>
          <SubItem
            title="PlaygroundBullys UK"
            text="Dog Breeder"
            icon="/placeholder.png"
            url="#"
          />
          <SubItem
            title="Grand Venue"
            text="Wedding Planner"
            icon="/placeholder.png"
            url="#"
          />
          <SubItem
            title="My Cabin Bed"
            text="Children's Bed Store"
            icon="/placeholder.png"
            url="#"
          />
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
        <MenuItem text={"Contact"}></MenuItem>
      </motion.div>
    </div>
  );
};

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
      <button className="relative text-white cursor-default">
        {text}
        {isBeingHovered && <Underline />}
      </button>
      {isBeingHovered && (
        <div>
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
          <div className="flex items-center gap-4">
            <p className="font-bold text-gray-800 group-hover:text-secondary 0 text-md">
              <span>
                <Image src={icon} height="20" width="20"></Image>
              </span>
              {title}
            </p>
          </div>
          <p className="font-bold text-gray-400 group-hover:text-blue-400 text-sm">
            {text}
          </p>
        </a>
      </Link>
    </motion.div>
  );
};

export default NavBlue;
