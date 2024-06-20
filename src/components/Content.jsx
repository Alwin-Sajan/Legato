import React from 'react'

const Content = () => {
  return (

        <div className=' h-screen pt-16 grid justify-center'>
            <h1 className='text-5xl text-center' >Title</h1>
          <ul className='flex gap-16 lg:mx-32'>
            <li className=' bg-orange-300 w-60 h-60 flex justify-center rounded-lg p-8'>Content 1 </li>
            <li className=' bg-orange-300 w-60 h-60 flex justify-center rounded-lg p-8'>Content 2 </li>
            <li className=' bg-orange-300 w-60 h-60 flex justify-center rounded-lg p-8'>Content 3 </li>
          </ul>
        </div>

  )
}

export default Content