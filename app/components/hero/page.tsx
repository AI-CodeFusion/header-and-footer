
import React from 'react'
import Image from 'next/image'
import image from '../../images/syeda.jpeg'



const Hero = () => {
  return (
    <div className='flex  flex-row  bg-black h-screen'>
    <div>
      <Image
      src={image}
      alt='Syeda'
      width={600}
      height={600}
      className='rounded-full p-24'/>
    </div>

  <div className='justify-right font-extrabold'>
    <h1 className='text-blue-700 text-3xl p-24 ml-20 ' data-aos="zoom-in">I'm Syeda Binish Sumair </h1>
    <h1 className='text-red-700 text-3xl text-center ml-16' data-aos="zoom-in">A Passionate Frontend Developer.</h1>
    




    
  </div>
    
    </div>
  )
}

export default Hero