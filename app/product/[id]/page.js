'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const params = useParams()
  return (
    <div>
        
        <p>This is dynamic route</p>
<h6 className='capitalize'>{params.id}'s Page</h6>
    </div>
  )
}

export default page