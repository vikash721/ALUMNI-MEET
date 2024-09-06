import React from 'react';
import Styles from './CollegeNavbar.module.css';

const CollegeNavbar = () => {
    return (
        <>
            <nav className={Styles.navbar}>
                <ul className={Styles.navList}>
                    <li className={Styles.navItem}><a href="#about">About</a></li>
                    <li className={Styles.navItem}><a href="#alumni">Alumni</a></li>
                    <li className={Styles.navItem}><a href="#events">Events</a></li>
                    <li className={Styles.navItem}><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
        </>
    );
};

export default CollegeNavbar;
