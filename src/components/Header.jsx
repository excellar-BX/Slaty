import React, { useState } from 'react';
import { BiMenuAltRight, BiUpArrowAlt, BiX } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import {Link} from 'react-scroll'

const Header = () => {
  const Data = [
    {Title:'How it works', route:'h-works'},
    {Title:'Mission', route:'mission'},
    {Title:'Works', route:'works'},
    {Title:'Pricing', route:'pricing'}, 
  ]

  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className='flex w-full sm:max-w-[90%] text-white mx-auto pt-5 mb-5 justify-center  ' >
    <div className='flex items-center z-[1000] justify-between fixed rounded-full bg-black  py-5 px-10 w-[95%] sm:max-w-[75%] border-spacing-3 border-opacity-10 border border-grey ' >
        <a href="/"><div className='min-w-[20%] text-orange tracking-widest text-3xl font-bold cursor-pointer ' >Slaty</div></a>
       
        <nav className={` ${navOpen? 'scale-100 xl:scale-100' : 'xl:scale-100 scale-0'} transition-all flex ease-in-out duration-700 flex-1 xl:flex-row flex-col  items-center xl:bg-opacity-0 xl:static absolute top-20 xl:py-0 py-10 rounded-2xl right-6 bg-orange xl:max-w-auto w-[250px] xl:h-auto h-[400px] text-center text-xl justify-between  `}>
          <div className='w-10 h-10 rounded-md rotate-45 xl:hidden bg-orange absolute right-2 -top-3 ' ></div>
            <ul className='flex justify-between flex-1 xl:justify-center xl:flex-row flex-col ' >
            {Data.map((data, index) => (
              <Link  className="mx-5 max-w-[60%] hover:text-opacity-100 ease-in duration-500 cursor-pointer  text-white text-opacity-50 "
              activeClass="active"
              smooth={true}
              spy={true}
              key={index}
              offset={-150}
              to={data.route} >
              <li className=' justify-between sm:justify-normal ' >{data.Title}</li>
              </Link>
            ))}
            </ul>
            <div className=' bg-white bg-opacity-10 flex items-center justify-center mt-10 xl:my-0 rounded-lg h-12 w-[90%] xl:w-auto xl:px-5 border-spacing-3 border-opacity-10 border cursor-pointer border-grey' >Lets talk <BiUpArrowAlt className='rotate-45 text-3xl bg-white bg-opacity-0 ' /> </div>
        </nav>
        
        <OutsideClickHandler onOutsideClick={()=> setNavOpen(false)} >
        <div className="menu xl:hidden block text-3xl ">
          {navOpen? <BiX onClick={()=> setNavOpen(!navOpen)} /> : <BiMenuAltRight onClick={()=> setNavOpen(!navOpen)} /> }
        </div>
        
        </OutsideClickHandler>
    </div>
    </div>
  );
}

export default Header;
