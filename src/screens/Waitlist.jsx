import React from 'react'
import { BiDownArrowAlt } from 'react-icons/bi'
import { Link, Outlet } from 'react-router-dom'

const Waitlist = () => {
  return (
    <div className=" mt-40 mb-20 text-white " >
      <Link to='students' >
      <div className='flex justify-center px-5 sm:px-10 py-3 sm:py-5 sm:text-xl mx-auto hover:bg-[#ff9e3d] hover:cursor-pointer items-center mt-10 sm:mt-20  border-spacing-3 border-opacity-10 border border-grey  bg-orange rounded-lg w-fit ' >Join Students WaitList <BiDownArrowAlt className=' bg-white bg-opacity-0 mx-2 text-2xl -rotate-45' /> </div>
      </Link> <Link to='tutors' >
      <div className='flex justify-center px-5 sm:px-10 py-3 sm:py-5 sm:text-xl mx-auto hover:bg-[#ff9e3d] hover:cursor-pointer items-center mt-10 sm:mt-20  border-spacing-3 border-opacity-10 border border-grey  bg-orange rounded-lg w-fit ' >Join Tutors WaitList <BiDownArrowAlt className=' bg-white bg-opacity-0 mx-2 text-2xl -rotate-45' /> </div>
      </Link>

      <Outlet/>
   </div>
  )
}

export default Waitlist
