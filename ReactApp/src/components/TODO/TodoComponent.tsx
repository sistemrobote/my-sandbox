import { useState } from 'react';
import { TodoList } from './TodoList';
import './TodoComponent.css'

//Todo
export const TodoComponent = () => {

    const [todos, setTodos] = useState<string[]>([])
    const [input, setInput] = useState('')

    const handleInput = (event) => {
        setInput(event?.target?.value || '')
    }
    const handleSubmit = (event) => {
        if (input) {
            setTodos(prev => [...prev, input])
            setInput('')
        }
    }

    return (
        <div className='bodyWrapper'>
            <div className='content'>
                <h1>To do list</h1>
                <div className='inputArea'>
                    <input className='input' placeholder='Enter todo item...' onChange={handleInput} value={input} />
                    <button onClick={handleSubmit}>Save</button>
                </div>
                <TodoList todos={todos} setTodos={setTodos} />
            </div>
        </div>
    )
}