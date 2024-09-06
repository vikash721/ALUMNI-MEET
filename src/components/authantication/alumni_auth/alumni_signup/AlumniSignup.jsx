import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is imported
import styles from './AlumniSignup.module.css';
import Notification from '../../notification/Notificationmodal'; // Adjust the import path
import AlumniLogin from '../alumni_login/AlumniLogin';

const AlumniSignup = ({ closeModal }) => {
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

        // Validate inputs
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

        // URL to your Google Apps Script Web App
        const url = 'https://script.google.com/macros/s/AKfycbwFqVga6nvMXm80yNOx6Kl3Isi08U0pmwtGOGP-j0siejTB-wzqYAv6VkPE15JG3LiXaQ/exec';

        // Prepare data to send
        const data = new URLSearchParams({
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password
        });

        try {
            const response = await axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded' // Ensure the correct content type
                }
            });
            console.log('Response:', response.data);
            setNotification('Signup successful!');
            resetForm(); // Reset the form fields
        } catch (error) {
            console.error('Error occurred:', error.response || error.message || error);
            setError('An error occurred while submitting the form.');
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
                <AlumniLogin closeModal={closeModal} />
            ) : (
                <div className={styles.customModalOverlay}>
                    <div className={styles.customModal}>
                        <div className={styles.customModalHeader}>
                            <header className={styles.header}>Alumni Signup</header>
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
                                        autoComplete="given-name"
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
                                        autoComplete="family-name"
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
                                        autoComplete="email"
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
                                        autoComplete="new-password"
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
                                        autoComplete="new-password"
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

export default AlumniSignup;
