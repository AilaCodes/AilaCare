import React from 'react';
import HomePage from './pages/HomePage';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import Status from './status';

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavigationBar />
      <div className="flex-grow-1">
        <HomePage />
        <Status />
      </div>
      <Footer />
    </div>
  );
};

export default App;