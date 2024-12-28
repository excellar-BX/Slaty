import React, { useState } from 'react'
import { AttentionSeeker, Fade } from 'react-awesome-reveal'
import pic1 from '../assets/img1.avif'
import pic2 from '../assets/img2.avif'
import pic3 from '../assets/dots.png'

const ProudWorks = () => {

  const Works = [
    { title: 'Term Paper', description: 'A detailed academic essay that involves research on a specific topic, demonstrating understanding through structured arguments, analysis, and proper citations.', summary:'A topic research feature', imgsrc: pic1 },
    { title: 'Book Review', description: 'A critical analysis of a book, summarizing its content, themes, and evaluating its strengths and weaknesses, offering recommendations to potential readers.', summary:'A critical analytic tool for books', imgsrc: pic2 },
    { title: 'Project Writing', description: "A structured report outlining a project's research, methodology, analysis, and conclusions, often with data and recommendations.", summary:" Report for outlining a project's research", imgsrc: pic3 },
  ]
  const [imgSrc, setImgSrc] = useState(pic1)

  return (
    <div id='works' className='text-white' >
      <AttentionSeeker duration={2000} triggerOnce>
        <div className=' border-spacing-3 border-opacity-10 border border-grey py-2 px-5 w-fit mx-auto rounded-full ' > Literary writings</div>
      </AttentionSeeker>
      <div className='text-2xl sm:text-4xl xl:text-6xl font-bold text-center my-10 ' >Recent Features for Students.</div>
      <div className='flex flex-col lg:flex-row gap-10 lg:h-[500px] my-20 transition-all ease-in-out duration-700 ' >
        <div className='lg:w-[50%] mx-auto ' >
          {Works.map((data, index) => (
          <div className={`${data.imgsrc === imgSrc? 'border-l-orange border-l border-b h-fit pb-5 ' : 'h-[80px] ' } overflow-hidden cursor-pointer pt-10 pb-20 `} onClick={() => { setImgSrc(data.imgsrc) }} key={index} >
            <div className="details mx-5 sm:mx-10 ">
              <div className={`flex ${data.imgsrc === imgSrc && 'justify-between items-center '} justify-normal items-baseline  `} >
              <div className={`${data.imgsrc === imgSrc ? 'mb-0 ' : 'mb-28'} w-fit text-xl sm:text-3xl font-bold`} >{data.title}</div>
              <div className={`${data.imgsrc === imgSrc ? 'block' : 'hidden'} mx-5 text-white text-opacity-70 text-sm sm:text-lg `} >Try {data.title}</div>
              <div className={`${data.imgsrc === imgSrc ? 'hidden' : 'block'} mx-2 sm:mx-10 text-white text-opacity-70 text-sm sm:text-lg `} >{data.summary}</div>
            </div>
            <div className={`${data.imgsrc === imgSrc && 'h-20'} text-sm sm:text-xl mt-5 mb-10 sm:mb-20 text-white text-opacity-50 `} >{data.description}</div>
            </div>
          </div>
        ))}</div>
        {/*
        <Fade duration={2000} direction='right' className='h-full bg-grey bg-opacity-10 rounded-3xl lg:w-[40%] p-3 sm:p-10  border-spacing-3 border-opacity-10 border border-grey ' >
          <img className='h-full rounded-3xl w-full object-cover  border-spacing-3 border-opacity-10 border border-grey ' src={imgSrc} alt="" />
          </Fade>*/}
      </div>
    </div>
  )
}

export default ProudWorks
