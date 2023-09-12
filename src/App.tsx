import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Tabs/Projects";

function App() {
  return (
    <>
      <div className="px-2 lg:px-20 mx-auto min-h-screen ">
        <NavBar />
        <Hero />
      </div>
      <div className="px-2 lg:px-20 mx-auto min-h-screen ">
        <Projects />
      </div>
    </>
  );
}

export default App;
