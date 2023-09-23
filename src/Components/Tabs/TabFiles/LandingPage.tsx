import image from "../../../assets/images/bg1.png";
import link from "../../../assets/images/link.svg";
import github from "../../../assets/images/github.svg";
import img2 from "../../../assets/images/p2.png";
import img3 from "../../../assets/images/p3.png";
const LandingPage = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 place-items-center gap-y-10 gap-x-20 mt-20">
        <div className="w-full shadow-[2px_2px_100px_0px_rgba(0,_0,_0,_0.20)]  rounded-[20px] min-h-[32rem]">
          <img src={image} alt="" className="w-full object-fill" />
          <div className="flex flex-col  gap-y-4 w-full px-4 pb-2">
            <p className="text-[#000] text-[28px]  font-bold">
              Previous Exam Papers Hubs
            </p>
            <p className="s">
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </p>
            <p className="flex items-center gap-x-2">
              <span className="text-[16px] font-[400] text-[#42446E]">
                Tech stack:
              </span>
              <span className="text-[#42446E] font-[300]  text-[14px]">
                HTML , JavaScript, SASS, React
              </span>
            </p>
            <div className="flex items-center justify-between">
              <div className="flex gap-x-1">
                <img src={link} alt="" />
                <span className="text-[#000] text-[16px] underline">
                  Live Preview
                </span>
              </div>
              <div className="flex gap-x-1">
                <img src={github} alt="" />
                <span className="text-[#000] text-[16px] underline">
                  View Code
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full shadow-[2px_2px_100px_0px_rgba(0,_0,_0,_0.20)]  rounded-[20px] min-h-[32rem]">
          <img src={img2} alt="" className="w-full object-fill" />
          <div className="flex flex-col  gap-y-8 w-full px-4 pb-2">
            <p className="text-[#000] text-[28px]  font-bold">
              Previous Exam Papers Hubs
            </p>
            <p className="s">
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </p>
            <p className="flex items-center gap-x-2">
              <span className="text-[16px] font-[400] text-[#42446E]">
                Tech stack:
              </span>
              <span className="text-[#42446E] font-[300]  text-[14px]">
                HTML , JavaScript, SASS, React
              </span>
            </p>
            <div className="flex items-center justify-between">
              <div className="flex gap-x-1">
                <img src={link} alt="" />
                <span className="text-[#000] text-[16px] underline">
                  Live Preview
                </span>
              </div>
              <div className="flex gap-x-1">
                <img src={github} alt="" />
                <span className="text-[#000] text-[16px] underline">
                  View Code
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full shadow-[2px_2px_100px_0px_rgba(0,_0,_0,_0.20)]  rounded-[20px] min-h-[32rem]">
          <img src={img3} alt="" className="w-full object-fill" />
          <div className="flex flex-col  gap-y-8 w-full px-4 pb-2">
            <p className="text-[#000] text-[28px]  font-bold">
              Project Tile goes here
            </p>
            <p className="s">
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </p>
            <p className="flex items-center gap-x-2">
              <span className="text-[16px] font-[400] text-[#42446E]">
                Tech stack:
              </span>
              <span className="text-[#42446E] font-[300]  text-[14px]">
                HTML , JavaScript, SASS, React
              </span>
            </p>
            <div className="flex items-center justify-between">
              <div className="flex gap-x-1">
                <img src={link} alt="" />
                <span className="text-[#000] text-[16px] underline">
                  Live Preview
                </span>
              </div>
              <div className="flex gap-x-1">
                <img src={github} alt="" />
                <span className="text-[#000] text-[16px] underline">
                  View Code
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
