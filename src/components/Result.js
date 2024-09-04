// src/components/Result.js
import React from 'react';
import './Result.css';
const Result = ({ score, totalQuestions, onTryAgain }) => {
    return ( <
        div className = "result" >
        <
        h2 >
        You scored { score }
        out of { totalQuestions } <
        /h2> <
        p > Thanks
        for participating in the quiz! < /p> <
        button className = "try-again-button"
        onClick = { onTryAgain } >
        Try Again <
        /button> < /
        div >
    );
};

export default Result;