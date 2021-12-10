import React from "react";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "./Hamburger";

export const Navbar = () => {
  return (
    <nav className="flex w-full justify-between">
      <div>
        <Link href="/">
          <a>
            <Image src="/logo.png" width="190" height="44" />
          </a>
        </Link>
      </div>
      <Hamburger />
      {/* <ul>
        <li>
          <Link href="/">
            <a className="text-3xl capitalize py-8 px-0 font-bold no-underline;">
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="text-3xl capitalize py-8 px-0 font-bold no-underline;">
              Portfolio
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="text-3xl capitalize py-8 px-0 font-bold no-underline;">
              Services
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="text-3xl capitalize py-8 px-0 font-bold no-underline;">
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="text-3xl capitalize py-8 px-0 font-bold no-underline;">
              Blog
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="text-3xl capitalize py-8 px-0 font-bold no-underline;">
              Contact
            </a>
          </Link>
        </li>
      </ul> */}
    </nav>
  );
};
