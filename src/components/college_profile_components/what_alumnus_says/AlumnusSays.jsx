import React from 'react';
import Styles from './AlumnusSays.module.css';

const AlumnusSays = () => {
    return (
        <div className={Styles.container}>
            <h2 className={Styles.heading}>What our <span>Alumnus</span> Says</h2>
            <div className={Styles.alumniCards}>
                
                <div className={Styles.alumniCard}>
                    <div className={Styles.profileContainer}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/15996/15996359.png"
                            alt="Alumnus"
                            className={Styles.alumniImage}
                        />
                        <div className={Styles.textContent}>
                            <h3 className={Styles.alumniName}>Allie</h3>
                            <p className={Styles.testimonial}>
                                "The opportunities provided by the college were outstanding, and I feel well-prepared for my career."
                            </p>
                        </div>

                        
                    </div>
                </div>

                <div className={Styles.alumniCard}>
                    <div className={Styles.profileContainer}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/13164/13164529.png"
                            alt="Alumnus"
                            className={Styles.alumniImage}
                        />
                        <div className={Styles.textContent}>
                            <h3 className={Styles.alumniName}>Priya</h3>
                            <p className={Styles.testimonial}>
                                "I am proud to be an alumni from this colleg. The opportunities provided by the college were outstanding, and I feel well-prepared for my career."
                            </p>
                        </div>

                        
                    </div>
                </div>

                <div className={Styles.alumniCard}>
                    <div className={Styles.profileContainer}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/3220/3220358.png"
                            alt="Alumnus"
                            className={Styles.alumniImage}
                        />
                        <div className={Styles.textContent}>
                            <h3 className={Styles.alumniName}>Jon Doe</h3>
                            <p className={Styles.testimonial}>
                                "My experience at the college was fantastic. The skills and knowledge I gained have been invaluable in my career. Habbibi satyug college hamko pasand aati"
                            </p>
                        </div>
                    </div>
                </div>

                {/* Add more alumniCard sections as needed */}
            </div>
        </div>
    );
};

export default AlumnusSays;
