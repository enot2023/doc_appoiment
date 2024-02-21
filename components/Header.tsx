import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';
const Header = () => {
  const Menu = [
    {
      id: 1,
      name: 'Home',
      path: '/',
    },
    {
      id: 2,
      name: 'Explore',
      path: '/',
    },
    {
      id: 3,
      name: 'Contact Us',
      path: '/',
    },
  ];

  return (
    <div className='flex item-center justify-between p-4 shadow-sm'>
      <div className='flex items-center gap-10 '>
      <Image alt='logo' src="/logo.png" width={60} height={60} />
      
      </div>
      <ul className='md:flex gap-8 hidden pt-5 '>
        {Menu.map((item) => (
          <Link href={item.path}>
            <li key={item.id} className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out'>
              {item.name}
            </li>
          </Link>
          
        ))}
      </ul>
      <Button>
        Get Started
      </Button>
    </div>
  );
};


export default Header