import React from 'react';
import HealthComponent from '../components/HealthComponent';

const HomePage = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Welcome to AilaCare</h1>
      <p className="text-center">
        Empower non-medical users to understand their health, make informed decisions, and manage chronic conditions effectively. This app is a guide, not a replacement for professional medical care.
      </p>
      <div className="row">
        <div className="col-md-4">
          <h3>Symptom Checker</h3>
          <p>Check your symptoms and get information on possible conditions.</p>
          <img src="https://via.placeholder.com/150" alt="Symptom Checker" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <h3>Condition Information</h3>
          <p>Get detailed information on various health conditions.</p>
          <img src="https://via.placeholder.com/150" alt="Condition Information" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <h3>Self-Care Strategies</h3>
          <p>Learn self-care strategies to manage your health.</p>
          <img src="https://via.placeholder.com/150" alt="Self-Care Strategies" className="img-fluid" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <h3>First Aid & Emergency Guidance</h3>
          <p>Access first aid and emergency guidance.</p>
          <img src="https://via.placeholder.com/150" alt="First Aid & Emergency Guidance" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <h3>Resources Directory</h3>
          <p>Find resources and support services.</p>
          <img src="https://via.placeholder.com/150" alt="Resources Directory" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <h3>Personal Health Tracking</h3>
          <p>Track your personal health metrics.</p>
          <img src="https://via.placeholder.com/150" alt="Personal Health Tracking" className="img-fluid" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <h3>Chronic Condition Support</h3>
          <p>Get support for managing chronic conditions.</p>
          <img src="https://via.placeholder.com/150" alt="Chronic Condition Support" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <h3>Condition-Specific Resources</h3>
          <p>Access resources specific to your condition.</p>
          <img src="https://via.placeholder.com/150" alt="Condition-Specific Resources" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <h3>User Profiles</h3>
          <p>Create and manage your user profile.</p>
          <img src="https://via.placeholder.com/150" alt="User Profiles" className="img-fluid" />
        </div>
      </div>
      <div className="mt-4">
        <HealthComponent />
      </div>
    </div>
  );
};

export default HomePage;