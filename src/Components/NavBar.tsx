import logo from "../assets/logo.png";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

import { TiSocialLinkedinCircular } from "react-icons/ti";

const NavBar = () => {
  return (
    <div>
      {" "}
      <nav className="flex justify-between items-center h-[12vh]  ">
        <img
          src={logo}
          alt=""
          className="object-contain w-[6rem] md:w-[10rem] lg:w-[7rem]"
        />

        <button className="px-8 rounded py-2 btn text-white lg:hidden">
          Resume
        </button>

        <div className="hidden lg:flex gap-x-4  items-center font-medium text-[#666666] ">
          <AiFillGithub className="text-3xl" />
          <TiSocialLinkedinCircular className="text-3xl" />
          <AiFillTwitterCircle className="text-3xl" />
          <button className="px-8 rounded py-2 btn text-white">Resume</button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
