import { createContext, useState, useEffect } from "react"
import { v4 as uuidv4} from "uuid"  

const FeedbackContext = createContext()



export const FeedbackProvider = ({children})=>{

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async()=>{
        const response = await fetch('http://localhost:5000/feedback')
        const data = await response.json()
        setFeedback(data)
    }

    const [feedback, setFeedback] = useState([
        {
            id:1,
            text:'this item is from feedback context',
            rating:10
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit : false
    })

    const deleteFeedback =async (id)=>{
        if(window.confirm("are you sure you want to delete?")){

            await fetch(`http://localhost:5000/feedback/${id}`,{method:'DELETE'})
            setFeedback(feedback.filter((item)=> item.id !== id))
        }
    }

    const addFeedback= async (newFeedback)=>{

        const response = await fetch('http://localhost:5000/feedback',{
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newFeedback),
        
        }
        )

        console.log(newFeedback)
        const data = response.json()
        setFeedback([data,...feedback])

    }

    const editFeedback = (item)=>{
        setFeedbackEdit({
            item,
            edit:true 
        }
        )
    }

    const updateFeedback =async (id, updItem)=>{
        const response = await fetch(`http://localhost:5000/feedback/${id}`, {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(updItem)
        })
        const data =await response.json()
        setFeedback(feedback.map((item)=> 
            (item.id == id? {...item, ...data}: item)
        ))
    }

    return <FeedbackContext.Provider  value= {{feedback
    , deleteFeedback,
     addFeedback
     , editFeedback 
     , feedbackEdit,
     updateFeedback}}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext