import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './home.css';
import Card from '../../components/cards/Card';
import cardData from '../../data/Carddata';
import Footer from '../../components/footer/Footer';
import Signin from '../../components/Signupmodal/Signup';

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleConnectNowClick = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Navbar />

      <div className='main-parent'>
        <div className='main-div'>
          <div className='welcome-container'>
            <h1 className='welcome-text'>Welcome to Our <span className='alumnimeet-text'>Alumni Meet</span></h1>
            <p className='welcome-paragraph'>
              Welcome to our Alumni-Student Interaction Platform! This space is designed to connect alumni with students, enabling valuable networking, mentorship, and collaboration. connect our features, engage with your peers, and contribute to a dynamic and supportive community.
            </p>
          </div>

          <div className='cards-div'>
            {cardData.map((card, index) => (
              <Card
                key={index}
                imageSrc={card.imageSrc}
                altText={card.altText}
                header={card.header}
                text={card.text}
                linkUrl={card.linkUrl}
              />
            ))}
          </div>

          <div className='connect-container'>
            <button className='connect-button' onClick={handleConnectNowClick}>
              Connect Now
            </button>
          </div>
        </div>
      </div>

      {isModalVisible && <Signin closeModal={closeModal} />}
      
      <Footer />
    </>
  );
};

export default Home;
