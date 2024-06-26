import { aboutNine } from "@/data/aboutSection";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";

const { image, icon, title, titleHighlight, text, lists } = aboutNine;

const AboutNine = () => {
  return (
    <div className="about-nine">
      <div className="auto-container">
        <Row>
          <Col lg={6} className="animated fadeInLeft">
            <div className="about-nine__image">
              <Image src={image.src} alt="" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-nine__content">
              <div className="about-nine__icon">
                <i className={icon}></i>
              </div>
              <h3 className="about-nine__title">
                {title.split(" ").map((t, i) => (
                  <Fragment key={i}>
                    {t === titleHighlight ? <span>{t}</span> : t}{" "}
                  </Fragment>
                ))}
              </h3>
              <div className="about-nine__summery">{text}</div>
              <ul className="list-unstyled about-nine__list">
                {lists.map((text, i) => (
                  <li key={i}>
                    <i className="flaticon-check"></i>
                    {text}
                  </li>
                ))}
              </ul>

              <Link href="/" className="about-nine__btn thm-btn__seven" passHref>
                <a>Get Started</a> 
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutNine;
