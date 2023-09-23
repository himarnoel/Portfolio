import { useState } from "react";

const useTab = () => {
  const [tabs, settabs] = useState<Array<string>>([
    "Web Application",
    "Landing Page",
    "Articles",
  ]);
  const [checkindex, setcheckindex] = useState<number>(0);
  return { tabs, checkindex, setcheckindex, settabs };
};

export default useTab;
