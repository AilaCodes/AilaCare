import React, { useState, useEffect } from 'react';
import api from '../services/apiService';

const HealthComponent = () => {
  const [conditions, setConditions] = useState([]);

  useEffect(() => {
    api.get('/health/conditions')
      .then(response => {
        setConditions(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the conditions!', error);
      });
  }, []);

  return (
    <div className="health-component">
      <h2>Health Conditions</h2>
      <ul className="list-group">
        {conditions.map(condition => (
          <li key={condition._id} className="list-group-item">{condition.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HealthComponent;