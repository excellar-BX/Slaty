import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';

const Accordion = ({ title, text }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className='border-spacing-3 border-opacity-10 border cursor-pointer transition-all ease-in-out duration-700 relative overflow-hidden border-grey mx-auto max-w-[1000px] bg-[#b6b6b6] bg-opacity-10 w-full py-5 rounded-xl shadow-xl my-5 px-3 sm:px-10  ' onClick={()=>{setOpen(!open)}}  >
            <div className='text-primary text-4xl flex justify-between  ' >
                <p className='text-white text-xl sm:text-2xl font-bold my-5 ' >{title}</p> <BiPlus className={`${open && 'rotate-45'} cursor-pointer `} onClick={()=>{setOpen(false)}} />
            </div>
            <div className={` ${open? 'block' : 'hidden'} my-55 sm:text-xl text-white text-opacity-50  `} >{text}</div>
        </div>
    );
}

export default Accordion;
