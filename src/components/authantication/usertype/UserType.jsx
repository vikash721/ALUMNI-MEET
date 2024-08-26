import React from 'react';
import styles from './UserType.module.css';
import { FaUserGraduate, FaUser    , FaUniversity, FaTimes } from 'react-icons/fa';

const UserTypeModal = ({ closeModal, onSelectUserType }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.header}>
        <h2>Select Your Role</h2>
        <button className={styles.closeButton} onClick={closeModal}>
          <FaTimes size={20} />
        </button>
        
        </div>
        <div className={styles.iconContainer}>
          <div onClick={() => onSelectUserType('student')} className={styles.iconWrapper}>
            <FaUser    size={50} color="#4CAF50" />
            <p>Student</p>
          </div>
          <div onClick={() => onSelectUserType('alumni')} className={styles.iconWrapper}>
            <FaUserGraduate  size={50} color="#FF9800" />
            <p>Alumni</p>
          </div>
          <div onClick={() => onSelectUserType('college')} className={styles.iconWrapper}>
            <FaUniversity size={50} color="#2196f3" />
            <p>College</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTypeModal;
