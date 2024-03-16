export default function Divider() {
  return (
    <div className="h-1 rounded my-[0.76em]">
      <div className="h-1 bg-gradient-to-r from-naver-green to-custom-color animate-gradient-x print:hidden block">
      </div>
      <div className="h-1 bg-naver-green hidden print:block "></div>
    </div>
  );
}