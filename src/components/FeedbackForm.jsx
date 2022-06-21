import React from 'react'
import Card from '../shared/Card'
import { useState } from 'react'
import Button from '../shared/Button'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [message, setMessage] = useState('')
    const [isDisable, setIsDisable] = useState(true)
    const handleTextChange = (e)=>{
        setText(e.target.value)
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
        
    }

  return (
    <Card>
        <form>
            <h2>How would you rate our service</h2>
            <div className="input-group">
                <input type='text' onChange={handleTextChange} placeholder='write a review' value={text}></input>
                <Button type="submit" version = "secondary">send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm