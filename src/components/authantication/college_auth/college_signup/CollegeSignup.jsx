import React, { useState } from 'react';
import styles from './CollegeSignup.module.css';
import Notification from '../../notification/Notificationmodal'; // Adjust the import path
import CollegeLogin from '../college_login/CollegeLogin';


const CollegeSignup = ({ closeModal }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [notification, setNotification] = useState('');
    const [showLogin, setShowLogin] = useState(false);

    const handleSubmit = (e) => {
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
        setNotification('Signup successful!');
        // Handle successful form submission here
        // closeModal(); // Close the modal on successful signup (if desired)
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
                <CollegeLogin closeModal={closeModal} />
            ) : (
                <div className={styles.customModalOverlay}>
                    <div className={styles.customModal}>
                        <div className={styles.customModalHeader}>
                            <header className={styles.header}>College Signup</header>
                            <span className={styles.customModalClose} onClick={closeModal}>&times;</span>
                        </div>
                        <div className={styles.customModalContent}>
                            <form onSubmit={handleSubmit}>
                                {error && <div className={styles.customErrorMessage}>{error}</div>}
                                <div className={styles.customField}>
                                    <input
                                        type="text"
                                        placeholder="College Full Name"
                                        className={styles.customInput}
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                        
                                    />
                                </div>
                                <div className={styles.customField}>
                                    <input
                                        type="text"
                                        placeholder="College Short Name (for ex: IIT)"
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
                                        autoComplete="email" // Standard value for email fields
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
                                        autoComplete="new-password" // Standard value for new passwords
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
                                        autoComplete="new-password" // Same as above
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

export default CollegeSignup;
