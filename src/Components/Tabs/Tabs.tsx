import React from "react";

type Props = {
  tabs: Array<string>;
  checkIndex: number;
  setCheckIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Tabs: React.FC<Props> = (props) => {
  return (
    <div>
      <div className="w-full bg-[#D9D9D9] rounded-[10px]">
        <div className="p">
          <p>Landing Pages</p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
