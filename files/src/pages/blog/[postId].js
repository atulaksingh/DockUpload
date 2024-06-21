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
import BlogPageData from "@/components/SidebarPageContainerTwo/BlogPageData";
import SidebarPageContainerTwo from "@/components/SidebarPageContainerTwo/SidebarPageContainerTwo";
import { useRouter } from "next/router";
import React from "react";

const BlogSingle = () => {
  const router = useRouter();
  const { postId } = router.query;
  // console.log("djjjjjj",router.query)
  return (
    <Layout pageTitle="Blog Details">
      <Style />
      <HeaderSix />
      <HeaderTwo />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Blog Details" page="Blog Details" />
      {/* <SidebarPageContainerTwo isDetails postId={postId} /> */}
      <BlogPageData postId={postId}/>
      <FooterSix />
    </Layout>
  );
};

export default BlogSingle;
