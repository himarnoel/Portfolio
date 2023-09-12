import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <div className="px-4 lg:px-20 mx-auto ">
        <NavBar />
        <Hero />
        <Projects />
      </div>
    </>
  );
}

export default App;
