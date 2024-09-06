import React, { useState } from 'react';
import './navbar.css';
import Logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';
import UserTypeModal from '../authantication/usertype/user_type/UserType';
import { FaUserCircle } from 'react-icons/fa'; // Import FontAwesome user icon

const Navbar = () => {
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
            <nav className="navbar">
                <div className="nav-container">
                    <div className='logo-container'>
                        <img src={Logo} alt="Logo" className="logo" />
                    </div>
                    <div className="navbar-left">
                        <ul className="nav-links">
                            <li><NavLink className={(e) => e.isActive ? "activelink" : ""} to="/pages/home">Home</NavLink></li>
                            <li><NavLink className={(e) => e.isActive ? "activelink" : ""} to="/pages/college">Colleges</NavLink></li>
                            <li><NavLink className={(e) => e.isActive ? "activelink" : ""} to="/pages/alumni">Alumni</NavLink></li>
                            <li><NavLink className={(e) => e.isActive ? "activelink" : ""} to="/pages/events">Events</NavLink></li>
                            <li
                                className="dropdown"
                                onMouseEnter={toggleDropdown}
                                onMouseLeave={toggleDropdown}
                            >
                                <span className="dropdown-trigger">Learn</span>
                                {isDropdownOpen && (
                                    <ul className="dropdown-menu">
                                        <li><NavLink className={(e) => e.isActive ? "activelink" : ""} to="/pages/webinars">Webinars</NavLink></li>
                                        <li><NavLink className={(e) => e.isActive ? "activelink" : ""} to="/pages/guides">Guides</NavLink></li>
                                        <li><NavLink className={(e) => e.isActive ? "activelink" : ""} to="/pages/tutorials">Tutorials</NavLink></li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-right">
                        <div className="user-dropdown-container" onClick={toggleUserDropdown}>
                            <FaUserCircle className="user-icon" size={28} />
                            {isUserDropdownOpen && (
                                <ul className="user-dropdown-menu">
                                    <li><NavLink to="/profile">My Profile</NavLink></li>
                                    <li><NavLink to="/settings">Settings</NavLink></li>
                                    <li><NavLink to="/logout">Logout</NavLink></li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {isModalVisible && <UserTypeModal closeModal={closeModal} />}
        </>
    );
};

export default Navbar;
