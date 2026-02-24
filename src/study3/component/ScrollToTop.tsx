import { useRef } from "react";

export default function ScrollToTop() {
  const topRef = useRef<HTMLDivElement | null>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={topRef}
        style={{ height: "100vh", backgroundColor: "lightblue" }}
      >
        페이지 상단!
      </div>

      <div style={{ height: "100vh", backgroundColor: "lightgray" }}>
        아래 영역
      </div>

      <button onClick={scrollToTop}>Scroll to Top</button>
    </div>
  );
}
