import React from "react";

type Props = {
  tabs: Array<string>;
  checkIndex: number;
  setCheckIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Tabs: React.FC<Props> = (prop) => {
  return (
    <div>
      <div className="lg:w-[40rem] mx-auto w-full flex justify-around mt-8 items-center h-[4rem] bg-[#D9D9D9] gap-x-6 rounded-[10px] lg:px-10 px-2">
        {prop.tabs.map((item, index) => (
          <div
            key={index}
            onClick={() => prop.setCheckIndex(index)}
            className={
              index === prop.checkIndex
                ? "bg-[#42446E] rounded-lg py-2 text-white cursor-pointer flex text-center justify-center  items-center w-full  text-sm lg:text-normal"
                : " rounded-lg py-2 px-1 cursor-pointer w-full flex justify-center items-center text-center text-sm lg:text-normal"
            }
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
