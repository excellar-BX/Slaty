import React from 'react'
import Helmet from "react-helmet"

const Waitlist = () => {
  return (
    <div className=" mt-40" >
      <div className="text-xl text-white my-10 text-center " >Join our waitlist</div>
      <div id="getWaitlistContainer" className='my-10 items-center justify-center mx-auto ' data-waitlist_id="23213" data-widget_type="WIDGET_1"></div>
      <Helmet>
      <link rel="stylesheet" type="text/css" href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"/>
      <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
      </Helmet>
   </div>
  )
}

export default Waitlist
