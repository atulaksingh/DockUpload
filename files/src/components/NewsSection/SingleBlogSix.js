import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleBlogSix = ({ blog = {} }) => {
  const { image, admin, date, title, text } = blog;

  return (
    <Col md={12} lg={4}>
      <div className="blog-six__item">
        <div className="blog-six__image">
          <Image
            src={
              require(`@/images/update-01-10-2021/blog/${image}`).default.src
            }
            alt=""
          />
        </div>
        <div className="blog-six__content">
          <div className="blog-six__meta">
            <Link href="/" passHref>
              <i className="far fa-user-circle"></i>
              by {admin}
            </Link>{" "}
            <Link href="/" passHref>
              <i className="far fa-clock"></i>
              {date}
            </Link>
          </div>
          <h3 className="blog-six__title">
            <Link href="/blog-single">{title}</Link>
          </h3>
          <div className="blog-six__text">{text}</div>
        </div>
      </div>
    </Col>
  );
};

export default SingleBlogSix;
