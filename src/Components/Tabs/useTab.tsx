import React, { useState } from "react";

const useTab = () => {
  const [tabs, settabs] = useState<Array<string>>([
    "Landing",
    "Web Application",
    "Articles",
  ]);
  const [checkindex, setcheckindex] = useState<number>(0);
  return { tabs, checkindex, setcheckindex, settabs };
};

export default useTab;
