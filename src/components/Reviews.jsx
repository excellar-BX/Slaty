import React from 'react'
import { AttentionSeeker, Fade } from 'react-awesome-reveal'
import { BiSolidStar } from 'react-icons/bi'

const Reviews = () => {

  
  const Cards =[
    {logo:'Logo', review:"The speed and quality at which the QuickMVP team was able to transform my idea into a product was impressing.", name:"Marwan Zeggari", title:"Founder"},
    {logo:'Logo', review:"Before launching QuickMVP, we learned the hard way. Now, we use those skills to help aspiring entrepreneurs bring their ideas to life faster and smarter.", name:"Walid El Mouahidi", title:"Co-Founder"},
    {logo:'Logo', review:"We needed an MVP to pitch our ideas to investors and the team delivered in a week - never seen that before. Truly inspiring.", name:"Amir Faharani", title:"Co-founder"},
  ]


  return (
    <div className='text-white' >
      <AttentionSeeker triggerOnce duration={2000} >
    <div className=' border-spacing-3 border-opacity-10 border border-grey py-2 px-5 w-fit mx-auto rounded-full ' > What Our Users Say</div>
    </AttentionSeeker>
    <Fade triggerOnce direction='up' duration={2000} >
    <div className='text-2xl sm:text-4xl xl:text-6xl font-bold text-center leading-relaxed mt-10 mb-20 w-fit mx-auto ' >Trusted by Aspiring entrepreneurs Like You</div>
    </Fade>
    <div className="flex flex-wrap justify-center "> 
      <Fade direction='up' cascade triggerOnce duration={2000} className='even:border-x-2 border-h border-opacity-50 border-white ' >
      {Cards.map((data,index)=> (
        <div key={index} className='xl:w-[500px] w-[90%] mx-auto even:border-x-2 border-h border-opacity-50 border-white flex flex-col items-center ' >
          <div className='text-xl my-10 ' >{data.logo}</div>
          <div className="flex w-[20%] text-orange mb-5 justify-between "><BiSolidStar/><BiSolidStar/><BiSolidStar/><BiSolidStar/><BiSolidStar/></div>
          <div className='xl:text-2xl h-[200px] w-[90%] text-center mx-auto text-white text-opacity-50 ' >"{data.review}"</div>
          <div className='text-2xl font-bold ' >{data.name}</div>
          <div className=' text-xl text-white text-opacity-50 ' >{data.title}</div>
        </div>
      ))}
      </Fade>
    </div>
    </div>
  )  
}

export default Reviews 