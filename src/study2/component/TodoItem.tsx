import type { Todo } from "../type";

function TodoItem({ item, onDelete }: { item: Todo; onDelete: () => void }) {
  return (
    <div className="todo-item">
      <div>{item.text}</div>
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
