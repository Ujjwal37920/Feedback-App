import React from "react"
import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"
import './index.css'
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./Data/FeedbackData"
import { useState } from "react"


function App(){

    const [feedback, setFeedback] = useState(FeedbackData)

    return (
        <>
        <Header text = "Feedback Application"/>
        <div className="container">
        <FeedbackList feedback = {feedback}/>
        </div>
        </>
    )
}

export default App