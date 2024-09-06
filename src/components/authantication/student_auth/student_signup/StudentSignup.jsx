import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import styles from './StudentSignup.module.css';
import Notification from '../../notification/Notificationmodal'; // Adjust the import path
import StudentLogin from '../student_login/StudentLogin';

const StudentSignup = ({ closeModal }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [notification, setNotification] = useState('');
    const [showLogin, setShowLogin] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            setError('Please fill out all fields.');
            return;
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        setError('');
        setNotification('Submitting form...');

        // URL to your Google Apps Script Web App
        // const url = 'https://script.google.com/macros/s/AKfycbwOEOqsLzTq3GZm8mr6LlowrYqJJUxg8vv8Fo_hFDg_pTBVaKJTdmYu9YA_2sCcqmiQRg/exec';
        const url = 'https://script.google.com/macros/s/AKfycbzA4qdpIHqlAOBoL04-SvaNhjTvl5d8j_LXNiwXscfzffbYzoE3qhjXhoG8N6Z5Egu0hg/exec';

        // Prepare data to send
        const formData = new FormData();
        formData.append('firstname', firstName);
        formData.append('lastname', lastName);
        formData.append('email', email);
        formData.append('password', password);

        try {
            await axios.post(url, formData);
            setNotification('Signup successful!');
            resetForm(); // Reset the form fields
        } catch (error) {
            setError('An error occurred while submitting the form.');
            console.error('Error:', error);
        }
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleNotificationClose = () => {
        setNotification('');
    };

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <>
            {notification && (
                <Notification
                    message={notification}
                    type="notification-success"
                    onClose={handleNotificationClose}
                />
            )}
            {showLogin ? (
                <StudentLogin closeModal={closeModal} />
            ) : (
                <div className={styles.customModalOverlay}>
                    <div className={styles.customModal}>
                        <div className={styles.customModalHeader}>
                            <header className={styles.header}>Student Signup</header>
                            <span className={styles.customModalClose} onClick={closeModal}>&times;</span>
                        </div>
                        <div className={styles.customModalContent}>
                            <form onSubmit={handleSubmit}>
                                {error && <div className={styles.customErrorMessage}>{error}</div>}
                                <div className={styles.customField}>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className={styles.customInput}
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className={styles.customField}>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className={styles.customInput}
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className={styles.customField}>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className={styles.customInput}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className={styles.customField}>
                                    <input
                                        type="password"
                                        placeholder="Create password"
                                        className={styles.customPassword}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className={styles.customField}>
                                    <input
                                        type="password"
                                        placeholder="Confirm password"
                                        className={styles.customPassword}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className={styles.customField}>
                                    <button type="submit" className={styles.customButton}>Signup</button>
                                </div>
                            </form>
                            <div className={styles.customFormLink}>
                                <span>Already have an account? <a href="#" className={styles.customLink} onClick={handleLoginClick}>Login</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default StudentSignup;
