import { useRef, useState } from "react";
import Search from "./component/Search";

function App() {
  const [stateCount, setStateCount] = useState<number>(0);
  const refCount = useRef<number>(0);

  // 로직에만 사용되는 변수는 useRef를 사용하면 좋다
  // 이 때, UI에 보여지는 값이 아니어야 한다

  const handleStateUp = () => {
    setStateCount((prev) => prev + 1);
  };

  const handleRefUp = () => {
    refCount.current += 1;
    console.log("ref 값 증가:", refCount.current);
  };

  return (
    <div>
      <div>state: {stateCount}</div>

      <button onClick={handleStateUp}>state up</button>
      <button onClick={handleRefUp}>ref up</button>
      <Search></Search>
    </div>
  );
}

export default App;

// useState
// 1. 값이 유지가 됨
// 2. but, 값이 변경이 되면 컴포넌트가 리렌더링이 됨

// useRef
// 1. 값이 유지가 됨
// 2. but, 값이 변경이 되어도 컴포넌트가 리렌더링이 되지 않음
// 3. 객체를 반환한다. { current: 값 }
// 4. 변수와 state의 장점을 모두 가지고 있다. (값이 유지되고, 값이 변경되어도 리렌더링이 되지 않음)

// useRef 예시: 검색창에서 '기생충'을 검색하고 버튼을 누른 후 버튼을 또 눌러도 api 요청이 되지 않도록 하는 경우, useRef로 검색어를 저장하여 이전 검색어와 비교하여 api 요청 여부를 결정할 수 있다.
