import Contact from "./components/Contact";
import Description from "./components/Description";
import Divider from "./components/Divider";
import DividerSmall from "./components/DividerSmall";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <div className="m-auto px-[1em] max-w-[64rem]">
        <Head />
        <Divider />
        <Contact />
        <Divider />
        <Description />
        <DividerSmall />
        <Education />
        <DividerSmall />
        <Projects />
        <DividerSmall />
        <Skills />
        <Footer />
      </div>
    </>
  );
}
