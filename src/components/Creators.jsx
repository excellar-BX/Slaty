import React from 'react'
import { BiLogoLinkedin, } from 'react-icons/bi'
import pic1 from '../assets/img1.avif'
import pic2 from '../assets/img2.avif'
import { AttentionSeeker, Fade } from 'react-awesome-reveal'
import { TypeAnimation } from 'react-type-animation'

const Creators = () => {
  
  const Cards =[
    {logo:'Logo', img:pic1, review:"At 17, Rayan moved to London to study Mathematics at King’s College London, where he unknowingly met his future co-founder. After gaining invaluable experience across various roles in VC-backed startups, he co-founded AirMedia, facing the same hurdles many entrepreneurs encounter when building platforms. Now, Rayan is committed to using his firsthand startup experience to make other ideas possible, empowering aspiring founders to bring their visions to life.", name:"Rayan Zeggari", title:"Founder"},
    {logo:'Logo', img:pic2, review:"At 18, Walid moved to London to study Mathematics and Statistics at King's College London, where his journey as a builder began. During an exchange at UC Davis, he discovered his passion for coding, a skill that would later drive him to co-found AirMedia. Experiencing firsthand the challenges founders face in turning ideas into platforms, Walid is now dedicated to making the process simpler, faster, and more accessible for aspiring entrepreneurs. His mission? To help others turn their dreams into reality.", name:"Walid El Mouahidi", title:"Co-Founder"},
  ]


  return (
    <div className='my-40 text-white ' >
      <AttentionSeeker duration={2000} triggerOnce >
    <div className=' border-spacing-3 border-opacity-10 border border-grey py-2 px-5 w-fit mx-auto rounded-full ' >Our Creative Minds</div>
    </AttentionSeeker>
    <Fade triggerOnce cascade damping={0.2} direction='up' duration={2000} >
    <div className='text-2xl sm:text-4xl xl:text-6xl font-bold text-center leading-relaxed my-5 w-fit mx-auto ' >The People Behind the Magic</div>
    <div className='text-opacity-30 w-fit mx-auto sm:text-xl sm:max-w-[50%] text-center text-white ' >We’re real people building real solutions—no fluff, no corporate jargon, just results.</div>
    </Fade>
    <div className='flex lg:flex-row flex-col justify-center gap-10 mx-auto my-20 ' >
    <Fade cascade triggerOnce duration={2000} direction='left' damping={0.3} >
      {Cards.map((data, index)=>(
        <div key={index} className=' mx-auto text-center ' >
        <div><img className='rounded-3xl  max-w-[90%] w-full mx-auto sm:h-[600px]  ' src={data.img} alt="" /></div>
          <div className='text-xl sm:text-2xl mt-5 sm:mt-10  ' >{data.name}</div>
          <div className=' mx-auto text-3xl sm:text-5xl rounded-lg my-3 p-2 text-white bg-[#3e9eb9] w-fit ' ><BiLogoLinkedin /></div>
          <div className='sm:text-xl text-white text-opacity-50 sm:my-5 ' >{data.title}</div>
          <div className='sm:text-xl w-[90%] text-white text-opacity-70 px-5 ' >
         <div>{data.review}</div>
          </div>
        </div>
      ))}</Fade>
    </div>
    </div>
  )
}

export default Creators 