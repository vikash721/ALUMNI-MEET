import React, { useState } from 'react';
import UserTypeModal from "../components/authantication/usertype/user_type/UserType"; // Ensure correct path

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
        <UserTypeModal
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
