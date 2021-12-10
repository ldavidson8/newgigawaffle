import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex w-full justify-between p-8">
      <div>
        <img src="/gigawafflelogo.png" />
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
