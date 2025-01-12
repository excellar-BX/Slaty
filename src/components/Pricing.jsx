import { React, useState, } from 'react'
import { AttentionSeeker, Fade } from 'react-awesome-reveal'
import { BiCheckCircle,  BiUpArrowAlt } from 'react-icons/bi'
import PricingModal from './PricingModal'

const Pricing = () => {

  const Pricing = [
    { id: 2, spots: 3, heading: 'Literary Writing Services', subheading: 'Crafting Compelling Stories, One Word at a Time', price: '50,000', pricingdetails:(
      <div>
          <div className='text-[16px] '>Literary Writing Services:</div>
          <div><span>Term Paper:</span> Meticulously researched and professionally writtten - 7000 naira</div>
          <div><span>Book Review:</span> In-depth analysis tailored to your needs - 7000 naira </div>
          <div><span>Project Writing:</span> Compreensive, original projects for your academic success - 30,000 naira </div>
          <div><span>Assignment & Problem-Solving:</span> Clear, consise solution to academic chhallenges - 6000 naira </div>
      </div>), plan1: 'Term paper',  plan2: 'Book review',  plan3: 'Project writing', plan4: 'Assignment/Problem Solving' },
    { id: 2, spots: 2, heading: 'Educational Support', subheading: "Unlocking Potential, One student at a Time", price: '17,000', pricingdetails:(
      <div>
          <div className='text-[16px] my-0.5 '>Educational Support:</div>
          <div><span>Online Tutoring:</span> One-on-One sessions with expert guidance - 10,000 naira</div>
          <div><span>Group Live classes:</span> Interactive and collaborative learning experiences - 7000 naira</div>
      </div>),  plan1: 'Online Tutoring One-on-One', plan2: 'Group Live Classes' },
    { id: 4, spots: 3, heading: 'Literary Writing Services', subheading: 'Crafting Compelling Stories, One Word at a Time', price: '100,000', pricingdetails:(
      <div>
          <div className='text-[16px] '>Literary Writing Services:</div>
          <div><span>Term Paper:</span> Meticulously researched and professionally writtten - 10,000 naira</div>
          <div><span>Book Review:</span> In-depth analysis tailored to your needs - 10,000 naira </div>
          <div><span>Project Writing:</span> Compreensive, original projects for your academic success - 70,000 naira </div>
          <div><span>Assignment & Problem-Solving:</span> Clear, consise solution to academic chhallenges - 10,000 naira </div>
      </div>), plan1: 'Term paper',  plan2: 'Book review',  plan3: 'Project writing', plan4: 'Assignment/Problem Solving' },
    { id: 4, spots: 2, heading: 'Educational Support', subheading: "Unlocking Potential, One student at a Time", price: '25,000', pricingdetails:(
      <div>
          <div className='text-[16px] my-0.5 '>Educational Support:</div>
          <div><span>Online Tutoring:</span> One-on-One sessions with expert guidance - 15,000 naira</div>
          <div><span>Group Live classes:</span> Interactive and collaborative learning experiences - 10,000 naira</div>
      </div>),  plan1: 'Online Tutoring One-on-One',  plan2: 'Group Live Classes' },
  ]
  const filters = [
    { label: 'Soft', key: 2 },
    { label: 'Pro', key: 4 },
  ]

  const [filterkey, setFilterKey] = useState(2)

  const filteredItems = Pricing.filter((data) => (data.id === filterkey))

  return (
    <div id='pricing' className='py-40 text-white ' >
      <AttentionSeeker triggerOnce duration={2000} >
        <div className=' border-spacing-3 border-opacity-10 border border-grey py-2 px-5 w-fit mx-auto rounded-full ' > Simple Pricing</div>
      </AttentionSeeker>
      <Fade duration={3000} >
        <div className='text-2xl sm:text-4xl xl:text-6xl font-bold text-center leading-relaxed my-10 w-fit mx-auto ' >Simple Plans for Ambitious Leaders</div>
      </Fade>
      <Fade direction='up' duration={2000} triggerOnce >
        <div className="pricing-filter flex flex-col sm:flex-row h-fit items-center justify-around bg-white bg-opacity-10  py-3 w-full lg:max-w-[20%] xl:max-w-[30%] mx-auto rounded-xl sm:rounded-full text-lg ">
          {filters.map((data, index) => (
            <div className={`flex items-center ${filterkey === data.key ? 'bg-orange ' : 'bg-white bg-opacity-20'} cursor-pointer sm:my-0 my-4 py-1 px-5 rounded-full `} onClick={() => { setFilterKey(data.key) }} >
              {index === 0 ? <div className={`flex items-center py-2 `} >{data.label}  <div className='bg-white text-orange px-5 text-lg rounded-full mx-5 ' >Save 20%</div></div> : (data.label)}
            </div>
          ))}
        </div>
      </Fade>
      <AttentionSeeker triggerOnce >
        <div className="pricing-cards my-20 gap-6 flex-col sm:flex-row flex">
           { filteredItems.map((data, index) => (
              <div key={index} className='sm:odd:w-[60%] sm:w-[40%] bg-grey bg-opacity-10 py-10 px-6 rounded-2xl overflow-hidden relative ' >
                


            <PricingModal pricingdetails={data.pricingdetails} />

                <Fade cascade triggerOnce direction='up' damping={0.3}>
                  <div className={`  w-[60%] h-16 absolute blur-[150px]  mx-auto   bg-white `}  ></div>
                  {/* <div className='flex w-fit py-2 items-center px-3 bg-black border-spacing-10 border-opacity-20 border-s border-t border-grey rounded-full mx-auto justify-center ' >
                <div className='w-5 h-5 flex items-center animate-pulse justify-center bg-malachite-600 bg-opacity-30 rounded-full ' ><div className='w-3 h-3 rounded-full bg-malachite-500  bg-opacity-50 animate-pulse ' ></div>
                </div>
                <div className='mx-2 text-sm' >{data.spots} Spots Left</div>
                  </div> */}
                  <div className='z-[1] sm:text-3xl text-2xl font-bold my-2 ' >{data.heading}</div>
                  <div className='z-[1] text-white text-sm  text-opacity-50 ' >{data.subheading}</div>
                  {/* <div className='z-[1] flex flex-wrap items-baseline my-5 ' ><div className='sm:text-4xl text-3xl font-bold ' > {data.price} Naira</div> /Monthly</div>*/}
                  <div className='z-[1] text-white text-opacity-30 text-sm' >{data.installment}</div>
                  <div className='z-[1] w-[98%] mx-auto justify-center flex border-spacing-3 border-opacity-10 border border-grey bg-orange py-3 my-5 rounded-md ' >Get started <BiUpArrowAlt className=' z-[1] rotate-45 text-2xl ' /> </div>
                  <div className=' z-[1] text-white text-opacity-50 ' >What's included: </div>
                  <div className=' z-[1] text-white text-opacity-50 flex items-center my-3 ' ><BiCheckCircle className=' text-xl mr-2' /> {data.plan1}</div>
                  <div className=' z-[1] text-white text-opacity-50 flex items-center my-3 ' ><BiCheckCircle className=' text-xl mr-2' /> {data.plan2}</div>
                  <div className=' z-[1] text-white text-opacity-50 flex items-center my-3 ' ><BiCheckCircle className={`text-xl mr-2 ${data.plan3 ? 'block' : 'hidden'} `} /> {data.plan3}</div>
                  <div className=' z-[1] text-white text-opacity-50 flex items-center my-3 ' ><BiCheckCircle className={`text-xl mr-2 ${data.plan4 ? 'block' : 'hidden'} `} /> {data.plan4}</div>
                </Fade>
                
              </div>
            ))
          }
        </div>
      </AttentionSeeker>
    </div>
  )
}

export default Pricing 
