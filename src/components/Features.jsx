import { color, motion } from 'framer-motion'
import React from 'react'



const Features = ({ darkmode }) => {
    return (
        <div className=' min-h-[75vh] flex pb-8 justify-center'>
            <ul className='lg:flex grid gap-16 lg:mx-32'>
                <motion.li
                    whileHover={{ scale: 1.2,background:'lightyellow', rotateZ: -1.5, borderBlockStart: 0, borderBlockEnd: 2, borderBlockColor: 'blue' }}
                    className={` ${darkmode ? 'bg-white text-black' : 'bg-orange-300'} w-60 h-60 grid justify-center rounded-lg p-8`}>
                    <h2 className='text-center font-semibold'>All in One</h2>
                    <img src="https://static.thenounproject.com/png/188125-200.png" alt="" />
                </motion.li>
                <motion.li whileHover={{ scale: 1.2,background:'skyblue', rotateZ: 0, borderBlockStart: 0, borderBlockEnd: 2, borderBlockColor: 'blue' }} className={` ${darkmode ? 'bg-white text-black' : 'bg-orange-300'} w-60 h-60 grid justify-center rounded-lg p-8`}>
                    <h2 className='text-center font-semibold mb-4'>Secure</h2>
                    <img src="https://i.pinimg.com/736x/f8/5d/1a/f85d1a6c3b416c7a4a2437b8be41ed09.jpg" className='m-auto mix-blend-darken w-[80%] h-auto' alt="" />
                </motion.li>
                <motion.li whileHover={{ scale: 1.2, rotateZ: 1.5,background:'pink', borderBlockStart: 0, borderBlockEnd: 2, borderBlockColor: 'blue' }} className={` ${darkmode ? 'bg-white text-black' : 'bg-orange-300'} w-60 h-60 grid justify-center rounded-lg p-8`}>
                    <h2 className='text-center font-semibold mb-4'>Secure</h2>
                    <img src="https://c0.wallpaperflare.com/preview/275/188/982/wireless-connection-wifi-signal.jpg" className='m-auto mix-blend-darken w-[90%] h-auto' alt="" />
                </motion.li>
            </ul>
        </div>
    )
}

export default Features