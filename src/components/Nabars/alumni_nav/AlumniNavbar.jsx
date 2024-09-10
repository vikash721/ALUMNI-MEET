import React, { useState } from 'react';
import styles from './AlumniNavbar.module.css'; // Import the CSS module
import Logo from "../../../assets/logo.png";
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // Import FontAwesome user icon

const AlumniNavbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const toggleUserDropdown = () => {
        setUserDropdownOpen(!isUserDropdownOpen);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navContainer}>
                    <div className={styles.logoContainer}>
                        <img src={Logo} alt="Logo" className={styles.logo} />
                    </div>
                    <div className={styles.navbarLeft}>
                        <ul className={styles.navLinks}>
                            <li><NavLink className={(e) => e.isActive ? styles.activelink : ""} to="/pages/home">Home</NavLink></li>
                            <li><NavLink className={(e) => e.isActive ? styles.activelink : ""} to="/pages/college">Colleges</NavLink></li>
                            <li><NavLink className={(e) => e.isActive ? styles.activelink : ""} to="/pages/alumni">Alumni</NavLink></li>
                            <li><NavLink className={(e) => e.isActive ? styles.activelink : ""} to="/pages/events">Events</NavLink></li>
                            <li
                                className={styles.dropdown}
                                onMouseEnter={toggleDropdown}
                                onMouseLeave={toggleDropdown}
                            >
                                <span className={styles.dropdownTrigger}>Learn</span>
                                {isDropdownOpen && (
                                    <ul className={styles.dropdownMenu}>
                                        <li><NavLink className={(e) => e.isActive ? styles.activelink : ""} to="/pages/webinars">Webinars</NavLink></li>
                                        <li><NavLink className={(e) => e.isActive ? styles.activelink : ""} to="/pages/guides">Guides</NavLink></li>
                                        <li><NavLink className={(e) => e.isActive ? styles.activelink : ""} to="/pages/tutorials">Tutorials</NavLink></li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className={styles.navbarRight}>
                        <div className={styles.userDropdownContainer} onClick={toggleUserDropdown}>
                            <FaUserCircle className={styles.userIcon} size={28} />
                            {isUserDropdownOpen && (
                                <ul className={styles.userDropdownMenu}>
                                    <li><NavLink to="/profile">My Profile</NavLink></li>
                                    <li><NavLink to="/settings">Settings</NavLink></li>
                                    <li><NavLink to="/logout">Logout</NavLink></li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            
        </>
    );
};

export default AlumniNavbar;
