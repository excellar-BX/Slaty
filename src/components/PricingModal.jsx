import React, { useState } from 'react'
import { BiInfoCircle } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

const PricingModal = ({pricingdetails}) => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div className='' >

<OutsideClickHandler onOutsideClick={()=>{setModalActive(false)}} >            
<div className=' absolute top-0 right-0 cursor-pointer m-3 '  onClick={()=>{setModalActive(!modalActive)}}  ><BiInfoCircle className=' cursor-pointer text-2xl mr-2'  onClick={()=>{setModalActive(!modalActive)}}/></div>
</OutsideClickHandler>
<div className={` absolute text-white bg-orange shadow-xl  border-spacing-3 border-opacity-10 border border-grey max-w-[70%] my-10 rounded-xl p-2 text-sm z-[1] top-0 right-3 ${modalActive?'scale-100': 'scale-0'}  `}>
<div>
                    <div className='text-lg' >Professional Literary Writing Services</div>
                    <div>Elevate your academic and intellectual pursuits with our expertly crafted writing and tutoring services:</div>
                </div>
                <div>{pricingdetails}</div>
</div>
            {/* <div className={`modal text-sm text-black bg-[#a6a6a6] absolute right-0 mr-2 top-10 p-3 z-[9999] max-w-[70%] rounded-lg ${modalActive?'block': 'hidden'}  `}>
                <div>
                    <div>Professional Literary Writing Services</div>
                    <div>Elevate your academic and intellectual pursuits with our expertly crafted writing and tutoring services:</div>
                </div>
                <div>
                    <div>Literary Writing Services:</div>
                    <div><span>Term Paper:</span> Meticulously researched and professionally writtten - 10,000 naira</div>
                    <div><span>Book Review:</span> In-depth analysis tailored to your needs - 10,000 naira </div>
                    <div><span>Project Writing:</span> Compreensive, original projects for your academic success - 70,000 naira </div>
                    <div><span>Assignment & Problem-Solving:</span> Clear, consise solution to academic chhallenges - 10,000 naira </div>
                </div>
                <div>
                    <div>Educational Support:</div>
                    <div><span>Online Tutoring:</span> One-on-One sessions with expert guidance - 15,000 naira</div>
                    <div><span>Group Live classes:</span> Interactive and collaborative learning experiences - 10,000 naira</div>
                </div>
            </div> */}
        </div>
    )
}

export default PricingModal