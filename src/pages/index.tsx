import Contact from "./components/Contact";
import Description from "./components/Description";
import Block from "./components/Block";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Left from "./components/Left";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <div className="flex pr-[2em]">
        <div className="flex-shrink-0">
          <Left />
        </div>
        <div className="">
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
      </div>
    </>
  );
}
