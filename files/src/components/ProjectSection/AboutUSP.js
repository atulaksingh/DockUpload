


import { projectEight, projectUSP } from "@/data/projectSection";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay]);

const options = {
  spaceBetween: 30,
  slidesPerView: 2,
  autoplay: { delay: 2000 },
  

  // loop:true,
  
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
  },
};

const { tagline, title, projects } = projectUSP;
const AboutUSP = () => {
  return (
    <div className="project-eight">
      <div className="auto-container ">
       <div className="py-14">
       <div className="sec-title-eight text-center">
          {/* <div className="sec-title-eight__text">{tagline}</div> */}
          <h2 className="sec-title-eight__title pb-3">{title}</h2>
        </div>
        <Swiper {...options} className="thm-swiper__slider">
          <div className="swiper-wrapper" style={{borderRadius:"100px"}}>
            {projects.map(({ id, image, title,href }) => (
              <SwiperSlide key={id}>
                <div className="project-eight__item">
                  <Image
                    src={
                      require(`@/images/zaco/ABOUTUS/${image}`)
                        .default.src
                    }
                    alt=""
                  />
                  <div className="project-eight__content">
                    <Link href={href} passHref>
                      <div className="project-eight__link">
                        <i className="flaticon-right-arrow"></i>
                      </div>
                    </Link>
                    <h3 className="project-eight__title">
                      <Link href={href} passHref>{title}</Link>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
       </div>
      </div>
    </div>
  );
};

export default AboutUSP;
