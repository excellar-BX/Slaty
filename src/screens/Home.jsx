import React from 'react'

import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Works from '../components/Works'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import Reviews from '../components/Reviews'
import Creators from '../components/Creators'
import ProudWorks from '../components/ProudWorks'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Works/>
        <Mission/>
        <ProudWorks/>
        <Services/>
        <Pricing/>
        <Reviews/>
        <Creators/>
    </div>
  )
}

export default Home
