import React from "react"
import Header from "./components/Header"
import './index.css'
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./Data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import About from "./pages/About"
import {FeedbackProvider} from "./context/FeedbackContext"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AboutIconLink from "./shared/AboutIconLink"
import { useState } from "react"
import { v4 as uuidv4} from "uuid"  

function App(){

    
    return (
       <FeedbackProvider>
        <Router>  
            <Header text = "Feedback Application"/>
        
            <div className="container">
                <Routes>
                    <Route exact path='/' element={<>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
                </>} ></Route>
                </Routes>
                <Routes>
                <Route exact path="/about"element={<About/>}/>
                </Routes>
                <AboutIconLink /> 
            </div>
        </Router>
        </FeedbackProvider>
        
    )
}

export default App