import React from 'react';
import style from "./collegeTitle.module.css";

const CollegeTitle = () => {
  // Temporary data
  const logoSrc = "https://images.squarespace-cdn.com/content/v1/5c9f784af8135a660e96e75f/1553956143095-X60EBHML5YGCI0316R3M/s4.png?format=500w"; // Placeholder logo image
  const collegeName = "Satyug Darshan Institute of Engineering and Technology - [SDIET]";
  const collegeAddress = "Faridabad, Haryana";
  const affiliatedName = "J.C Bose University of Science and Technology";

  return (
    <div className={style.collegeTitleContainer}>
      <img src={logoSrc} alt="College Logo" className={style.collegeLogo} />
      <div className={style.collegeDetails}>
        <h1 className={style.collegeName}>{collegeName}</h1>
        <p className={style.collegeInfo}>
          {collegeAddress}  |  {affiliatedName}
        </p>
        
      </div>
    </div>
  );
}

export default CollegeTitle;
