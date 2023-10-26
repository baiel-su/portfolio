import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import "./app.scss";
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { Portfolio } from "./components/portfolio/portfolio";
import { Contact } from "./components/contact/contact";
import { Skills } from "./components/skills/skills";
import { StarsCanvas } from "./components/stars/stars";
import { Experience } from "./components/experience/experience";

const App = () => {
  return (
    <div className="">
      <section id="Homepage" className="relative h-screen">
        <Navbar />
        <Hero />
        <StarsCanvas />
      </section>
      <section id="TechKnowledge">
        <Skills />
      </section>
      <section id="Experience">
        <Experience />
      </section>
      <div id="Portfolio">
        <Portfolio />
      </div>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
