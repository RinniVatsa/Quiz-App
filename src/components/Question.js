// src/components/Question.js
import React from 'react';
import './Question.css'; // Updated for styling

const Question = ({ question, handleAnswerOptionClick, selectedOption, timer }) => {
    return ( <
        div className = "quiz-card" >
        <
        div className = "timer" > Time Left: { timer }
        s < /div> <
        div className = "question-text" >
        <
        h2 > { question.question } < /h2>  < /
        div > <
        div className = "options" > {
            question.options.map((option) => ( <
                button key = { option }
                className = { `option-button ${
              selectedOption === option
                ? option === question.answer
                  ? 'correct'
                  : 'incorrect'
                : ''
            }` }
                onClick = {
                    () => handleAnswerOptionClick(option === question.answer, option)
                }
                disabled = { selectedOption !== null } > { option } <
                /button>
            ))
        } <
        /div> < /
        div >
    );
};

export default Question;