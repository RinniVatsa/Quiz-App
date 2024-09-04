// src/components/Quiz.js
import React, { useState, useEffect } from 'react';
import { questions } from '../data/questions';
import Question from './Question';
import Result from './Result';
import './Quiz.css'; // Updated for styling

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [timer, setTimer] = useState(10);

    // Timer Effect
    useEffect(() => {
        if (timer === 0) {
            handleNextQuestion();
        }
        const interval = setInterval(() => {
            setTimer((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, [timer]);

    const handleAnswerOptionClick = (isCorrect, option) => {
        if (typeof isCorrect !== 'boolean' || typeof option !== 'string') {
            console.error("Invalid option selected or incorrect type.");
            return;
        }

        setSelectedOption(option);
        if (isCorrect) {
            setScore(score + 1);
        }
        setTimeout(handleNextQuestion, 1000); // Delay to show the result
    };

    const handleNextQuestion = () => {
        setSelectedOption(null);
        setTimer(10); // Reset timer for the next question
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    // Function to reset the quiz
    const handleTryAgain = () => {
        setCurrentQuestion(0); // Reset to first question
        setScore(0); // Reset score
        setShowResult(false); // Hide result
        setSelectedOption(null); // Clear selected option
        setTimer(10); // Reset timer
    };

    return ( <
        div className = "quiz-container" > {
            showResult ? ( <
                Result score = { score }
                totalQuestions = { questions.length }
                onTryAgain = { handleTryAgain } // Pass the reset function as a prop
                />
            ) : ( <
                Question question = { questions[currentQuestion] }
                handleAnswerOptionClick = { handleAnswerOptionClick }
                selectedOption = { selectedOption }
                timer = { timer }
                />
            )
        } <
        /div>
    );
};

export default Quiz;