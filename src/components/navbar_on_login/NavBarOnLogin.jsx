import React, { useState } from 'react';
import Styles from './NavBarOnLogin.module.css';
import Logo from "../../assets/logo.png";
import Signin from '../authantication/Signup_modal/Signup';

const NavBarOnLogin = () => {
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
            <nav className={Styles.navbar}>
                <div className={Styles.navContainer}>
                    <div className={Styles.logoContainer}>
                        <img src={Logo} alt="Logo" className={Styles.logo} />
                        <div class={Styles.alumniMeet}>AlumniMeet</div>
                    </div>
                    
                    <div className={Styles.navbarRight}>
                        <button className={Styles.getStartedBtn} onClick={handleGetStartedClick}>
                            Get Started — it’s free
                        </button>
                    </div>
                </div>
            </nav>

            {isModalVisible && <Signin closeModal={closeModal} />}
        </>
    );
};

export default NavBarOnLogin;
