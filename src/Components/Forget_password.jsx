import React from 'react'
import logo from '../../public/Img/facebook.svg'
import { Link } from 'react-router-dom'

const Forget_password = () => {
    return (
        <div className='Forger_password bg-slate-100 md:pb-[100px]'>
            {/* navbar */}
            <div className="navbar flex p-3 items-center justify-between bg-white">
                <div className="logo w-[150px]">
                    <img src={logo} alt="" />
                </div>
                <div className='flex gap-2 items-center'>
                <input className='hidden md:flex p-2 border-[2px] rounded-lg' placeholder='Email or phone' />
                <input className='hidden md:flex p-2 border-[2px] rounded-lg' placeholder='Password' />
                <Link to="/"><div className="login_btn text-white font-bold bg-blue-500 rounded-lg p-2">Log in</div></Link>
                <p className='text-blue-600 cursor-pointer hover:underline'>Forgotten account?</p>
                </div>
                
            </div>

            {/* body */}
            <div className="login_box rounded-lg shadow-slate-300 shadow-md border-2 bg-white mt-[70px] mx-[20px] flex flex-col    md:max-w-[500px] md:mx-auto">
                <h1 className='font-bold text-2xl text-slate-700 p-3'>Find Your Account</h1>
                <hr />

                <h1 className='p-3'>Please enter your email address or mobile number to search for your account.</h1>
                <input className='p-3 mt-[15px] mx-[15px] border-[2px] rounded-lg mb-5' type="text" placeholder='Email address or mobile number' />
                <hr />

                {/* button */}
                <div className="btn flex w-[40%] mx-auto gap-4 mt-4 mb-5">
                    <div className="cancle login_btn bg-slate-200 text-slate-700 font-bold rounded-lg p-2">Cancle</div>
                    <div className="search login_btn bg-blue-400 rounded-lg text-white p-2 font-bold">Search</div>
                </div>
            </div>
        </div>
    )
}

export default Forget_password
