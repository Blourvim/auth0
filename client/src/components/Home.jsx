import React, { useState, useEffect } from 'react';
import FeedbackForm from './FeedbackForm'
import FeedbackStats from './FeedbackStats'
import FeedbackList from './FeedbackList'
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedbacks, setFeedbacks] = useState();

  async function fetchData() {
    const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';
    const res = await fetch(`${baseUrl}/species`);
    res
      .json()
      .then((json) => {
        setFeedbacks(json);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(
    () => {
      //fetchData();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
         <div className="container">
          
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
</div>
    </>
  );
};

export default Home;
