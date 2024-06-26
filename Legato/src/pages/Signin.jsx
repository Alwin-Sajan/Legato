import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        <div className="h-screen w-full grid justify-center py-[4rem] relative ">
            <img src="https://img.freepik.com/free-vector/hexagonal-black-background-modern-design_1017-37442.jpg" className='fixed bg-black w-full z-0' alt="background" />
            <Link to="/" className='text-center text-3xl text-white font-semibold mb-4 relative z-10'>Legato</Link>
            <div class="m-auto opacity-100 h-[25rem] w-[23rem] bg-black relative z-10 text-gray-200 rounded-xl">
                <h1 className="pb-5 text-center text-3xl font-bold pt-10">Sign in</h1>
                <div className="mx-auto w-[18rem]">
                    <div className=" flex  flex-col">
                        <input type="text" name="" id="" placeholder="Username" className="border-b-2 border-gray-500 bg-transparent focus:outline-none" />
                        <input type="password" name="" id="" placeholder="Password" className="border-b-2 border-gray-500 bg-transparent my-5 focus:outline-none" />
                        <p>Forget password?</p>
                    </div>
                    <div className="mt-5  text-center">
                        <button className="border px-9 py-[0.2rem] font-semibold rounded-sm hover:bg-slate-50 hover:text-black">LOGIN</button>
                        <p className="py-5">Dont have an accound? <Link to="/signup">Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Signin
