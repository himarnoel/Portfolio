import link from "../../../assets/images/link.svg";
import github from "../../../assets/images/github.svg";
import ProjectData from "../ProjectData";

const WebApplication = () => {
  const data = ProjectData();
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-start gap-y-10 gap-x-20 md:gap-x-20 md:gap-y-20  mt-20">
        {data.map((item, index: number) => (
          <div
            key={index}
            className="w-full shadow-[2px_2px_100px_0px_rgba(0,_0,_0,_0.20)]  rounded-[20px] min-h-[32rem] pb-4"
          >
            <a href={item.previewlink} target="_blank">
              <img src={item.image} alt="" className="w-full object-fill" />
            </a>
            <div className="flex flex-col  gap-y-4 w-full px-4 pb-2">
              <p className="text-[#000] text-[20px] lg:text-[25px]  font-bold">
                {item.title}
              </p>
              <p className="text-justify">{item.text}</p>
              <p className="flex items-center gap-x-2">
                <span className="text-[16px] font-[400] text-[#42446E]">
                  Tech stack:
                </span>
                <span className="text-[#42446E] font-[300]  text-[14px]">
                  {item.techstack}
                </span>
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-x-1">
                  <img src={link} alt="" />
                  <a
                    href={item.previewlink}
                    target="_blank"
                    className="text-[#000] text-[16px] underline"
                  >
                    Live Preview
                  </a>
                </div>
                <div className="flex gap-x-1">
                  <img src={github} alt="" />
                  <a
                    target="_blank"
                    href={item.githublink}
                    className="text-[#000] text-[16px] underline"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebApplication;
