import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Tabs/Projects";
import Tools from "./Components/Tools";

function App() {
  return (
    <>
      <div className="px-4 lg:px-20 mx-auto min-h-screen ">
        <NavBar />
        <Hero />
      </div>
      <div className="px-4 lg:px-20 mx-auto min-h-screen ">
        <Tools />
      </div>
      <div className="px-4 lg:px-20 mx-auto min-h-screen ">
        <Projects />
      </div>
    </>
  );
}

export default App;
