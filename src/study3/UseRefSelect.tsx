import { useRef } from "react";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  const inputEl = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input type="text" ref={inputEl} />
      <button onClick={() => inputEl.current?.focus()}> 검색 </button>
      <ScrollToTop />
    </div>
  );
}

export default App;

// useRef는 DOM 요소에 접근하기 위해 사용할 수 있다. 이 예시에서는 inputEl이라는 useRef를 사용하여 input 요소에 대한 참조를 만들고, 이를 통해 해당 요소에 접근할 수 있다. useRef는 컴포넌트가 리렌더링되어도 값이 유지되는 변수를 만들 때 사용한다.
