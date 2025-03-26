import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, onToggle }) => {
  console.log("Rendering TodoList");
  return (
    <ul>
      {todos.map(todo => (
       <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
};