import React from "react"
import Header from "./components/Header"
import './index.css'
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./Data/FeedbackData"
import { useState } from "react"


function App(){

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id)=>{
        if(window.confirm("are you sure you want to delete?")){
            setFeedback(feedback.filter((item)=> item.id !== id))
        }
    }

    return (
        <>
        <Header text = "Feedback Application"/>
        <div className="container">
        <FeedbackList feedback = {feedback} handleClick={deleteFeedback}/>
        </div>
        </>
    )
}

export default App