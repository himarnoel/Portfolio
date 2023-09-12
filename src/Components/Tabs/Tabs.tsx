import React from "react";

type Props = {
  tabs: Array<string>;
  checkIndex: number;
  setCheckIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Tabs: React.FC<Props> = (props) => {
  return <div>Tabs</div>;
};

export default Tabs;
