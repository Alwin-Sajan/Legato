import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className="h-screen w-full grid justify-center py-[4rem] bg-gradient-to-r from-cyan-500 to-pink-500">
            <Link to="/" className='text-center text-3xl text-white font-semibold mb-4'>Legato</Link>
            <div class="m-auto h-[25rem] w-[23rem] bg-black text-gray-200 rounded-xl">
                <h1 class="pb-5 text-center text-3xl font-bold pt-10">Sign up</h1>
                <div class="mx-auto w-[18rem]">
                    <div class=" flex  flex-col">
                        <input type="text" name="" id="" placeholder="Username" class="border-b-2 border-gray-500 bg-transparent focus:outline-none" />
                        <input type="text" name="" id="" placeholder="Email" class="border-b-2 border-gray-500 bg-transparent focus:outline-none my-5" />
                        <input type="password" name="" id="" placeholder="Password" class="border-b-2 border-gray-500 bg-transparent mb-5 focus:outline-none" />
                    </div>
                    <div class="mt-5  text-center">
                        <button class="border px-9 py-[0.2rem] font-semibold rounded-sm hover:bg-slate-50 hover:text-black">SIGN UP</button>
                        <p class="py-5">Already have a account?<Link to="/signin">Sign in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
