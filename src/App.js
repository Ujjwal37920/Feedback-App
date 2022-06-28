import React from "react"
import Header from "./components/Header"
import './index.css'
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./Data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import About from "./pages/About"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AboutIconLink from "./shared/AboutIconLink"
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
       
        <Router>  
            <Header text = "Feedback Application"/>
        
            <div className="container">
                <Routes>
                    <Route exact path='/' element={<>
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback = {feedback} handleClick={deleteFeedback}/>
                </>} ></Route>
                </Routes>
                <Routes>
                <Route exact path="/about"element={<About/>}/>
                </Routes>
                <AboutIconLink/> 
            </div>
        </Router>
        
    )
}

export default App