export default function Projects() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-[0.5em]">Projects</h2>
      <div className="border rounded-xl p-[0.2em]">
        <div className="flex items-center gap-2">
          <a className="text-2xl font-bold mr-[1em]">BaekjoonRooms</a>
          <div className="text-gray-700">
            ver0. 2023.11 ~ 2023.12
            <br />
            ver1. 2024.03 ~
          </div>
        </div>
        <a href="https://github.com/boostcampwm2023/baekjoonrooms" className="mr-[2em]">
          GitHub
        </a>
        <a href="https://baekjoonrooms.com/intro" className="mr-[2em]">배포 링크</a>
        <a href="https://chromewebstore.google.com/detail/baekjoonrooms/fndogmcoaeenjcihljbahpdlfinkepeh?hl=ko">Chrome Extension Store 링크</a>
        <ul className="text-base my-[0.67em]">
          <li>함께푸는 실시간 알고리즘 경쟁 플랫폼</li>
          <li>네이버 부스트캠프 팀 프로젝트</li>
          <li>팀원 : 5명 (FE 3, BE 2)</li>
          <li>
            사용 기술 : React, TypeScript, TailwindCSS, Vite, React-Router, Tanstack-Query,
            Socket.IO
          </li>
        </ul>
        <div>
          <ul>
            <li>
              사용자의 백준 문제 제출 및 정답 여부를 트래킹하기 위해 <b>Chrome Extension</b>사용
            </li>
            <li>
              TailwindCSS 적용가능한 커스텀 컴포넌트 구현{" "}
              <a href="https://github.com/boostcampwm2023/baekjoonrooms/pull/114/files">PR 링크</a>
            </li>
            <li>
              실시간 채팅 및 정보 공유를 위한 Socket.IO 사용
            </li>
            <ul>
              <li>
                상태관리 구조 한계 및 개선점
                <ul className="pl-[1em]">
                  <li>한계 1 : Context API 사용 시 원치않는 리 렌더링의 방지가 매우 어려움</li>
                  <li>
                    한계 2 : 서비스의 특성상 유저 정보(AuthContext)에서 라우팅 정보도 관리해야 하므로, 상태가 무거워지고 불필요한 라우팅이 발생함
                  </li>
                  <li>
                    개선 1 : 상태관리 도구로써, Context API는 부적절 하다는 것을 파악하고 Zustand 도입 중
                  </li>
                  <li>
                    개선 2 : 클라이언트와 서버 상태를 기획에서부터 명확하게 분리하여, 서버 상태는 Tanstack Query, 클라이언트 상태는 Zustand로 분리하여 관리
                  </li>
                </ul>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
}
