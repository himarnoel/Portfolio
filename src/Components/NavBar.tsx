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

        <a
          className="md:px-8 px-4 rounded py-2 btn text-white lg:hidden"
          download="Emmanuel Olaniyi.pdf"
          href="../../src/assets/Resume.pdf"
        >
          Resume
        </a>

        <div className="hidden lg:flex gap-x-4  items-center font-medium text-[#666666] ">
          <a href="https://github.com/himarnoel">
            <AiFillGithub className="text-3xl" />
          </a>
          <a href="https://www.linkedin.com/in/imanwel/">
            <TiSocialLinkedinCircular className="text-4xl" />
          </a>
          <a href="https://twitter.com/theMOGDev">
            <AiFillTwitterCircle className="text-3xl" />
          </a>

          <a
            className="px-8 rounded py-2 btn text-white"
            download="Emmanuel Olaniyi.pdf"
            href="../../src/assets/Resume.pdf"
          >
            Resume
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
