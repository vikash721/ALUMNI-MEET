import React, { useState } from 'react';
import './navbar.css';
import Logo from "../../assets/logo.png";
import Signin from '../Signupmodal/Signup';

const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleGetStartedClick = () => {
        setIsModalVisible(true);
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
                            <li><a href="#home">Home</a></li>
                            <li><a href="#">Colleges</a></li>
                            <li><a href="#alumni">Alumni</a></li>
                            <li><a href="#resources">Events</a></li>
                            <li
                                className="dropdown"
                                onMouseEnter={toggleDropdown}
                                onMouseLeave={toggleDropdown}
                            >
                                <a href="#learn">Learn</a>
                                {isDropdownOpen && (
                                    <ul className="dropdown-menu">
                                        <li><a href="#tutorials">Tutorials</a></li>
                                        <li><a href="#webinars">Webinars</a></li>
                                        <li><a href="#guides">Guides</a></li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-right">
                        <button className="get-started-btn" onClick={handleGetStartedClick}>
                            Get Started — it’s free
                        </button>
                    </div>
                </div>
            </nav>

            {isModalVisible && <Signin closeModal={closeModal} />}
        </>
    );
};

export default Navbar;
