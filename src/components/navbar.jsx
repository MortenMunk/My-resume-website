import React from 'react'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='sticky top-0 h-20 w-screen bg-light-navy shadow-lg'>
      <ul className='hidden md:flex justify-center space-x-28 h-full items-center text-white shrink font-lato text-xl uppercase tracking-wider'>
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div className='md:hidden flex justify-end items-center h-full mx-5 text-white'>
        <FaBars className='text-2xl' />
      </div>

      {/* Mobile Menu */}
      <ul className='hidden bg-light-navy w-screen h-[calc(100vh-80px)] text-white flex flex-col justify-start pt-8 items-center text-4xl space-y-16 font-lato uppercase tracking-wider'>
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar