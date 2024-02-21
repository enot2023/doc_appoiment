"use client"
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Search as LocalSearch } from 'lucide-react'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import "@/app/globals.css";
import Image from 'next/image'


const routes =[
  {
      label:"Cardiologist",
      image: 'heart.svg',
      href: '/Cardiologist',
  },
  {
      label:"Dentist",
      image:'tooth.svg',
      href: '/Dentist',
      
  },
  {
      label:"Eye Specilist",
      image: 'eye.svg',
      href: '/',
  },
  {
      label:"Neurologist",
      image: 'brain.svg',
      href: '/',
  },
  {
      label:"Orthopedic",
      image: 'bone.svg',
      href: '/',
  },
  {
      label:"General Doctor",
      image: 'doctor.svg',
      href: '/',
  },
  {
      label:"Otology",
      image: 'ear.png',
      href: '/',
  },

]

const Search = () => {
  const pathname= usePathname();
  return (
    <div className='mb-10 items-center flex flex-col gap-2'>
        <h2 className='font-bold text-4xl tracking-wide'>Search <span className='text-primary'>Doctors</span></h2>
        <h2 className='text-grey-500 text-xl px-5'>Search Your Doctor and Book Appoitment in one click</h2>
        <div className=" flex w-full max-w-sm items-center space-x-2 mt-3">
        <Input type="text" placeholder="search" />
        <Button type="submit"><LocalSearch className='h4 w-4 mr-2'/>Search</Button>
       </div>
       <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 '>
  {routes.map((route) => (
    <Link
      href={route.href}
      key={route.href}
      className={`text-sm group !px-5 justify-center text-center image-container flex p-7 mt-6 mr-7 rounded-lg font-medium cursor-pointer hover:text-white hover:bg-white/10 transition ${
        pathname === route.href ? "text-blue-500 bg-blue-50" : "text-blue-500 bg-blue-50"
      }`}
    >
      <div className='flex flex-col items-center justify-center gap-2 w-20 h-20 p-5'>
        <Image alt='img' src={`/${route.image}`} width={100} height={100} />        
        <label className='text-center whitespace-nowrap'>{route.label}</label>
      </div>
    </Link>
  ))}
</div>
    </div>
  )
}

export default Search