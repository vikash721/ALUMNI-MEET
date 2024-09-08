import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import styles from './EventSlider.module.css'; // Import CSS module
import EventSliderData from "../../data/EventSliderData";

// Custom Previous Arrow Component
const PreviousArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={styles.customArrow + " " + styles.prevArrow} onClick={onClick}>
      <i className="fas fa-chevron-left"></i> {/* Use Font Awesome icon */}
    </div>
  );
};

// Custom Next Arrow Component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={styles.customArrow + " " + styles.nextArrow} onClick={onClick}>
      <i className="fas fa-chevron-right"></i> {/* Use Font Awesome icon */}
    </div>
  );
};

// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: <PreviousArrow />,  // Use custom previous arrow
  nextArrow: <NextArrow />       // Use custom next arrow
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
