"use client"
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';
import { navlinks } from '@/constants/NavLinks';
import Link from 'next/link';


export default function MobileNav() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleMenu = () => {setIsOpen(!isOpen)}
  return (
    <div className='flex md:hidden cursor-pointer md:cursor-none' onClick={toggleMenu}>
      {!isOpen?(
        <Menu />
      ):(
        <X /> 
      )}
      <figure className={`absolute rounded-md right-2 origin-top top-20 w-auto bg-slate-800 transition-all z-50 ${isOpen? ' scale-100 opacity-100 visible' : 'scale-y-50 opacity-0 hidden'}`}>
        <nav className='w-full h-full flex flex-col space-y-2 capitalize font-normal tracking-wide'>
          {navlinks.map((link, index) => (
            <Link href={`#${link}`} className='py-3 px-8 transition-all flex justify-start rounded-md hover:bg-slate-700 hover:text-slate-400' onClick={toggleMenu} key={index}>{link}</Link>
          ))}
        </nav>
      </figure>
    </div>
  )
}
