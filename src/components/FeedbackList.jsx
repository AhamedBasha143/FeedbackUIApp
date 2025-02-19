import React from 'react'
import FeedbackItem from './FeedbackItem'
import {motion, AnimatePresence} from 'framer-motion'

//with useContext method
import { useContext} from 'react'
import FeedbackContext from './context/FeedbackContentx'

function FeedbackList() {
const {feedback} = useContext(FeedbackContext)




if(!feedback || feedback.length === 0){
    return <p>No Feedback Yet!</p>
}
  return (
    <div className='feedback-list'>
      <AnimatePresence>
    {feedback.map((item)=>(
      <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <FeedbackItem id={item.id} item={item} />
      </motion.div>
    ))}
    </AnimatePresence>
  </div>
    // <div className='feedback-list'>
    //   {feedback.map((item)=>(
    //     <FeedbackItem id={item.id} item={item} handleDelete={handleDelete}/>

    //   ))}
    // </div>
  )
}

export default FeedbackList
