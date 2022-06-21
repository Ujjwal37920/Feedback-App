import React from "react"
import Header from "./components/Header"
import './index.css'
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./Data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import { useState } from "react"
import RatingSelect from "./RatingSelect"


function App(){

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id)=>{
        if(window.confirm("are you sure you want to delete?")){
            setFeedback(feedback.filter((item)=> item.id !== id))
        }
    }

    return (
        <>
        <RatingSelect/>
        <FeedbackForm/>
        <Header text = "Feedback Application"/>
        <FeedbackStats feedback={feedback}/>
        <div className="container">
        <FeedbackList feedback = {feedback} handleClick={deleteFeedback}/>
        </div>
        </>
    )
}

export default App