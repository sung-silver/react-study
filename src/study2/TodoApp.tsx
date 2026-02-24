import { useState } from "react";
import "./TodoApp.css";
import TodoBoard from "./component/TodoBoard";
import type { Todo } from "./type";

// 1. 인풋창과 버튼이 있다
// 2. 인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가된다
// 3. 아이템 삭제 버튼을 누르면 삭제가 가능하다
function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addItem = () => {
    if (!inputValue.trim()) return;

    setTodoList((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text: inputValue.trim() },
    ]);
    setInputValue("");
  };

  const deleteItem = (targetId: string) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== targetId));
  };

  return (
    <main>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>추가</button>
      <TodoBoard todoList={todoList} onDelete={deleteItem} />
    </main>
  );
}

export default App;
