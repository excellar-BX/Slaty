import React from 'react'
import {
    Fade
} from 'react-awesome-reveal'
import { BiDownArrowAlt, BiLogoFacebookSquare, BiLogoInstagram, } from 'react-icons/bi';
import { FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {


    return (
        <div className='pb-40 text-white '>
            <div className=' border-spacing-3 border-opacity-10 border rounded-3xl border-grey py-20 bg-image  '>
                <Fade duration={2000} cascade damping={0.3} triggerOnce direction='up'>
                    <div className=' min-w-[20%] text-center text-orange tracking-widest text-3xl font-bold animate-bounce '>
Slaty
                    </div>
                    <div className='flex flex-col sm:flex-row flex-wrap xl:text-6xl sm:text-4xl my-5 w-[90%] text-2xl justify-center text-center mx-auto items-center'>
                        <div>
Are you a <span className='text-orange mx-0.5 '> student </span> ?
                        </div>
                        <div className='animate-spin mx-0.5'>
✦
                        </div>
                        <div>
Learn how you can use <span className='text-orange mx-0.5 '> SLATY </span> to get better grades
                        </div>
                    
                </div>
                <div className=' flex justify-center items-center sm:text-lg mt-10 text-white text-opacity-70 max-w-[500px] text-center mx-auto '>
Join the waitlist today and recieve a free personalized study guide tailored to your academic needs
                </div>
                <a href='/waitlist'>
                    <div className='flex justify-center px-5 sm:px-10 py-3 sm:py-5 sm:text-xl mx-auto hover:bg-[#ff9e3d] hover:cursor-pointer items-center mt-10 sm:mt-20  border-spacing-3 border-opacity-10 border border-grey  bg-orange rounded-lg w-fit animate-bounce '>
Join WaitList <BiDownArrowAlt className=' bg-white bg-opacity-0 mx-2 text-2xl -rotate-45' />
                    </div>
                </a>
                <div>
                    {/* <ul className='flex flex-col items-center lg:flex-row justify-center text-xl sm:text-2xl '>
                        {Data.map((data, index) => (
                            <Link className="flex "
                                activeClass="active"
                                smooth={true}
                                spy={true}
                                offset={-150}
                                key={index}
                                to={data.route}>
                                <li className=' sm:mx-5 lg:my-0 my-2 hover:text-opacity-100 ease-in duration-500 cursor-pointer text-white text-opacity-70 '>{data.Title}</li>
                            </Link>
                        ))}
                    </ul>*/}
                </div>
                <div className='sm:text-2xl  text-center text-white text-opacity-70 my-5 sm:my-10 '>
Copyright <span className='text-orange'>SLATY</span>. All right reserved.
                </div>
                <div className="socials text-3xl flex justify-center sm:justify-end   mx-10 ">
                <a className='mx-3 text-white  hover:text-orange' href="https://www.facebook.com/profile.php?id=61556313239954"><BiLogoFacebookSquare/></a>
                <a className='mx-3 text-white  hover:text-orange' href="https://x.com/Slaty_1"><FaTwitterSquare/></a>
                <a className='mx-3 text-white  hover:text-orange' href="https://www.instagram.com/slaty_1?igsh=YzljYTk1ODg3Zg=="><BiLogoInstagram/></a>
                </div>
            </Fade>
        </div>
    </div>
)
}

export default Footer
