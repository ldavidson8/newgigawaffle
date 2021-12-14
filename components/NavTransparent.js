import React from "react";

const NavTransparent = () => {
  return (
    <div className="w-screen absolute top-0 text-white font-bold text-sm">
      <div>
        <img src="/logo.png" className="absolute top-4 left-4"></img>
      </div>
      <div className="p-10 flex justify-center">
        <MenuItem text={"Portfolio"} style={{ minWidth: "400px" }}></MenuItem>
        <MenuItem text={"Services"} style={{ minWidth: "400px" }}></MenuItem>
        <MenuItem text={"About"} style={{ minWidth: "400px" }}></MenuItem>
        <MenuItem text={"Blog"} style={{ minWidth: "400px" }}></MenuItem>
        <MenuItem text={"Contact"} style={{ minWidth: "400px" }}></MenuItem>
      </div>
    </div>
  );
};

const MenuItem = ({ text, children }) => {
  return (
    <div className="px-10 relative cursor-pointer">
      <span className="relative">{text}</span>
    </div>
  );
};

export default NavTransparent;
