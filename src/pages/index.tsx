import Head from "./components/Head";
import Contact from "./components/Contact";
import Description from "./components/Description";
import Education from "./components/Education";

export default function Home() {
  return (
    <>
      <div className="m-auto max-w-[50rem]">
        <Head />
        <Contact />
        <Description />
        <Education />
      </div>
    </>
  );
}
