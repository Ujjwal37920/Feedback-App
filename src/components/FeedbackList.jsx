import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback}) {
    if(!feedback || feedback.length ==0){
        return <p>No feedback as for now</p>
    }

  return (
    <div className='feedback-list'>
        {feedback.map((item, index)=>(
            <FeedbackItem item={item}/>
        ))}
    </div>
  )
}

export default FeedbackList