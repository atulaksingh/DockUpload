import Link from "next/link";
import React from "react";

const SingleSliderEight = ({ slide = {} }) => {
  const { bg, text, title } = slide;

  return (
    <div className="swiper-slide">
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${
            require(`@/images/update-01-10-2021/slider/${bg}`).default.src
          })`,
        }}
      ></div>
      <div className="auto-container">
        <div className="slider-eight__content">
          <div className="slider-eight__text">
            <span>{text}</span>
          </div>
          <h2 className="slider-eight__title">{title}</h2>
          <div className="slider-eight__btns">
            <Link href="/" className="slider-eight__btn thm-btn__eight">
              Case Studies
            </Link>
            <div
              className="slider-eight__btn slider-eight__btn--two thm-btn__eight"
            >
              Contact Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSliderEight;
