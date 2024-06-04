
import AboutEleven from "@/components/AboutSection/AboutEleven";
import AboutTen from "@/components/AboutSection/AboutTen";
import CallToSectionFour from "@/components/CallToSection/CallToSectionFour";
import CanadaCard4 from "@/components/GlobalCounSection/Canada/CanadaCard4";
import CanadaMap from "@/components/GlobalCounSection/Canada/CanadaMap";
import ItBusiness from "@/components/GlobalCounSection/Canada/ItBusiness";
import ItSolution from "@/components/GlobalCounSection/Canada/ItSolution";
import TrustedIt from "@/components/GlobalCounSection/Canada/TrustedIt";
import WhyChooseUs from "@/components/GlobalCounSection/Canada/WhyChooseUs";
import HeaderEight from "@/components/Header/HeaderEight";
import HeaderSix from "@/components/Header/HeaderSix";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterEight from "@/components/MainFooter/FooterEight";
import MapSix from "@/components/MapSection/MapSix";
import BlogEight from "@/components/NewsSection/BlogEight";
import ProjectEight from "@/components/ProjectSection/ProjectEight";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServiceEight from "@/components/ServicesSection/ServiceEight";
import SliderEight from "@/components/SliderSection/SliderEight";
import SponsorEight from "@/components/SponsorsSection/SponsorEight";
import TestimonialsEight from "@/components/TestimonialsSection/TestimonialsEight";
import VideoSeven from "@/components/VideoSection/VideoSeven";
import weDOSection from "@/data/weDOSection";
import React from "react";
const CanadaData = {
  "title": "Your Trusted IT Service Provider & Solutions Company",
  "text": "As a premier IT service provider, Zaco Computers UK Limited is dedicated to delivering innovative IT business solutions tailored to meet the needs of businesses across the United Kingdom."
};
const CanadaDataITS = {
  "title": "Comprehensive IT Solutions Provider in the United Kingdom",
  "text": "At Zaco Computers UK Limited, we understand the challenges businesses face in today's digital landscape. That's why we offer a comprehensive suite of IT solutions designed to streamline operations, enhance productivity, and drive growth."
};
const CanadaDataTIT = {
  "title": "Your Trusted IT Partner – Zaco Computers UK Limited",
  "text": "From IT infrastructure management to software solutions and cybersecurity, we're here to support your business in every step of the way. Our team of experts is committed to delivering personalized service and tailored solutions that align with your unique goals and objectives."
};
const CanadaDataCard4 = {
  "title": "Managed IT Services in the United Kingdom",
  "text": "Experience peace of mind with our managed IT services. From proactive monitoring and maintenance to strategic planning and implementation, we handle all aspects of IT management so you can focus on what matters most – running your business. With our managed services, you can rest assured knowing that your IT infrastructure is in expert hands, allowing you to stay ahead of the competition and drive business success."
};
const {  UKWhyChooseData } =
  weDOSection;
function UK() {
  return (
    <>
      <Layout pageTitle="Home 08" >
        {/* <Style
          font="DM Sans, sans-serif"
          bFont="DM Sans, sans-serif"
          black="#182e65"
          text="#7c8498"
          base="#ffc001"
          baseRgb="255, 192, 1"
          scrollToTopColor="var(--thm-black)"
          blackRgb="24, 46, 101"
        /> */}
        <HeaderSix />
        <HeaderEight />
        <MobileMenu />
        <SearchPopup />
        <SliderEight />
        <ItBusiness canadaData={CanadaData}  />
        <ItSolution CanadaDataITS={CanadaDataITS}/>
        <TrustedIt CanadaDataTIT={CanadaDataTIT}/>
        <CanadaCard4 CanadaDataCard4={CanadaDataCard4}/>
        <WhyChooseUs title={"Why Choose Zaco Computers UK Limited?"} CanadaWhyChooseData={UKWhyChooseData}/>
        <CanadaMap />
        
        <FooterEight />
      </Layout>
    </>
  );
}

export default UK;
