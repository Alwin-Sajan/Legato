import React from 'react'

const Navbar = ({toggleDarkMode,darkmode}) => {
    
    return (
    <div className='flex fixed w-full justify-center z-50 pt-8 '>
        <ul className='flex text-lg gap-16'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li><button onClick={toggleDarkMode} ><img className='w-8' src="https://www.svgrepo.com/show/309493/dark-theme.svg" alt="" /></button></li>
        </ul>
    </div>
  )
}

export default Navbar