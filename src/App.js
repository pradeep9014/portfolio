import About from "./components/about";
import Contact from "./components/contact";
import Education from "./components/education";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Skills from "./components/skills";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
