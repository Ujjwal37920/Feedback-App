import React from 'react'
import Card from '../shared/Card'
import { useState } from 'react'
import Button from '../shared/Button'
import RatingSelect from '../RatingSelect'

function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('')
    const [message, setMessage] = useState('')
    const [isDisable, setIsDisable] = useState(true)
    const [rating, setRating] = useState(10)

    const handleTextChange = (e)=>{
        if(text == ''){
            setMessage(null)
            setIsDisable(true)
        }
        else if( text!== '' && text.trim().length <=10){
            setMessage("Your feedback should be greater than 10 characters")
            setIsDisable(true)
        }
        else{
            setMessage('')
            setIsDisable(false)
        }
        setText(e.currentTarget.value)

        
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(text.trim().length >10){
            const newFeedback = {
               text,
               rating
            }
            handleAdd(newFeedback)
            setText('')
        }
    }

  return (
    <Card>
        <form onSubmit = {handleSubmit}>
            <h2>How would you rate our service</h2>
            <RatingSelect select = {(newRating)=> setRating(newRating)}/>

            <div className="input-group">
                <input type='text' onChange={handleTextChange} placeholder='write a review' value={text}></input>
                <Button type="submit" version = "secondary" >send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm