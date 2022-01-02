/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useAuth0 } from '../auth/react-auth0-spa';

import './table.css';

const Achivements = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [achivements, setAchivements] = useState();
  const { getTokenSilently } = useAuth0();

  const fetchData = async () => {
    const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';

    const token = await getTokenSilently();

    const res = await fetch(`${baseUrl}/api/achivements`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    res
      .json()
      .then((json) => {
        setAchivements(json.achivements);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(
    () => {
      fetchData();
    },
    // eslint-disable-next-line
    []
  );

  if (isLoading) {
    return (
      <>
        <div className="container">
          <h1>Achivements!</h1>
          <p>Loading your progress...</p>
        </div>
      </>
    );
  }

  return <>{achivements}</>;
};

export default Achivements;
