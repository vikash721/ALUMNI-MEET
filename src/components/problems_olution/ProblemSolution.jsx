import React from 'react';
import styles from './ProblemSolution.module.css';
import { FaUsers, FaCalendarAlt, FaChalkboardTeacher, FaBriefcase } from 'react-icons/fa';

const IdeaShowcase = () => {
  return (
    <div className={styles.presentationContainer}>
    <div className={styles.heroSection}>
        <h1>Connect. Learn. Succeed.</h1>
        <p>AlumiMeet is bridging the gap between students and alumni, fostering a community of growth and success.</p>
    </div>

    <div className={styles.featuresSection}>
        <div className={styles.featureItem}>
            <i className="fas fa-network-wired" style={{ fontSize: '48px', color: '#0070f3' }}></i>
            <h3>Networking</h3>
            <p>Build connections with alumni across the globe.</p>
        </div>
        <div className={styles.featureItem}>
            <i className="fas fa-chalkboard-teacher" style={{ fontSize: '48px', color: '#0070f3' }}></i>
            <h3>Mentorship</h3>
            <p>Receive guidance and support from experienced professionals.</p>
        </div>
        <div className={styles.featureItem}>
            <i className="fas fa-briefcase" style={{ fontSize: '48px', color: '#0070f3' }}></i>
            <h3>Opportunities</h3>
            <p>Access exclusive job and internship opportunities.</p>
        </div>
    </div>

    <div className={styles.connectionSection}>
        <h2>How AlumiMeet Works</h2>
        <div className={styles.connectionSteps}>
            <div className={styles.connectionStep}>
                <i className="fas fa-user-plus" style={{ fontSize: '36px', color: '#0070f3' }}></i>
                <p>Sign Up</p>
            </div>
            <div className={styles.connectionStep}>
                <i className="fas fa-users" style={{ fontSize: '36px', color: '#0070f3' }}></i>
                <p>Connect</p>
            </div>
            <div className={styles.connectionStep}>
                <i className="fas fa-handshake" style={{ fontSize: '36px', color: '#0070f3' }}></i>
                <p>Engage</p>
            </div>
        </div>
    </div>

  
</div>


  );
};

export default IdeaShowcase;
