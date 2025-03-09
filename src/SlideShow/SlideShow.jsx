import { useState, useEffect } from 'react';
import './SlideShow.css';

const SlideShow = () => {
  const images = [
    'src/assets/pic1.jpg',
    'src/assets/pic2.jpg',
    'src/assets/pic3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="slideshow">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slide-image"
      />
    </div>
  );
};

export default SlideShow;
