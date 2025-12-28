import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
          <h6>Service Page</h6>
          
                <Link href='/service/service1' className='m-2.5 text-2xl'>Service 1</Link>
      <Link href='/service/service2' className='m-2.5 text-2xl'>Service 2</Link>
      <Link href='/service/service2/service2.1' className='m-2.5 text-2xl'>Service is here 2.1</Link>
    </div>
  )
}

export default page