import React from 'react'
import Card from './shared/Card'
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/Feedback'
 
function FeedbackItem(props) {

    const { handleDeleteApp, editFeedback} = useContext(FeedbackContext);
 

    // const [rating, setRating] = useState(7)
    // const [text, setText] = useState("This is an example of a feedback item")

   
     
  return (
    <Card  >
      <div className="num-display">{props.rating}</div>
      <button onClick={()=>{editFeedback(props)}} className='edit'><FaEdit color='purple'/></button>
      <button onClick={()=>handleDeleteApp(props.id)} className="close"><FaTimes color='purple'/></button>
      <div className="text-display">{props.text}</div> 
    </Card>
  )
}

export default FeedbackItem
