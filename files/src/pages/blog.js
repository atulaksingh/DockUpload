import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import HeaderSix from "@/components/Header/HeaderSix";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSix from "@/components/MainFooter/FooterSix";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SidebarPageContainerTwo from "@/components/SidebarPageContainerTwo/SidebarPageContainerTwo";
import React from "react";

function blog() {
  return (
    <>
      <Layout pageTitle="Blog Sidebar">
        <Style />
        <HeaderSix />
        <HeaderTwo />
        <MobileMenu />
        <SearchPopup />
        <PageBanner title="Blog Posts" />
        <SidebarPageContainerTwo />
        <FooterSix />
      </Layout>
    </>
  );
}

export default blog;
