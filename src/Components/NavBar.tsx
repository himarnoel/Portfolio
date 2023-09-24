import logo from "../assets/logo.png";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const NavBar = () => {
  return (
    <div>
      {" "}
      <nav className="flex justify-between items-center h-[12vh]  ">
        <img
          src={logo}
          alt=""
          className="object-contain w-[6rem] md:w-[10rem] lg:w-[9rem]"
        />
        <div className="">
          <BiMenuAltRight className="text-4xl md:text-6xl lg:hidden" />
        </div>
        <div className="hidden lg:flex gap-x-4 font-medium text-[#666666] ">
          <AiFillGithub className="text-3xl" />
          <TiSocialLinkedinCircular className="text-3xl" />
          <AiFillTwitterCircle className="text-3xl" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
