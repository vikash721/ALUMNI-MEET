import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h3>Contact Us</h3>
          <p>Email: support@alumni-platform.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Alumni Street, City, Country</p>
        </div>
        <div className='footer-section'>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className='footer-section'>
          <h3>Follow Us</h3>
          <div className='social-media'>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2024 Alumni Interaction Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
