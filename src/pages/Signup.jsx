import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div class="m-auto h-[25rem] w-[23rem] bg-black text-gray-200 my-[8rem] rounded-xl">
            <h1 class="pb-5 text-center text-3xl font-bold pt-10">Sign up</h1>
            <div class="mx-auto w-[18rem]">
                <div class=" flex  flex-col">
                    <input type="text" name="" id="" placeholder="username" class="border-b-2 border-gray-500 bg-transparent focus:outline-none" />
                    <input type="text" name="" id="" placeholder="Email" class="border-b-2 border-gray-500 bg-transparent focus:outline-none my-5" />
                    <input type="password" name="" id="" placeholder="password" class="border-b-2 border-gray-500 bg-transparent mb-5 focus:outline-none" />
                </div>
                <div class="mt-5  text-center">
                    <button class="border px-9 py-[0.2rem] font-semibold rounded-sm hover:bg-slate-50 hover:text-black">SIGN UP</button>
                    <p class="py-5">Already have a account?<Link to="/signin">Sign in</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup
