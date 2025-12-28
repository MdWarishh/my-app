'use client'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'



const page = () => {
  const [num, setNum] = useState(0)
  return (
    <div>
    <h6>Home Page</h6>
      <Link href='/service' className='m-2.5 text-2xl'>Service</Link>
      <Link href='/service/service1' className='m-2.5 text-2xl'>Service 1</Link>
      <Link href='/service/service2' className='m-2.5 text-2xl'>Service 2</Link>
      <Link href='/service/service2/service2.1' className='m-2.5 text-2xl'>Service 2.1</Link>

    <img 
        src="https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg"
        alt="image"
        style={{ width: "500px", height: "300px" }}
      />
    </div>
  )
}

export default page