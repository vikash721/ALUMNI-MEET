import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import styles from './EventSlider.module.css'; // Import CSS module
import EventSliderData from "../../data/EventSliderData";

// Slider settings
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,            // Enable auto-sliding
    autoplaySpeed: 3000,       // Set the speed of auto-sliding in milliseconds
  };

const EventSlider = () => {
  return (
    <div className={styles.eventSliderContainer}>
      <Slider {...settings}>
        {EventSliderData.map((event) => (
          <div key={event.id} className={styles.eventSlide}>
            <img src={event.image} alt={event.title} className={styles.eventImage} />
            <div className={styles.eventInfo}>
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <p className={styles.eventDate}>{event.date}</p>
              <p className={styles.eventDescription}>{event.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EventSlider;
