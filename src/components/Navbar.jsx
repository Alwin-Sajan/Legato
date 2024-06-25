import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

const Navbar = ({ toggleDarkMode, darkmode }) => {
    const [displayMenu, setDisplayMenu] = useState(false);

    return (
        <div className='flex fixed  bg-gradient-to-r from-cyan-500 to-pink-500 w-full justify-center items-center z-50 py-6 '>
            <button className={` lg:hidden absolute top-4 `} onClick={() => { setDisplayMenu(!displayMenu) }}>Menu</button>
            <ul className={`${displayMenu ? "mt-10" : "max-md:hidden"} lg:flex max-md:grid items-center justify-center text-lg lg:gap-16`}>
                <li className='mr-60'><a href="">Legato</a></li>
                <li><a href="">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><button onClick={toggleDarkMode} ><img className='w-8 lg:ml-40 bg-white rounded-full' src="https://www.svgrepo.com/show/309493/dark-theme.svg" alt="" /></button></li>
                <li><button className='hover:bg-slate-800 border-white border-2 px-4 rounded-2xl outline-none py-1'><Link to="/signin">Join us</Link> </button></li>
            </ul>
        </div>
    )
}

export default Navbar