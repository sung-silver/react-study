import { useState } from "react";
import "./App.css";
import TodoBoard from "./component/TodoBoard";

// 1. 인풋창과 버튼이 있다
// 2. 인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가된다
// 3. 아이템 삭제 버튼을 누르면 삭제가 가능하다
function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);
  const addItem = () => {
    setTodoList([...todoList, inputValue]); // 기존에 있는 요소에 새로운 요소를 추가하는 방법
    setInputValue("");
  };

  return (
    <main>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>추가</button>
      <TodoBoard todoList={todoList} />
    </main>
  );
}

export default App;
