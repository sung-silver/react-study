import { useState } from "react";
import "./App.css";

function App() {
  let count: number = 0; // 일반 변수는 잠깐 값을 저장하는 용도로만 사용해야 함
  const [count1, setCount1] = useState(0); // 괄호안에 들어가는 숫자가 초기값
  const handleClick = () => {
    count++;
    setCount1(count1 + 1); // count1의 값을 증가하기 위해서는 setCount1 함수를 사용해야 한다. setCount1 함수는 count1의 값을 업데이트하고, 업데이트된 값으로 UI를 다시 렌더링한다.
    console.log("count work?:", count, "state count1:", count1);
    // state는 state가 바뀌어야하는 애들을 다 모아서 처리하기 때문에 비동기로 처리된다.
    // 그래서 console.log에서 count1은 아직 업데이트되지 않은 값을 보여준다. 하지만 UI에서는 업데이트된 값이 보여진다.
    // count 값은 일반 변수이기 때문에, 화면이 다시 그려지면(컴포넌트 재실행) 초기값으로 돌아간다. 그래서 count는 증가 함수 호출 후 1로 계속 콘솔에 출력된다.
  };

  return (
    <main>
      <div>{count}</div>
      <div>state: {count1}</div>
      <button onClick={handleClick}>증가</button>
    </main>
  );
}

export default App;

// state: 값이 변경됨에 따라 UI가 업데이트되는 데이터
// react hooks: 함수형 컴포넌트에서 state와 라이프사이클 기능을 사용할 수 있게 해주는 함수
// useState: state를 선언하고 관리할 수 있게 해주는 hook
