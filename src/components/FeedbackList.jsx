import React from 'react'
import FeedbackItem from './FeedbackItem'
import propType from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'

function FeedbackList({feedback, handleClick}) {
    if(!feedback || feedback.length ==0){
        return <p>No feedback as for now</p>
    }

  return (
    <div className='feedback-list'>
        <AnimatePresence>
           
        {feedback.map((item, index)=>(
             <motion.div 
             key = {item.id}
             initial={{opacity:0}}
             animate={{opacity:1}}
             exit={{opacity:0}}
             >
            <FeedbackItem item={item} handleDelete = {handleClick}/>
            </motion.div>
        ))}
        
        </AnimatePresence>
    </div>
  )
}

FeedbackList.propType = {
    feedback: propType.array,
}

export default FeedbackList