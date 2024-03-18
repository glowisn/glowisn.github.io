import Divider from "./Divider";

export default function Education() {
  return (
    <>
      <h2 className="text-4xl font-bold">Education</h2>
      <Divider />
        <div className="my-[0.5em]">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold">네이버 부스트캠프 웹모바일 8기 멤버쉽 수료</h3>
            <p className=" text-custom-caption">2023.07 ~ 2023.12</p>
          </div>
          <div className="my-[1em]">
            <ul>
              <li>CS지식 및 객체지향, 함수형, 비동기, 네트워크 프로그래밍 설계와 구조 학습</li>
              <li>
                웹 기초 지식(Javascript), HTML/CSS, DOM, 이벤트, 비동기 제어, 객체지향 설계, React
                학습
              </li>
              <li>팀 단위의 협업, 프로젝트 관리, 개발 workflow(GitHub, GitHub Projects)</li>
            </ul>
          </div>
        </div>
        <div className="my-[0.5em]">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold">한동대학교 AI·컴퓨터공학심화 졸업</h3>
            <p className="text-custom-caption">2017.03 ~ 2023.08</p>
          </div>
          <ul className="my-[1em]">
            <li>C 프로그래밍(A+), 데이타구조(A+), 데이터베이스(A+)</li>
            <li>컴퓨터구조(A0), 컴퓨터네트워크(A0), Software Engineering(A0)</li>
          </ul>
        </div> 
    </>
  );
}
