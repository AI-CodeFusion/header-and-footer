import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-blue-600 text-white h-14'>
        <div className='flex justify justify-between items-center '>
        
<ul className='m-3 text-xl flex gap-5'>
    <Link href="/">home</Link>
    <Link href="/about">about</Link>
    <Link href="/contact">contact</Link>
</ul>
        </div>
  
    </div>
    


  
  )
}

export default Navbar