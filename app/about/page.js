import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h6>About Page</h6>
        <Link className='m-5 text-2xl underline'  href = '/about/team' >Team</Link>
        <Link  className='m-5 text-2xl underline' href = '/about/mission' >Mission</Link>
    </div>
  )
}

export default page