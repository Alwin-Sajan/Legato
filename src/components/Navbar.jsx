import React from 'react'

const Navbar = ({toggleDarkMode,darkmode}) => {
    
    return (
    <div className='flex justify-center pt-8 '>
        <ul className='flex text-lg gap-8'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li><button onClick={toggleDarkMode} ><img className='w-8' src="https://www.svgrepo.com/show/309493/dark-theme.svg" alt="" /></button></li>
        </ul>
    </div>
  )
}

export default Navbar