import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        

            <div className="m-auto h-[25rem] w-[23rem] bg-black text-gray-200 my-[8rem] rounded-xl">
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

        

    )
}

export default Signin
