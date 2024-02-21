import Image from 'next/image'
import React, { useState } from 'react'


const DoctorList = () => {
  
  return (
    <div className='mb-10 px-10'>
        <h2 className='font-bold text-xl'>Popular Doctors</h2>
        <div className='pt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
            <div className='border-[1px] rounded-lg p-3 cursor-pointer hover:bg-gray-300  transition-all ease-in-out'>
            <Image alt='doctor1' src={'/doctor1.jpg'} width={500} height={200} className=' h-[200px] w-full object-cover rounded-lg'/>
            <div className='mt-3 items-baseline flex flex-col gap-1'>
                <h2 className='text-[15px] bg-blue-100 p-1 rounded-full px-2 text-primary'>Dentist</h2>
                <h2 className='font-bold'>Dr. Gulu Sharma</h2>
                <h2 className='text-primary text-sm'>20 years experience</h2>
                <h2 className='text-grey-500 text-sm'>Keishampat</h2>
                <h2 className='p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[15px] mt-2 cursor-pointer hover:bg-primary hover:text-white'>Book Now</h2>
            </div>
            </div>
            <div className='border-[1px] rounded-lg p-3 cursor-pointer hover:bg-gray-300  transition-all ease-in-out'>
            <Image alt='doctor2' src={'/doctor3.jpg'} width={500} height={200} className='h-[200px] w-full object-cover rounded-lg'/>
            <div className='mt-3 items-baseline flex flex-col gap-1'>
                <h2 className='text-[15px] bg-blue-100 p-1 rounded-full px-2 text-primary'>Cardiologist</h2>
                <h2 className='font-bold'>Dr. Joykumar Soram</h2>
                <h2 className='text-primary text-sm'>20 years experience</h2>
                <h2 className='text-grey-500 text-sm'>Nagamapal</h2>
                <h2 className='p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[15px] mt-2 cursor-pointer hover:bg-primary hover:text-white'>Book Now</h2>
            </div>
            </div>
            <div className='border-[1px] rounded-lg p-3 cursor-pointer hover:bg-gray-300  transition-all ease-in-out'>
            <Image alt='doctor3' src={'/doctor2.jpg'} width={500} height={200} className='h-[200px] w-full object-cover rounded-lg'/> 
            <div className='mt-3 items-baseline flex flex-col gap-1'>
                <h2 className='text-[15px] bg-blue-100 p-1 rounded-full px-2 text-primary'>Eye Specilist</h2>
                <h2 className='font-bold'>Dr. Albert Yumnam</h2>
                <h2 className='text-primary text-sm'>15 years experience</h2>
                <h2 className='text-grey-500 text-sm'>Chingmeirong</h2>
                <h2 className='p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[15px] mt-2 cursor-pointer hover:bg-primary hover:text-white'>Book Now</h2>
            </div>
            </div>
            <div className='border-[1px] rounded-lg p-3 cursor-pointer hover:bg-gray-300  transition-all ease-in-out'>
            <Image alt='doctor1' src={'/doctor1.jpg'} width={500} height={200} className=' h-[200px] w-full object-cover rounded-lg'/>
            <div className='mt-3 items-baseline flex flex-col gap-1'>
                <h2 className='text-[15px] bg-blue-100 p-1 rounded-full px-2 text-primary'>Neurologist</h2>
                <h2 className='font-bold'>Dr. Denneb Luwang</h2>
                <h2 className='text-primary text-sm'>21 years experience</h2>
                <h2 className='text-grey-500 text-sm'>Singjamei chinga makha</h2>
                <h2 className='p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[15px] mt-2 cursor-pointer hover:bg-primary hover:text-white'>Book Now</h2>
            </div>  
            </div>
            <div className='border-[1px] rounded-lg p-3 cursor-pointer hover:bg-gray-300  transition-all ease-in-out'>
            <Image alt='doctor3' src={'/doctor2.jpg'} width={500} height={200} className='h-[200px] w-full object-cover rounded-lg'/> 
            <div className='mt-3 items-baseline flex flex-col gap-1'>
                <h2 className='text-[15px] bg-blue-100 p-1 rounded-full px-2 text-primary'>Orthopedic</h2>
                <h2 className='font-bold'>Dr. Manish kangjam</h2>
                <h2 className='text-primary text-sm'>7 years experience</h2>
                <h2 className='text-grey-500 text-sm'>Nongmeibung</h2>
                <h2 className='p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[15px] mt-2 cursor-pointer hover:bg-primary hover:text-white'>Book Now</h2>
            </div>
            </div>
            <div className='border-[1px] rounded-lg p-3 cursor-pointer hover:bg-gray-300  transition-all ease-in-out'>
            <Image alt='doctor2' src={'/doctor3.jpg'} width={500} height={200} className='h-[200px] w-full object-cover rounded-lg'/> 
            <div className='mt-3 items-baseline flex flex-col gap-1'>
                <h2 className='text-[15px] bg-blue-100 p-1 rounded-full px-2 text-primary'>General Doctor</h2>
                <h2 className='font-bold'>Dr. Benzyraj Rajkumar</h2>
                <h2 className='text-primary text-sm'>8 years experience</h2>
                <h2 className='text-grey-500 text-sm'>Yumnam leikai</h2>
                <h2 className='p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[15px] mt-2 cursor-pointer hover:bg-primary hover:text-white'>Book Now</h2>
            </div>
            </div>
            <div className='border-[1px] rounded-lg p-3 cursor-pointer hover:bg-gray-300  transition-all ease-in-out'>
            <Image alt='doctor1' src={'/doctor1.jpg'} width={500} height={200} className='h-[200px] w-full object-cover rounded-lg'/> 
            <div className='mt-3 items-baseline flex flex-col gap-1'>
                <h2 className='text-[15px] bg-blue-100 p-1 rounded-full px-2 text-primary'>Otology</h2>
                <h2 className='font-bold'>Dr. Khagemba khangembam</h2>
                <h2 className='text-primary text-sm'>12 years experience</h2>
                <h2 className='text-grey-500 text-sm'>Lalambung</h2>
                <h2 className='p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[15px] mt-2 cursor-pointer hover:bg-primary hover:text-white'>Book Now</h2>
            </div>
            </div>

            
            
        </div>
    </div>
  )
}

export default DoctorList