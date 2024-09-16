import { createContext, useState, useEffect, Children } from 'react'
import { v4 as uuidv4 } from "uuid";


const FeedbackContext = createContext()
export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id:1,
            text: 'this item is from context 1',
            rating:10
        },
        {
            id:2,
            text: 'this item is from context 2',
            rating:6
        },
        {
            id:3,
            text: 'this item is from context 3',
            rating:8
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item : {},
        edit: false
    })

    const editFeedback = (item) =>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    const deleteFeedBack = (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
          setFeedback(
            feedback.filter(function (item) {
              return item.id !== id;
            })
          );
        }
      };

      const updateFeedback = (id, updItem)=>{
        setFeedback(feedback.map((item)=>(item.id === id ? {...item, ...updItem}:item)))
      }

      const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
      };

    return <FeedbackContext.Provider value={{
        feedback,addFeedback,deleteFeedBack,editFeedback,feedbackEdit,updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext