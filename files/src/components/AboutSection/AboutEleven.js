import { aboutEleven } from "@/data/aboutSection";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import ReactVisibilitySensor from "react-visibility-sensor";

const {
  images,
  tagline,
  title,
  text,
  boxes,
  progressTitle,
  percent,
  image,
  name,
  infoText,
} = aboutEleven;

const AboutEleven = () => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  return (
    <div className="about-eleven">
      <div className="auto-container">
        <Row>
          <Col lg={6}>
            <div className="about-eleven__images animated fadeInLeft">
              {images.map((image, i) => (
                <Image
                  key={i}
                  src={
                    require(`@/images/zaco/${image}`)
                      .default.src
                  }
                  alt=""
                />
              ))}
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-eleven__content">
              <div className="sec-title-eight text-start">
                <div className="sec-title-eight__text">{tagline}</div>
                <h2 className="sec-title-eight__title">{title}</h2>
              </div>
              <div className="about-eleven__summery">{text}</div>
              <div className="about-eleven__box">
                {boxes.map(({ id, icon, title }) => (
                  <div key={id} className="about-eleven__box__item">
                    <i className={icon}></i>
                    <h3 className="about-eleven__box__title">{title}</h3>
                  </div>
                ))}
              </div>
              <div className="about-eleven__progress">
                <div className="about-eleven__progress-top">
                  <div>{progressTitle}</div>
                </div>

                <ReactVisibilitySensor
                  offset={{ top: 10 }}
                  delayedCall={true}
                  onChange={onVisibilityChange}
                >
                  <div className="about-eleven__progress-line">
                    <span
                      className="count-bar"
                      style={{ width: countStart ? `${percent}%` : 0 }}
                    >
                      <b>{countStart ? percent : 0}%</b>
                    </span>
                  </div>
                </ReactVisibilitySensor>
              </div>
              <div className="about-eleven__info">
                <div className="about-eleven__info__image">
                  <Image src={image.src} alt="" />
                </div>
                <div className="about-eleven__info__content">
                  <h3 className="about-eleven__info__name">{name}</h3>
                  <div className="about-eleven__info__text">{infoText}</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutEleven;
