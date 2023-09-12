import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";


function App() {
  return (
    <>
      <div className="px-4 lg:px-20 mx-auto min-h-screen ">
        <NavBar />
        <Hero />
      </div>
      {/* <Projects /> */}
    </>
  );
}

export default App;
