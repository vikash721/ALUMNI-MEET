import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './collegepage.css';
import Searchbar from '../../components/Searchbar/Searchbar'; // Correct path if necessary
import collegeData from '../../data/Collegecarddata'; // Correct path if necessary
import CollegeCard from '../../components/cards/Colegecard'; // Correct path if necessary

const College = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter colleges based on searchTerm
  const filteredData = collegeData.filter((college) =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className='main-parent'>
        <div className='main-div'>
          <div className='college-search-message'>
            <h1 className='college-search-text'>
              Search Here For <span className='college-search-highlight'>Colleges</span>.
            </h1>
          </div>

          <div className='search-div'>
            <Searchbar value={searchTerm} onChange={handleSearchChange} />
          </div>

          <div className='college-cards'>
            {filteredData.length > 0 ? (
              filteredData.map((college, index) => (
                <CollegeCard
                  key={index}
                  imageSrc={college.imageSrc}
                  altText={college.altText}
                  name={college.name}
                  address={college.address}
                />
              ))
            ) : (
              <p className="no-results">No colleges found for "{searchTerm}"</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default College;
