import React from 'react'
import { BiDownArrowAlt, } from 'react-icons/bi'
import {Link} from 'react-router-dom'
import {
  AttentionSeeker,
  Fade,
} from "react-awesome-reveal";

const Hero = () => {

  const months = ["January", "February", "March", 'April', "May", "June", "July", "August", "September", "October", "November", "December"]

  const date = new Date()
  const day = date.getDate()
  const month = months[date.getMonth()]

  return (
    <div className='mx-auto  sm:w-[70%] pt-20 sm:pt-40 bg-5 sm:pb-20 bg-image text-white '  >
      <AttentionSeeker direction='down' triggerOnce >
        
      <div className='flex bg-black w-fit py-3 items-center px-5 border-spacing-3 border-opacity-10  border-s border-t border-grey rounded-full mx-auto justify-center ' >
        <div className='w-5 h-5 flex items-center animate-pulse justify-center bg-malachite-600 bg-opacity-30 rounded-full ' ><div className='w-3 h-3 rounded-full bg-malachite-500  bg-opacity-50 animate-pulse ' ></div>
        </div>
        <div className='mx-2  xl:text-xl' >5 Spots Left</div>
      </div>
      </AttentionSeeker>
      <Fade direction='down' cascade triggerOnce  duration={3000} damping={0.2} >

      <div className=' flex justify-center items-center text-xl sm:text-4xl  xl:text-6xl font-bold ' >It's <span className='text-orange mx-4 my-8 ' >{month} {day.toString().padStart(2, 0)}</span></div>
      <div className='flex xl:text-7xl sm:text-5xl text-2xl justify-center items-center' >Your Idea <span className='animate-spin ' > ✦ </span> Is Reality </div>
      <div className=' flex justify-center items-center sm:text-lg mt-10 text-white text-opacity-70 max-w-[500px] text-center mx-auto '  >Join the waitlist today and recieve a free personalized study guide tailored to your academic needs</div>
      <Link to='/waitlist' >
      <div className='flex justify-center px-5 sm:px-10 py-3 sm:py-5 sm:text-xl mx-auto hover:bg-[#ff9e3d] hover:cursor-pointer items-center mt-10 sm:mt-20  border-spacing-3 border-opacity-10 border border-grey  bg-orange rounded-lg w-fit animate-bounce ' >Join WaitList <BiDownArrowAlt className=' bg-white bg-opacity-0 mx-2 text-2xl -rotate-45' /> </div>
      </Link>
      <div className=' w-fit mt-10 sm:mt-28 mx-auto text-white text-center sm:text-xl text-opacity-70  ' >Building the Future, One Platform at a Time</div>
      </Fade>
      <div className="wrapper sm:text-xl overflow-hidden font-bold flex w-full ">
        <div className="logos flex justify-around even:text-orange h-20 text-white my-5 sm:my-10  "> 
          <div className='w-[200px]' >Logo 1</div>
          <div className='w-[200px]' >Logo 2</div>
          <div className='w-[200px]' >Logo 3</div>
          <div className='w-[200px]' >Logo 4</div>
          <div className='w-[200px]' >Logo 5</div>
          <div className='w-[200px]' >Logo 6</div>
          <div className='w-[200px]' >Logo 7</div>
          <div className='w-[200px]' >Logo 8</div>
          <div className='w-[200px]' >Logo 9</div>
          <div className='w-[200px]' >Logo 10</div>
        </div>
      </div>
    </div>
  )
}

export default Hero
