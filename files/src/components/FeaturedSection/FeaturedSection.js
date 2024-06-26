import featuredSection from "@/data/featuredSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { image, title, text,text2, features } = featuredSection;

const FeaturedSection = ({ className = "" }) => {
  return (
    <div className={`featured-section ${className}`}>
      <div className="auto-container">
        <Row className="row clearfix">
          <Col lg={6} md={12} sm={12} className="left-col">
            <div className="inner animated fadeInLeft">
              <div className="image-box">
                <Image src={image.src} alt="" />
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className="right-col">
            <div className="inner">
              <div className="sec-title">
                <h2>
                  {/* {title} */}
                  Meet Zaco<span>:</span> Your Gateway to Tech Brilliance
                  {/* <span className="dot">.</span> */}
                </h2>
                <div className="lower-text">{text}</div>
                <div className="lower-text">{text2}</div>
              </div>
              {/* <div className="features">
                <Row className="clearfix">
                  {features.map(({ id, title, text }) => (
                    <Col key={id} md={6} sm={12} className="feature">
                      <div className="inner-box">
                        <h6>{title}</h6>
                        <div className="text">{text}</div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div> */}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FeaturedSection;
