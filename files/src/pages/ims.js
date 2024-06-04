import AboutMeOne from "@/components/AboutSection/AboutMeOne";
import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import ImsBenefits from "@/components/IT_IMS/ImsBenefits";
import ImsWhyChosse from "@/components/IT_IMS/ImsWhyChosse";
import ImsWhyOpt from "@/components/IT_IMS/ImsWhyOpt";
import ImsWhyOpt1 from "@/components/IT_IMS/ImsWhyOpt1";
import IntroductionIMS from "@/components/IT_IMS/IntroductionIMS";
import Layout from "@/components/Layout/Layout";
import FooterSix from "@/components/MainFooter/FooterSix";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import IHSS from "@/components/service_Card/IHSS";
import React from "react";

function ims() {
  return (
    <>
      <Layout pageTitle="Services">
        <Style />

        <Style />
        <HeaderTwo />
        <MobileMenu />
        <SearchPopup />
        <PageBanner title="IT Infrastructure Managed Services" />

        <IntroductionIMS />
        <ImsBenefits />
        <ImsWhyChosse />
        <ImsWhyOpt />
        <ImsWhyOpt1 />

        <CallToSectionTwo className="alternate" />
        <FooterSix />
      </Layout>
    </>
  );
}

export default ims;
