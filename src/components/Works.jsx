import React from 'react'
import { AttentionSeeker, Fade, Rotate } from 'react-awesome-reveal'
import { BiBrain, BiCheckCircle, BiDownArrowAlt, BiGroup } from 'react-icons/bi'




const Works = () => {

  const Cards =[
    {title:'Acing Your Courses', info:'Achieving academic success starts with staying organized and motivated.', icon:<BiBrain className='animate-AttentionSeeker ' /> },
    {title:'Progress Tracking', info:'Slaty helps you track deadlines, set goals, and build habits to stay ahead.', icon:<BiGroup className='animate-AttentionSeeker ' /> },
    {title:'Job Opportunities', info:'Slaty connects tutors with students, offering a chance to earn income while empowering academic success.', icon:<BiCheckCircle className='animate-AttentionSeeker ' /> },
  ]

  return (
    <div className='sm:mb-40 mb-20 text-white ' id='h-works' >
      
      <AttentionSeeker direction='up' triggerOnce >
      <div className=' border-spacing-3 border-opacity-10 border border-grey py-2 px-5 w-fit mx-auto rounded-full ' > How it works</div>
      </AttentionSeeker>
      <Rotate triggerOnce={false} > 
      <div className='xl:text-5xl sm:text-4xl text-2xl font-bold sm:max-w-[70%] text-center leading-relaxed my-10 w-fit mx-auto ' >Achieving academic success starts with staying organized and motivated.</div>
      </Rotate>
      <Fade direction='down' triggerOnce >
      <div className='text-opacity-30 w-fit mx-auto sm:text-xl text-center max-w-[600px] text-white ' >Slaty helps you track deadlines, set goals, and build habits to stay ahead. Simplify your studies and excel with ease!
      </div>
      </Fade>
      <div className="card flex flex-wrap items-center justify-center gap-10 my-20 ">
        <Fade duration={2000} direction='up' damping={0.3} triggerOnce cascade > 
        {Cards.map((data, index) => (
          <div key={index} className='sm:h-[450px] h-[400px] border-spacing-3 relative overflow-hidden border-opacity-10 border border-grey rounded-xl p-10 w-[300px] mx-auto lg:w-[380px] sm:w-[400px] justify-center items-center bg-white bg-opacity-5 ' >
            <div className={`  w-20 h-20 absolute blur-[90px] mx-auto -top-[20%] left-[30%] bg-white `}  ></div>
            <div className=' h-[50%] border-spacing-3 border-opacity-10 border border-grey bg-black rounded-2xl mb-10 justify-center items-center flex ' ><div className='p-5 rounded-full text-xl sm:text-3xl bg-orange animate-bounce ' >{data.icon}</div></div>
            <div className='text-center text-2xl sm:text-3xl font-bold  my-2 ' >{data.title}</div>
            <div className='text-white text-sm sm:text-lg text-opacity-30 text-center sm:mt-5 ' >{data.info}</div>
          </div>
        ))}
        </Fade>
      </div>
      <AttentionSeeker triggerOnce duration={1500} >
      <div className='w-fit flex mx-auto px-5 sm:px-10 py-3 sm:py-5 sm:text-xl rounded-md my-20 bg-orange' >See Pricing <BiDownArrowAlt className='-rotate-45 text-2xl ' /> </div>
      </AttentionSeeker>
    </div>
  )
}

export default Works 
