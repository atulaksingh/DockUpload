import PageBanner from '@/components/BannerSection/PageBanner'
import CallToSectionTwo from '@/components/CallToSection/CallToSectionTwo'
import HeaderTwo from '@/components/Header/HeaderTwo'
import MobileMenu from '@/components/Header/MobileMenu'
import Layout from '@/components/Layout/Layout'
import FooterSix from '@/components/MainFooter/FooterSix'
import Style from '@/components/Reuseable/Style'
import SearchPopup from '@/components/SearchPopup/SearchPopup'
import RantalIntro from '@/components/rental_services/RantalIntro'
import RantleBenefit from '@/components/rental_services/RantleBenefit'
import RantleWhy from '@/components/rental_services/RantleWhy'
import StorageIntroduction from '@/components/storage_maintanance/StorageIntroduction'
import StorageService from '@/components/storage_maintanance/StorageService'
import StorageWhyZaco from '@/components/storage_maintanance/StorageWhyZaco'
import React from 'react'

function rentalServices() {
  return (
   <>
    <Layout pageTitle="Services">
        <Style />

        <Style />
        <HeaderTwo />
        <MobileMenu />
        <SearchPopup />
        <PageBanner title="Server Rental Services" />
        <RantalIntro />
        <RantleWhy />
        <RantleBenefit />
        
        <CallToSectionTwo className="alternate" />
        <FooterSix />
      </Layout>
   </>
  )
}

export default rentalServices