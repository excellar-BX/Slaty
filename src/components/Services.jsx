import React from 'react'
import { AttentionSeeker, Fade } from 'react-awesome-reveal'

const Services = () => {

  
  const Cards =[
    {title:'Mission Statement', info:'Slaty empowers students to overcome academic challenges with tools that inspire focus, motivation, and success. Together, we help every student thrive.',  },
    {title:'Vision Statement ', info:'To empower students to achieve academic success and personal growth by providing innovative tools, personalized support, and opportunities for learning and mentorship, fostering a community where everyone can thrive.  ',  },
    {title:'Live Classes', info:'With Slaty, a tutor is always available to support your academic needs. Access live, real-time classes anytime, and get personalized help to excel in your studies.', },
  ]
  const CardsBtn = ["AI-Driven Platforms", "Research", "Marketplaces", "Data Insight", "Analytics", "Security", "Collaboration", "Maintenance"]

  return (
    <div className='text-white' >
      <AttentionSeeker duration={2000} triggerOnce >
      <div className=' border-spacing-3 border-opacity-10 border border-grey py-2 px-5 w-fit mx-auto rounded-full ' > Our Services</div>
      </AttentionSeeker>  
      <Fade triggerOnce cascade duration={1500} damping={0.2} direction='up' >
      <div className='text-2xl sm:text-4xl xl:text-6xl font-bold text-center my-10 ' >Build. Research. Succeed.</div>
      <div className='text-opacity-30 w-fit mx-auto sm:text-xl sm:max-w-[50%] text-center text-white ' >Sign up today to start tutoring and earning!</div>
      </Fade>
      <div className="card grid sm:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-10 my-20 ">
        <Fade duration={2000} direction='up' damping={0.3} triggerOnce cascade > 
        {Cards.map((data, index) => (
          <div key={index} className='sm:h-[400px] h-[350px] border-spacing-3 relative overflow-hidden border-opacity-10 border border-grey rounded-xl p-10 w-[300px] mx-auto lg:w-[380px] sm:w-[400px] justify-center items-center bg-white bg-opacity-5 ' >
            <div className='text-center text-2xl sm:text-3xl font-bold  mb-5 ' >{data.title}</div>
            <div className={`  w-20 h-20 absolute blur-[90px] mx-auto -top-[20%] left-[30%] bg-white `}  ></div>
            <div className='text-white text-sm sm:text-lg text-opacity-30 h-[50%] flex items-baseline text-center sm:mt-5 ' >{data.info}</div>
          </div>
        ))}
        </Fade>
      </div>
      <div className='flex flex-wrap justify-center gap-5 ' >
        <Fade cascade triggerOnce damping={0.2} >
        {CardsBtn.map(data=> (
          <div className='  py-4 px-5 bg-grey bg-opacity-5 border-spacing-3 border-opacity-10 border overflow-hidden relative border-grey rounded-xl w-fit ' >
            <div className={`  w-5 h-5 absolute blur-[30px] mx-auto -top-[20%]  bg-white `}  ></div>
            {data}</div>
        ))}
        </Fade>
        
        
        <div className='text-opacity-30 flex w-fit my-10 mx-auto sm:text-xl sm:max-w-[50%] text-center text-white ' >  
        <Fade cascade triggerOnce damping={0.2} >
        <div className='mx-0.5 ' >Get </div>
        <div className='mx-0.5 ' >expert </div>
        <div className='mx-0.5 ' >guidance </div>
        <div className='mx-0.5 ' >whenever </div>
        <div className='mx-0.5 ' >you </div>
        <div className='mx-0.5 ' >need </div>
        <div className='mx-0.5 ' >it! </div>
        </Fade>
        </div>
      </div>
    </div>
  )
}

export default Services 