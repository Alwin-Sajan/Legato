import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { back } from './assets';
import Team from './components/Team';
import Footer from './components/Footer';
import { motion } from "framer-motion"
import Features from './components/Features';
import Reveal from './components/Reveal';
import { Link } from 'react-router-dom'

const App = () => {
  const [darkmode, setdarkmode] = useState(true);
  const [demo, setDemo] = useState(false);
  const toggleDarkMode = () => {
    setdarkmode(prevMode => !prevMode);
  }
  return (
    <div className={`w-full overflow-hidden relative h-auto min-h-screen ${darkmode ? 'bg-black text-white ' : 'bg-white text-black '}`}>
      <img src={darkmode ? "https://img.freepik.com/free-vector/hexagonal-black-background-modern-design_1017-37442.jpg" : back} className='fixed bg-slate-500 opacity-60 w-full z-20' alt="" />

      <div className={`ml-[10vw] mt-[10vh] rounded w-[80vw] h-[80vh] glass fixed z-50 ${demo ? "block" : 'hidden'}`}>
        <div className='flex p-8 relative'>
          <h3 className='text-4xl relative text-black'>Demo Video</h3>
          <button type="button" className='bg-[red] absolute right-1 h-16 p-4 rounded mx-60' onClick={() => setDemo(!demo)}>X</button>
        </div>
        <iframe width="w-full" height="360" className='mx-12 rounded mt-4'
          src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
      </div>

      <div className={`${demo ? "opacity-80 " : ""} relative z-30`}>

        <Navbar darkMode={darkmode} toggleDarkMode={toggleDarkMode} />
        <div className='grid justify-center h-[50vh] pt-36 font-semibold text-7xl'>
          <Reveal>Legato</Reveal>
        </div>

        <Features darkmode={darkmode} />

        {/* h-[90vh] */}
        <div className=' bg-gradient-to-r pb-16 from-cyan-500 to-pink-500'>
          <h1 className='pl-16 text-5xl font-bold  mb-0 pt-16'>About Legato: Your Campus Connection Hub</h1>

          <div className='px-32 pt-8'>

            <p>
              Legato is your one-stop platform for everything happening on campus! We connect you to the vibrant college
              community by bringing all your clubs, events, and achievements together in one central space.

            </p>

            <div className='flex'>
              <div className='pr-16'>
                <h3 className='text-2xl py-4 font-medium'>Here's what makes Legato unique:</h3>

                <ul className='pl-4 gap-4 grid'>

                  <li><strong>Centralized Event Hub:</strong> No more searching through endless emails or social media groups. Legato provides a comprehensive calendar of all club events and college-wide activities, making it easier than ever to discover and participate in what interests you.</li>
                  <li><strong>Club Networking:</strong> Interact with different clubs and organizations. Legato allows you to explore clubs, learn about their missions, and connect with their members directly through the platform.</li>
                  <li><strong>Community Building:</strong> Stay informed about college-wide events and initiatives. Legato fosters a sense of community by showcasing all the exciting happenings on campus, making you feel more connected to the college spirit.</li>
                  <li><strong>Achievement Showcase:</strong> Proud of your accomplishments? Share your academic achievements, awards, or club milestones on Legato. Celebrate your success and inspire others!</li>
                </ul>
              </div>

              <img src="https://thumbs.dreamstime.com/b/community-concept-pictogram-showing-figures-happy-family-84451213.jpg" className='w-60 h-60 mt-20 ' alt="community image" />
            </div>

            <h3 className='text-xl py-4 pt-8 font-medium'>With Legato, you can:</h3>

            <ul className='pl-4 gap-4 flex row-span-3 max-md:overflow-x-auto customscroll py-8'>

              <li className='flex justify-center items-center p-8 h-60 w-60 bg-black rounded-md'>Browse upcoming events and RSVP with ease.</li>
              <li className='flex justify-center items-center p-8 h-60 w-60 bg-black rounded-md'>Discover new clubs and organizations that align with your interests.</li>
              <li className='flex justify-center items-center p-8 h-60 w-60 bg-black rounded-md'>Connect with fellow students who share your passions.</li>
              <li className='flex justify-center items-center p-8 h-60 w-60 bg-black rounded-md'>Stay updated on important college announcements and initiatives.</li>
              <li className='flex justify-center items-center p-8 h-60 w-60 bg-black rounded-md'>Share your achievements and gain recognition from the college community.</li>

            </ul>

            <p className='py-4'>
              Legato is your gateway to a more engaged and fulfilling college experience. We empower you to explore your interests, connect with like-minded individuals, and contribute to the vibrant campus life.
            </p>


          </div>
          <div className='py-8 w-2/3 mx-auto flex justify-center items-center rounded-2xl bg-black mt-32'>
            <h3 className=''>Join Legato today and become an active part of your college community!</h3>
            <button className='hover:bg-slate-800 border-white border-2 px-4 rounded-2xl outline-none py-1 ml-4'><Link to="/signin">Join us</Link> </button>
          </div>
        </div>

        <button type="button" className='bg-[red] my-16 rounded p-4 mx-60' onClick={() => setDemo(!demo)}>Demo</button>

        <Team />
        <Footer />

      </div>

    </div>
  )
}

export default App