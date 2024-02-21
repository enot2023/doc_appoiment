"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import TypewriterEffect from 'typewriter-effect';

const Hero = () => {
  
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <Image
          alt="doctor"
          width={800}
          height={800}
          src="/doctor.jpg"
          className="absolute inset-0 h-full w-full object-cover rounded-3xl"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Find & Book <span className='text-primary'>Appoitment</span> with your Fav <span className='text-primary'>Doctors</span></h2>

        <p className="mt-4 text-gray-600">
          Best quality service with our experience Doctors
        </p>
        <p className=" text-gray-600">
          Book an appointment in a matter of seconds.
        </p>
        <div className=' text-primary text-xl font-bold mt-2  bg-clip-text '>
                <TypewriterEffect
                options={{
                    strings:[
                        "Cardiologist",
                        "Dentist",
                        "Eye Specilist",
                        "Neurologist",
                        "Orthopedic",
                        "General Doctor",
                        "Otology"
                    ],
                    autoStart: true,
                    loop:true,
                    cursor: ""
                }}
                />  
            </div>
        <Button className='mt-4'>Explore Now</Button>
        
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero