import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Intro = () => {
  return (
    <div className="bg-blackish-gradient bg-cover bg-top px-5 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start">
      <div className="flex flex-col items-center lg:items-start lg:w-2/3">
        <div className="flex items-center mt-20 pl-4 space-x-4">
          <Image 
            src="/greencleanicon.png" 
            alt="GreenIcon" 
            width={40} 
            height={40}
            className="block"
          />
          <p className="text-green-500 font-bold text-lg md:text-xl lg:text-2xl">
            CLEAN YOUR HOME
          </p>
        </div>
        <div className="mt-10 pl-4">
          <p className="text-white font-bold text-3xl md:text-4xl lg:text-6xl">
            We Are Here With <br />Expert 
            <span className="text-blue-500 font-bold underline decoration-blue-500 decoration-wavy decoration-5">
              Cleaner
            </span>
          </p>
        </div>
        <div className="flex justify-center lg:justify-start pl-4 mt-10">
          <Button
            type="button"
            title="LEARN MORE"
            icon="/arrow-right.svg"
            variant="btn_dark_green"
          />
        </div>
        <div className='mt-10 flex-shrink-0' >
          <Image 
            src="/projects.png" 
            alt="Project Stats" 
            width={500} 
            height={80}
          />
        </div>
      </div>
      <div className="lg:w-1/3 lg:mt-0 flex-shrink-0">
        <Image 
          src="/image1.png" 
          alt="Girl with cleaning stuffs" 
          width={600} 
          height={1000} 
          className="w-64 h-auto md:w-80 md:h-auto lg:w-full lg:h-[98vh]"
        />
      </div>
    </div>
  )
}

export default Intro
