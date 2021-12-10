import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="flex w-full justify-between p-8">
      <div>
        <Image src="/logo.png" width="190" height="44" />
      </div>
      <a>Home</a>
      <a>Portfolio</a>
      <a>Services</a>
      <a>About</a>
      <a>Blog</a>
      <a>Contact</a>
    </nav>
  );
};
