import { useState } from "react";
import { FaStar } from "react-icons/fa";

export const StarReview = () => {

    const stars = Array(10).fill(1);
    const [selectedStarts, setSelectedStars] = useState(0);
    const [touched, stTouched] = useState(false)

    const handleStarClick = (i: number) => {
        stTouched(true)
        setSelectedStars(i)
    }
    return (
        <div>
            {stars.map((_, idx) => {
                console.log(" idx:", idx)
                return (<FaStar size={40} onClick={() => handleStarClick(idx)} style={{
                    cursor: 'pointer',
                    color: ((idx < (selectedStarts + 1)) && touched) ? 'yellow' : 'gray'
                }} />)
            })}
        </div>
    )
}