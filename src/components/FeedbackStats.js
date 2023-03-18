import React from 'react'
import PropTypes from 'prop-types'
import { useContext } from 'react';

import FeedbackContext from '../context/Feedback';

 


function FeedbackStats(props) {

  const {feedback} = useContext(FeedbackContext);
  
    let avgFeedback =   feedback.reduce((acc, curr)=>{
        return acc + curr.rating;
    }, 0) /feedback.length;

    avgFeedback = avgFeedback.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} reviews</h4>
        <h4>Average rating : {  isNaN(avgFeedback)? 0 : avgFeedback   }</h4>
      
    </div>
  )
}

export default FeedbackStats

FeedbackStats.propTypes = {
    feedback: PropTypes.array

}
