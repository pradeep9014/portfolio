import { lazy, Suspense } from "react";
import DotsLoader from "./components/fallback";

const About = lazy(() => import("./components/about"));
const Contact = lazy(() => import("./components/contact"));
const Education = lazy(() => import("./components/education"));
const Footer = lazy(() => import("./components/footer"));
const Home = lazy(() => import("./components/home"));
const Navbar = lazy(() => import("./components/navbar"));
const Skills = lazy(() => import("./components/skills"));

function App() {
  return (
    <>
      <Suspense fallback={<DotsLoader />}>
        <Navbar />
        <Home />
        <About />
        <Education />
        <Skills />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
