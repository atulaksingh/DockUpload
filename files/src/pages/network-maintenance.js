import AboutSection from "@/components/AboutSection/AboutSection";
import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSix from "@/components/MainFooter/FooterSix";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import Introduction from "@/components/network_maintenance/Introduction";
import ServiceCard from "@/components/network_maintenance/ServiceCard";
import Support from "@/components/network_maintenance/Support";
import React from "react";

function networkMaintenance() {
  return (
    <>
      <Layout pageTitle="Services">
        <Style />

        <Style />
        <HeaderTwo />
        <MobileMenu />
        <SearchPopup />
        <PageBanner title="IT Network Support and Maintenance" />
        <Introduction />
        <ServiceCard />
        <Support />
        <CallToSectionTwo className="alternate" />
        <FooterSix />
      </Layout>
    </>
  );
}

export default networkMaintenance;
