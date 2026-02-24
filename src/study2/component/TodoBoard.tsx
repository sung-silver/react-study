import TodoItem from "./TodoItem";
import type { Todo } from "../type";

function TodoBoard({
  todoList,
  onDelete,
}: {
  todoList: Todo[];
  onDelete: (id: string) => void;
}) {
  return (
    <div>
      <h1>Todo List</h1>
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onDelete={() => onDelete(item.id)}
        />
      ))}
    </div>
  );
}

export default TodoBoard;
