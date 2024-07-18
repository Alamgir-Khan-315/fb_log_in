import React from 'react'
import logo from '../../public/Img/facebook.svg'
import { Link } from 'react-router-dom'

const Log_in = () => {
  return (
    <div className='justify-center text-center bg-slate-100 mx-auto pb-[100px]'>
        <img className='size-[250px] mx-auto -mt-[50px]' src={logo} alt="" />

        {/* log in box */}
        <div className="login_box rounded-lg shadow-slate-300 shadow-md border-2 bg-white -mt-[80px] mx-[20px] flex flex-col    md:max-w-[400px] md:mx-auto">
           <h3 className='mt-[16px] mb-[20px] text-lg font-semibold'>Log in to Facebook</h3>
           <input className='p-3 mx-[15px] border-[2px] rounded-lg' type="text" placeholder='Email address or phone number' /> 
           <input className='p-3 mt-[15px] mx-[15px] border-[2px] rounded-lg' type="password" placeholder='Password' />
           <div className="log_in_btn p-2 bg-blue-500 cursor-pointer rounded-lg mx-[15px] mt-[10px] text-white font-bold text-lg">Log in</div>

            {/* links  */}
            <div className="links flex gap-3 justify-center mt-3 mb-9">
                <Link to="/Forget_password"><p className='hover:underline text-blue-500 cursor-pointer'>Forgotten account?</p></Link>
                <Link to="/Sign_up"><p className='hover:underline text-blue-500 cursor-pointer'>Sign up for Facebook</p></Link>
            </div>
        </div>
    </div>
  )
}

export default Log_in
