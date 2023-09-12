import React from "react";
import hero from "../assets/images/hero.png";
import "../App.css";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <div className="flex w-full flex-col-reverse lg:flex-row items-center justify-center lg:justify-between mt-20">
        <div className="text-[42px] lg:text-[58px]  text-center lg:text-left font-bold text-[#42446E]">
          Hi 👋,
          <p>
            My name is{" "}
            <p>
              {" "}
              <span className="name1">Emmanuel</span>{" "}
              <span className="name2"> Olaniyi</span>
            </p>{" "}
          </p>
          I build things for web
        </div>
        <img
          src={hero}
          alt=""
          className="h-[10rem]  w-[10rem] slg:h-[20rem] lg:w-[20rem] object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
