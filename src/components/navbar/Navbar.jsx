import React, { useState } from 'react';
import './navbar.css';
import Logo from "../../assets/logo.png";
import Signin from '../Signup_modal/Signup';
import { NavLink } from 'react-router-dom';

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
                        <li><NavLink className = {(e)=> {return e.isActive?"activelink": ""}} to="/pages/home">Home</NavLink></li>
                        <li><NavLink className = {(e)=> {return e.isActive?"activelink": ""}} to="/pages/college">Colleges</NavLink></li>
                        
                            <li><NavLink className = {(e)=> {return e.isActive?"activelink": ""}} to="/pages/alumni">Alumni</NavLink></li>
                            <li><NavLink className = {(e)=> {return e.isActive?"activelink": ""}} to="/pages/events">Events</NavLink></li>
                            <li
                                className="dropdown"
                                onMouseEnter={toggleDropdown}
                                onMouseLeave={toggleDropdown}
                            >
                                <span className="dropdown-trigger">Learn</span>
                                {isDropdownOpen && (
                                    <ul className="dropdown-menu">
                                        <li><NavLink className = {(e)=> {return e.isActive?"activelink": ""}} to="/pages/webinars">Webinars</NavLink></li>
                                        <li><NavLink className = {(e)=> {return e.isActive?"activelink": ""}} to="Webinars/guides">Guides</NavLink></li>
                                        <li><NavLink className = {(e)=> {return e.isActive?"activelink": ""}} to="Webinars/tutorials">Tutorials</NavLink></li>
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
