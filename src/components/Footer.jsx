import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-scroll'

const Footer = () => {


  const Data = [
    {Title:'How it works', route:'h-works'},
    {Title:'Mission', route:'mission'},
    {Title:'Works', route:'works'},
    {Title:'Pricing', route:'pricing'}, 
    { Title: 'Services', route: 'services' },
    { Title: 'Contact', route: 'contact' },
    { Title: 'Terms and Condition', route: 'terms' },

  ]

  return (
    <div className='py-40 text-white ' >
    <div className=' border-spacing-3 border-opacity-10 border rounded-3xl border-grey py-20 bg-image  ' >
      <Fade duration={2000} cascade damping={0.3} triggerOnce direction='up' >
      <div className=' min-w-[20%] text-center text-orange tracking-widest text-3xl font-bold animate-bounce ' >Slaty</div>
      <div className='text-3xl sm:text-5xl xl:text-7xl font-bold sm:max-w-[60%] text-center leading-relaxed my-5 w-fit mx-auto  ' >Let’s Turn Your Dream Into Reality</div>
      <div className='text-opacity-70 w-fit mx-auto sm:text-xl text-white sm:max-w-[30%] text-center ' >We bring your vision to life with creativity and precision. Let’s make it happen.</div>
      <div className=' bg-gradient-to-tr from-orange to-white w-fit text-opacity-0 text-white bg-clip-text text-2xl mx-auto my-10 sm:my-20  ' >Book A Call</div>
      <div>
        <ul className='flex flex-col items-center lg:flex-row justify-center text-xl sm:text-2xl ' >
          {Data.map((data, index) => (
            <Link className="flex "
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-150}
              key={index}
              to={data.route} >
              <li className=' sm:mx-5 lg:my-0 my-2 hover:text-opacity-100 ease-in duration-500 cursor-pointer text-white text-opacity-70 ' >{data.Title}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='sm:text-2xl  text-center text-white text-opacity-70 my-5 sm:my-10 ' >Copyright <span className='text-orange' >SLATY</span>. All right reserved.</div>
      </Fade>
    </div>
    </div>
  )
}

export default Footer 
