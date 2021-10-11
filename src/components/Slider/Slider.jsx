import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Slider.scss';
import image1 from './slider-1.jpg';
import image2 from './slider-2.jpg';
import image3 from './slider-3.jpg';
import image4 from './slider-4.jpg';
import image5 from './slider-5.jpg';
import nextArrow from './nextArrow.svg';
import prevArrow from './prevArrow.svg';

const images = [image1, image2, image3, image4, image5];

const Slider = ({ autoplayTime }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const nextSlideIndex = (currentSlide >= images.length - 1) ? 0 : currentSlide + 1;

    setCurrentSlide(nextSlideIndex);
  };

  const prevSlide = () => {
    const prevSlideIndex = (currentSlide === 0) ? images.length - 1 : currentSlide - 1;

    setCurrentSlide(prevSlideIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => nextSlide(), autoplayTime);

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide, autoplayTime]);

  return (
    <div className='slider'>
      {images.map((imageUrl, index) => (
        <div
          className='slider-item'
          style={{
            backgroundImage: `url(${imageUrl})`,
            marginLeft: index === 0 ? `-${currentSlide * 700}px` : 0,
          }}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        />
      ))}
      <div className='slider__button  slider__prev' onClick={prevSlide} onKeyDown={prevSlide} role='button' tabIndex={0}>
        <img src={prevArrow} alt='' className='slider__button-item' />
      </div>
      <div className='slider__button  slider__next' onClick={nextSlide} onKeyDown={nextSlide} role='button' tabIndex={0}>
        <img src={nextArrow} alt='' className='slider__button-item' />
      </div>
    </div>
  );
};

Slider.propTypes = { autoplayTime: PropTypes.number };

Slider.defaultProps = { autoplayTime: 4000 };

export default Slider;
