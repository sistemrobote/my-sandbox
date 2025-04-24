import './TodoComponent.css'
import { TodoItem } from './TodoItem';
export const TodoList = ({ todos, setTodos }: { todos: string[], setTodos: (s: string[]) => void }) => {
  const handleDelete = (todoToDelete: string) => {
    const newTodos = todos.filter(todo => todo !== todoToDelete)
    console.log(" newTodos:", newTodos)
    setTodos(newTodos);
  }
  return (
    <ul>
      {todos.map((todo, idx) => (
        <TodoItem todo={todo} id={idx} handleDelete={handleDelete} />
      ))}
    </ul>
  );
};