import React from 'react';
import './post.css'; // Import the CSS file for styling

const Post = ({ logoSrc, altText, header, eventImgSrc, eventAltText, eventDetails, linkUrl }) => {
  return (
    <div className="Container">
      <div className="Container1">
        <div className="top1">
          <img src={logoSrc} alt={altText}/>
          <div className="collage-name">
            <p id="p1">Satyug Darshan Institute of Engineering & Technology - [SDIET]</p>
            <p id="p2">faridabad,india</p>
          </div>
        </div>
        <div className="eventimage-container">
          <img src={eventImgSrc} alt={eventAltText}/>
        </div>
      
        <div className="Event-detail">
          <p>
            {eventDetails}
          </p>
        </div>
          
        <div className="button-container">
          <div id="RVSP">
            <button>RVSP Now</button>
          </div>
          <div id="More">
            <button>More Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;