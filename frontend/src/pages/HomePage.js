import React from 'react';
import HealthComponent from '../components/HealthComponent';

const HomePage = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Welcome to AilaCare</h1>
      <HealthComponent />
    </div>
  );
};

export default HomePage;