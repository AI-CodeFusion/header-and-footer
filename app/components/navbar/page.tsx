import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-blue-600 text-white h-14'>
        <div className='flex justify justify-between items-center '>
        <h1 className='m-3 text-2xl  '>Navbar</h1>
<ul className='m-3 text-xl flex gap-5'>
    <a href="">home</a>
    <a href="">contact</a>
    <a href="">about</a>
</ul>
        </div>
  <div className='bg-blue-300 fixed bottom-0 w-[100%] h-12 text-black flex justify-center '>
    <ul className='m-4 text-xl flex gap-5 relative bottom-1 cursor-pointer underline '>
      <a href="">facebook</a>
      <a href="">twitter</a>
      <a href="">youtube</a>
    </ul>
  </div>
    </div>
    


  
  )
}

export default Navbar