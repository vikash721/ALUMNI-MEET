import React from 'react';
import './card.css'; // Import the CSS file for styling

const Card = ({ imageSrc, altText, header, text, linkUrl }) => {
  return (
    <div className="card-container">
      <a href={linkUrl}>
        <img className="card-image" src={imageSrc} alt={altText} />
      </a>
      <div className="card-content">
        <a href={linkUrl}>
          <h5 className="card-title">{header}</h5>
        </a>
        <p className="card-text">{text}</p>
        <a href={linkUrl} className="card-button">
          Read more
          <svg className="card-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
