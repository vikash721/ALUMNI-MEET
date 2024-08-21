import React from 'react';
import './Searchbar.css'; // Import the CSS file for styling

const Searchbar = ({ value, onChange }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for colleges..."
        value={value}
        onChange={onChange}
      />
      <button className="search-button">Search</button>
    </div>
  );
};

export default Searchbar;

