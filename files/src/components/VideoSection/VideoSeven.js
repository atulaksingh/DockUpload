import { videoSeven } from "@/data/videoSection";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import JarallaxImage from "../Jarallax/JarallaxImage";
import VideoModal from "../VideoModal/VideoModal";
import Link from "next/link";
const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

const { bg, title, videoId } = videoSeven;

const VideoSeven = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="video-seven">
        <Jarallax
          className="video-seven__parallax"
          speed={0.3}
          imgPosition="50% 80%"
        >
          <JarallaxImage src={bg.src} />
          <div className="video-seven__content">
            <div className="auto-container">
              <h3 className="video-seven__title">{title}</h3>
              <Link
                onClick={() => setOpen(true)}
                className="video-seven__btn lightbox-image"
              >
                <i className="fa fa-play"></i>
                <i className="ripple"></i>
              </Link>
            </div>
          </div>
        </Jarallax>
      </div>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default VideoSeven;
