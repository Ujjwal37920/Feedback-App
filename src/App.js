import React from "react"
import Header from "./components/Header"
import './index.css'
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./Data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import { useState } from "react"
import { v4 as uuidv4} from "uuid"  

function App(){

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id)=>{
        if(window.confirm("are you sure you want to delete?")){
            setFeedback(feedback.filter((item)=> item.id !== id))
        }
    }

    const addFeedback=(newFeedback)=>{
        newFeedback.id = uuidv4()
        console.log(newFeedback)
        setFeedback([newFeedback,...feedback])

    }

    return (
        <>
        
        <Header text = "Feedback Application"/>
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback}/>
        <div className="container">
        <FeedbackList feedback = {feedback} handleClick={deleteFeedback}/>
        </div>
        </>
    )
}

export default App