import AboutSection from '@/components/AboutSection/AboutSection'
import AboutTen from '@/components/AboutSection/AboutTen'
import PageBanner from '@/components/BannerSection/PageBanner'
import CallToSectionTwo from '@/components/CallToSection/CallToSectionTwo'
import HeaderTwo from '@/components/Header/HeaderTwo'
import MobileMenu from '@/components/Header/MobileMenu'
import Layout from '@/components/Layout/Layout'
import FooterSix from '@/components/MainFooter/FooterSix'
import Style from '@/components/Reuseable/Style'
import SearchPopup from '@/components/SearchPopup/SearchPopup'
import Card1 from '@/components/server_maintenance/Card1'
import Card2 from '@/components/server_maintenance/Card2'
import Introduction from '@/components/network_maintenance/Introduction'
import ServiceCard from '@/components/network_maintenance/ServiceCard'
import Support from '@/components/network_maintenance/Support'
import React from 'react'
import StorageIntroduction from '@/components/storage_maintanance/StorageIntroduction'
import StorageService from '@/components/storage_maintanance/StorageService'
import StorageWhyZaco from '@/components/storage_maintanance/StorageWhyZaco'

function storageMaintenance() {
  return (
    <>
     <Layout pageTitle="Services">
        <Style />

        <Style />
        <HeaderTwo />
        <MobileMenu />
        <SearchPopup />
        <PageBanner title="Storage Maintenance Services" />
        <StorageIntroduction />
        <StorageService />
        <StorageWhyZaco />
        <CallToSectionTwo className="alternate" />
        <FooterSix />
      </Layout>
    </>
  )
}

export default storageMaintenance