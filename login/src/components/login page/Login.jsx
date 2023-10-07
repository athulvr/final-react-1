import React from 'react'
import './Login.css'

export const Login = () => {
  return (
   <div>
    <div className='container'>
        <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">
            <div className="input">
                <img src="" alt="" />
                <input type="email" placeholder='Email'/>
            </div>

            <div className="input">
                <img src="" alt="" />
                <input type="password" placeholder='Password' />
            </div>
        </div>

        <div className="forgot">Lost password?<span>Click here</span></div>

        <div className="button">
            <button className='log'>Login</button>
        </div>
    </div>

     <div className='signup'>
        <button className='sign'>Sign Up</button>
     </div>
    </div> 
  )
}

