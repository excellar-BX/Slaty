import React from 'react'
import Helmet from "react-helmet"

const StudentWaitList = () => {
  return (
    <div className=" mt-40" id='students' >
      <div className="text-xl text-white my-10 text-center " >Join our Students waitlist</div>
      <div id="getWaitlistContainer" className=' my-10 items-center justify-center mx-auto ' data-waitlist_id="23213" data-widget_type="WIDGET_1"></div>
      <Helmet>
      <link rel="stylesheet" type="text/css" href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"/>
      <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
      </Helmet>

      Link to='/waitlist/tutors' >
      <div className='flex justify-center px-5 sm:px-10 py-3 sm:py-5 sm:text-xl mx-auto hover:bg-[#ff9e3d] hover:cursor-pointer items-center mt-10 sm:mt-20  border-spacing-3 border-opacity-10 border border-grey  bg-orange rounded-lg w-fit ' >Join Students WaitList <BiDownArrowAlt className=' bg-white bg-opacity-0 mx-2 text-2xl -rotate-45' /> </div>
      </Link>
   </div>
  )
}

export default StudentWaitList
