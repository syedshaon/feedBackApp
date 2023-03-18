import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) =>{
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            rating: 9,
            text: '1 consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
        },
        {
            id: 2,
            rating: 7,
            text: '2  dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
        },
        {
            id: 3,
            rating: 8,
            text: '3  ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
        }
    ])

    const [feedbackEdit, setfeedbackEdit] = useState({
        item: {},
        edit: false
    })

    function editFeedback(item) {
        setfeedbackEdit({
            item,
            edit:true
        })
    }

    function updateFeedback(id, updItem) {
        setfeedbackEdit(
            feedback.map((item)=>{
                if(item.id === id){
                    item.rating = updItem.rating;
                    item.text = updItem.text;
                 return item
                }else{
                  return  item;
                }
            })
        )
    }


    //  function updateFeedback(id, updItem) {
    //     setfeedbackEdit(
    //         feedback.map((item)=> (item.id === id) ? {...item, ...updItem} : item  )
    //     )
    // }



    function handleDeleteApp(id) {
        if (window.confirm('Are you sure that you want to delete?')) {
               setFeedback(feedback.filter((item)=> item.id !== id))
        }
     
    }

     function AddFeedback(newFeedback) {
        newFeedback.id = uuidv4();
        //  console.log(newFeedback);
         setFeedback([newFeedback, ...feedback])
        // console.log(feedback);
    
     }

    return <FeedbackContext.Provider value={{
        feedback, handleDeleteApp, AddFeedback, editFeedback, feedbackEdit, updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;