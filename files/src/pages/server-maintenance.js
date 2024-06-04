import AboutMeOne from "@/components/AboutSection/AboutMeOne";
import AboutSection from "@/components/AboutSection/AboutSection";
import AboutTen from "@/components/AboutSection/AboutTen";
import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import FeatureEight from "@/components/FeaturesSection/FeatureEight";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSix from "@/components/MainFooter/FooterSix";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import Card1 from "@/components/server_maintenance/Card1";
import Card2 from "@/components/server_maintenance/Card2";
import IHSS from "@/components/service_Card/IHSS";
import React from "react";

function serverMaintenance() {
  return (
    <>
      <Layout pageTitle="Services">
        <Style />

        <Style />
        <HeaderTwo />
        <MobileMenu />
        <SearchPopup />
        <PageBanner title="Server Maintenance Services" />
        <AboutSection />
        <Card1 />
        <AboutTen />
        <Card2 />
        <CallToSectionTwo className="alternate" />
        <FooterSix />
      </Layout>
    </>
  );
}

export default serverMaintenance;
