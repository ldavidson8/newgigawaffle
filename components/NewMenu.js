import Link from "next/link";
import { useState } from 'react';
import { SubMenuItem } from "./NavComponents/SubNavItem";

const NewMenu = () => {

  const [activeServices, setActiveServices] = useState(false);
  const [activePortfolio, setActivePortfolio] = useState(false);
  const [activeBlog, setActiveBlog] = useState(false);
  const [activeAbout, setActiveAbout] = useState(false);
  const [activeContact, setActiveContact] = useState(false);

  const switchNav = (e, navItem) => {
    switch(navItem)
    {
      case "portfolio":
        setActivePortfolio(!activePortfolio);
        break;
      case "services":
        setActiveServices(!activeServices);
        break;
      case "about":
        setActiveAbout(!activeAbout);
        break;
      case "blog":
        setActiveBlog(!activeBlog);
        break;
      case "contact":
        setActiveContact(!activeContact);
        break;
    }
  }

  const openNav = (e, navItem) => {
    switch(navItem)
    {
      case "portfolio":
        setActivePortfolio(true);
        break;
      case "services":
        setActiveServices(true);
        break;
      case "about":
        setActiveAbout(true);
        break;
      case "blog":
        setActiveBlog(true);
        break;
      case "contact":
        setActiveContact(true);
        break;
    }
  }

  const closeNav = (e, navItem) => {
    switch(navItem)
    {
      case "portfolio":
        setActivePortfolio(false);
        break;
      case "services":
        setActiveServices(false);
        break;
      case "about":
        setActiveAbout(false);
        break;
      case "blog":
        setActiveBlog(false);
        break;
      case "contact":
        setActiveContact(false);
        break;
    }
  }

  return (
    <>
      <ul className="text-white grid grid-cols-5 p-4 align-center max-w-nav font-bold justify-center w-full mx-auto z-max">
        <li className="cursor-pointer mx-auto my-auto w-full text-center" onClick={(e) => switchNav(e, "portfolio")}>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </li>
        <li className="cursor-pointer mx-auto my-auto w-full text-center" onClick={(e) => switchNav(e, "services")} onMouseEnter={(e) => openNav(e, "services")} onMouseLeave={(e) => closeNav(e, "services")}>
          <Link href="#">
            <a>Services</a>
          </Link>
          <div className={`absolute bg-white p-4 top-10 mx-0 my-auto left-1/2 -translate-x-1/2 grid-cols-3 text-left w-[1000px] h-[660px] shadow-xl rounded-lg after:bg-gradient-to-r after:from-primary after:to-secondary after:h-[1%] after:absolute after:bottom-0 after:rounded-b-md after:w-[100%] ${activeServices ? 'grid': 'hidden'}`}>
              <div>
                <p className="text-gray-500 text-sm uppercase font-bold">Marketing & Branding</p>
                <ul className="pr-10">
                  <li>
                    <SubMenuItem
                      title="Social Media Services"
                      short="We leverage the power of social media to grow your business."
                    />
                    <SubMenuItem
                      title="Email Marketing"
                      short="Go direct to potential or current customers using email."
                    />
                    <SubMenuItem
                      title="Affiliate Marketing"
                      short="Go direct to potential or current customers using email."
                    />
                    <SubMenuItem
                      title="Content Marketing"
                      short="Go direct to potential or current customers using email."
                    />
                    <SubMenuItem
                      title="Search Engine Optimisation"
                      short="Go direct to potential or current customers using email."
                    />
                    <SubMenuItem
                      title="Branding Design"
                      short="Go direct to potential or current customers using email."
                    />
                    <SubMenuItem
                      title="Logo Design"
                      short="Go direct to potential or current customers using email."
                    />
                    <SubMenuItem
                      title="Packaging Design"
                      short="Go direct to potential or current customers using email."
                    />                                  
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase font-bold">Web Design & Development</p>
                <ul className="pr-10">
                  <li>
                    <SubMenuItem
                      title="Web Development"
                      short="We leverage the power of social media to grow your business."
                    />
                    <SubMenuItem
                      title="UI Design"
                      short="Go direct to potential or current customers using email."
                    />
                    <SubMenuItem
                      title="UX Design"
                      short="Go direct to potential or current customers using email."
                    />
                    <SubMenuItem
                      title="Web Redesign"
                      short="Go direct to potential or current customers using email."
                    />        
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase font-bold">Content</p>
                <ul className="pr-10">
                  <li>
                    <SubMenuItem
                      title="Photography"
                      short="We leverage the power of social media to grow your business."
                    />
                    <SubMenuItem
                      title="Videography"
                      short="Go direct to potential or current customers using email."
                    />
                    <SubMenuItem
                      title="Audio Content"
                      short="Go direct to potential or current customers using email."
                    />
                    <SubMenuItem
                      title="Graphics Design"
                      short="Go direct to potential or current customers using email."
                    />
                    <SubMenuItem
                      title="Illustration"
                      short="Go direct to potential or current customers using email."
                    />        
                  </li>
                </ul>
              </div>
            </div>
        </li>
        <li className="cursor-pointer mx-auto my-auto w-full text-center" onClick={(e) => switchNav(e, "about")}>
          <Link href="/about">
            <a onClick={(e) => switchNav(e, "about")}>About</a>
          </Link>
        </li>
        <li className="cursor-pointer mx-auto my-auto w-full text-center" onClick={(e) => switchNav(e, "blog")}>
          <Link href="/blog">
            <a onClick={(e) => switchNav(e, "blog")}>Blog</a>
          </Link>
        </li>
        <li className="cursor-pointer mx-auto my-auto w-full text-center" onClick={(e) => switchNav(e, "contact-us")}>
          <Link href="/contact-us">
            <a onClick={(e) => switchNav(e, "contact")}>Contact</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NewMenu;
