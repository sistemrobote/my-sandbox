import { useState, useEffect } from "react"


export const SearchDebounce = () => {
    const[input, setInput] = useState('')
    const[query, setQuery] = useState('')
    const handleInputChange = (e) => setInput(e.target.value)

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setQuery(input)
        }, 800)
        return () => clearTimeout(timeout)
    },[input])

    return(
        <>
            <input type="text" value={input} onChange={handleInputChange}></input>
            <h1>Query: {query}</h1>
        </>
    )
}