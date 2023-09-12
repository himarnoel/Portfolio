
import logo from "../assets/logo.png";
import {
  AiFillGithub,

  AiFillTwitterCircle,
} from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { TiSocialLinkedinCircular } from "react-icons/ti";


const NavBar = () => {
  return (
    <div>
      {" "}
      <nav className="flex justify-between items-center py-1  pt-5">
        <img
          src={logo}
          alt=""
          className="object-contain w-[6rem] lg:w-[9rem]"
        />
        <div className="">
          <BiMenuAltRight className="text-4xl lg:hidden" />
        </div>
        <div className="hidden lg:flex gap-x-4 font-medium text-[#666666] ">
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
          <AiFillGithub className="text-3xl" />
          <TiSocialLinkedinCircular className="text-3xl" />
          <AiFillTwitterCircle className="text-3xl" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
