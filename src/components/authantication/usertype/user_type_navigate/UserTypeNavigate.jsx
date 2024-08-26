import React, { useState } from 'react';
import UserTypeModal from '../user_type/UserType'; // Ensure the correct path to the UserTypeModal component
import StudentLogin from '../../student_auth/student_login/StudentLogin';
import AlumniLogin from '../../alumni_auth/alumni_login/AlumniLogin';
import CollegeLogin from '../../college_auth/college_login'; // Adjust the path if needed

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

  const renderContent = () => {
    switch (selectedUserType) {
      case 'student':
        return <StudentLogin closeModal={handleCloseModal} />;
      case 'alumni':
        return <AlumniLogin closeModal={handleCloseModal} />;
      case 'college':
        return <CollegeLogin closeModal={handleCloseModal} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Test User Type Modal</h1>
      <button onClick={handleOpenModal}>Open Modal</button>

      {isModalVisible && (
        <UserTypeModal
          closeModal={handleCloseModal}
          onSelectUserType={handleUserTypeSelect}
        />
      )}

      {renderContent()}
    </div>
  );
};

export default TestUserTypeModal;
