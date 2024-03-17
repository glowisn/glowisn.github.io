import Contact from "./components/Contact";
import Description from "./components/Description";
import Block from "./components/Block";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Head from "./components/Head";
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
          <Head />
          <Contact />
          <Block />
          <Description />
          <Block />
          <Education />
          <Block />
          <Projects />
          <Block />
          <Skills />
          <Footer />
        </div>
      </div>
    </>
  );
}
