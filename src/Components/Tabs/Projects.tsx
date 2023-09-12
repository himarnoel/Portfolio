import useTab from "./useTab";
import Tabs from "./Tabs";
import LandingPage from "./TabFiles/LandingPage";
import Application from "./TabFiles/Application";
import Articles from "./TabFiles/Articles";


const Projects = () => {
  const hooks = useTab();
  return (
    <div>
      <div className="mt-20 lg:mt-64 text-center">
        <h1 className="project-text text-[48px] font-bold">Projects</h1>
        <p className="text-sm font-light">Things I’ve built so faras</p>
      </div>
      <Tabs
        tabs={hooks.tabs}
        checkIndex={hooks.checkindex}
        setCheckIndex={hooks.setcheckindex}
      />
      {hooks.checkindex === 0 ? (
        <LandingPage />
      ) : hooks.checkindex === 1 ? (
        <Application  />
      ) : (
        <Articles />
      )}
    </div>
  );
};

export default Projects;
