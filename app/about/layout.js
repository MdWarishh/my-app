import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <div className='w-full bg-amber-900 text-blue-400'>Sale is Live</div>
        {children}
    </div>
  )
}

export default layout