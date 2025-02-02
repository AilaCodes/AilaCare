import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HealthComponent = () => {
  const [conditions, setConditions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/health/conditions')
      .then(response => {
        setConditions(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the conditions!', error);
      });
  }, []);

  return (
    <div>
      <h2>Health Conditions</h2>
      <ul>
        {conditions.map(condition => (
          <li key={condition}>{condition}</li>
        ))}
      </ul>
    </div>
  );
};

export default HealthComponent;