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
  "title": "Your IT Business Solutions Partner - Zaco",
  "text": "At Zaco, we understand the unique challenges and opportunities that businesses face in today's rapidly evolving digital landscape. As your dedicated IT solutions company, we are committed to empowering your success through innovative technology solutions tailored to your needs."
};
const CanadaDataITS = {
  "title": "Comprehensive IT Solutions in Canada",
  "text": "From cutting-edge hardware to bespoke software solutions, Zaco offers a comprehensive suite of IT solutions designed to drive efficiency, productivity, and growth for your business. Whether you're a small startup or a large enterprise, our team of IT experts is here to help you harness the full potential of technology to achieve your business objectives."
};
const CanadaDataTIT = {
  "title": "Trusted IT Solutions Provider in Canada",
  "text": "With years of experience and a proven track record of success, Zaco has earned a reputation as a trusted IT solutions provider in Canada and beyond. Our commitment to excellence, integrity and customer satisfaction sets us apart, ensuring that you receive the highest quality service and support every step of the way."
};
const CanadaDataCard4 = {
  "title": "Managed IT Services: Your Success Partner in Canada",
  "text": "Zaco Computers provides cutting-edge managed IT services, offering proactive monitoring, maintenance and support for your entire IT infrastructure. Our team of dedicated experts ensures your systems are always optimized, allowing you to focus on business growth. With predictable pricing and scalable solutions, we prioritize cost efficiency and adaptability. Partnering with us means gaining access to robust security measures, and safeguarding your data from cyber threats. From proactive maintenance to strategic planning, we handle IT complexities, empowering you to drive your business forward. With Zaco as your trusted managed IT solutions provider, you can enjoy peace of mind knowing your technology is in capable hands. Experience unparalleled support and reliability with Zaco Computers – your pathway to seamless IT management and business success."
};
const {  CanadaWhyChooseData } =
  weDOSection;
function canada() {
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
        <WhyChooseUs title={"Why Choose Zaco?"} CanadaWhyChooseData={CanadaWhyChooseData}/>
        <CanadaMap />
        
        <FooterEight />
      </Layout>
    </>
  );
}

export default canada;
