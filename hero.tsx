"use client";
import React from 'react'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';


const Hero = () => {
  return (
    <div><section className="text-black-600 body-font bg-orange-300">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-blue-900 font-serif">
        Assalam o alaikum to everyone!
        </h1>
        <span className="mb-8 leading-relaxed text-4xl font-mono ">
        <Typewriter 
  options={{
    strings: ['This is Shayan Ahmed.','A Back-end Developer.', 'Pre-University Student.'],
    autoStart: true,
    loop: true,
  }}
/>
        </span>
        <div className="flex justify-center">
          <Link href={"#Contact"}>
          <button className="inline-flex text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
            Contact
          </button>
          </Link>
          
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      
      </div>
    </div>
  </section>
  </div>
  )
}

export default Hero