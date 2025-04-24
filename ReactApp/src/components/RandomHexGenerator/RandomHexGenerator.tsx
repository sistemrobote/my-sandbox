import { useState } from "react"
import './RandomHexGenerator.css'

export const RandomHexGenerator = () => {

    const [hexColor, setHexColor] = useState('#123456')
    const hexArr = '0123456789abcdef'
    const getHexDigit = () => {
        const randomVal = Math.floor(Math.random() * 16)
        return (hexArr[randomVal])
    }

    const handleClick = () => {
        let hex = '#';
        for (let i = 0; i < 6; i++) {
            hex += getHexDigit()
        }
        if ((hex.length === 7)) setHexColor(hex);
    }

    return (
        <div style={{
            width: '100vh',
            height: '100vh',
            backgroundColor: hexColor,
        }}>
            <div className="butoonWraper">
                <button onClick={handleClick}> Click to change backgroud</button>
            </div>
        </div>)
}