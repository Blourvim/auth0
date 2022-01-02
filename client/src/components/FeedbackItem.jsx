import Card from './shared/Card'
import PropTypes from 'prop-types'
import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({ feedback }) => {
  const { feedbackDelete, editFeedback } = useContext(FeedbackContext)
  return (
    <Card>
      <div className='num-display'>{feedback.rating}</div>
      <button
        onClick={(e) => {
          e.preventDefault()
          feedbackDelete(feedback._id)
        }}
        className='close'
      >
       delete
      </button>
      <button onClick={() => editFeedback(feedback)} className='edit'>
        edit
      </button>
      <div className='text-display'>{feedback.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
}

export default FeedbackItem
