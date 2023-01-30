import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky top-0 h-20 w-screen bg-light-navy shadow-lg'>
        <ul className='flex justify-center space-x-40 h-full items-center text-white'>
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar