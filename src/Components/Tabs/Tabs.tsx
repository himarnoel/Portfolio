import React from "react";

type Props = {
  tabs: Array<string>;
  checkIndex: number;
  setCheckIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Tabs: React.FC<Props> = (prop) => {
  return (
    <div>
      <div className="w-full flex justify-around items-center h-[4rem] bg-[#D9D9D9] rounded-[10px]">
        {prop.tabs.map((item, index) => (
          <div key={index} className="bg-[#42446E] rounded-lg">
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
