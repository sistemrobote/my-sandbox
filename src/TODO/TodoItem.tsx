export const TodoItem = ({ todo, onToggle }) => {
  console.log(`Rendering TodoItem: ${todo.text}`);
  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      {todo.text}
    </li>
  );
};