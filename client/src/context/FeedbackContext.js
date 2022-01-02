import { createContext, useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import { useAuth0 } from '../auth/react-auth0-spa';

const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedbacks, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedbacks()
  }, [])

  const fetchFeedbacks = async () => {

    const response = await axios.get(`${baseUrl}/api/feedbacks`)
    console.log(response)
    console.log('response')

    const feedbackData = response.data

    setFeedback(feedbackData)
    setIsLoading(false)
  }

  // Edit feedback
  const editFeedback = (feedback) => {
    setFeedbackEdit({
      item: feedback,
      edit: true,
    })
  }

  // UPDATE feedback
  const updateFeedback = async (_id, updItem,token) => {
    
   await fetch(`${baseUrl}/api/feedbacks/${_id}`,{
      method: 'PUT',
       headers: {
        'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
      
      },
      body: JSON.stringify(updItem) 
    })

    setFeedback(
      feedbacks.map((feedback) => {
        if (feedback._id === _id) {
          return {
            ...feedback,
            ...updItem,
          }
        }
        return feedback
      })
    )
    setFeedbackEdit({
      item: {},
      edit: false,
    })

  }

  // DELETE feedback
  const feedbackDelete = async (_id,token) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      await fetch(`${baseUrl}/api/feedbacks/${_id}`, { 
        method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,

      },
    })
      setFeedback(feedbacks.filter((item) => item._id !== _id))
    }
  }

  // ADD FEEDBACK
  const addFeedback = async (newFeedback ,token) => {

console.log(newFeedback)
    const response = await fetch(`${baseUrl}/api/feedbacks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,

      },
      body: JSON.stringify(newFeedback),
    })
    const data = await response.json()
    setFeedback([data, ...feedbacks])
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        feedbackDelete,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
