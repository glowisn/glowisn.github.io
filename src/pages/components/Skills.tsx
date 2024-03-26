import Divider from "./Divider";

export default function Skills() {
  return (
    <>
      <h2 className="text-4xl font-bold">Skills</h2>
      <Divider />
      <div className="flex gap-8">
        <div className="flex-row space-y-4">
          <div>
            <h4 className="text-2xl font-bold my-[0.3em]">Language</h4>
            <ul>
              <li>TypeScript, JavaScript</li>
              <li>Python</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-bold my-[0.3em]">Framework & Library</h4>
            <ul>
              <li>React.js, Next.js</li>
              <li>Flutter</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-bold my-[0.3em]">Server & DB</h4>
            <ul>
              <li>Node.js</li>
              <li>Firebase, MySQL, Supabase </li>
            </ul>
          </div>
        </div>
        <div className="flex-row space-y-4">
          <div>
            <h4 className="text-2xl font-bold my-[0.3em]">Architecture</h4>
            <ul>
              <li>Asynchronous Programming, OOP, FP</li>
              <li>Design Patterns</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-bold my-[0.3em]">Domain</h4>
            <ul>
              <li>Git, GitHub</li>
              <li>자료구조, 알고리즘, Linux</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
