import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

const NewsBlockTwo = ({ news = {}, handleOpen }) => {
  const { image, date, admin, comments, title, text, showVideo ,author,content,created_at,id,featured_image} = news;
  console.log("aaa",news)
  const [dateString, setDateString] = useState('');

useEffect(() => {
  // Function to parse and format the date
  const formatDate = (created_at) => {
    const dateObject = new Date(created_at);
    const year = dateObject.getUTCFullYear();
    const month = String(dateObject.getUTCMonth() + 1).padStart(2, '0');
    const day = String(dateObject.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Set the formatted date string
  setDateString(formatDate(created_at));
}, [created_at]); // Dependency array to re-run the effect if timestamp changes

  return (
    <div className="news-block-two">
      <div className="inner-box">
        <div className="image-box">
          <Link href="/blog-single" passHref>
          
              <Image
                src={featured_image}
                alt=""
              />

          </Link>
          {showVideo && (
            <div onClick={handleOpen} className="vid-link lightbox-image">
              <div className="icon">
                <span className="flaticon-play-button-1"></span>
              </div>
            </div>
          )}
        </div>
        <div className="lower-box">
          <div className="post-meta">
            <ul className="clearfix">
              <li>
                <span className="far fa-clock"></span> {dateString}
              </li>
              <li>
                <span className="far fa-user-circle"></span> {author}
              </li>
              <li>
                <span className="far fa-comments"></span> {comments?.length} Comments
              </li>
            </ul>
          </div>
          <h4>
            <Link href={`/blog-single/${id}`} passHref>{title}</Link>
          </h4>
          <div className="text">{content}</div>
          <div className="link-box">
            <Link href={`/blog-single/${id}`} passHref>
              <div className="theme-btn">Read More</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBlockTwo;