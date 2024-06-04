import NewBanner from '@/components/BannerSection/NewBanner'
import PageBanner from '@/components/BannerSection/PageBanner'
import CallToSectionTwo from '@/components/CallToSection/CallToSectionTwo'
import ContactSectionTwo from '@/components/ContactSection/ContactSectionTwo'
import FaqsSection from '@/components/FaqsSection/FaqsSection'
import FeatureEight from '@/components/FeaturesSection/FeatureEight'
import HeaderTwo from '@/components/Header/HeaderTwo'
import MobileMenu from '@/components/Header/MobileMenu'
import HistoryTimeline from '@/components/HistorySection/HistoryTimeline'
import Layout from '@/components/Layout/Layout'
import FooterSix from '@/components/MainFooter/FooterSix'
import Style from '@/components/Reuseable/Style'
import SearchPopup from '@/components/SearchPopup/SearchPopup'
import React from 'react'

function itequipmentbuyback() {
    return (
        <>

            <Layout pageTitle="Services">
                <Style />

                <HeaderTwo />
                <MobileMenu />
                <SearchPopup />
                <NewBanner title="IT Asset Disposition Services" title2="We offer best price for disposing your IT hardware" />
                <ContactSectionTwo />
                {/* <FeatureEight /> */}
                <FaqsSection />
                <HistoryTimeline />
                <CallToSectionTwo className="alternate" />
                <FooterSix />
            </Layout>
        </>
    )
}

export default itequipmentbuyback