import React from 'react'
import Card from './shared/Card' 
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import {useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/Feedback';


function FeedbackForm() {

  const {AddFeedback, feedbackEdit, updateFeedback} =useContext(FeedbackContext);

  useEffect(()=>{
    if(feedbackEdit.edit === true){
      setText(feedbackEdit.item.text)
      // ???????????????????????
      setRating(feedbackEdit.item.rating)
      setBtnText("Update")
    }
  }, [feedbackEdit])
  
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnText, setBtnText] = useState('Send');

  function handleChange(e) {
    setText(e.target.value);
  }
  function handleSubmit(e) { 
     e.preventDefault(); 
    const newFeedback = {
      rating: rating,
      text: text
    }   
    if(feedbackEdit.edit === true){
      updateFeedback(feedbackEdit.item.id, newFeedback)
    } else{
      AddFeedback(newFeedback); 
    }
    
    setText('');
    setRating(10);
    setBtnText("Send")
   
  }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            {<RatingSelect select={(rating)=> setRating(rating)}/>}
            <div className="input-group">
                <input onChange={handleChange} type="text" name="" value={text} placeholder='Write a review' id="" />
                <Button type={"submit"} isDisabled={(text.length<10)?true:false}>{btnText}</Button>
            </div>
            {(text.length<10)&&<div className='message'>Review must be at least 10 characters long!</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm
