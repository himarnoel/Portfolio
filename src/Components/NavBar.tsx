import React from "react";
import logo from "../assets/logo.png";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div>
      {" "}
      <nav className="flex justify-between items-center py-1  pt-5">
        <img
          src={logo}
          alt=""
          className="object-contain w-[6rem] lg:w-[9rem]"
        />
        <div className="hidden lg:flex gap-x-10 font-medium text-[#666666] ">
          <a href="" className="e">
            Home
          </a>
          <a href="" className="e">
            About
          </a>
          <a href="" className="e">
            Tech Stack
          </a>
          <a href="" className="e">
            Projects
          </a>
          <a href="" className="e">
            Contact
          </a>
          <div className="w-[20px] h-[20px] rounded-full bg-[#666666]"></div>{" "}
          <div className="w-[20px] h-[20px] rounded-full bg-[#666666]"></div>
          <div className="w-[20px] h-[20px] rounded-full bg-[#666666]"></div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
