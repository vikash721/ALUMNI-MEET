import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import CenteredContent from '../../components/centerd_component/CenteredContent';
import CollegeTitle from '../../components/college_profile_components/college_title/CollegeTitle';
import CollegeNavbar from '../../components/college_profile_components/college_navbar/CollegeNavbar';
import AlumnusAt from '../../components/college_profile_components/alumnus_at/AlumnusAt';
import StartupByAlumnus from '../../components/college_profile_components/startup_by_alumnus/StartupByAlumnus';
import AlumnusSays from '../../components/college_profile_components/what_alumnus_says/AlumnusSays';
import Footer from '../../components/footer/Footer';

const CollegeProfile = () => {
  const { collegeId } = useParams(); // Get the collegeId from the URL

  
  return (

    <>
    <Navbar/>

    <CenteredContent>

      <CollegeTitle/>
    
      <CollegeNavbar/>

      <AlumnusAt/>

      <StartupByAlumnus/>

      <AlumnusSays/>

   

    </CenteredContent>

    <Footer/>

    </>
    
  );
};

export default CollegeProfile;
