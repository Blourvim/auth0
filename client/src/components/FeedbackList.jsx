import React from 'react'
import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'
import Loading from './shared/Loading'

const FeedbackList = () => {
  const { feedbacks, isLoading } = useContext(FeedbackContext)

  if (!isLoading && (!feedbacks || feedbacks.length === 0)) {
    return <p>No Feedback Available</p>
  }

  return isLoading ? (
    <Loading />
  ) : (
    <div className='feedback-list'>

        {feedbacks.map((feedback) => (
          <div
            key={feedback._id}
         
          >
            <FeedbackItem feedback={feedback} key={feedback._id} />
          </div>
        ))}

    </div>
  )
}

export default FeedbackList
