import { useState } from 'react'
import './TicTacToe.css'

export const TicTacToe = () => {
    const [field, setField] = useState(Array(9).fill(null));
    const [tick, setTick] = useState(false)
    const [win, setWin] = useState<string | undefined>();

    const checkWinner = (fieldProp) => {
        const winLines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6],            // diagonals
        ];
        for (const [a, b, c] of winLines) {
            if (fieldProp[a] && fieldProp[a] === fieldProp[b] && fieldProp[a] === fieldProp[c]) {
                console.log(" fieldProp?.[c]:", fieldProp?.[c])

                setWin(`Winner is ${fieldProp[a]}`)
            }
        }

    }

    const hanleClick = (index: number) => {
        if (field[index] || !!win) return;
        const newField = [...field]
        if (tick === true) {
            newField[index] = 'O'
            setTick(false);
            checkWinner(newField)
        } else {
            newField[index] = 'X'
            setTick(true);
            checkWinner(newField)
        }
        setField(newField);

    }
    return (
        <>
            <h1>Tic Tak Toe</h1>
            <div className="board">  {
                field.map((cell, index) => {
                    return (<div key={index} className="cell" onClick={() => hanleClick(index)}> {!cell ? "" : cell}</div>)
                })
            }
            </div>
            {win && <h2>{win}</h2>}
        </>
    )
}