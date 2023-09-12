
import useTab from "./useTab";
import Tabs from "./Tabs";

type Props = {};

const Projects = (props: Props) => {
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
        <HomePage />
      ) : hooks.checkindex === 1 ? (
        <LearningPool />
      ) : (
        <CreateProject />
      )}
    </div>
  );
};

export default Projects;
