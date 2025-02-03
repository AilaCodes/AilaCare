import React, { useState, useEffect } from 'react';
import api from './services/apiService';

const Status = () => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    api.get('/status')
      .then(response => {
        setStatus(response.data.status);
      })
      .catch(error => {
        console.error('There was an error fetching the status!', error);
      });
  }, []);

  return (
    <div className="status-component">
      <h2>Application Status</h2>
      <p>{status}</p>
    </div>
  );
};

export default Status;