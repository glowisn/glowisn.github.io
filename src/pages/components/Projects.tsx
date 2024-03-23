import { IoLogoGithub, IoLink, IoLogoChrome, IoLogoYoutube } from "react-icons/io5";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Divider from "./Divider";

export default function Projects() {
  return (
    <>
      <h2 className="text-4xl font-bold">Projects</h2>
      <Divider />
      <div className="flex mb-[2em]">
        <div className="min-w-[16em] print-min-width">
          <div className="text-2xl font-bold mr-[1em]">BaekjoonRooms</div>
          <div className="text-custom-caption">
            ver0. 2023.11 ~ 2023.12
            <br />
            ver1. 2024.03 ~
          </div>
        </div>
        <div className="flex-grow">
          <ul className="rounded-lg border mb-[1em] p-3 pb-2 bg-blue-200/50">
            <li className="list-none">
              함께 푸는 실시간 알고리즘 경쟁 플랫폼 |{" "}
              <div className="inline-block text-custom-caption">네이버 부스트캠프 팀 프로젝트</div>
            </li>
            <li className="list-none">팀원 : 5명 (FE 3, BE 2)</li>
            <li className="list-none">
              사용 기술 : React, TypeScript, TailwindCSS, Vite, React-Router, Tanstack-Query,
              Socket.IO
            </li>
            <div className="mt-[0.4em]">
              <a
                href="https://github.com/boostcampwm2023/baekjoonrooms"
                className="mr-[2em] inline-flex items-center justify-center gap-1">
                <IoLogoGithub className="inline" size={20} />
                GitHub
              </a>
              <a
                href="https://baekjoonrooms.com/intro"
                className="mr-[2em] inline-flex items-center justify-center gap-1">
                <IoLink className="inline" size={20} />
                Access URL
              </a>
              <a
                href="https://chromewebstore.google.com/detail/baekjoonrooms/fndogmcoaeenjcihljbahpdlfinkepeh?hl=ko"
                className="mr-[2em] inline-flex items-center justify-center gap-1">
                <IoLogoChrome className="inline" size={20} />
                Chrome Extension Store
              </a>
            </div>
          </ul>
          <div className="mt-[1em]">
            <ul>
              <li>Chrome Extension 사용을 통해 사용자의 백준 문제 제출 및 정답 여부를 트래킹</li>
              <li>
                TailwindCSS 적용 가능한 커스텀 컴포넌트 구현{" "}
                <a
                  href="https://github.com/boostcampwm2023/baekjoonrooms/pull/114/files"
                  className="bg-custom-gray border rounded px-[0.3em] font-bold inline-flex justify-center items-center gap-1 overflow-hidden h-[1.25em]">
                  PR
                  <FaArrowUpRightFromSquare className="inline" size={14} />
                </a>
              </li>
              <li>Socket.IO를 활용한 실시간 채팅 및 정보 공유</li>
              <li>
                Tanstack-Query를 통한 중복 쿼리의 호출 최소화{" "}
                <a
                  href="https://github.com/boostcampwm2023/baekjoonrooms/pull/144"
                  className="bg-custom-gray border rounded px-[0.3em] font-bold inline-flex justify-center items-center gap-1 overflow-hidden h-[1.25em]">
                  PR
                  <FaArrowUpRightFromSquare className="inline" size={14} />
                </a>
              </li>
              <div className="my-[1em]">
                상태관리 구조 한계 및 개선점
                <ul className="pl-[1em]">
                  <li>한계 1 : Context API 사용 시 원치않는 리 렌더링의 방지가 매우 어려움</li>
                  <li>
                    한계 2 : 서비스의 특성상 유저 정보(AuthContext)에서 라우팅 정보도 관리해야
                    하므로, 상태가 무거워지고 불필요한 라우팅이 발생함
                  </li>
                  <li>
                    개선 1 : 상태관리 도구로써, Context API는 부적절 하다는 것을 파악하고 Zustand
                    도입 중
                  </li>
                  <li>
                    개선 2 : 클라이언트와 서버 상태를 기획에서부터 명확하게 분리하여, 서버 상태는
                    Tanstack Query, 클라이언트 상태는 Zustand로 분리하여 관리
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex mb-[2em]">
        <div className="min-w-[16em] print-min-width">
          <div className="text-2xl font-bold mr-[1em]">PixPen Plaza</div>
          <div className="text-custom-caption">2024.02 ~ 진행중</div>
        </div>
        <div className="flex-grow">
          <ul className="rounded-lg border mb-[1em] p-3 pb-2 bg-blue-200/50">
            <li className="list-none">
              자유롭게 이용가능한 사진, 글 공유 사이트 |{" "}
              <div className="inline-block text-custom-caption">개인 프로젝트</div>
            </li>
            <li className="list-none">
              사용 기술 : Next.js, React, TypeScript, TailwindCSS, Supabase, Vercel
            </li>
            <div className="mt-[0.4em]">
              <a
                href="https://github.com/glowisn/fairyhouse"
                className="mr-[2em] inline-flex items-center justify-center gap-1">
                <IoLogoGithub className="inline" size={20} />
                GitHub
              </a>
              <a
                href="https://fairyhouse.vercel.app/"
                className="mr-[2em] inline-flex items-center justify-center gap-1">
                <IoLink className="inline" size={20} />
                Access URL
              </a>
            </div>
          </ul>
          <div className="mt-[1em]">
            <ul>
              <li>Supabase를 이용한 데이터베이스 구축 및 연결</li>
              <li>Vercel을 이용한 자동화된 배포 프로세스 구현</li>
              <li>
                NextUI를 통해 SSR 기반의 구조 속에서도 CSR을 적용하여 동적 디자인 컴포넌트 구현에
                성공, 사용자 경험 최적화
              </li>
              <li>무한 스크롤 구현 </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex w-full">
        <div className="min-w-[16em] print-min-width">
          <div className="text-2xl font-bold mr-[1em]">쾌변루틴</div>
          <div className="text-custom-caption">2022.01 ~ 2022.08</div>
        </div>

        <div className="flex-grow">
          <ul className="rounded-lg border mb-[1em] p-3 pb-2 bg-blue-200/50">
            <li className="list-none">
              바이오메디컬 헬스케어 크로스플랫폼 앱 |{" "}
              <div className="inline-block text-custom-caption">HEM 산학 프로젝트</div>
            </li>
            <li className="list-none">팀원 : 3명</li>
            <li className="list-none">사용 기술 : Flutter, Firebase, GCP, Google Big Query ML</li>
            <div className="mt-[0.4em]">
              <a
                href="https://github.com/alexcho617/HEM-Routine-App"
                className="mr-[2em] inline-flex items-center justify-center gap-1">
                <IoLogoGithub className="inline" size={20} />
                GitHub
              </a>
              <a
                href="https://www.youtube.com/watch?v=EDdkB7m8e6U&ab_channel=%EC%9D%B4%EA%B0%95%EB%AF%BC"
                className="mr-[2em] inline-flex items-center justify-center gap-1">
                <IoLogoYoutube className="inline" size={20} />
                프로모션 비디오
              </a>
            </div>
          </ul>

          <div>
            <ul>
              <li>iOS, Android 양 스토어 비공개 배포</li>
              <li>비즈니스 로직에 맞게 기존 달력 라이브러리 수정 및 사용</li>
              <li>커스텀 탭 네비게이션 바 구현</li>
              <li>PM, 디자이너와 협업</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
