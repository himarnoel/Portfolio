import useTab from "./useTab";
import Tabs from "./Tabs";
import WebApplication from "./TabFiles/WebApplication";
import Articles from "./TabFiles/Articles";
import LandingPages from "./TabFiles/LandingPages";

const Projects = () => {
  const hooks = useTab();
  return (
    <div>
      <div className="mt-20 md:mt-0 lg:mt-32 text-center">
        <h1 className="project-text text-[48px] font-bold">Projects</h1>
        <p className="text-xl font-light mt-4 ">Things I’ve built so far</p>
      </div>
      {/* <Tabs
        tabs={hooks.tabs}
        checkIndex={hooks.checkindex}
        setCheckIndex={hooks.setcheckindex}
      /> */}
      {hooks.checkindex === 0 ? (
        <WebApplication />
      ) : hooks.checkindex === 1 ? (
        <LandingPages />
      ) : (
        <Articles />
      )}
    </div>
  );
};

export default Projects;
