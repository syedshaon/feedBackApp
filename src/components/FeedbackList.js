import React from 'react'
import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from "framer-motion"
import { useContext } from "react";
import FeedbackContext from '../context/Feedback';

function FeedbackList() {
    const {feedback} = useContext(FeedbackContext);

    console.log();
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet.</p>
    } 
    

     return <div className="feedback-list">
        <AnimatePresence>
        {
            
            feedback.map((item)=>{
               return  <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                <FeedbackItem  id={item.id} rating = {item.rating} text={item.text}/>
                </motion.div>
            })
            
        }
        </AnimatePresence>
    </div>

   
    // return <div className="feedback-list">
    //     {
    //         feedback.map((item)=>{
    //             return <FeedbackItem key={item.id} id={item.id} rating = {item.rating} text={item.text}/>
    //         })
    //     }
    // </div>
        
         
   
  
}

export default FeedbackList
