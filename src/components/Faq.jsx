import React from 'react'
import Accordion from './Accordion'
import { AttentionSeeker, Fade } from 'react-awesome-reveal'

const Faq = () => {
  return (
    <div className='text-white' >
      <AttentionSeeker duration={2000} triggerOnce >
    <div className=' border-spacing-3 border-opacity-10 border border-grey py-2 px-5 w-fit mx-auto rounded-full ' >Need to Know</div>
    </AttentionSeeker>
    <Fade direction='up' cascade damping={0.3} triggerOnce duration={2000} >
    <div className='text-2xl sm:text-4xl xl:text-6xl font-bold text-center leading-relaxed my-10 w-fit mx-auto ' >Frequently Asked Questions</div>
    <Accordion title='What’s included in the MVP?' text='Your MVP includes a fully functional SaaS platform built on Bubble (for the no-code plan). It features essential user flows, core functionalities, responsive design, and robust testing to ensure a seamless user experience. Think of it as your launch-ready foundation.' />
    <Accordion title='What is the AirMedia yearly subscription?' text='The AirMedia subscription, worth $480, provides an AI social media assistant to jumpstart your marketing efforts. As part of our one-stop shop, this tool gives you a strong foundation to grow your online presence, engage your audience, and scale your business effectively—without needing extra resources or expertise.' />
    <Accordion title='How does the 30-day timeline work?' text='We start with a strategy session and a one-day feasibility study. Then, our team designs and develops your platform using agile methods to ensure completion within 30 days. Regular updates keep you involved every step of the way.' />
    <Accordion title='How does the payment structure work?' text='Our pricing is designed to provide flexibility while ensuring simplicity. All plans start with a minimum of two installments:  Pay in 2 Installments: Split the cost into two equal payments—50% upfront and 50% on delivery. Pay in 4, 6, or 12 Installments: If you prefer smaller payments over time, you can spread the cost further with a small incremental fee. The first payment is always made upfront, and the rest is divided into equal monthly payments. By default, you pay 50% upfront, but we offer additional flexibility to suit your financial needs. Each option is transparent, with no hidden fees, so you can focus on bringing your idea to life.' />
    <Accordion title='Can I request changes after the project is delivered?' text={`Yes! We offer ongoing support and post-launch services to refine and scale your platform. Whether it's minor tweaks or new features, we’re here to help you grow.`} />
    </Fade>
    </div>
  )
}

export default Faq 