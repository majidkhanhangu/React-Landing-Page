import React from 'react'
import pic1 from './assets/profile-pictures/picture1.jpg'
import pic2 from './assets/profile-pictures/picture2.jpg'


const Herosection = () => {
  return (
    <div>
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
    <h1 className='text-4xl sm:text-6xl lg:text-8xl text-center tracking-wide'>
    VirtualR Build Tools 
    <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>For Developers</span>
    </h1>
    <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className='flex justify-center my-10'>
      <a href='#' className='bg-gradient-to-r from-orange-500 to-red-800 py-3 px-4 mx-3 rounded-md'>
      Start For Free
      </a>
      <a href='#' className='py-3 px-4 mx-3 rounded-md border'>
      Documantation
      </a>
      </div>
      <div className='flex mt-10 justify-center'>
      <img className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4' src={pic1} alt="" />
      <img className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4' src={pic2} alt="" />
    </div>
    </div>
    </div>
  )
}

export default Herosection
