import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import Styles from './StartupByAlumnus.module.css';

// Import Swiper modules
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

const StartupByAlumnus = () => {
    return (
        <div className={Styles.container}>
            <h2 className={Styles.heading}>Startups by Our Alumni</h2>
            <Swiper
                spaceBetween={30} // Space between slides
                slidesPerView={4} // Show 4 slides at a time
                // navigation // Add navigation arrows
                pagination={{ clickable: true }} // Dots for navigation
                // modules={[Navigation, Pagination]} // Register the modules here
                breakpoints={{
                    1024: { slidesPerView: 4 }, // For large screens
                    600: { slidesPerView: 1 },  // For smaller screens
                }}
                className={Styles.slider}
            >
                <SwiperSlide className={Styles.card}>
                    <img src="https://via.placeholder.com/150" alt="Startup 1" />
                    <h3>Startup 1</h3>
                    <p>Details about Startup 1</p>
                </SwiperSlide>
                <SwiperSlide className={Styles.card}>
                    <img src="https://via.placeholder.com/150" alt="Startup 2" />
                    <h3>Startup 2</h3>
                    <p>Details about Startup 2</p>
                </SwiperSlide>
                <SwiperSlide className={Styles.card}>
                    <img src="https://via.placeholder.com/150" alt="Startup 3" />
                    <h3>Startup 3</h3>
                    <p>Details about Startup 3</p>
                </SwiperSlide>
                <SwiperSlide className={Styles.card}>
                    <img src="https://via.placeholder.com/150" alt="Startup 4" />
                    <h3>Startup 4</h3>
                    <p>Details about Startup 4</p>
                </SwiperSlide>

                <SwiperSlide className={Styles.card}>
                    <img src="https://via.placeholder.com/150" alt="Startup 5" />
                    <h3>Startup 5</h3>
                    <p>Details about Startup 5</p>
                </SwiperSlide>

                <SwiperSlide className={Styles.card}>
                    <img src="https://via.placeholder.com/150" alt="Startup 6" />
                    <h3>Startup 6</h3>
                    <p>Details about Startup 6</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default StartupByAlumnus;
