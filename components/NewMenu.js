import Link from "next/link";
import { useState } from 'react';
import { SubMenuItem } from "./NavComponents/SubNavItem";

const NewMenu = () => {

  const [activeServices, setActiveServices] = useState(true);
  const [activePortfolio, setActivePortfolio] = useState(false);
  const [activeBlog, setActiveBlog] = useState(false);
  const [activeAbout, setActiveAbout] = useState(false);
  const [activeContact, setActiveContact] = useState(false);

  const switchServices = () => {
    setActiveServices(!activeServices);
  }
  const switchPortfolio = () => {
    setActivePortfolio(!activePortfolio);
  }
  const switchBlog = () => {
    setActiveBlog(!activeBlog);
  }
  const switchAbout = () => {
    setActiveAbout(!activeAbout);
  }
  const switchContact = () => {
    setActiveContact(!activeContact);
  }

  return (
    <>
      <ul className="text-white grid grid-cols-5 max-w-nav font-bold justify-center w-full mx-auto z-max">
        <li className="cursor-pointer mx-auto">
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </li>
        <li className="cursor-pointer mx-auto text-center justify-center">
          <Link href="#">
            <a>Services</a>
          </Link>
          <div className="relative w-6 h-3 bg-white mx-auto pointer mt-4"></div>
          <div className={`absolute bg-white mx-0 my-auto left-1/2 -translate-x-1/2 grid-cols-3 text-left p-4 w-[1000px] h-[660px] shadow-xl rounded-lg after:bg-gradient-to-r after:from-primary after:to-secondary after:h-[1%] after:absolute after:bottom-0 after:rounded-b-md after:w-[100%] after:blur-sm ${activeServices ? 'grid': 'hidden'}`}>
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
        <li className="cursor-pointer mx-auto">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className="cursor-pointer mx-auto">
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li className="cursor-pointer mx-auto">
          <Link href="/contact-us">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NewMenu;
