import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareCaretLeft,
  faSquareCaretRight,
} from '@fortawesome/free-solid-svg-icons';

interface SlidesProp {
  slides: { image: string }[];
}

export const ImageSlider: React.FC<SlidesProp> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlideHandler = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlideHandler = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="slider">
      <FontAwesomeIcon
        onClick={prevSlideHandler}
        className="slider__left-arrow"
        icon={faSquareCaretLeft}
      />
      <FontAwesomeIcon
        onClick={nextSlideHandler}
        className="slider__right-arrow"
        icon={faSquareCaretRight}
      />
      {slides.map((slide, index) => {
        return (
          <div
            className={`slider__slide ${
              index === current ? 'slider__slide--active' : ''
            }`}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="slide" key={index}></img>
            )}
          </div>
        );
      })}
    </section>
  );
};
