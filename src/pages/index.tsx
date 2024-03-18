import Block from "./components/Block";
import Contact from "./components/Contact";
import Description from "./components/Description";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <div className="px-[2em]">
        <Contact />
        <Block />
        <Description />
        <Block />
        <Education />
        <div className="page-break" />
        <Block />
        <Projects />
        <div className="page-break" />
        <Block />
        <Skills />
        <Footer />
      </div>
    </>
  );
}
