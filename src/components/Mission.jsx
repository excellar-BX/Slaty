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
      <div className='md:text-6xl text-2xl leading-relaxed font-bold max-w-[98%] mx-auto text-center my-10' >Slaty empowers <span className='text-orange mx-1' >students </span>to overcome <span className='text-orange mx-1' >academic challenges</span> with tools that inspire <span className='text-orange mx-1' >focus,motivation,</span>and  <span className='text-orange mx-1' >success</span></div>
      <div className='text-sm sm:text-xl text-center text-white text-opacity-70 ' >Together, we help every student thrive.</div>
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
