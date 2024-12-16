import React from 'react'
import Reveal, { AttentionSeeker, Fade } from 'react-awesome-reveal'
import {Link} from 'react-scroll'

const Mission = () => {
  return (
    <div id='mission' className='text-white' >
      <AttentionSeeker>
      <div className=' border-spacing-3 border-opacity-10 border border-grey py-2 px-5 w-fit mx-auto rounded-full ' > Our Mission</div>
      </AttentionSeeker>
      <Fade cascade triggerOnce direction='up' damping={0.3} duration={2000} >
      <div className='md:text-6xl text-2xl leading-relaxed font-bold max-w-[98%] mx-auto text-center my-10' >Turning <span className='text-orange mx-1' >Aspirations</span>Into <span className='text-orange mx-1' >Achievements</span> By Making <span className='text-orange mx-1' >SaaS</span>Creation Accessible To <span className='text-orange mx-1' >All</span> </div>
      <div className='text-sm sm:text-xl text-center text-white text-opacity-30 ' >One-stop solution: From idea to launch with development and marketing aid.</div>
      </Fade>
      <Reveal triggerOnce >
      <div className=' bg-gradient-to-tr from-orange to-white w-fit text-opacity-0 text-white bg-clip-text text-lg sm:text-2xl mx-auto my-5 sm:my-20  ' >Book A Call</div>
      </Reveal>
      <Link to='pricing' >
      <div className='animate-bounce w-fit mx-auto my-10 sm:my-40 ' ><img className='w-40' src={require('../assets/arrow.png')} alt="" /> </div></Link>
    </div>
  )
}

export default Mission