import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <nav className="flex w-full bg-navy-blue z-max p-4 items-center justify-center">
      <div className="absolute top-2 left-4">
        <Link href="/">
          <a>
            <Image src="/logo.png" width="150" height="35" />
          </a>
        </Link>
      </div>
      <div>
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
