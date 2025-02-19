import React from 'react'
import Card from './shared/Card'
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext} from 'react'
import FeedbackContext from './context/FeedbackContentx'

function FeedbackItem({item}) {
  const {deleteFeedBack,editFeedback} = useContext(FeedbackContext)
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={()=>deleteFeedBack(item.id)}> 
          <FaTimes color='purple'/>
        </button>
        <button className="edit" onClick={()=>editFeedback(item)}> 
          <FaEdit color='purple'/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
