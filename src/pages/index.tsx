import Contact from "./components/Contact";
import Description from "./components/Description";
import Divider from "./components/Divider";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <div className="m-auto max-w-[64rem]">
        <Head />
        <Divider />
        <Contact />
        <Divider />
        <Description />
        <Divider />
        <Education />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Footer />
      </div>
    </>
  );
}
