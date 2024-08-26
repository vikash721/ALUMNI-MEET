import React, { useState } from 'react';
// import UserTypeModal from '../components/authantication/usertype/UserType'; // Ensure the correct path to the UserTypeModal component
import StudentLogin from '../components/authantication/student_auth/student_login/StudentLogin';
// import AlumniLogin from '../components/authantication/Alumni_auth/alumni_login/AlumniLogin'
import AlumniSignup from '../components/authantication/alumni_auth/alumni_signup/AlumniSignup';
import CollegeLogin from '../components/authantication/college_auth/college_login/CollegeLogin';

const TestUserTypeModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState('');

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleUserTypeSelect = (userType) => {
    setSelectedUserType(userType);
    setIsModalVisible(false);
  };

  return (
    <div>
      <h1>Test User Type Modal</h1>
      <button onClick={handleOpenModal}>Open Modal</button>

      {isModalVisible && (
        <CollegeLogin
          closeModal={handleCloseModal}
          onSelectUserType={handleUserTypeSelect}
        />

        

       
        
        
      )}

      {selectedUserType && (
        <p>You selected: {selectedUserType}</p>
      )}
    </div>
  );
};

export default TestUserTypeModal;
