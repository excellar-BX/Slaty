import React from 'react'

import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Works from '../components/Works'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import Reviews from '../components/Reviews'
import Creators from '../components/Creators'
import ProudWorks from '../components/ProudWorks'
import Faq from "../components/Faq";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <Hero/>
        <Works/>
        <Mission/>
        <ProudWorks/>
        <Services/>
        <Pricing/>
        <Faq/>
        
<section className="mx-auto w-full max-w-6xl py-16 text-white">
  <div className="mb-10 text-center">
    <h2 className="text-3xl font-bold sm:text-4xl">
      Explore Slaty
    </h2>
    <p className="mx-auto mt-4 max-w-2xl text-white/70">
      Whether you need academic support or want to help
      students learn, Slaty has a place for you.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-2">
    <article className="rounded-2xl border border-white/15 p-6 sm:p-8">
      <h3 className="text-2xl font-semibold">
        Find Online Tutoring
      </h3>
      <p className="mt-3 leading-7 text-white/70">
        Discover how Slaty helps students connect with tutors,
        understand difficult subjects, and get academic support.
      </p>
      <Link
        to="/online-tutoring"
        className="mt-6 inline-block rounded-lg bg-orange px-5 py-3 font-semibold text-black"
      >
        Explore Tutoring →
      </Link>
    </article>

    <article className="rounded-2xl border border-white/15 p-6 sm:p-8">
      <h3 className="text-2xl font-semibold">
        Become a Tutor
      </h3>
      <p className="mt-3 leading-7 text-white/70">
        Interested in teaching? Learn about Slaty and register
        your interest in supporting students.
      </p>
      <Link
        to="/become-a-tutor"
        className="mt-6 inline-block rounded-lg bg-orange px-5 py-3 font-semibold text-black"
      >
        Explore Tutoring Opportunities →
      </Link>
    </article>
  </div>
</section>

      {/*<Reviews/>*/}
      {/*<Creators/>*/}
    </div>
  )
}

export default Home
