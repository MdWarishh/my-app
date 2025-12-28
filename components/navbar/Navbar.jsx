import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-900 h-19 w-full flex items-center justify-between  px-6 '>
        <h2>Logo</h2>
        <div className='flex gap-7'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/service'>Service</Link>
            <Link href='/product'>Product</Link>
            <Link href='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar