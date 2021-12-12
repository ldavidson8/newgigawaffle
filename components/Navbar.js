import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "./Hamburger";
import Menu from "./Menu";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <nav className="flex w-full justify-between bg-navy-blue z-max">
      <div>
        <Link href="/">
          <a>
            <Image src="/logo.png" width="190" height="44" />
          </a>
        </Link>
      </div>
      <div onClick={toggleSidebar}>
        <Hamburger isOpen={sidebar} />
        <Menu isOpen={sidebar} />
      </div>
    </nav>
  );
};

export default Navbar;
