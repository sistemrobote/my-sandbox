import { useState} from 'react';

//Todo
export const TodoComponent = () => {
    const [todos, setTodos]= useState([{name: 'Buy milk', isCompleted : false},{name: 'Walk with the dod', isCompleted : false}]);
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos(prev => [...prev, {name: input, isCompleted: false}]);
        setInput('');
    }

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}><input value={input}onChange={handleInputChange} type="text"/><button type="submit">Submit</button></form>
            <ul>
                {todos.map(todo => {
                    return(<li key={todo.name}>{todo.name}</li>)
                })}
            </ul>
        </>
    )
}