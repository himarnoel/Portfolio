import html from ".././assets/images/tools/html.svg";
import css from ".././assets/images/tools/css.svg";
import bootstrap from ".././assets/images/tools/bootstrap.svg";
import js from ".././assets/images/tools/js.svg";
import ts from ".././assets/images/tools/ts.svg";
import react from ".././assets/images/tools/react.svg";
import node from ".././assets/images/tools/node.svg";
import tailwind from ".././assets/images/tools/tailwind.svg";
import git from ".././assets/images/tools/git.svg";
import github from ".././assets/images/tools/github.svg";
import redux from ".././assets/images/tools/redux.svg";
const Tools = () => {
  return (
    <div>
      <div className="mt-20 lg:mt-4 text-center">
        <h1 className="project-text text-[48px] font-bold">My Tech Stack</h1>
        <p className="text-xl font-light mt-4 ">Things I’ve built so far</p>
      </div>
      <div className="w-full grid grid-cols-3 lg:grid-cols-6 place-items-center">
        <div className="s">
          <img
            src={html}
            alt=""
            className="w-fit  
          object-contain"
          />

          <p className="text-[#000] text-[16px] text-center">HTML5</p>
        </div>
        <div className="s">
          <img
            src={css}
            alt=""
            className="w-fit  
          object-contain"
          />
          <p className="text-[#000] text-center">CSS3</p>
        </div>
        <div className="s">
          <img
            src={js}
            alt=""
            className="w-fit  
          object-contain"
          />
          <p className="text-[#000] text-center">JavaScript</p>
        </div>
        <div className="w-fit ">
          <img
            src={ts}
            alt=""
            className="w-fit  
          object-contain"
          />
          <p className="text-[#000] text-center">Typescript</p>
        </div>
        <div className="w-fit ">
          <img
            src={react}
            alt=""
            className="w-fit  
          object-contain"
          />
          <p className="text-[#000] text-center">React</p>
        </div>
        <div className="s">
          <img
            src={bootstrap}
            alt=""
            className="w-fit  
          object-contain"
          />
          <p className="text-[#000] text-center">Bootstrap</p>
        </div>
        <div className="w-fit ">
          <img
            src={tailwind}
            alt=""
            className="w-fit  
          object-contain"
          />
          <p className="text-[#000] text-center">Tailwind</p>
        </div>
        <div className="s">
          <img
            src={node}
            alt=""
            className="w-fit  
          object-contain"
          />
          <p className="mm">HTML5</p>
        </div>
        <div className="w-fit ">
          <img
            src={git}
            alt=""
            className="w-fit  
          object-contain"
          />
          <p className="mm">HTML5</p>
        </div>
        <div className="s">
          <img
            src={redux}
            alt=""
            className="w-fit  
          object-contain"
          />
          <p className="mm">HTML5</p>
        </div>

        <div className="s">
          <img
            src={github}
            alt=""
            className="w-fit  
          object-contain"
          />
          <p className="mm">HTML5</p>
        </div>
      </div>
    </div>
  );
};

export default Tools;
