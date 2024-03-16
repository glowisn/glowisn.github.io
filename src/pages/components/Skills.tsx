export default function Skills() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-[0.5em]">Skills</h2>
      <div>
        <div>주요 기술</div>
        <ul>
          <li>
            TypeScript : 대부분의 프로젝트를 진행한 언어이며, Type Narrowing, Object, Generics,
            Interface, Type Alias, Class에 대한 이해가 있습니다.
          </li>
          <li>
            JavaScript : 부스트캠프 챌린지를 진행한 언어이며, 구조 분해 할당, 이벤트 버블링과
            캡쳐링, 클로저에 대한 이해가 있습니다.
          </li>
          <li>
            React.js : 모든 웹 프로젝트를 진행하는데 사용한 라이브러리이며, Hook, Context, Router,
            Custom Hook, LifeCycle, Class Component에 대한 이해가 있습니다.
          </li>
        </ul>
        <div>익숙한 기술</div>
        <ul>
          <li>
            Node.js : 많은 프로젝트를 진행하였고, 프론트엔드 서버를 구축한 경험이 있습니다. 또한, 패키지 매니저 등을 적절히 사용할 수 있습니다.
          </li>
          <li>
            Flutter : 학부 시절부터 사용해온 프레임워크이며, 앱 출시 경험이 있고 Flutter Web
            프로젝트를 진행한 경험이 있습니다.
          </li>
          <li>
            Firebase : 여러 프로젝트를 진행하였고, Firestore 및 Hosting, GCP와 연동한 경험이 있습니다.
          </li>
        </ul>
        <div>관심있는 기술</div>
        <ul>
          <li>
            Next.js + Vercel : 개인 프로젝트에 사용중인 프레임워크입니다. Supabase를 이용해 데이터베이스를 연결하고, Vercel로 배포하고 있습니다.
          </li>
        </ul>
      </div>
    </>
  );
}
