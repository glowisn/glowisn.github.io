import Divider from "./Divider";

export default function Skills() {
  return (
    <>
      <h2 className="text-4xl font-bold">Skills</h2>
      <Divider />
      <div className="flex-row space-y-4">
        <div>
          <h4 className="text-xl font-bold my-[0.3em]">대표 기술</h4>
          <ul>
            <li>
              TypeScript: 주 언어로 다양한 프로젝트 경험, Type Narrowing, Object, Generics,
              Interface, Type Alias, Class 이해 및 사용
            </li>
            <li>
              JavaScript: 부스트캠프 챌린지에서 사용, 구조 분해 할당, 이벤트 버블링/캡쳐링, 클로저
              이해 및 사용
            </li>
            <li>
              React.js: 웹 프로젝트에서 핵심 라이브러리로 활용, Hook, Context, Router, Custom Hook,
              LifeCycle, Class Component 이해 및 사용
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold my-[0.3em]">익숙한 기술</h4>
          <ul>
            <li>Node.js: 다수 프로젝트 진행, 프론트엔드 서버 구축 경험, 패키지 매니저 사용</li>
            <li>Flutter: 앱 출시 및 Flutter Web 프로젝트 경험</li>
            <li>Firebase: 다양한 프로젝트 진행, Firestore, Hosting 사용, GCP 연동 경험</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold my-[0.3em]">관심있는 기술</h4>
          <ul>
            <li>
              Next.js + Vercel: 개인 프로젝트에 활용, Supabase로 데이터베이스 연결, Vercel로 배포
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
