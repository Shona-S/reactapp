import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Add the styles for this component

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-image">
        <h1>Plant Shop</h1>
        <Link to="/product-listing" className="get-started-button">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;
