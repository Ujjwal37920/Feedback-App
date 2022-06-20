import React from 'react'
import FeedbackItem from './FeedbackItem'
import propType from 'prop-types'

function FeedbackList({feedback, handleClick}) {
    if(!feedback || feedback.length ==0){
        return <p>No feedback as for now</p>
    }

  return (
    <div className='feedback-list'>
        {feedback.map((item, index)=>(
            <FeedbackItem item={item} handleDelete = {handleClick}/>
        ))}
    </div>
  )
}

FeedbackList.propType = {
    feedback: propType.array,
}

export default FeedbackList