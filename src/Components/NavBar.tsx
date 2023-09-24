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
          className="md:px-8 px-4 rounded fixed right-4 py-2 btn text-white lg:hidden"
          download="Emmanuel Olaniyi.pdf"
          href="../../src/assets/Resume.pdf"
        >
          Resume
        </a>

        <div className="hidden lg:flex gap-x-6 fixed z-20 right-20 items-center  font-medium text-[#666666] ">
          <button>
            <a
              className="px-8 rounded py-2 btn text-white"
              download="Emmanuel Olaniyi.pdf"
              href="../../src/assets/Resume.pdf"
            >
              Resume
            </a>
          </button>
          <a href="https://github.com/himarnoel">
            <AiFillGithub className="text-3xl bg-white rounded-full" />
          </a>
          <a href="https://www.linkedin.com/in/imanwel/">
            <TiSocialLinkedinCircular className="text-4xl bg-white rounded-full" />
          </a>
          <a href="https://twitter.com/theMOGDev">
            <AiFillTwitterCircle className="text-3xl bg-white rounded-full" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
