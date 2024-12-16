import React from 'react'
import { AttentionSeeker, Fade } from 'react-awesome-reveal'

const Services = () => {

  
  const Cards =[
    {title:'Rapid Build', info:'We build your SaaS using Bubble efficient no-code platform tools.', },
    {title:'Custom Projects', info:'We craft custom code precisely for your unique project requirements.',  },
    {title:'AI Applications', info:'Specialising in AI platforms that innovate and transform industries.',  },
  ]
  const CardsBtn = ["AI-Driven Platforms", " Web 3 Integrations", "Marketplaces", "Data Insight", "Analytics", "Security", "Collaboration", "Maintenance"]

  return (
    <div className='text-white' >
      <AttentionSeeker duration={2000} triggerOnce >
      <div className=' border-spacing-3 border-opacity-10 border border-grey py-2 px-5 w-fit mx-auto rounded-full ' > Our Services</div>
      </AttentionSeeker>  
      <Fade triggerOnce cascade duration={1500} damping={0.2} direction='up' >
      <div className='text-2xl sm:text-4xl xl:text-6xl font-bold text-center my-10 ' >Build. Launch. Succeed.</div>
      <div className='text-opacity-30 w-fit mx-auto sm:text-xl sm:max-w-[50%] text-center text-white ' >We create your SaaS product quickly and efficiently. Post-launch, we empower you with marketing tools like AirMedia to achieve success.</div>
      </Fade>
      <div className="card grid sm:grid-cols-2 xl:grid-cols-3 justify-center gap-10 my-20 ">
        <Fade cascade damping={0.2} triggerOnce duration={2000} direction='up' >
        {Cards.map((data, index) => (
          <div key={index} className='h-[400px] sm:h-[500px] rounded-2xl p-10 w-[90%] mx-auto  sm:w-[380px] border-spacing-3 border-opacity-10 border border-grey bg-white bg-opacity-10 ' >
            <div className='text-center text-2xl sm:text-4xl font-bold  my-5 sm:my-10 ' >{data.title}</div>
            <div className='h-[50%] bg-black border-spacing-3 border-opacity-10 border border-grey rounded-2xl mb-10 justify-center items-center flex ' ><div className='w-20 h-20 rounded-full text-3xl bg-orange' ></div></div>
            <div className='text-white text-sm sm:text-xl text-opacity-30 text-center mt-10 ' >{data.info}</div>
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
      </div>
    </div>
  )
}

export default Services 