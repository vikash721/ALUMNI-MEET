import React, { useState } from 'react';
import './signup.css';
import Notification from '../notification/Notificationmodal'; // Adjust the import path

const Signin = ({ closeModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [notification, setNotification] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
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

    return (
        <>
            {notification && (
                <Notification
                    message={notification}
                    type="notification-success"
                    onClose={handleNotificationClose}
                />
            )}
            <div className="custom-modal-overlay">
                <div className="custom-modal">
                    <div className="custom-modal-header">
                        <span className="custom-modal-close" onClick={closeModal}>&times;</span>
                        <header>Signup</header>
                    </div>
                    <div className="custom-modal-content">
                        <form onSubmit={handleSubmit}>
                            {error && <div className="custom-error-message">{error}</div>}
                            <div className="custom-field custom-input-field">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="custom-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    autoComplete="email"
                                />
                            </div>
                            <div className="custom-field custom-input-field">
                                <input
                                    type="password"
                                    placeholder="Create password"
                                    className="custom-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    autoComplete="new-password"
                                />
                            </div>
                            <div className="custom-field custom-input-field">
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    className="custom-password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    autoComplete="new-password"
                                />
                                <i className='bx bx-hide custom-eye-icon'></i>
                            </div>
                            <div className="custom-field custom-button-field">
                                <button type="submit">Signup</button>
                            </div>
                        </form>
                        <div className="custom-form-link">
                            <span>Already have an account? <a href="#" className="custom-link custom-login-link">Login</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signin;
