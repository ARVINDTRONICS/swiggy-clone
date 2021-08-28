import { useState, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import "./carousel.module.scss";
import PropTypes from "prop-types";
export const Carousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(props.children.length);
  const [touchPosition, setTouchPosition] = useState(null);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };
  useEffect(() => {
    setLength(props.children.length);
  }, [props.children]);
  const next = () => {
    if (currentIndex < length - props.show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <ArrowLeftIcon onClick={prev} className="left-arrow"></ArrowLeftIcon>
        )}
        <div
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={`carousel-content show-${props.show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / props.show)}%)`
            }}
          >
            {props.children}
          </div>
        </div>
        {currentIndex < length - props.show && (
          <ArrowRightIcon
            onClick={next}
            className="right-arrow"
          ></ArrowRightIcon>
        )}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  show: PropTypes.number.isRequired
};
