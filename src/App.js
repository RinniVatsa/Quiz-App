import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
    return ( <
        Router >
        <
        div className = "App" >
        <
        Routes >
        <
        Route path = "/"
        element = { < Quiz / > }
        /> <
        Route path = "/result"
        element = { < Result / > }
        /> < /
        Routes > <
        /div> < /
        Router >
    );
}

export default App;