import { createContext, useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) =>{
    const [isLoading, setIsLoading] = useState(true);

    const [feedback, setFeedback] = useState([])

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

    useEffect(()=>{
        fetchFeedback()
    },[])

    const fetchFeedback = async()=>{
        const response = await fetch('/feedback?_sort=id&order=desc')
        const data = await response.json()
        setFeedback(data)
         setIsLoading(false)
    }

    //     function AddFeedback(newFeedback) {
    //     newFeedback.id = uuidv4();
    //      setFeedback([newFeedback, ...feedback])        
    
    //  }

    const AddFeedback = async (newFeedback) => {

            const response = await fetch('/feedback', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newFeedback)
             })
            const data = await response.json()
         
         setFeedback([data, ...feedback])        
    
     }

      

    async function updateFeedback(id, updItem) {
       const response =  await fetch(`/feedback/${id}`, {
        method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updItem)
})

const data = await response.json()


        setfeedbackEdit(
            feedback.map((item)=>{
                if(item.id === id){
                    item.rating = data.rating;
                    item.text = data.text;
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



    async function handleDeleteApp(id) {
        if (window.confirm('Are you sure that you want to delete?')) {

            await fetch(`/feedback/${id}`, {method: 'DELETE'})

               setFeedback(feedback.filter((item)=> item.id !== id))
        }
     
    }

 

    return <FeedbackContext.Provider value={{
        feedback, handleDeleteApp, AddFeedback, editFeedback, feedbackEdit, updateFeedback, isLoading
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;