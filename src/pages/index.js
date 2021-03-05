import React from 'react'
import loadable from '@loadable/component'

import Layout from '../layout'
import Hero from '../components/hero'
import About from '../components/about'
import Contact from '../components/contact'
import ExtraServices from '../components/extra-services.js'
import Results from '../components/results'
import Footer from '../components/footer'
import Header from '../components/header'

// This dynamic imports will not be processed server-side
const LoadableActivitySlider = loadable(
  () => import('../components/activity-slider'),
  {
    ssr: false,
  }
)
const LoadableTradeInvestments = loadable(
  () => import('../components/trade-investments'),
  {
    ssr: false,
  }
)

export default function Index() {
  if (typeof window !== 'undefined') {
    // Make scroll behavior of internal links smooth
    require('smooth-scroll')('a[href*="#"]')
  }

  return (
    <Layout>
      <Header />
      <Hero />
      <About />
      <LoadableActivitySlider />
      <LoadableTradeInvestments />
      <ExtraServices />
      <Results />
      <Contact />
      <Footer />
    </Layout>
  )
}
