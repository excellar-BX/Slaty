import { React, useState, } from 'react'
import { AttentionSeeker, Fade } from 'react-awesome-reveal'
import { BiCheckCircle, BiUpArrowAlt } from 'react-icons/bi'

const Pricing = () => {

  const Pricing = [
    { id: 2, spots: 3, heading: 'No-Code', subheading: 'Launch your MVP fast with core features in 90 days.', dev: 'Bubble Development.', upfront: 1450, installment: 'Pay $1,450 on delivery.', delivery: 30, maintenance: 3, subscription: "Yearly" },
    { id: 2, spots: 2, heading: 'Custom-Code', subheading: "You're already thinking about scaling.", dev: 'Custom-Code Development.', upfront: 3750, installment: 'Pay $3,750 on delivery.', delivery: 50, maintenance: 3, subscription: "Yearly" },
    { id: 4, spots: 3, heading: 'No-Code', subheading: 'Launch your MVP fast with core features in 90 days.', dev: 'Bubble Development.', upfront: 760, installment: '3 monthly payments of $760.', delivery: 45, maintenance: 3, subscription: "6 Months" },
    { id: 4, spots: 2, heading: 'Custom-Code', subheading: "You're already thinking about scaling.", dev: 'Custom-Code Development.', upfront: 1970, installment: '3 monthly payments of $1,970.', delivery: 90, maintenance: 3, subscription: "Yearly" },
    { id: 6, spots: 3, heading: 'No-Code', subheading: 'Launch your MVP fast with core features in 90 days.', dev: 'Bubble Development.', upfront: 530, installment: '5 monthly payments of $530.', delivery: 60, maintenance: 3, subscription: "3 Months" },
    { id: 6, spots: 2, heading: 'Custom-Code', subheading: "You're already thinking about scaling.", dev: 'Custom-Code Development.', upfront: 1375, installment: '5 Monthly Payments of $1,375.', delivery: 120, maintenance: 3, subscription: "3 Months" },
    { id: 12, spots: 3, heading: 'No-Code', subheading: 'Launch your MVP fast with core features in 90 days.', dev: 'Bubble Development.', upfront: 280, installment: '11 monthly payments of $280.', delivery: 90, maintenance: 9, subscription: "1 Month" },
    { id: 12, spots: 2, heading: 'Custom-Code', subheading: "You're already thinking about scaling.", dev: 'Custom-Code Development.', upfront: 720, installment: '11 monthly payments of $720.', delivery: 120, maintenance: 9, subscription: "1 Month" },
  ]
  const filters = [
    { label: 'Pay in 2', key: 2 },
    { label: 'Pay in 4', key: 4 },
    { label: 'Pay in 6', key: 6 },
    { label: 'Pay in 12', key: 12 },
  ]

  const [filterkey, setFilterKey] = useState(2)

  const filteredItems = Pricing.filter((data) => (data.id === filterkey))

  return (
    <div id='pricing' className='mb-20 mt-40 text-white ' >
      <AttentionSeeker triggerOnce duration={2000} >
      <div className=' border-spacing-3 border-opacity-10 border border-grey py-2 px-5 w-fit mx-auto rounded-full ' > Simple Pricing</div>
      </AttentionSeeker>
      <Fade duration={3000} >
      <div className='text-2xl sm:text-4xl xl:text-6xl font-bold text-center leading-relaxed my-10 w-fit mx-auto ' >Simple Plans for Ambitious Ideas</div>
      </Fade>
      <Fade direction='up' duration={2000} triggerOnce >
      <div className="pricing-filter flex flex-col sm:flex-row h-fit items-center justify-around bg-white bg-opacity-10 px-5 py-3 w-full lg:max-w-[50%] xl:max-w-[70%] mx-auto rounded-xl sm:rounded-full text-lg ">
        {filters.map((data, index) => (
          <div className={`flex items-center ${filterkey === data.key && 'bg-white bg-opacity-10'} cursor-pointer sm:my-0 my-4 py-1 px-5 rounded-full `} onClick={() => { setFilterKey(data.key) }} >
            {index === 0 ? <div className={`flex items-center py-2 ` } >{data.label}  <div className='bg-white text-web-orange-500 px-5 text-lg rounded-full mx-5 ' >Save 20%</div></div> : (data.label)}
          </div>
        ))}
      </div>
        </Fade>
        <AttentionSeeker triggerOnce >
      <div className="pricing-cards my-20 gap-6 flex-col sm:flex-row flex">
        {
          filteredItems.map((data, index) => (
            <div key={index} className='sm:odd:w-[60%] sm:w-[40%] bg-grey bg-opacity-10 py-10 px-6 rounded-2xl overflow-hidden relative ' >
            <Fade cascade triggerOnce direction='up' damping={0.3}>
              <div className={`  w-[60%] h-16 absolute blur-[150px]  mx-auto   bg-white `}  ></div>
              <div className='flex w-fit py-2 items-center px-3 bg-black border-spacing-10 border-opacity-20 border-s border-t border-grey rounded-full mx-auto justify-center ' >
                <div className='w-5 h-5 flex items-center animate-pulse justify-center bg-malachite-600 bg-opacity-30 rounded-full ' ><div className='w-3 h-3 rounded-full bg-malachite-500  bg-opacity-50 animate-pulse ' ></div>
                </div>
                <div className='mx-2 text-sm' >{data.spots} Spots Left</div>
              </div>
              <div className='sm:text-3xl text-2xl font-bold my-2 ' >{data.heading}</div>
              <div className='text-white text-sm  text-opacity-50 ' >{data.subheading}</div>
              <div className='flex items-baseline my-5 ' ><div className='sm:text-4xl text-3xl font-bold ' >${data.upfront}</div>  upfront</div>
              <div className='text-white text-opacity-30 text-sm' >{data.installment}</div>
              <div className='w-[98%] mx-auto justify-center flex border-spacing-3 border-opacity-10 border border-grey bg-orange py-3 my-5 rounded-md ' >Get started <BiUpArrowAlt className=' rotate-45 text-2xl ' /> </div>
              <div className=' text-white text-opacity-50 ' >What's included: </div>
              <div className=' text-white text-opacity-50 flex items-center my-3 ' ><BiCheckCircle className=' text-xl mr-2' /> {data.delivery} Days Delivery.</div>
              <div className=' text-white text-opacity-50 flex items-center my-3 ' ><BiCheckCircle className=' text-xl mr-2' /> {data.maintenance}  Months Maintenance.</div>
              <div className=' text-white text-opacity-50 flex items-center my-3 ' ><BiCheckCircle className=' text-xl mr-2' /> {data.dev}</div>
              <div className=' text-white text-opacity-50 flex items-center my-3 ' ><BiCheckCircle className=' text-xl mr-2' /> {data.subscription} AirMedia Subscription.</div>
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