import React from 'react'
import logo from '../../public/Img/facebook.svg'
import { Link } from 'react-router-dom'

const Sign_up = () => {
    return (
        <div className='Sign_up justify-center text-center mb-[40px] bg-slate-100'>

            <img className='size-[300px] mx-auto -mt-[90px]' src={logo} alt="" />

            <div className="login_box rounded-lg shadow-slate-300 shadow-md border-2 bg-white -mt-[100px] mx-[20px] flex flex-col    md:max-w-[450px] md:mx-auto">
                <h1 className='text-slate-900 mt-1 text-[26px] font-bold'>Create a new account</h1>
                <p className='text-slate-500'>It's quick and easy.</p>
                <hr className='mt-2 mb-2' />

                {/* table content */}
                <div className="Fname nd sur name  flex gap-3">
                    <input className='w-[43%] p-1.5 ml-[15px] border-[2px] rounded-lg' type="text" placeholder='First name' />
                    <input className='w-[43%] p-1.5 ml-[15px] border-[2px] rounded-lg' type="text" placeholder='Surname' />
                </div>
                <input className='mt-3 p-1.5 mx-[15px] border-[2px] rounded-lg' type="text" placeholder='Mobile number or email address' />
                <input className='mt-3 p-1.5 mx-[15px] border-[2px] rounded-lg' type="password" placeholder='New password' />

                {/* DOB */}
                <p className='text-sm text-slate-500 text-left pl-4 mt-3'>Date of birth</p>
                <div className="DOB grid grid-cols-3">
                    <input className='mt-3 p-1.5 mx-[15px] border-[2px] rounded-lg' type="date" />
                    <input className='mt-3 p-1.5 mx-[15px] border-[2px] rounded-lg' type="month" />
                    <input className='mt-3 p-1.5 mx-[15px] border-[2px] rounded-lg' type="year" />
                </div>

                {/* gender */}
                <p className='text-sm text-slate-500 text-left pl-4 mt-3'>Gender</p>
                <div className="DOB grid grid-cols-3">
                    <p className='relative mt-3 p-1.5 mx-[15px] border-[2px] rounded-lg text-left pl-4'>Male</p><input className='absolute left-[25%] mt-[26px]     md:left-[40%]' type="checkbox" placeholder='Men'/>
                    <p className='relative mt-3 p-1.5 mx-[15px] border-[2px] rounded-lg text-left pl-4'>Female</p><input className='absolute left-[56%] mt-[26px]   md:left-[51%]' type="checkbox" placeholder='Men'/>
                    <p className='relative mt-3 p-1.5 mx-[15px] border-[2px] rounded-lg text-left pl-4'>Custum</p><input className='absolute right-[10%] mt-[26px]  md:right-[37%]' type="checkbox" placeholder='Men'/>
                </div>

                {/* text */}
                <p className='mt-3 px-3 text-sm text-left text-slate-500'>People who use our service may have uploaded your contact information to Facebook. <span className='text-blue-400 hover:underline'>Learn more.</span></p>
                <p className='mt-3 px-3 text-sm text-left text-slate-500'>By clicking Sign Up, you agree to our  <span className='text-blue-400 hover:underline'>Terms, Privacy Policy</span> and  <span className='text-blue-400 hover:underline'>Cookies Policy.</span> You may receive SMS notifications from us and can opt out at any time</p>

                <div className="btn bg-green-500 p-2 mt-3 rounded-lg text-white font-bold mx-auto cursor-pointer w-[200px]">Sign up</div>
                <Link to="/"><h1 className='text-blue-400 cursor-pointer hover:underline mt-2 pb-3'>Already have an account?</h1></Link>

            </div>

        </div>
    )
}

export default Sign_up