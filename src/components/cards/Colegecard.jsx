import React from 'react';
import './collegecard.css'; // Import the CSS file for styling

const CollegeCard = ({ imageSrc, altText, name, address }) => {
  return (
    <div className="college-card">
      <img className="college-card-image" src={imageSrc} alt={altText} />
      <div className="college-card-content">
        <h3 className="college-card-title">{name}</h3>
        <p className="college-card-address">{address}</p>
        <div className="card-footer">
          <a href="#">View Details</a>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
