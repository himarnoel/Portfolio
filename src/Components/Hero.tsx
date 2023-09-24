import hero from "../assets/images/hero.png";
import "../App.css";

const Hero = () => {
  return (
    <div>
      {/* A flex col reverse was done */}
      <div className="min-h-[88vh] flex w-full flex-col-reverse lg:flex-row items-center justify-center lg:justify-between mt-0 lg:mt-0">
        
        <div className="text-[42px] md:text-[64px] lg:text-[58px]  text-center lg:text-left font-bold text-[#42446E] mt-0 lg:mt-6">
          Hi <span className="wave">👋</span>,
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
          className="h-[10rem]  w-[10rem] md:h-[30rem] md:w-[30rem] lg:h-[20rem] lg:w-[20rem] object-contain mb-4 lg:mb-0 image"
        />
      </div>
    </div>
  );
};

export default Hero;
