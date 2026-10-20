import React from "react";
import { BiDownArrowAlt } from "react-icons/bi";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

const Hero = () => (
  <div className="mx-auto sm:w-[90%] pt-20 sm:pt-40 bg-5 sm:pb-20 bg-image text-white">
    <AttentionSeeker direction="down" triggerOnce>
      <div className="text-opacity-70 w-fit mx-auto sm:text-xl sm:max-w-[50%] text-center text-white">
        Connect with a tutor and get the academic support you need
      </div>
    </AttentionSeeker>
    <Fade direction="down" cascade triggerOnce duration={3000} damping={0.2}>
      <h1 className="flex flex-col sm:flex-row flex-wrap xl:text-6xl sm:text-4xl my-5 w-[90%] text-2xl justify-center text-center mx-auto items-center font-bold">
        <span>
          Connect with a{" "}
          <span className="text-orange mx-0.5">Tutor</span>
        </span>
        <span className="animate-spin mx-0.5" aria-hidden="true">
          ✦
        </span>
        <span>
          in Seconds with{" "}
          <span className="text-orange mx-0.5">SLATY</span>
        </span>
      </h1>
      <div className="flex justify-center items-center sm:text-lg mt-10 text-white text-opacity-70 max-w-[600px] text-center mx-auto">
        Get the academic support you need, when you need it. Connect with tutors, understand difficult topics, and make learning more engaging with Slaty.
      </div>
      <div className="flex sm:flex-row flex-col gap-5 mx-auto justify-center items-center mt-10">
        <a href="https://drive.google.com/file/d/190LMbZEb6h3jnZzn1WLJBpi6ZfYaNbjp/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
          <div className="flex justify-center px-5 sm:px-10 py-3 sm:py-5 sm:text-xl mx-auto hover:bg-[#ff9e3d] hover:cursor-pointer items-center border-spacing-3 border-opacity-10 border border-grey bg-orange rounded-lg w-fit">
            Download <BiDownArrowAlt className="bg-white bg-opacity-0 mx-2 text-2xl -rotate-45" />
          </div>
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZYzOU5Gri3AiOXn_WkT8zTG9sXRqT9fnbSTeZCZ9U4ZBV4Q/viewform" target="_blank" rel="noopener noreferrer">
          <div className="flex justify-center px-5 sm:px-10 py-3 sm:py-5 sm:text-xl mx-auto hover:bg-[#ff9e3d] hover:cursor-pointer items-center border-spacing-3 border-opacity-10 border border-grey bg-orange rounded-lg w-fit">
            Apply Now <BiDownArrowAlt className="bg-white bg-opacity-0 mx-2 text-2xl -rotate-45" />
          </div>
        </a>
      </div>
      <div className="text-opacity-70 flex-wrap justify-center flex w-fit my-10 mx-auto sm:text-xl sm:max-w-[50%] text-center text-white">
        <Fade cascade triggerOnce damping={0.2}>
          <div className="mx-0.5">Get</div><div className="mx-0.5">the</div><div className="mx-0.5">best</div>
          <div className="mx-0.5">Tutoring</div><div className="mx-0.5">and</div><div className="mx-0.5">Academic</div><div className="mx-0.5">resources!</div>
        </Fade>
      </div>
    </Fade>
    <div className="wrapper sm:text-xl overflow-hidden font-bold flex w-full">
      {Array.from({ length: 2 }).map((_, i) => (
        <div key={i} className="logos flex justify-around even:text-orange h-20 text-white my-5 sm:my-10">
          <div className="w-[200px]">KnowledgeHub</div><div className="w-[200px] text-orange">LearnSphere</div>
          <div className="w-[200px]">EduPro</div><div className="w-[200px] text-orange">Mentor path</div>
          <div className="w-[200px]">KnowledgeHub</div><div className="w-[200px] text-orange">LearnSphere</div>
          <div className="w-[200px]">EduPro</div><div className="w-[200px] text-orange">Mentor path</div>
          <div className="w-[200px]">KnowledgeHub</div><div className="w-[200px] text-orange">LearnSphere</div>
          <div className="w-[200px]">EduPro</div><div className="w-[200px] text-orange">Mentor path</div>
        </div>
      ))}
    </div>
  </div>
);

export default Hero;
