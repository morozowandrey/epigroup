import React, { useEffect } from 'react'
import loadable from '@loadable/component'

import Layout from '../layout'
import Hero from '../components/hero'
import About from '../components/about'
import Contact from '../components/contact'
import ExtraServices from '../components/extra-services.js'
import Results from '../components/results'
import Footer from '../components/footer'
import Header from '../components/header'

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

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

  useEffect(() => {
    ScrollTrigger.matchMedia({
      '(min-width: 880px) and (max-width: 1440px)': function () {
        // gsap.to(animationWrap.current, {
        //   xPercent: -62.4,
        //   ease: 'none',
        //   scrollTrigger: {
        //     trigger: horisontalSlider.current,
        //     start: 'top 100px',
        //     end: '+=100%',
        //     scrub: 0.5,
        //     pin: true,
        //     pinSpacing: true,
        //     anticipatePin: 1,
        //   },
        // })
      },
    })
  }, [])

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
