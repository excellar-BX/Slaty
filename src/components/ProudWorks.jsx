import React, { useState } from 'react'
import { AttentionSeeker, Fade } from 'react-awesome-reveal'
import pic1 from '../assets/img1.avif'
import pic2 from '../assets/img2.avif'
import pic3 from '../assets/dots.png'

const ProudWorks = () => {

  const Works = [
    { title: 'AirMedia', description: 'Helping businesses automate and optimise their social media presence effortlessly.', summary:'AI Assistant for Social Media', imgsrc: pic1 },
    { title: 'Lyzis Labs', description: 'A secure, decentralised platform connecting buyers and sellers in the luxury watch market.', summary:'Web3-Based Watch Marketplace', imgsrc: pic2 },
    { title: 'FieldHawk', description: 'Empowering farmers with actionable insights and automation to enhance productivity and efficiency.', summary:'AI-Powered Analytics for Farmers', imgsrc: pic3 },
  ]
  const [imgSrc, setImgSrc] = useState(pic1)

  return (
    <div id='works' className='text-white' >
      <AttentionSeeker duration={2000} triggerOnce>
        <div className=' border-spacing-3 border-opacity-10 border border-grey py-2 px-5 w-fit mx-auto rounded-full ' > Work That Make Us Proud</div>
      </AttentionSeeker>
      <div className='text-2xl sm:text-4xl xl:text-6xl font-bold text-center my-10 ' >Recent Works, AI-centered.</div>
      <div className='flex flex-col-reverse lg:flex-row gap-10 lg:h-[500px] my-20 transition-all ease-in-out duration-700 ' >
        <div className='lg:w-[50%] mx-auto ' >
          {Works.map((data, index) => (
          <div className={`${data.imgsrc === imgSrc? 'border-l-orange border-l border-b h-[200px] ' : 'h-[80px] ' } overflow-hidden cursor-pointer pt-10 pb-20 `} onClick={() => { setImgSrc(data.imgsrc) }} key={index} >
            <div className="details mx-5 sm:mx-10 ">
              <div className={`flex ${data.imgsrc === imgSrc && 'justify-between items-center '} justify-normal items-baseline  `} >
              <div className={`${data.imgsrc === imgSrc ? 'mb-0 ' : 'mb-28'} w-fit text-xl sm:text-3xl font-bold`} >{data.title}</div>
              <div className={`${data.imgsrc === imgSrc ? 'block' : 'hidden'} mx-5 text-white text-opacity-50 text-sm sm:text-lg `} >Try {data.title}</div>
              <div className={`${data.imgsrc === imgSrc ? 'hidden' : 'block'} mx-2 sm:mx-10 text-white text-opacity-50 text-sm sm:text-lg `} >{data.summary}</div>
            </div>
            <div className={`${data.imgsrc === imgSrc && 'h-20'} text-sm sm:text-xl mt-5 mb-10 sm:mb-20 text-white text-opacity-50 `} >{data.description}</div>
            </div>
          </div>
        ))}</div>
        <Fade duration={2000} direction='right' className='h-full bg-grey bg-opacity-10 rounded-3xl lg:w-[40%] p-3 sm:p-10  border-spacing-3 border-opacity-10 border border-grey ' >
          <img className='h-full rounded-3xl w-full object-cover  border-spacing-3 border-opacity-10 border border-grey ' src={imgSrc} alt="" />
          </Fade>
      </div>
    </div>
  )
}

export default ProudWorks
