import TodoItem from "./TodoItem";

function TodoBoard({ todoList }: { todoList: string[] }) {
  return (
    <div>
      <h1>Todo List</h1>
      {todoList.map((item) => (
        <TodoItem item={item} />
      ))}
    </div>
  );
}

export default TodoBoard;
