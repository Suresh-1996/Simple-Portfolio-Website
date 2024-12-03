import Contact from "./components/Contact";
import Experiance from "./components/Experiance";
import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";
import Project from "./components/Project";

function App() {
  return (
    <>
      <div className="flex min-h-screen w-full subpixel-antialiased">
        <HeaderLeft />
        <main className="flex-[3]">
          <Home />
          <Experiance />
          <Project />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
