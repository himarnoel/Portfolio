import logo from "../assets/logo.png";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineMail,
} from "react-icons/ai";

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
          className="md:px-14 md:py-4 px-4 rounded  md:text-xl fixed z-20 right-4 py-2 btn text-white lg:hidden"
          download="Emmanuel Olaniyi.pdf"
          target="_blank"
          href="https://drive.google.com/file/d/1LNYVoLY19qAnDThMwHZoz5EJxLkqceX_/view"
        >
          Resume
        </a>
        <div className="flex flex-col fixed bottom-2 right-1 text-[#666666] gap-x-4 lg:hidden gap-y-4  mt-4 items-center">
          <a href="mailto:olaimarnoel@gmail.com">
            <AiOutlineMail className="bg-white rounded-full text-4xl md:text-6xl" />
          </a>
          <a href="https://github.com/himarnoel">
            <AiFillGithub className="bg-white rounded-full  text-4xl md:text-6xl" />
          </a>
          <a href="https://www.linkedin.com/in/imanwel/">
            <TiSocialLinkedinCircular className="bg-white rounded-full text-[2.8rem] md:text-7xl" />
          </a>
          <a href="https://twitter.com/theMOGDev">
            <AiFillTwitterCircle className="bg-white rounded-full text-4xl md:text-6xl" />
          </a>
        </div>

        <div className="hidden lg:flex gap-x-6 fixed z-20 right-20 items-center   font-medium text-[#666666] ">
          <a href="mailto:olaimarnoel@gmail.com">
            <AiOutlineMail className="text-3xl bg-white rounded-full" />
          </a>
          <a href="https://github.com/himarnoel">
            <AiFillGithub className="text-3xl bg-white rounded-full" />
          </a>
          <a href="https://www.linkedin.com/in/imanwel/">
            <TiSocialLinkedinCircular className="text-4xl bg-white rounded-full" />
          </a>
          <a href="https://twitter.com/theMOGDev">
            <AiFillTwitterCircle className="text-3xl bg-white rounded-full" />
          </a>

          <a
            className="px-8 rounded py-2 btn  text-white"
            download="Emmanuel Olaniyi.pdf"
            target="_blank"
            href="https://drive.google.com/file/d/1LNYVoLY19qAnDThMwHZoz5EJxLkqceX_/view"
          >
            Resume
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
