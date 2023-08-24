import Footer from '@/layouts/common/footer/Footer'
import Nav from '@/layouts/common/nav/Nav'
import PricingSection from '@/layouts/default-pricing-section/PricingSection'
import Features from '@/layouts/home-layouts/Features'
import React from 'react'

export default function Home() {
  return (
    <>
    <Nav />
    <Features />
    <PricingSection />
    <Footer />
    </>
  )
}
