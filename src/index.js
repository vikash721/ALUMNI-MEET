import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'slick-carousel/slick/slick.css'; // Import slick carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme CSS
import TestUserTypeModal from './Testing/TEST';
import StudentProfileCompletion from './pages/student_onboarding/StudentProfileCompletion';
import AlumniProfile from './pages/alumni_profile/AlumniProfile';
import AlumniNavbar from './components/Nabars/alumni_nav/AlumniNavbar';
import Navbar from './components/navbar/Navbar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <AlumniNavbar/> */}
    <App />
    {/* <StudentProfileCompletion/> */}
    {/* <TestUserTypeModal/> */}
    {/* <AlumniProfile/> */}
    {/* <Navbar/> */}
   
  </>
);
