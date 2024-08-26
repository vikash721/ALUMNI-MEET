import React, { useState } from 'react';
import styles from './UserType.module.css';
import { FaUserGraduate, FaUser, FaUniversity, FaTimes } from 'react-icons/fa';
import StudentLogin from '../../student_auth/student_login/StudentLogin'; 
import AlumniLogin from '../../alumni_auth/alumni_login/AlumniLogin'; 
import CollegeLogin from '../../college_auth/college_login/CollegeLogin'; 

const UserTypeModal = ({ closeModal }) => {
  const [selectedUserType, setSelectedUserType] = useState('');

  const handleUserTypeSelect = (userType) => {
    setSelectedUserType(userType);
  };

  const renderContent = () => {
    switch (selectedUserType) {
      case 'student':
        return <StudentLogin closeModal={closeModal} />;
      case 'alumni':
        return <AlumniLogin closeModal={closeModal} />;
      case 'college':
        return <CollegeLogin closeModal={closeModal} />;
      default:
        return (
          <div className={styles.iconContainer}>
            <div onClick={() => handleUserTypeSelect('student')} className={styles.iconWrapper}>
              <FaUser size={50} color="#4CAF50" />
              <p>Student</p>
            </div>
            <div onClick={() => handleUserTypeSelect('alumni')} className={styles.iconWrapper}>
              <FaUserGraduate size={50} color="#FF9800" />
              <p>Alumni</p>
            </div>
            <div onClick={() => handleUserTypeSelect('college')} className={styles.iconWrapper}>
              <FaUniversity size={50} color="#2196f3" />
              <p>College</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.header}>
          <h2>{selectedUserType ? 'Please Log In' : 'Select Your Role'}</h2>
          <button className={styles.closeButton} onClick={closeModal}>
            <FaTimes size={20} />
          </button>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default UserTypeModal;
