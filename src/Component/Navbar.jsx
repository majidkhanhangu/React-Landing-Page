import React from 'react'
import logo from "../Component/assets/logo.png"
import { navItems } from '../constants/Constant'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'



const Navbar = () => {

const[mobileDrawerOpen, setmobileDrawerOpen] = useState(false);
const toggleNavbar = () =>{
  setmobileDrawerOpen(!setmobileDrawerOpen);
};

  return (
  <nav className='sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80'>
  <div className='container px-4 mx-auto relative text-sm'>
  <div className='flex justify-between items-center'>
  <div className='flex items-center flex-shrink-0 '>
  <img className='w-12 h-12 mr-2' src={logo} alt="/" />
  <span className='text-xl tracking-tight '>VirtualR</span>
  </div>
  <ul className='hidden lg:flex ml-14 space-x-12'>
  {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
  </ul>
  <div className=' hidden lg:flex justify-center space-x-12 items-center'>
  <a href='#' className='py-2 px-3 border rounded-md'>
    Sign in
  </a>
  <a className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3'>
  Create an account
  </a>
  </div>
  <div className='lg:hidden md:flex flex-col justify-end'>
  <button onClick={toggleNavbar}>
    {setmobileDrawerOpen ? <X/> : <Menu/>}
  </button>
  </div>
  </div>
  {mobileDrawerOpen && (
    <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
    <ul>
    {navItems.map((item, index) => (
              <li className='py-4' key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
    ))}
    </ul>
    <div className='flex space-x-6'>
      <a href='#' className='py-2 px-3 rounded-md'>
        Sign in
      </a>
      <a href='#' className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>
        Create an account
      </a>
    </div>
    </div>
  )};
  
  </div>
      
    </nav>
  )
}

export default Navbar
