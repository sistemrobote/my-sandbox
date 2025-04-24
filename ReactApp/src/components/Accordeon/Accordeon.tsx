import { useState } from 'react';
import data from './data';
import './styles.css'
export const Accordeon = () => {

    const [selectedQustion, setSelectedQustion] = useState('');
    const handleQuestionClick = (id: string) => {
        if (selectedQustion) {
            setSelectedQustion('');
        } else {
            setSelectedQustion(id);
        };
    }

    return (<div className="container">
        <div className='content'>
            <h2 >Simple accordeon</h2>
            {data.map((question) => {
                return (<div className='questionItem' key={question.id}>
                    <h3 onClick={() => handleQuestionClick(question.id)} className='question'>{question.question} <span>+</span></h3>
                    {selectedQustion === question.id ? <div>{question.answer}</div> : null}
                </div>)
            })}
        </div>
    </div>)
}