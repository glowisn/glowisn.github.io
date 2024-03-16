import Contact from "./components/Contact";
import Description from "./components/Description";
import Divider from "./components/Divider";
import Education from "./components/Education";
import Head from "./components/Head";
import Projects from "./components/Projects";

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
      </div>
    </>
  );
}
