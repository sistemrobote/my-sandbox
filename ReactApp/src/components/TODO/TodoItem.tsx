
export const TodoItem = ({ todo, id, handleDelete }: { todo: string, id: number, handleDelete: (todo: string) => void }) => {
  const handleRemoveClick = () => {
    handleDelete(todo)
  }
  return (
    <li className="itemWrapper" key={id} >
      {todo}
      <button onClick={handleRemoveClick}>Remove</button>
    </li>
  );
};