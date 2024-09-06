import React from 'react';
import './collegecard.css';
import { Link } from 'react-router-dom'; // Import Link

const CollegeCard = ({ imageSrc, altText, name, address, collegeId }) => {
  return (
    <div className="college-card">
      <img className="college-card-image" src={imageSrc} alt={altText} />
      <div className="college-card-content">
        <h3 className="college-card-title">{name}</h3>
        <p className="college-card-address">{address}</p>
        <div className="card-footer">
          {/* Use Link to navigate to the college profile */}
          <Link to={`/college/${collegeId}`}>View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
