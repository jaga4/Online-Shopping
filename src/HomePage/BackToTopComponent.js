import { useState, useEffect } from 'react';
import './BackToTopComponent.css';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className='back-to-top'>
      {isVisible && 
        <button onClick={scrollToTop}>
          <i className="bi bi-arrow-up-circle-fill"></i>
        </button>}
    </div>
  );
}

export default BackToTopButton;
